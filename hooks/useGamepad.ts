import { useEffect, useState, useRef, useCallback } from "react";

interface GamepadActions {
  onBack?: () => void;
  onToggleInventory?: () => void;
  onToggleCharacterSheet?: () => void;
  onSave?: () => void;
  onTabCycle?: (dir: "next" | "prev") => void;
  onAttack?: () => void;
}

export const useGamepad = (actions: GamepadActions) => {
  const [connected, setConnected] = useState(false);
  const [controllerName, setControllerName] = useState<string>("");
  const focusedIndexRef = useRef<number>(-1);
  const lastButtonStatesRef = useRef<{ [key: number]: boolean }>({});
  const lastAxisMoveRef = useRef<number>(0);
  const actionsRef = useRef(actions);

  useEffect(() => {
    actionsRef.current = actions;
  });

  const removeGamepadFocus = useCallback(() => {
    const prev = document.querySelectorAll(".gamepad-focused");
    prev.forEach((el) => el.classList.remove("gamepad-focused"));
    focusedIndexRef.current = -1;
  }, []);

  useEffect(() => {
    const handleConnect = (e: GamepadEvent) => {
      setConnected(true);
      setControllerName(e.gamepad.id || "Handheld Controller");
    };

    const handleDisconnect = () => {
      const gps = navigator.getGamepads ? navigator.getGamepads() : [];
      const hasAny = Array.from(gps).some((gp) => gp !== null && gp.connected);
      setConnected(hasAny);
      if (!hasAny) {
        removeGamepadFocus();
      }
    };

    window.addEventListener("gamepadconnected", handleConnect);
    window.addEventListener("gamepaddisconnected", handleDisconnect);

    // Initial check in case gamepad is already connected (common on Retroid / Android)
    const gps = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const gp of gps) {
      if (gp && gp.connected) {
        setConnected(true);
        setControllerName(gp.id || "Retroid Pocket Handheld");
        break;
      }
    }

    return () => {
      window.removeEventListener("gamepadconnected", handleConnect);
      window.removeEventListener("gamepaddisconnected", handleDisconnect);
      removeGamepadFocus();
    };
  }, [removeGamepadFocus]);

  const getInteractiveElements = useCallback((): HTMLElement[] => {
    // If a modal or overlay is open, prioritize elements inside it
    const modal = document.querySelector(
      "[data-gamepad-modal='true'], .fixed.z-50, .fixed.z-\\[100\\], .fixed.z-\\[60\\]",
    );
    const root = (modal as HTMLElement) || document.body;

    const selectors = [
      "button:not([disabled]):not([aria-hidden='true'])",
      "[role='button']:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "a[href]",
    ];

    const elements = Array.from(
      root.querySelectorAll<HTMLElement>(selectors.join(",")),
    );

    // Filter to visible elements only
    return elements.filter((el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.width > 0 &&
        rect.height > 0 &&
        window.getComputedStyle(el).visibility !== "hidden" &&
        window.getComputedStyle(el).display !== "none"
      );
    });
  }, []);

  const setGamepadFocus = (index: number, elements: HTMLElement[]) => {
    if (elements.length === 0) return;
    const clamped = Math.max(0, Math.min(index, elements.length - 1));
    focusedIndexRef.current = clamped;

    elements.forEach((el, i) => {
      if (i === clamped) {
        el.classList.add("gamepad-focused");
        el.scrollIntoView({ block: "nearest", behavior: "smooth" });
        el.focus({ preventScroll: true });
      } else {
        el.classList.remove("gamepad-focused");
      }
    });
  };

  useEffect(() => {
    let animId: number;

    const pollGamepad = () => {
      const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
      const gp = gamepads[0] || gamepads[1] || gamepads[2] || gamepads[3];

      if (gp && gp.connected) {
        if (!connected) {
          setConnected(true);
          setControllerName(gp.id || "Retroid Pocket Handheld");
        }

        const now = Date.now();
        const interactive = getInteractiveElements();
        const lastBtn = lastButtonStatesRef.current;

        const isPressed = (btnIndex: number) => {
          return gp.buttons[btnIndex] && gp.buttons[btnIndex].pressed;
        };

        const wasJustPressed = (btnIndex: number) => {
          const currently = isPressed(btnIndex);
          const was = !!lastBtn[btnIndex];
          lastBtn[btnIndex] = currently;
          return currently && !was;
        };

        // DPAD & STICKS (Up: 12, Down: 13, Left: 14, Right: 15)
        // Left Stick: axes[0] = X, axes[1] = Y
        const stickX = gp.axes[0] || 0;
        const stickY = gp.axes[1] || 0;
        const DEADZONE = 0.5;

        const up = isPressed(12) || stickY < -DEADZONE;
        const down = isPressed(13) || stickY > DEADZONE;
        const left = isPressed(14) || stickX < -DEADZONE;
        const right = isPressed(15) || stickX > DEADZONE;

        if ((up || down || left || right) && now - lastAxisMoveRef.current > 160) {
          lastAxisMoveRef.current = now;
          if (interactive.length > 0) {
            let current = focusedIndexRef.current;
            if (current === -1) {
              current = 0;
            } else if (down || right) {
              current = (current + 1) % interactive.length;
            } else if (up || left) {
              current = (current - 1 + interactive.length) % interactive.length;
            }
            setGamepadFocus(current, interactive);
          }
        }

        // BUTTON A (Button 0): Confirm / Click focused
        if (wasJustPressed(0)) {
          const current = focusedIndexRef.current;
          if (current >= 0 && interactive[current]) {
            interactive[current].click();
          } else if (interactive.length > 0) {
            interactive[0].click();
          }
        }

        // BUTTON B (Button 1): Cancel / Back / Close modal / Flee
        if (wasJustPressed(1)) {
          if (actionsRef.current.onBack) {
            actionsRef.current.onBack();
          }
        }

        // BUTTON X (Button 2): Inventory Cargo Bay
        if (wasJustPressed(2)) {
          if (actionsRef.current.onToggleInventory) {
            actionsRef.current.onToggleInventory();
          }
        }

        // BUTTON Y (Button 3): Character Sheet
        if (wasJustPressed(3)) {
          if (actionsRef.current.onToggleCharacterSheet) {
            actionsRef.current.onToggleCharacterSheet();
          }
        }

        // BUTTON L1 (Button 4): Previous tab
        if (wasJustPressed(4)) {
          if (actionsRef.current.onTabCycle) {
            actionsRef.current.onTabCycle("prev");
          }
        }

        // BUTTON R1 (Button 5): Next tab
        if (wasJustPressed(5)) {
          if (actionsRef.current.onTabCycle) {
            actionsRef.current.onTabCycle("next");
          }
        }

        // START BUTTON (Button 9): Quick Save
        if (wasJustPressed(9)) {
          if (actionsRef.current.onSave) {
            actionsRef.current.onSave();
          }
        }
      }

      animId = requestAnimationFrame(pollGamepad);
    };

    animId = requestAnimationFrame(pollGamepad);
    return () => cancelAnimationFrame(animId);
  }, [connected, getInteractiveElements]);

  return {
    connected,
    controllerName,
    focusNext: () => {
      const items = getInteractiveElements();
      setGamepadFocus(focusedIndexRef.current + 1, items);
    },
    focusPrev: () => {
      const items = getInteractiveElements();
      setGamepadFocus(focusedIndexRef.current - 1, items);
    },
    resetFocus: removeGamepadFocus,
  };
};
