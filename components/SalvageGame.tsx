import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wrench, Zap, Cpu, Hammer, X, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { CommandButton } from './Shared';

interface SalvageGameProps {
    onClose: () => void;
    onFinish: (partsFound: number, creditsEarned: number) => void;
}

interface Component {
    id: number;
    type: 'circuit' | 'motor' | 'plating';
    condition: number; // 0 to 100
    isFixed: boolean;
}

export const SalvageGame: React.FC<SalvageGameProps> = ({ onClose, onFinish }) => {
    const [gameState, setGameState] = useState<'IDLE' | 'PLAYING' | 'FINISHED'>('IDLE');
    const [components, setComponents] = useState<Component[]>([]);
    const [progress, setProgress] = useState(0);
    const [timeLeft, setTimeLeft] = useState(20);
    const [partsFound, setPartsFound] = useState(0);

    const initGame = () => {
        const newComps: Component[] = Array.from({ length: 6 }).map((_, i) => ({
            id: i,
            type: ['circuit', 'motor', 'plating'][Math.floor(Math.random() * 3)] as any,
            condition: Math.floor(Math.random() * 40) + 10,
            isFixed: false
        }));
        setComponents(newComps);
        setProgress(0);
        setTimeLeft(20);
        setPartsFound(0);
        setGameState('PLAYING');
    };

    useEffect(() => {
        if (gameState !== 'PLAYING') return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    setGameState('FINISHED');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [gameState]);

    const handleRepair = (id: number) => {
        setComponents(prev => prev.map(c => {
            if (c.id === id && !c.isFixed) {
                const nextCondition = Math.min(100, c.condition + 15);
                const isNowFixed = nextCondition >= 100;
                if (isNowFixed) {
                    setPartsFound(f => f + 1);
                    setProgress(p => Math.min(100, p + 100/6));
                }
                return { ...c, condition: nextCondition, isFixed: isNowFixed };
            }
            return c;
        }));
    };

    useEffect(() => {
        if (progress >= 99 && gameState === 'PLAYING') {
            setGameState('FINISHED');
        }
    }, [progress, gameState]);

    const finishGame = () => {
        const credits = partsFound * 25;
        onFinish(partsFound, credits);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 md:p-8 font-mono select-none"
        >
            <div className="max-w-2xl w-full border-2 border-orange-500/30 bg-orange-950/10 rounded-3xl relative overflow-hidden flex flex-col">
                {/* HEADER */}
                <div className="flex justify-between items-center p-6 border-b border-orange-500/20 bg-orange-900/10 backdrop-blur-sm relative z-10">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-orange-500 uppercase tracking-widest">Workshop Utility</span>
                        <span className="text-2xl text-white font-bold tracking-tighter uppercase">Salvage Bench</span>
                    </div>
                    
                    <div className="flex gap-8">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-orange-400 uppercase tracking-widest">Time</span>
                            <span className={`text-3xl font-bold ${timeLeft < 5 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
                                {timeLeft}s
                            </span>
                        </div>
                    </div>

                    <button onClick={onClose} className="p-2 hover:bg-orange-500/20 rounded-full transition-colors text-orange-500">
                        <X size={24} />
                    </button>
                </div>

                {/* GAME BODY */}
                <div className="p-8 h-96 flex flex-col items-center justify-center relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        {gameState === 'IDLE' && (
                            <motion.div 
                                key="idle"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-center"
                            >
                                <Wrench size={64} className="text-orange-500 mx-auto mb-6" />
                                <h3 className="text-2xl text-white font-bold uppercase mb-2">Repair & Salvage</h3>
                                <p className="text-orange-400/60 mb-8 max-w-sm">Tap components quickly to repair them before they overheat. Fully repaired parts grant extra credits.</p>
                                <CommandButton label="Begin Salvage" onClick={initGame} className="bg-orange-600 border-none px-12" />
                            </motion.div>
                        )}

                        {gameState === 'PLAYING' && (
                            <motion.div 
                                key="playing"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full h-full"
                            >
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
                                    {components.map(c => (
                                        <button
                                            key={c.id}
                                            onClick={() => handleRepair(c.id)}
                                            disabled={c.isFixed}
                                            className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all active:scale-95 ${
                                                c.isFixed 
                                                    ? 'bg-green-500/10 border-green-500/30 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)]' 
                                                    : 'bg-white/5 border-white/10 hover:border-orange-500/40 text-white/50'
                                            }`}
                                        >
                                            {c.type === 'circuit' && <Cpu size={32} />}
                                            {c.type === 'motor' && <Zap size={32} />}
                                            {c.type === 'plating' && <Hammer size={32} />}
                                            
                                            <div className="w-full mt-4 h-1.5 bg-black/40 rounded-full overflow-hidden border border-white/5">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${c.condition}%` }}
                                                    className={`h-full ${c.isFixed ? 'bg-green-500' : 'bg-orange-500'}`}
                                                />
                                            </div>
                                            <span className="text-[8px] mt-1 font-bold uppercase tracking-widest">
                                                {c.isFixed ? 'OPERATIONAL' : `${c.type.toUpperCase()}: ${c.condition}%`}
                                            </span>

                                            {c.isFixed && <CheckCircle2 size={16} className="absolute top-2 right-2 text-green-500" />}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {gameState === 'FINISHED' && (
                            <motion.div 
                                key="finished"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center"
                            >
                                <div className="p-8 rounded-full bg-orange-500/10 border-4 border-orange-500/20 inline-block mb-6 relative">
                                    <Hammer size={48} className="text-orange-500" />
                                    {progress >= 99 && (
                                        <div className="absolute -top-2 -right-2 bg-green-500 text-black font-black text-[10px] px-2 py-0.5 rounded-full">PERFECT</div>
                                    )}
                                </div>
                                <h3 className="text-3xl text-white font-bold uppercase mb-2">Salvage Complete</h3>
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <div className="text-[10px] text-white/40 uppercase">Parts Salvaged</div>
                                        <div className="text-2xl text-white font-bold">{partsFound} / 6</div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <div className="text-[10px] text-white/40 uppercase">Credit Reward</div>
                                        <div className="text-2xl text-yellow-500 font-bold">+{partsFound * 25}c</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 justify-center">
                                    <CommandButton label="Retry" onClick={initGame} className="border-orange-500 text-orange-500 px-8" />
                                    <CommandButton label="Done" onClick={finishGame} className="bg-white text-black px-12" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* FOOTER */}
                <div className="px-8 py-4 bg-orange-500/5 border-t border-orange-500/10 flex items-center gap-4">
                    <AlertTriangle size={14} className="text-orange-500 shrink-0" />
                    <span className="text-[9px] text-orange-300/50 uppercase leading-relaxed font-mono">
                        System Alert: All salvage operations are monitored by Imperial Oversight. Stolen components will be confiscated. 
                        Watto takes 40% processing fee. Values displayed are net values.
                    </span>
                </div>
            </div>
        </motion.div>
    );
};
