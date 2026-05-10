import { SaveData } from "./types";

const SAVE_KEY = 'outer_rim_save_v1';

export function loadGame(): SaveData | null {
    try {
        const data = localStorage.getItem(SAVE_KEY);
        if (data) return JSON.parse(data);
    } catch (e) {
        console.error("Failed to load game", e);
    }
    return null;
}

export function saveGame(data: SaveData) {
    try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    } catch (e) {
        console.error("Failed to save game", e);
    }
}

export const toggleFullScreen = () => {
    try {
        const doc = document as any;
        const docEl = document.documentElement as any;

        const requestFullScreen = docEl.requestFullscreen || 
                                  docEl.webkitRequestFullscreen || 
                                  docEl.mozRequestFullScreen || 
                                  docEl.msRequestFullscreen;

        const exitFullScreen = doc.exitFullscreen || 
                               doc.webkitExitFullscreen || 
                               doc.mozCancelFullScreen || 
                               doc.msExitFullscreen;

        const isFullScreen = doc.fullscreenElement || 
                             doc.webkitFullscreenElement || 
                             doc.mozFullScreenElement || 
                             doc.msFullscreenElement;

        if (!isFullScreen) {
            if (requestFullScreen) {
                requestFullScreen.call(docEl).catch((e:any) => console.log("Fullscreen request failed", e));
            }
        } else {
            if (exitFullScreen) {
                exitFullScreen.call(doc).catch((e:any) => console.log("Fullscreen exit failed", e));
            }
        }
    } catch (e) {
        console.error("Fullscreen toggle error", e);
    }
};

// --- SABACC LOGIC ---
export interface SabaccCard {
    id: number;
    val: number;
    suit: 'circle' | 'triangle' | 'square' | 'sylop';
    color: 'green' | 'red' | 'white'; // green (+), red (-), white (0)
}

export const createSabaccDeck = (): SabaccCard[] => {
    let deck: SabaccCard[] = [];
    let id = 0;
    // 3 Positive Suits (Green) 1-10
    ['circle', 'triangle', 'square'].forEach(suit => {
        for(let i=1; i<=10; i++) {
            deck.push({ id: id++, val: i, suit: suit as any, color: 'green' });
        }
    });
    // 3 Negative Suits (Red) -1 to -10
    ['circle', 'triangle', 'square'].forEach(suit => {
        for(let i=1; i<=10; i++) {
            deck.push({ id: id++, val: -i, suit: suit as any, color: 'red' });
        }
    });
    // 2 Sylops (Zero)
    deck.push({ id: id++, val: 0, suit: 'sylop', color: 'white' });
    deck.push({ id: id++, val: 0, suit: 'sylop', color: 'white' });
    
    return deck.sort(() => Math.random() - 0.5);
};

export const calculateHandValue = (hand: SabaccCard[]) => {
    const sum = hand.reduce((a, b) => a + b.val, 0);
    const absSum = Math.abs(sum);
    let label = `${sum}`;
    let rank = 0; // Higher is better

    const values = hand.map(c => Math.abs(c.val)).sort((a,b) => a-b);
    const isIdiotArray = values.length === 3 && values[0] === 0 && values[1] === 2 && values[2] === 3;

    // 1. Pure Sabacc (2 Sylops)
    if (hand.length === 2 && hand[0].val === 0 && hand[1].val === 0) {
        label = "PURE SABACC";
        rank = 1000;
    } 
    // 2. Idiot's Array (0, 2, 3)
    else if (isIdiotArray) {
        label = "IDIOT'S ARRAY";
        rank = 900;
    }
    // 3. Sabacc (Sum is 0)
    else if (sum === 0) {
        label = "SABACC";
        rank = 800 + hand.length; 
    }
    // 4. Nulrhek (Closest to 0, under 24)
    else if (absSum <= 23) {
        label = `NULRHEK (${sum})`;
        rank = 100 - absSum; 
    }
    // 5. Bomb Out
    else {
        label = `BOMB OUT (${sum})`;
        rank = -1;
    }
    return { sum, absSum, label, rank };
};