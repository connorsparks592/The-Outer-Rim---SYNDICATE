import React, { useState, useEffect } from 'react';
import { BackgroundAudioPlayer, CommandButton, cn } from './Shared';
import { AUDIO, IMAGES, RACES, CLASSES } from '../data';
import { Character, Stats, Race, CharClass } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Sparkles, User, ChevronRight, Sword, Shield, Cpu, Zap, Star } from 'lucide-react';

export const OpeningCrawl: React.FC<{ onFinished: () => void, volume: number }> = ({ onFinished, volume }) => {
    const [phase, setPhase] = useState<'intro' | 'logo' | 'crawl'>('intro');
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Phase 1: Blue Intro Text
        const introTimer = setTimeout(() => {
            setPhase('logo');
            setAudioPlaying(true);
        }, 4000);

        // Phase 2: Logo Burst
        const logoTimer = setTimeout(() => {
            setPhase('crawl');
        }, 11000); // 4s intro + 7s logo animation

        return () => {
            clearTimeout(introTimer);
            clearTimeout(logoTimer);
        };
    }, []);

    const handleSkip = () => {
        setIsFadingOut(true);
        setTimeout(onFinished, 1500);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[50] overflow-hidden"
        >
            <BackgroundAudioPlayer src={AUDIO.MAIN_TITLE} volume={volume} isPlaying={audioPlaying} loop={false} />
            
            <AnimatePresence mode="wait">
                {phase === 'intro' && (
                    <motion.div 
                        key="intro"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 4, times: [0, 0.2, 0.8, 1] }}
                        className="absolute inset-0 flex items-center justify-center p-8 text-center"
                    >
                        <h2 className="text-[#4bd5ee] text-xl md:text-3xl font-sans tracking-[0.2em] leading-relaxed drop-shadow-[0_0_15px_rgba(75,213,238,0.5)]">
                            A long time ago in a galaxy far, far away....
                        </h2>
                    </motion.div>
                )}

                {phase === 'logo' && (
                    <motion.div 
                        key="logo"
                        initial={{ scale: 3, opacity: 0 }}
                        animate={{ scale: 0, opacity: [0, 1, 1, 0.5, 0] }}
                        transition={{ 
                            duration: 8, 
                            times: [0, 0.05, 0.4, 0.8, 1],
                            ease: "easeOut"
                        }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <div className="text-center">
                            <h1 className="text-[12rem] md:text-[24rem] font-sans font-black text-[#feda4a] tracking-tight leading-[0.8] drop-shadow-[0_0_50px_rgba(254,218,74,0.3)]">
                                STAR<br/>WARS
                            </h1>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Crawl is always present when phase is crawl, not in AnimatePresence wait mode to allow overlay */}
            {phase === 'crawl' && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full w-full relative"
                >
                    {/* Starfield Background */}
                    <div className="absolute inset-0 bg-[url('https://i.postimg.cc/qRtKmN94/eae041e8872e2b60068958ee0ee38884.jpg')] bg-cover opacity-40" />
                    
                    <div className="absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-b from-black to-transparent z-10" />
                    
                    {/* 3D Crawl Container */}
                    <div className="absolute inset-0 flex justify-center [perspective:1000px] overflow-hidden">
                        <motion.div 
                            initial={{ y: '100%', rotateX: 20 }}
                            animate={{ y: '-400%' }}
                            transition={{ duration: 100, ease: "linear" }}
                            onAnimationComplete={onFinished}
                            className="w-[85%] md:w-[60%] text-[#feda4a] font-extrabold text-center space-y-16 pb-96"
                            style={{ 
                                transformOrigin: '50% 100%',
                                textShadow: '0 0 10px rgba(254, 218, 74, 0.4)'
                            }}
                        >
                            <div className="space-y-8">
                                <h1 className="text-4xl md:text-6xl font-sans tracking-[0.5em] font-black italic">EPISODE I</h1>
                                <h2 className="text-5xl md:text-8xl font-sans uppercase tracking-tight font-black leading-tight">THE OUTER RIM</h2>
                            </div>
                            
                            <div className="text-xl md:text-4xl leading-[1.6] text-center md:text-justify space-y-12 font-sans font-black italic tracking-wide">
                                <p>The expansion of the GALACTIC EMPIRE continues unabated, casting a long shadow across the galaxy. Yet in the desolate reaches of the OUTER RIM, a different ambition begins to stir.</p>
                                <p>Seeking opportunity far from the prying eyes of the Core Worlds, you have arrived on TATOOINE—a harsh desert world of twin suns, endless sand, and lawless potential.</p>
                                <p>Guided by the advice of an old business partner, the cantina bartender WUHER, you have come to this wretched hive of scum and villainy to build a life beyond the reach of Imperial bureaucracy.</p>
                                <p>The galaxy is vast, and fortunes are made by those brave enough to stake their claim. With your skills as a former traveling merchant, it is time to establish your reputation and carve out your own territory.</p>
                                <p>The twin suns beat down on the dunes, signaling the dawn of a new enterprise. Tatooine is not just a destination; it is the foundation of your rising criminal empire.</p>
                            </div>
                        </motion.div>
                    </div>

                    <button 
                        onClick={handleSkip}
                        className="absolute bottom-12 right-12 z-30 px-8 py-3 border-2 border-[#feda4a]/30 text-[#feda4a] text-sm font-title tracking-[0.3em] uppercase hover:bg-[#feda4a]/10 hover:border-[#feda4a]/60 transition-all rounded backdrop-blur-md active:scale-95"
                    >
                        Skip Transmission
                    </button>
                </motion.div>
            )}
            
            <AnimatePresence>
                {isFadingOut && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 bg-black z-[60]"
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const StartScreen: React.FC<{ onNewGame: () => void, onContinue: () => void, hasSave: boolean }> = ({ onNewGame, onContinue, hasSave }) => {
    const [fading, setFading] = useState(false);

    const handleNewGameClick = () => {
        setFading(true);
        setTimeout(onNewGame, 1500);
    };

    return (
        <div className="relative h-full w-full flex flex-col items-center justify-center bg-black overflow-hidden select-none">
            <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 opacity-50"
            >
                <img src={IMAGES.START_SCREEN} className="w-full h-full object-cover grayscale-[0.3] brightness-[0.4]" alt="Tatooine" />
            </motion.div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-black z-1" />
            <div className="scanline z-2 opacity-10" />

            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="z-10 text-center mb-16"
            >
                <h1 className="text-6xl md:text-9xl font-sans font-black text-yellow-500 tracking-tight uppercase leading-[0.8] drop-shadow-[0_0_30px_rgba(234,179,8,0.4)] mb-2">
                    THE<br/>OUTER RIM
                </h1>
                <p className="font-title text-cyan-600 tracking-[0.4em] text-[10px] md:text-xs uppercase opacity-70 mt-6 font-bold">
                    A Star Wars Story
                </p>
            </motion.div>

            <div className="z-10 flex flex-col gap-4 w-64 md:w-80">
                <CommandButton 
                    label="Initialize Pilot" 
                    onClick={handleNewGameClick} 
                    className="w-full py-5 text-lg border-yellow-500/50 text-yellow-500 bg-yellow-500/5 hover:bg-yellow-500/20"
                    icon={<Play size={18} className="text-yellow-600" />}
                />
                {hasSave && (
                    <CommandButton 
                        label="Restore Uplink" 
                        onClick={onContinue} 
                        className="w-full py-5 text-lg border-cyan-800 bg-black/40"
                        icon={<Sparkles size={18} className="text-cyan-600" />}
                    />
                )}
            </div>

            <div className={`absolute inset-0 bg-black transition-opacity duration-[1500ms] ease-in-out pointer-events-none z-20 ${fading ? 'opacity-100' : 'opacity-0'}`} />
        </div>
    );
};

export const CharacterCreator: React.FC<{ onFinished: (char: Character) => void }> = ({ onFinished }) => {
    const [step, setStep] = useState(0);
    const [name, setName] = useState('');
    const [selectedRaceId, setSelectedRaceId] = useState<string>(RACES[0].id);
    const [selectedClassId, setSelectedClassId] = useState<string>(CLASSES[0].id);

    const handleComplete = () => {
        if (!name.trim()) return;
        const race = RACES.find(r => r.id === selectedRaceId)!;
        const charClass = CLASSES.find(c => c.id === selectedClassId)!;
        
        const baseStats: Stats = { str: 5, per: 5, end: 5, cha: 5, int: 5, agi: 5, lck: 5 };
        const finalStats = { ...baseStats };
        
        Object.entries(race.bonuses).forEach(([stat, val]) => {
            if (stat in finalStats) finalStats[stat as keyof Stats] += val;
        });
        Object.entries(charClass.bonuses).forEach(([stat, val]) => {
            if (stat in finalStats) finalStats[stat as keyof Stats] += val;
        });

        const maxHp = 20 + (finalStats.end * 2);
        
        onFinished({
            name,
            race,
            charClass,
            stats: finalStats,
            maxHp,
            currentHp: maxHp,
            background: "A mysterious past finds you on the Outer Rim...",
            party: [],
            level: 1,
            xp: 0,
            xpToNextLevel: 100,
            skillPoints: 0
        });
    };

    const selectedRaceData = RACES.find(r => r.id === selectedRaceId);
    const selectedClassData = CLASSES.find(c => c.id === selectedClassId);

    return (
        <div className="h-full w-full flex items-center justify-center md:bg-gray-950 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop')] bg-cover opacity-20 grayscale brightness-50" />
            <div className="absolute inset-0 scanline opacity-10" />
            
            <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full max-w-2xl bg-black/80 border border-cyan-800/30 rounded-2xl p-6 md:p-10 backdrop-blur-xl shadow-2xl relative z-10"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-cyan-500/10 p-3 rounded-xl border border-cyan-500/20">
                        <User className="text-cyan-400" size={32} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-title text-white tracking-tight uppercase">Pilot Registration</h2>
                        <div className="h-1 w-24 bg-cyan-700 mt-2 rounded-full" />
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div 
                            key="name" 
                            initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}
                            className="space-y-6"
                        >
                            <label className="block text-cyan-500 font-display text-sm tracking-widest uppercase">Designation</label>
                            <input 
                                autoFocus
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                placeholder="ENTER NAME..."
                                className="w-full bg-cyan-950/20 border-b-2 border-cyan-800 p-4 text-2xl font-title text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-cyan-900 uppercase"
                            />
                            <CommandButton 
                                disabled={!name} 
                                label="Biological Scan" 
                                onClick={() => setStep(1)} 
                                className="w-full py-4 text-lg"
                                icon={<ChevronRight size={20} />}
                            />
                        </motion.div>
                    )}

                    {step === 1 && (
                        <motion.div 
                            key="race" 
                            initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}
                        >
                            <label className="block text-cyan-500 font-display text-sm tracking-widest uppercase mb-4">Species selection</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                                {RACES.map(r => (
                                    <button 
                                        key={r.id} 
                                        onClick={() => setSelectedRaceId(r.id)} 
                                        className={cn(
                                            "p-4 border transition-all rounded-lg text-left group",
                                            selectedRaceId === r.id ? "bg-cyan-500/20 border-cyan-400 text-white" : "bg-black/40 border-cyan-900/30 text-cyan-700 hover:border-cyan-700"
                                        )}
                                    >
                                        <div className="font-title uppercase text-sm mb-1 group-hover:text-cyan-300">{r.name}</div>
                                        <div className="text-[10px] leading-tight opacity-60 font-sans">{r.description.slice(0, 80)}...</div>
                                    </button>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <button onClick={() => setStep(0)} className="flex-1 py-4 border border-gray-800 text-gray-500 hover:text-white uppercase transition-colors rounded">Abort</button>
                                <CommandButton label="Archetype Calibration" onClick={() => setStep(2)} className="flex-[2] py-4" />
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div 
                            key="class" 
                            initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}
                        >
                            <label className="block text-cyan-500 font-display text-sm tracking-widest uppercase mb-4">Class training</label>
                            <div className="flex flex-col gap-3 mb-8">
                                {CLASSES.map(c => (
                                    <button 
                                        key={c.id} 
                                        onClick={() => setSelectedClassId(c.id)} 
                                        className={cn(
                                            "p-4 border transition-all rounded-xl text-left flex items-center gap-4 group",
                                            selectedClassId === c.id ? "bg-yellow-500/10 border-yellow-400 text-white" : "bg-black/40 border-cyan-900/30 text-cyan-700 hover:border-cyan-700"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-12 h-12 flex items-center justify-center rounded-lg border",
                                            selectedClassId === c.id ? "bg-yellow-400/20 border-yellow-400 text-yellow-400" : "bg-gray-900 border-gray-800 text-gray-600"
                                        )}>
                                            {c.id === 'mechanic' ? <Cpu size={20} /> : c.id === 'merc' ? <Shield size={20} /> : c.id === 'bounty_hunter' ? <Sword size={20} /> : <Zap size={20} />}
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-title uppercase text-sm group-hover:text-yellow-400">{c.name}</div>
                                            <div className="text-[10px] opacity-60 font-sans">{c.description}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <button onClick={() => setStep(1)} className="flex-1 py-4 border border-gray-800 text-gray-500 uppercase rounded">Back</button>
                                <CommandButton 
                                    label="Engage Hyperdrive" 
                                    onClick={handleComplete} 
                                    className="flex-[2] py-4 border-yellow-500/50 text-yellow-500 bg-yellow-500/5" 
                                    icon={<Play size={20} />}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
