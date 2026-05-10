import React, { useState, useEffect, useRef } from 'react';
import { createSabaccDeck, calculateHandValue, SabaccCard } from '../utils';
import { CommandButton, cn } from './Shared';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Unlock, XCircle, Trophy, TrendingUp, Hand, RefreshCw } from 'lucide-react';

// --- SLICING GAME ---
export const SlicingGame: React.FC<{ 
    difficulty: 'easy' | 'medium' | 'hard';
    onWin: () => void;
    onLose: () => void;
    onClose: () => void;
}> = ({ difficulty, onWin, onLose, onClose }) => {
    const config = {
        easy: { stages: 2, tolerance: 30, speed: 18 },
        medium: { stages: 3, tolerance: 20, speed: 28 },
        hard: { stages: 4, tolerance: 10, speed: 40 }
    }[difficulty];

    const [stage, setStage] = useState(0);
    const [position, setPosition] = useState(50);
    const [direction, setDirection] = useState(1);
    const [target, setTarget] = useState(50);
    const [locked, setLocked] = useState(false);
    const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');

    const requestRef = useRef<number>(0);

    useEffect(() => {
        setTarget(Math.random() * 80 + 10);
        setLocked(false);
    }, [stage]);

    useEffect(() => {
        if (status !== 'playing' || locked) return;

        const animate = () => {
            setPosition(prev => {
                let next = prev + (direction * (config.speed * 0.05));
                if (next >= 100) {
                    next = 100;
                    setDirection(-1);
                } else if (next <= 0) {
                    next = 0;
                    setDirection(1);
                }
                return next;
            });
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [direction, config.speed, status, locked]);

    const handleLock = () => {
        if (locked || status !== 'playing') return;
        setLocked(true);
        const diff = Math.abs(position - target);
        
        if (diff <= config.tolerance / 2) {
            setTimeout(() => {
                if (stage + 1 >= config.stages) {
                    setStatus('won');
                    console.log("Slicing won, calling onWin");
                    setTimeout(onWin, 1500);
                } else {
                    setStage(s => s + 1);
                }
            }, 500);
        } else {
            setStatus('lost');
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        >
            <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-black border-2 border-cyan-500 rounded-2xl w-full max-w-sm overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)]"
            >
                <div className="bg-cyan-500/10 p-6 flex flex-col items-center">
                    <ShieldAlert className="text-cyan-400 mb-2" size={40} />
                    <h2 className="text-2xl font-title text-white tracking-widest uppercase">Security Override</h2>
                    <p className="text-[10px] text-cyan-600 font-mono uppercase tracking-[0.2em] mt-1">
                        Active Node: {difficulty} // Layer {stage + 1}
                    </p>
                </div>

                <div className="p-8">
                    <div className="relative h-16 bg-cyan-950/20 rounded-xl border border-cyan-900 mb-8 overflow-hidden">
                        <div 
                            className="absolute top-0 bottom-0 bg-cyan-500/30 border-x border-cyan-400/50"
                            style={{ 
                                left: `${target - (config.tolerance / 2)}%`, 
                                width: `${config.tolerance}%` 
                            }}
                        />
                        <motion.div 
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 0.1, repeat: Infinity }}
                            className={cn(
                                "absolute top-0 bottom-0 w-1 shadow-lg",
                                status === 'lost' ? "bg-red-500 shadow-red-500" : (status === 'won' ? "bg-green-400 shadow-green-400" : "bg-cyan-400 shadow-cyan-400")
                            )}
                            style={{ left: `${position}%` }}
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        {status === 'playing' ? (
                            <motion.button 
                                key="lock"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                onMouseDown={handleLock}
                                className="w-full bg-cyan-600 hover:bg-cyan-500 text-black font-bold py-5 rounded-xl font-display uppercase tracking-[0.2em] transition-all transform active:scale-95 flex items-center justify-center gap-3"
                            >
                                <Unlock size={20} />
                                Intercept Signal
                            </motion.button>
                        ) : (
                            <motion.div 
                                key="status"
                                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                                className={cn(
                                    "text-center font-title text-3xl py-4 flex flex-col items-center gap-4",
                                    status === 'won' ? 'text-green-400' : 'text-red-500'
                                )}
                            >
                                {status === 'won' ? (
                                    <>
                                        <Trophy size={48} className="animate-bounce" />
                                        <span>Access Granted</span>
                                    </>
                                ) : (
                                    <>
                                        <XCircle size={48} />
                                        <span>System Lockout</span>
                                        <CommandButton label="Emergency Exit" onClick={onClose} className="w-full border-red-500/50 text-red-500" />
                                    </>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    );
};

// --- SABACC GAME ---
export const SabaccGame: React.FC<{
    onClose: () => void;
    onFinish: (result: 'win' | 'lose' | 'draw', amount: number) => void;
    betAmount: number;
}> = ({ onClose, onFinish, betAmount }) => {
    // Game State
    const [deck, setDeck] = useState<SabaccCard[]>([]);
    const [discard, setDiscard] = useState<SabaccCard[]>([]);
    const [playerHand, setPlayerHand] = useState<SabaccCard[]>([]);
    const [enemyHand, setEnemyHand] = useState<SabaccCard[]>([]);
    
    // UI & Flow State
    const [phase, setPhase] = useState<'betting' | 'action' | 'shift' | 'reveal'>('betting');
    const [round, setRound] = useState(1);
    const [pot, setPot] = useState(betAmount * 2);
    const [playerCredits, setPlayerCredits] = useState(1000); // Temporary local tracking for the session
    const [msg, setMsg] = useState("Place your bets.");
    const [dice, setDice] = useState<[number, number]>([1, 1]);
    const [showDice, setShowDice] = useState(false);
    const [isShifting, setIsShifting] = useState(false);

    // AI State
    const [enemyAction, setEnemyAction] = useState<string>("");

    useEffect(() => {
        setupGame();
    }, []);

    const setupGame = () => {
        const newDeck = createSabaccDeck();
        const pHand = [newDeck.pop()!, newDeck.pop()!];
        const eHand = [newDeck.pop()!, newDeck.pop()!];
        const initialDiscard = [newDeck.pop()!];
        
        setDeck(newDeck);
        setDiscard(initialDiscard);
        setPlayerHand(pHand);
        setEnemyHand(eHand);
        setRound(1);
        setPhase('betting');
        setMsg("Round 1: Betting");
    };

    const handleAction = (type: 'draw' | 'swap' | 'stand') => {
        if (phase !== 'action') return;

        let newDeck = [...deck];
        let newDiscard = [...discard];
        let newPHand = [...playerHand];

        if (type === 'draw') {
            const card = newDeck.pop();
            if (card) newPHand.push(card);
            setMsg("You drew a card.");
        } else if (type === 'swap') {
            const card = newDiscard.pop();
            if (card) {
                // Swap the last card drawn (or first in hand) for simplicity in UI
                const handCard = newPHand.pop()!;
                newPHand.push(card);
                newDiscard.push(handCard);
            }
            setMsg("Card swapped with discard pile.");
        } else {
            setMsg("You stand.");
        }

        setDeck(newDeck);
        setDiscard(newDiscard);
        setPlayerHand(newPHand);

        // Enemy Action (Simple AI)
        setTimeout(() => {
            enemyTurn(newDeck, newDiscard);
        }, 800);
    };

    const enemyTurn = (currentDeck: SabaccCard[], currentDiscard: SabaccCard[]) => {
        const score = calculateHandValue(enemyHand);
        let action = "stands";
        let finalDeck = [...currentDeck];
        let finalDiscard = [...currentDiscard];
        let finalEHand = [...enemyHand];

        // Enemy strategy: If absolute sum > 10, try to improve
        if (score.absSum > 8 && enemyHand.length < 5) {
            // Check if discard is better than current worst card (approximation)
            const discardVal = currentDiscard[currentDiscard.length - 1]?.val || 99;
            if (Math.abs(score.sum + discardVal) < score.absSum) {
                const card = finalDiscard.pop()!;
                const handCard = finalEHand.pop()!;
                finalEHand.push(card);
                finalDiscard.push(handCard);
                action = "swaps with discard";
            } else {
                const card = finalDeck.pop();
                if (card) finalEHand.push(card);
                action = "draws a card";
            }
        }

        setEnemyAction(`Opponent ${action}.`);
        setDeck(finalDeck);
        setDiscard(finalDiscard);
        setEnemyHand(finalEHand);

        // Move to Shift phase
        setTimeout(() => {
            setPhase('shift');
            rollDice();
        }, 1000);
    };

    const rollDice = () => {
        setShowDice(true);
        const d1 = Math.floor(Math.random() * 6) + 1;
        const d2 = Math.floor(Math.random() * 6) + 1;
        setDice([d1, d2]);

        setTimeout(() => {
            if (d1 === d2) {
                setMsg("SABACC SHIFT! Hands are randomized!");
                setIsShifting(true);
                setTimeout(() => performShift(), 1000);
            } else {
                setMsg("No shift. Round continues.");
                setTimeout(nextRound, 1500);
            }
        }, 1000);
    };

    const performShift = () => {
        let newDeck = [...deck, ...playerHand, ...enemyHand].sort(() => Math.random() - 0.5);
        const pCount = playerHand.length;
        const eCount = enemyHand.length;
        
        const newPHand = [];
        for(let i=0; i<pCount; i++) newPHand.push(newDeck.pop()!);
        
        const newEHand = [];
        for(let i=0; i<eCount; i++) newEHand.push(newDeck.pop()!);

        setPlayerHand(newPHand);
        setEnemyHand(newEHand);
        setDeck(newDeck);
        setIsShifting(false);
        setTimeout(nextRound, 1000);
    };

    const nextRound = () => {
        setShowDice(false);
        if (round >= 3) {
            setPhase('reveal');
        } else {
            setRound(r => r + 1);
            setPhase('betting');
            setMsg(`Round ${round + 1}: Betting`);
        }
    };

    const handleBet = (action: 'call' | 'raise' | 'fold') => {
        if (action === 'fold') {
            onFinish('lose', 0);
            return;
        }
        if (action === 'raise') {
            setPot(p => p + 50); // Fixed raise for simplicity
        }
        setPhase('action');
        setMsg("Your Action: Draw, Swap, or Stand?");
    };

    const determineWinner = () => {
        const pScore = calculateHandValue(playerHand);
        const eScore = calculateHandValue(enemyHand);

        let result: 'win' | 'lose' | 'draw' = 'draw';

        if (pScore.rank === -1 && eScore.rank === -1) result = 'draw';
        else if (pScore.rank === -1) result = 'lose';
        else if (eScore.rank === -1) result = 'win';
        else if (pScore.rank > eScore.rank) result = 'win';
        else if (eScore.rank > pScore.rank) result = 'lose';
        else {
            // Tiebreakers: closest to zero, then positive score, then most cards
             if (pScore.absSum < eScore.absSum) result = 'win';
             else if (eScore.absSum < pScore.absSum) result = 'lose';
             else if (pScore.sum > eScore.sum) result = 'win';
             else if (eScore.sum > pScore.sum) result = 'lose';
             else if (playerHand.length > enemyHand.length) result = 'win';
             else if (enemyHand.length > playerHand.length) result = 'lose';
             else result = 'draw';
        }

        if (result === 'win') {
            setMsg(`Victory! ${pScore.label}`);
            setTimeout(() => onFinish('win', pot), 3000);
        } else if (result === 'lose') {
            setMsg(`Defeat. Opponent had ${eScore.label}`);
            setTimeout(() => onFinish('lose', 0), 3000);
        } else {
            setMsg(`Sudden Draw. Pot recovered.`);
            setTimeout(() => onFinish('draw', betAmount), 3000);
        }
    };

    useEffect(() => {
        if (phase === 'reveal') {
            determineWinner();
        }
    }, [phase]);

    const pScore = calculateHandValue(playerHand);

    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 p-2 md:p-4 overflow-hidden"
        >
            <style>{`
                .sabacc-shape {
                    clip-path: polygon(50% 0%, 100% 20%, 100% 80%, 50% 100%, 0% 80%, 0% 20%);
                }
            `}</style>
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05)_0%,transparent_100%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-10 pointer-events-none" />

            <div className="w-full max-w-6xl flex flex-col h-full overflow-y-auto no-scrollbar pb-20 md:pb-0">
                {/* Header */}
                <div className="flex justify-between items-center mb-2 md:mb-4 border-b border-yellow-500/20 pb-2 md:pb-4 shrink-0 mt-2">
                    <div className="flex flex-col">
                        <h2 className="text-xl md:text-2xl font-title text-yellow-500 tracking-widest uppercase">Corellian Spike Sabacc</h2>
                        <span className="text-[8px] md:text-[10px] text-yellow-500/50 font-mono uppercase tracking-[0.2em]">Mos Eisley Cantina // Table 4</span>
                    </div>
                    <div className="flex gap-2 md:gap-4">
                        <div className="bg-black/50 border border-yellow-500/30 px-2 md:px-4 py-1 md:py-2 rounded-lg text-right">
                            <div className="text-[6px] md:text-[8px] text-yellow-500/50 uppercase font-mono">Pot Value</div>
                            <div className="text-sm md:text-xl font-mono text-yellow-500">{pot} Credits</div>
                        </div>
                        <button onClick={onClose} className="p-1 md:p-2 text-gray-500 hover:text-white transition-colors">
                            <XCircle size={24} />
                        </button>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-between py-2 md:py-4 min-h-0">
                    {/* Enemy Section */}
                    <div className="flex flex-col items-center gap-2 md:gap-4 relative shrink-0">
                         <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-900 flex items-center justify-center text-xs font-title text-red-200">OP</div>
                            <div className="text-[10px] md:text-xs text-gray-500 font-display uppercase tracking-widest">Imperial Scoundrel</div>
                        </div>
                        <div className="flex gap-1 md:gap-2">
                            {enemyHand.map((card, idx) => (
                                <motion.div 
                                    key={card.id || idx}
                                    layoutId={`enemy-card-${idx}`}
                                    className={cn(
                                        "sabacc-shape w-12 h-20 md:w-20 md:h-28 flex items-center justify-center bg-zinc-900 transition-all shadow-xl relative",
                                        phase === 'reveal' ? (card.color === 'green' ? 'bg-green-950 text-green-400' : card.color === 'red' ? 'bg-red-950 text-red-400' : 'bg-zinc-800 text-zinc-400') : 'bg-zinc-900'
                                    )}
                                >
                                    <div className={cn("absolute inset-[1px] md:inset-[2px] sabacc-shape", phase === 'reveal' ? 'bg-zinc-950/80' : 'bg-zinc-950')} />
                                    <div className="absolute inset-0 z-10">
                                        {phase === 'reveal' ? (
                                            <CardContent card={card} isSmall />
                                        ) : (
                                            <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(234,179,8,0.05)_10px,rgba(234,179,8,0.05)_20px)] flex items-center justify-center">
                                                <div className="w-6 h-6 md:w-8 md:h-8 sabacc-shape bg-yellow-500/10 flex items-center justify-center">
                                                    <div className="w-2 h-2 md:w-4 md:h-4 sabacc-shape bg-yellow-500/20 animate-pulse" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        {enemyAction && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute -bottom-6 text-[8px] md:text-[10px] text-cyan-400 font-mono uppercase bg-cyan-400/5 px-3 py-1 rounded-full border border-cyan-400/20 z-10">
                                {enemyAction}
                            </motion.div>
                        )}
                    </div>

                    {/* Table Center (Decks & Dice) */}
                    <div className="flex items-center justify-center gap-6 md:gap-12 relative my-4 shrink-0">
                        {/* Draw Pile */}
                        <div className="relative group cursor-pointer" onClick={() => phase === 'action' && handleAction('draw')}>
                             <div className="absolute -inset-2 bg-yellow-500/5 blur-xl group-hover:bg-yellow-500/10 transition-all rounded-full" />
                             <div className="sabacc-shape w-14 h-22 md:w-20 md:h-28 bg-zinc-950 relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-[1px] md:inset-[2px] sabacc-shape bg-zinc-900 flex items-center justify-center">
                                    <div className="text-[6px] md:text-[8px] text-yellow-900/40 uppercase font-mono tracking-tighter">Deck</div>
                                </div>
                             </div>
                        </div>

                        {/* Middle Info / Dice */}
                        <div className="flex flex-col items-center gap-2 md:gap-4 w-32 md:w-48">
                            <AnimatePresence>
                                {showDice && (
                                    <motion.div 
                                        initial={{ scale: 0, rotate: -180 }} 
                                        animate={{ scale: 1, rotate: 0 }} 
                                        exit={{ scale: 0, rotate: 180 }}
                                        className="flex gap-2 md:gap-4"
                                    >
                                        {dice.map((d, i) => (
                                            <div key={i} className="w-8 h-8 md:w-12 md:h-12 bg-zinc-100 rounded-lg shadow-inner flex items-center justify-center text-black font-title text-sm md:text-xl border-b-4 border-zinc-300">
                                                {d}
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            
                            <motion.div 
                                key={msg}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center"
                            >
                                <div className="text-[8px] md:text-xs text-yellow-500/60 font-display uppercase tracking-[0.3em] mb-1">Status</div>
                                <div className="text-[10px] md:text-sm font-display text-white uppercase tracking-widest max-w-[150px] md:max-w-[200px] leading-snug">{msg}</div>
                            </motion.div>

                            <div className="text-[8px] md:text-[10px] text-gray-500 font-mono uppercase tracking-widest mt-1">
                                Round {round} / 3
                            </div>
                        </div>

                        {/* Discard Pile */}
                        <div className="relative cursor-pointer" onClick={() => phase === 'action' && handleAction('swap')}>
                             <div className="absolute -inset-2 bg-cyan-500/5 blur-xl group-hover:bg-cyan-500/10 transition-all rounded-full" />
                             {discard.length > 0 ? (
                                <motion.div 
                                    key={discard[discard.length-1].id}
                                    layoutId={`card-${discard[discard.length-1].id}`}
                                    className={cn(
                                        "sabacc-shape w-14 h-22 md:w-20 md:h-28 flex items-center justify-center text-xs md:text-sm relative",
                                        discard[discard.length-1].color === 'green' ? 'bg-green-800' : discard[discard.length-1].color === 'red' ? 'bg-red-800' : 'bg-zinc-700'
                                    )}
                                >
                                    <div className="absolute inset-[1px] md:inset-[2px] sabacc-shape bg-zinc-950 z-0" />
                                    <div className="absolute inset-0 z-10 flex border-0">
                                        <CardContent card={discard[discard.length-1]} isSmall={true} />
                                    </div>
                                </motion.div>
                             ) : (
                                <div className="sabacc-shape w-14 h-22 md:w-20 md:h-28 bg-transparent relative border-[1px] md:border-2 border-dashed border-zinc-800" />
                             )}
                        </div>
                    </div>

                    {/* Player Section */}
                    <div className="flex flex-col items-center gap-4 shrink-0 h-auto">
                        <div className="flex flex-wrap justify-center gap-1 md:gap-3 min-h-[140px] md:min-h-[160px] pb-4">
                            <AnimatePresence mode="popLayout">
                                {playerHand.map((card, idx) => (
                                    <motion.div 
                                        key={card.id}
                                        layout
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -50, opacity: 0 }}
                                        whileHover={{ y: -10, zIndex: 10 }}
                                        className={cn(
                                            "sabacc-shape w-16 h-28 md:w-24 md:h-36 flex items-center justify-center transition-all bg-zinc-800 relative cursor-pointer group hover:scale-[1.02]",
                                            card.color === 'green' ? 'bg-green-600' : card.color === 'red' ? 'bg-red-600' : 'bg-zinc-500'
                                        )}
                                    >
                                        <div className="absolute inset-[1px] md:inset-[2px] sabacc-shape bg-black z-0 shadow-inner" />
                                        <div className="absolute inset-0 z-10 flex overflow-hidden sabacc-shape">
                                            <CardContent card={card} isSmall={false} />
                                            {/* Gloss effect */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Hand Summary */}
                        <div className="flex items-center gap-4 md:gap-8 bg-zinc-900/50 border border-white/5 px-4 md:px-8 py-2 md:py-3 rounded-2xl backdrop-blur-md mb-2">
                            <div className="flex flex-col">
                                <span className="text-[6px] md:text-[8px] text-gray-500 uppercase tracking-widest font-mono">Current Logic</span>
                                <span className={cn(
                                    "text-sm md:text-lg font-title tracking-[0.2em] uppercase",
                                    pScore.rank === -1 ? 'text-red-500' : 'text-cyan-400'
                                )}>
                                    {pScore.label}
                                </span>
                            </div>
                            <div className="w-px h-6 md:h-8 bg-white/10" />
                            <div className="flex flex-col items-center">
                                <span className="text-[6px] md:text-[8px] text-gray-500 uppercase tracking-widest font-mono">Value</span>
                                <span className="text-xl md:text-2xl font-mono text-white flex items-center gap-1">
                                    {pScore.sum > 0 ? `+${pScore.sum}` : pScore.sum}
                                </span>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="w-full max-w-lg mt-auto min-h-[64px]">
                            <AnimatePresence mode="wait">
                                {phase === 'betting' && (
                                    <motion.div 
                                        key="betting"
                                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                                        className="grid grid-cols-3 gap-2 md:gap-4"
                                    >
                                        <button onClick={() => handleBet('fold')} className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 py-3 md:py-4 rounded-xl font-title text-[10px] md:text-xs uppercase tracking-widest transition-all">Fold</button>
                                        <button onClick={() => handleBet('call')} className="bg-yellow-600 hover:bg-yellow-500 text-black py-3 md:py-4 rounded-xl font-title text-[10px] md:text-xs uppercase tracking-widest transition-all">Call</button>
                                        <button onClick={() => handleBet('raise')} className="bg-cyan-600 hover:bg-cyan-500 text-black py-3 md:py-4 rounded-xl font-title text-[10px] md:text-xs uppercase tracking-widest transition-all">Raise</button>
                                    </motion.div>
                                )}

                                {phase === 'action' && (
                                    <motion.div 
                                        key="action"
                                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                                        className="grid grid-cols-3 gap-2 md:gap-4"
                                    >
                                        <button 
                                            onClick={() => handleAction('draw')} 
                                            disabled={playerHand.length >= 5}
                                            className="bg-green-600 hover:bg-green-500 text-black py-2 md:py-4 rounded-xl font-title text-[10px] md:text-xs uppercase tracking-widest disabled:opacity-30 transition-all flex flex-col items-center gap-1"
                                        >
                                            <RefreshCw size={14} className="mb-0.5 md:mb-1 md:w-4 md:h-4" />
                                            <span>Draw Deck</span>
                                        </button>
                                        <button 
                                            onClick={() => handleAction('swap')} 
                                            disabled={discard.length === 0}
                                            className="bg-cyan-600 hover:bg-cyan-500 text-black py-2 md:py-4 rounded-xl font-title text-[10px] md:text-xs uppercase tracking-widest disabled:opacity-30 transition-all flex flex-col items-center gap-1"
                                        >
                                            <Hand size={14} className="mb-0.5 md:mb-1 md:w-4 md:h-4" />
                                            <span>Swap Discard</span>
                                        </button>
                                        <button 
                                            onClick={() => handleAction('stand')} 
                                            className="bg-zinc-800 hover:bg-zinc-700 text-white py-2 md:py-4 rounded-xl font-title text-[10px] md:text-xs uppercase tracking-widest transition-all flex flex-col items-center gap-1"
                                        >
                                            <Trophy size={14} className="mb-0.5 md:mb-1 md:w-4 md:h-4" />
                                            <span>Stand</span>
                                        </button>
                                    </motion.div>
                                )}

                                {phase === 'reveal' && (
                                    <motion.div key="reveal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center">
                                       <span className="text-yellow-500 font-title uppercase text-sm md:text-base tracking-[0.5em] animate-pulse py-2 md:py-4">Showdown...</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const CardContent: React.FC<{ card: SabaccCard, isSmall?: boolean }> = ({ card, isSmall }) => {
    const isGreen = card.color === 'green';
    const isRed = card.color === 'red';
    
    return (
        <div className={cn(
            "flex flex-col items-center justify-between h-full w-full p-2 py-4",
            isGreen ? "text-green-400" : isRed ? "text-red-400" : "text-zinc-400"
        )}>
             <div className="w-full flex justify-between items-start opacity-40">
                <div className="text-[10px] font-mono">{card.val}</div>
                <div className="text-[8px] uppercase">{card.suit.slice(0,3)}</div>
            </div>

            <div className="flex flex-col items-center">
                <div className={cn(
                    "font-title font-bold",
                    isSmall ? "text-xl" : "text-4xl md:text-6xl"
                )}>
                    {card.val === 0 ? '0' : Math.abs(card.val)}
                </div>
                {!isSmall && (
                    <div className="mt-2 flex flex-col items-center gap-1">
                        <div className={cn(
                            "w-1 h-1 rounded-full",
                            isGreen ? "bg-green-500" : isRed ? "bg-red-500" : "bg-white"
                        )} />
                         <div className="text-[8px] uppercase tracking-[0.3em] font-display opacity-60">
                            {card.suit}
                        </div>
                    </div>
                )}
            </div>

            <div className="w-full flex justify-between items-end opacity-40 rotate-180">
                <div className="text-[10px] font-mono">{card.val}</div>
                <div className="text-[8px] uppercase">{card.suit.slice(0,3)}</div>
            </div>
        </div>
    );
};
