import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SaveData, Enemy, Item } from "../types";
import { cn } from "./Shared";
import {
  Sword,
  Skull,
  Backpack,
  ArrowRight,
  Activity,
  Zap,
} from "lucide-react";

interface CombatProps {
  gameState: SaveData;
  enemy: Enemy;
  enemyHp: number;
  playerCooldown: number;
  enemyCooldown: number;
  onAttack: () => void;
  onUseItem: (item: Item) => void;
  onFlee: () => void;
  type: "viewport" | "console";
}

export const Combat: React.FC<CombatProps> = ({
  gameState,
  enemy,
  enemyHp,
  playerCooldown,
  enemyCooldown,
  onAttack,
  onUseItem,
  onFlee,
  type,
}) => {
  const [showInventory, setShowInventory] = useState(false);
  const [isPlayerAttacking, setIsPlayerAttacking] = useState(false);
  const [isEnemyAttacking, setIsEnemyAttacking] = useState(false);

  // Provide visual feedback triggers based on cooldown state changes would be better but we can use refs or just props
  // For now, let's just keep it simple. If we want animations we can pass down isAttacking flags too.

  // Auto-detect attack animations (crude but works for CSS)
  const lastEnemyCd = useRef(enemyCooldown);
  useEffect(() => {
    if (enemyCooldown < lastEnemyCd.current && lastEnemyCd.current > 90) {
      setIsEnemyAttacking(true);
      setTimeout(() => setIsEnemyAttacking(false), 400);
    }
    lastEnemyCd.current = enemyCooldown;
  }, [enemyCooldown]);

  const lastPlayerCd = useRef(playerCooldown);
  useEffect(() => {
    if (playerCooldown < lastPlayerCd.current && lastPlayerCd.current > 90) {
      setIsPlayerAttacking(true);
      setTimeout(() => setIsPlayerAttacking(false), 400);
    }
    lastPlayerCd.current = playerCooldown;
  }, [playerCooldown]);

  if (type === "viewport") {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-10 overflow-hidden">
        <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
        <AnimatePresence>
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              x: isEnemyAttacking ? [0, -10, 10, -10, 10, 0] : 0,
              filter: isPlayerAttacking
                ? "brightness(3) contrast(2)"
                : "brightness(1) contrast(1)",
            }}
            className="relative h-full flex flex-col items-center justify-center py-4"
          >
            <img
              src={
                gameState.isNight && enemy.nightImageUrl
                  ? enemy.nightImageUrl
                  : enemy.imageUrl
              }
              alt={enemy.name}
              className="h-[80%] object-contain filter drop-shadow-[0_0_30px_rgba(255,0,0,0.5)]"
            />

            <div className="w-full max-w-xs mt-2 px-4">
              <div className="flex justify-between text-[8px] text-red-500 font-title tracking-[0.2em] mb-1">
                <span className="uppercase">{enemy.name}</span>
                <span>
                  {enemyHp} / {enemy.maxHp} HP
                </span>
              </div>
              <div className="h-1.5 bg-red-950 border border-red-500/20 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${(enemyHp / enemy.maxHp) * 100}%` }}
                  className="h-full bg-red-600 shadow-[0_0_10px_red]"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-4 right-6 text-red-500 font-title text-[8px] tracking-[0.5em] animate-pulse">
          COMBAT SYNC // THREAT DETECTED
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col p-4 md:p-6 bg-red-950/5 border-t border-red-500/10 h-full overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-red-500/10 border border-red-500/40 rounded-lg shrink-0">
          <Skull className="text-red-500" size={16} />
        </div>
        <div className="min-w-0">
          <h2 className="text-white font-title text-[10px] tracking-[0.3em] uppercase truncate">
            Combat Tactical Override
          </h2>
          <p className="text-[8px] text-red-500/60 font-mono uppercase tracking-[0.2em]">
            Target: {enemy.name}
          </p>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-4 h-full min-h-0">
        {/* ACTION AREA */}
        <div className="grid grid-cols-1 gap-3">
          <button
            onClick={onAttack}
            disabled={playerCooldown < 100}
            className={cn(
              "relative overflow-hidden flex flex-col items-center justify-center rounded-2xl border-2 transition-all p-4 group h-full",
              playerCooldown >= 100
                ? "bg-red-500/10 border-red-500 text-red-500 hover:bg-red-500 hover:text-black"
                : "bg-gray-900 border-gray-800 text-gray-700 cursor-not-allowed",
            )}
          >
            <Sword
              size={24}
              className={playerCooldown >= 100 ? "animate-bounce" : ""}
            />
            <span className="font-title text-[10px] tracking-widest uppercase mt-2">
              Blast Target
            </span>
            <div
              className="absolute bottom-0 left-0 h-1 bg-red-500/40 transition-all duration-100"
              style={{ width: `${playerCooldown}%` }}
            />
          </button>

          <button
            onClick={() => setShowInventory(!showInventory)}
            className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-950/10 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all p-3"
          >
            <Backpack size={16} />
            <span className="font-title text-[10px] tracking-[0.2em] uppercase">
              Tactical Gear
            </span>
          </button>

          <button
            onClick={onFlee}
            className="flex items-center justify-center gap-2 rounded-xl border border-yellow-500/30 bg-yellow-950/10 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all p-3"
          >
            <ArrowRight size={16} />
            <span className="font-title text-[10px] tracking-[0.2em] uppercase">
              Withdraw
            </span>
          </button>
        </div>

        {/* STATUS AREA */}
        <div className="space-y-6 flex flex-col justify-center">
          <div className="space-y-2">
            <div className="flex justify-between text-[8px] text-cyan-500 font-title tracking-[0.2em] uppercase">
              <span>Your Vitality</span>
              <span>{gameState.stats?.currentHp}HP</span>
            </div>
            <div className="h-2 bg-cyan-950 border border-cyan-500/20 rounded-full overflow-hidden">
              <motion.div
                animate={{
                  width: `${((gameState.stats?.currentHp || 0) / (gameState.stats?.maxHp || 100)) * 100}%`,
                }}
                className="h-full bg-cyan-500 shadow-[0_0_10px_cyan]"
              />
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-red-600 rounded-full animate-pulse" />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[8px] text-red-500 font-title tracking-widest">
                    Enemy Momentum
                  </span>
                  <span className="text-[10px] font-mono text-red-400">
                    {Math.floor(enemyCooldown)}%
                  </span>
                </div>
                <div className="h-1 bg-red-950 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: `${enemyCooldown}%` }}
                    className="h-full bg-red-600 shadow-[0_0_10px_red]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INVENTORY PANEL */}
      <AnimatePresence>
        {showInventory && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="absolute inset-x-0 bottom-0 top-[20%] bg-gray-950 border-t border-cyan-500 z-20 flex flex-col p-4 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-cyan-400 font-title text-[10px] tracking-[0.3em] uppercase">
                Field Inventory
              </h3>
              <button
                onClick={() => setShowInventory(false)}
                className="text-cyan-400 text-[10px] tracking-widest uppercase hover:underline"
              >
                Dismiss
              </button>
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto no-scrollbar">
              {gameState.inventory.filter((i) => i.type === "consumable")
                .length === 0 && (
                <p className="text-gray-600 text-xs text-center italic py-4">
                  No tactical supplies.
                </p>
              )}
              {gameState.inventory
                .filter((i) => i.type === "consumable")
                .map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => onUseItem(item)}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
                  >
                    <div className="flex flex-col text-left">
                      <span className="text-white font-title text-xs uppercase">
                        {item.name}
                      </span>
                      <span className="text-[8px] text-green-500 uppercase tracking-widest">
                        Regen +{item.heal} HP
                      </span>
                    </div>
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded text-[10px] font-title">
                      x{item.count}
                    </span>
                  </button>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
