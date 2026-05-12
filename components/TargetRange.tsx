import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crosshair, Target, Zap, Trophy, X } from 'lucide-react';
import { CommandButton } from './Shared';

interface TargetRangeProps {
    onClose: () => void;
    onFinish: (score: number, creditsEarned: number) => void;
}

interface ShootingTarget {
    id: number;
    x: number;
    y: number;
    type: 'static' | 'dynamic' | 'bonus';
    createdAt: number;
}

export const TargetRange: React.FC<TargetRangeProps> = ({ onClose, onFinish }) => {
    const [gameState, setGameState] = useState<'IDLE' | 'PLAYING' | 'FINISHED'>('IDLE');
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [targets, setTargets] = useState<ShootingTarget[]>([]);
    const [highScore, setHighScore] = useState(() => Number(localStorage.getItem('shooting_high_score') || 0));

    const spawnTarget = useCallback(() => {
        const id = Date.now();
        const x = Math.random() * 80 + 10; // 10% - 90%
        const y = Math.random() * 70 + 10; // 10% - 80%
        const roll = Math.random();
        let type: 'static' | 'dynamic' | 'bonus' = 'static';
        if (roll < 0.2) type = 'bonus';
        else if (roll < 0.5) type = 'dynamic';

        setTargets(prev => [...prev, { id, x, y, type, createdAt: Date.now() }]);

        // Auto-remove target after 2 seconds
        setTimeout(() => {
            setTargets(prev => prev.filter(t => t.id !== id));
        }, 2000);
    }, []);

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

        const spawner = setInterval(() => {
            spawnTarget();
        }, 800);

        return () => {
            clearInterval(timer);
            clearInterval(spawner);
        };
    }, [gameState, spawnTarget]);

    const handleHit = (id: number, type: string) => {
        let points = 10;
        if (type === 'dynamic') points = 20;
        if (type === 'bonus') points = 50;

        setScore(prev => prev + points);
        setTargets(prev => prev.filter(t => t.id !== id));
    };

    const startGame = () => {
        setScore(0);
        setTimeLeft(30);
        setTargets([]);
        setGameState('PLAYING');
    };

    const finishGame = () => {
        if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('shooting_high_score', score.toString());
        }
        const credits = Math.floor(score / 10);
        onFinish(score, credits);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 md:p-8 font-mono select-none"
        >
            <div className="max-w-4xl w-full h-[80vh] border-2 border-red-500/30 bg-red-950/10 rounded-3xl relative overflow-hidden flex flex-col">
                {/* HUD */}
                <div className="flex justify-between items-center p-6 border-b border-red-500/20 bg-red-900/10 backdrop-blur-sm relative z-10">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-red-500 uppercase tracking-widest">Training Simulator</span>
                        <span className="text-2xl text-white font-bold tracking-tighter uppercase">Bounty Guild Range</span>
                    </div>
                    
                    <div className="flex gap-8">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-red-400 uppercase tracking-widest">Score</span>
                            <span className="text-3xl font-bold text-red-500">{score.toString().padStart(4, '0')}</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-red-400 uppercase tracking-widest">Time</span>
                            <span className={`text-3xl font-bold ${timeLeft < 10 ? 'text-red-600 animate-pulse' : 'text-white'}`}>
                                {timeLeft}s
                            </span>
                        </div>
                    </div>

                    <button onClick={onClose} className="p-2 hover:bg-red-500/20 rounded-full transition-colors text-red-500">
                        <X size={24} />
                    </button>
                </div>

                {/* GAME AREA */}
                <div className="flex-1 relative cursor-crosshair overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] bg-repeat">
                    <AnimatePresence>
                        {gameState === 'IDLE' && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/40 backdrop-blur-sm"
                            >
                                <Crosshair size={64} className="text-red-500 mb-6" />
                                <h3 className="text-3xl text-white font-bold uppercase mb-2">Ready to Fire?</h3>
                                <p className="text-red-400/60 mb-8 max-w-sm text-center">Hit as many targets as possible in 30 seconds. Accuracy matters.</p>
                                <div className="flex flex-col gap-4">
                                    <CommandButton label="Start Training" onClick={startGame} className="bg-red-600 border-none px-12 py-4 h-auto text-xl" />
                                    <div className="flex items-center justify-center gap-2 text-red-500/40 text-sm">
                                        <Trophy size={14} />
                                        <span>Training Registry Best: {highScore}</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {gameState === 'PLAYING' && targets.map(t => (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.5 }}
                                style={{ left: `${t.x}%`, top: `${t.y}%` }}
                                className="absolute -translate-x-1/2 -translate-y-1/2"
                                onClick={() => handleHit(t.id, t.type)}
                            >
                                <div className={`relative flex items-center justify-center w-16 h-16 rounded-full border-2 ${
                                    t.type === 'bonus' ? 'border-yellow-500 bg-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.5)]' :
                                    t.type === 'dynamic' ? 'border-cyan-500 bg-cyan-500/20' :
                                    'border-red-500 bg-red-500/20'
                                }`}>
                                    <Target size={32} className={
                                        t.type === 'bonus' ? 'text-yellow-500' :
                                        t.type === 'dynamic' ? 'text-cyan-500' :
                                        'text-red-500'
                                    } />
                                    <div className="absolute inset-0 animate-ping rounded-full border border-red-500/30" />
                                </div>
                                {t.type === 'bonus' && <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] text-yellow-500 font-bold whitespace-nowrap">BONUS TARGET</div>}
                            </motion.div>
                        ))}

                        {gameState === 'FINISHED' && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/80 backdrop-blur-md"
                            >
                                <div className="text-center mb-8">
                                    <h3 className="text-5xl text-white font-black uppercase mb-4 tracking-tighter">Mission Complete</h3>
                                    <div className="text-8xl text-red-500 font-black mb-2">{score}</div>
                                    <p className="text-red-400 uppercase tracking-widest text-sm">Total Performance Score</p>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4 w-full max-w-xs mb-8">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-xs text-white/40 uppercase mb-1">Rank</div>
                                        <div className="text-2xl text-white font-bold">
                                            {score > 800 ? 'DEADEYE' : score > 500 ? 'VETERAN' : score > 200 ? 'ROOKIE' : 'RECRUIT'}
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-xs text-white/40 uppercase mb-1">Reward</div>
                                        <div className="text-2xl text-yellow-500 font-bold">+{Math.floor(score/10)}c</div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <CommandButton label="Try Again" onClick={startGame} className="border-red-500 text-red-500 px-8" />
                                    <CommandButton label="Claim & Exit" onClick={finishGame} className="bg-white text-black px-12 font-bold" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="p-4 bg-black/40 border-t border-red-500/10 flex justify-center gap-12 text-[10px] text-red-500/40 uppercase tracking-[0.2em]">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span>Standard: 10pts</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500" />
                        <span>Dynamic: 20pts</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <span>Bonus: 50pts</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
