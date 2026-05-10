import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Sword, Shield, Zap, Target, Star, Brain, Heart, FastForward, Award, X, ChevronUp } from 'lucide-react';
import { SaveData, Stats } from '../types';
import { CommandButton, cn } from './Shared';

interface CharacterSheetProps {
    gameState: SaveData;
    onClose: () => void;
    onUpdateStats: (newStats: Stats, remainingPoints: number) => void;
}

export const CharacterSheet: React.FC<CharacterSheetProps> = ({ gameState, onClose, onUpdateStats }) => {
    const char = gameState.stats;
    if (!char) return null;

    const stats = char.stats;
    const skillPoints = char.skillPoints || 0;

    const handleUpgrade = (stat: keyof Stats) => {
        if (skillPoints <= 0) return;
        const newStats = { ...stats, [stat]: stats[stat] + 1 };
        onUpdateStats(newStats, skillPoints - 1);
    };

    const statLabels: Record<keyof Stats, { l: string, d: string, icon: any }> = {
        str: { l: 'Strength', d: 'Physical power and weapon damage.', icon: Sword },
        per: { l: 'Perception', d: 'Awareness and accuracy in combat.', icon: Target },
        end: { l: 'Endurance', d: 'Overall health and stamina.', icon: Heart },
        cha: { l: 'Charisma', d: 'Social influence and negotiation.', icon: User },
        int: { l: 'Intelligence', d: 'Slicing efficiency and logic.', icon: Brain },
        agi: { l: 'Agility', d: 'Reaction time and movement.', icon: Zap },
        lck: { l: 'Luck', d: 'Chance factors and crit rewards.', icon: Star },
    };

    const factionIcons: Record<string, string> = {
        empire: 'https://img.icons8.com/color/48/galactic-empire.png',
        rebellion: 'https://img.icons8.com/color/48/rebel.png',
        hutt: 'https://img.icons8.com/color/48/jabba-the-hutt.png',
        guild: 'https://img.icons8.com/color/48/mandalorian.png'
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 md:p-8 font-mono select-none"
        >
            <div className="max-w-4xl w-full h-[85vh] border-2 border-cyan-500/30 bg-cyan-950/10 rounded-3xl relative overflow-hidden flex flex-col shadow-[0_0_100px_rgba(6,182,212,0.15)]">
                {/* AMBIENT BG */}
                <div className="absolute inset-0 pointer-events-none opacity-5">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cyber-dust.png')]" />
                </div>

                {/* HEADER */}
                <div className="flex justify-between items-center p-6 border-b border-cyan-500/20 bg-cyan-900/10 backdrop-blur-sm relative z-10">
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center overflow-hidden">
                                <User className="text-cyan-400" size={32} />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-black font-black text-xs px-2 py-0.5 rounded-lg shadow-lg border-2 border-black">
                                LVL {char.level}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-cyan-500 uppercase tracking-widest font-bold">Authenticated User Identity</span>
                            <span className="text-3xl text-white font-black tracking-tighter uppercase glow-cyan-sm">{char.name}</span>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] px-2 py-0.5 bg-white/10 rounded uppercase text-white/60">{char.race.name}</span>
                                <span className="text-[10px] px-2 py-0.5 bg-yellow-500/20 rounded uppercase text-yellow-500 border border-yellow-500/20">{char.charClass.name}</span>
                            </div>
                        </div>
                    </div>
                    
                    <button onClick={onClose} className="p-3 hover:bg-red-500/20 rounded-full transition-colors text-red-500 group">
                        <X size={28} className="group-hover:rotate-90 transition-transform" />
                    </button>
                </div>

                {/* CONTENT */}
                <div className="flex-1 overflow-y-auto p-6 md:p-10 news-scrollbar grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
                    
                    {/* LEFT COL: STATS */}
                    <div className="md:col-span-5 space-y-8">
                        <div className="flex justify-between items-end mb-2">
                             <div className="flex flex-col">
                                <span className="text-xs text-cyan-500 font-bold uppercase tracking-wider">Base Attributes</span>
                                {skillPoints > 0 && (
                                    <span className="text-[10px] text-yellow-500 animate-pulse uppercase font-black">Available points: {skillPoints}</span>
                                )}
                             </div>
                             <FastForward size={14} className="text-cyan-500/30" />
                        </div>

                        <div className="space-y-3">
                            {(Object.keys(statLabels) as Array<keyof Stats>).map(key => {
                                const info = statLabels[key];
                                const Icon = info.icon;
                                return (
                                    <div key={key} className="group p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between hover:bg-cyan-500/5 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500 group-hover:text-black transition-all">
                                                <Icon size={18} />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs text-white/90 uppercase font-bold tracking-widest">{info.l}</span>
                                                <span className="text-[9px] text-white/30 hidden sm:block uppercase">{info.d}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-xl font-mono text-cyan-400 font-bold">{stats[key]}</span>
                                            {skillPoints > 0 && (
                                                <button 
                                                    onClick={() => handleUpgrade(key)}
                                                    className="p-1 bg-yellow-500/20 border border-yellow-500/40 rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all"
                                                >
                                                    <ChevronUp size={16} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT COL: PROGRESS & REP */}
                    <div className="md:col-span-7 space-y-10">
                        
                        {/* XP PROGRESS */}
                        <div className="p-8 rounded-3xl bg-black/40 border border-white/10 shadow-inner">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-3">
                                    <Award size={20} className="text-yellow-500" />
                                    <span className="text-xs text-white uppercase font-bold tracking-widest">Experience Leveling</span>
                                </div>
                                <span className="text-xs font-mono text-white/40">{char.xp} / {char.xpToNextLevel} XP</span>
                            </div>
                            <div className="h-4 bg-white/5 rounded-full border border-white/10 overflow-hidden p-0.5 relative">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(char.xp / char.xpToNextLevel) * 100}%` }}
                                    className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.4)]"
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <span className="text-[8px] text-black/50 font-black tracking-[0.4em] uppercase">System Calibration</span>
                                </div>
                            </div>
                        </div>

                        {/* REPUTATION */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Star size={16} className="text-cyan-500" />
                                <span className="text-xs text-white uppercase font-bold tracking-widest">Faction Standing</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {Object.entries(gameState.reputation || {}).map(([faction, value]) => (
                                    <div key={faction} className="p-4 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center border border-white/5 overflow-hidden">
                                            {factionIcons[faction] ? (
                                                <img src={factionIcons[faction]} className="w-6 h-6 object-contain opacity-70" alt={faction} />
                                            ) : (
                                                <User className="text-white/20" size={16} />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-[10px] text-white/40 uppercase font-black">{faction}</div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                                                    <div 
                                                        className={cn("h-full", value >= 0 ? 'bg-cyan-500' : 'bg-red-500')} 
                                                        style={{ width: `${Math.min(100, Math.abs(value))}%` }}
                                                    />
                                                </div>
                                                <span className={cn("text-xs font-mono font-bold", value >= 0 ? 'text-cyan-400' : 'text-red-400')}>
                                                    {value}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* PARTY / ALLIES (Placeholder for future expansion) */}
                        <div className="p-6 rounded-3xl bg-cyan-900/5 border border-cyan-500/10 flex items-center gap-6">
                            <Shield size={32} className="text-cyan-500/20" />
                            <div>
                                <h4 className="text-xs text-white font-bold uppercase tracking-widest mb-1">Squad Influence</h4>
                                <p className="text-[10px] text-cyan-400/40 uppercase leading-relaxed">Continue completing side objectives to unlock legendary companions and passive squad bonuses.</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* FOOTER */}
                <div className="p-6 bg-cyan-500/5 border-t border-cyan-500/10 flex justify-center">
                    <CommandButton label="Close Dossier" onClick={onClose} className="px-12 bg-white text-black font-black" />
                </div>
            </div>
        </motion.div>
    );
};
