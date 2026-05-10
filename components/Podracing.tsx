import React, { useState, useEffect, useRef } from 'react';
import { DRIVERS, AUDIO } from '../data';
import { ActiveRace, SaveData } from '../types';
import { BackgroundAudioPlayer, CommandButton, cn } from './Shared';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Clock, Zap, Timer, ChevronRight, X, Star } from 'lucide-react';

interface PodracingProps {
    gameState: SaveData;
    onBetPlaced: (driverId: string, amount: number, isMainEvent: boolean, startTime: number) => void;
    onRaceFinished: (winnerId: string, payouts: number) => void;
    onClose: () => void;
    mode: 'betting' | 'tracker';
}

export const Podracing: React.FC<PodracingProps> = ({ gameState, onBetPlaced, onRaceFinished, onClose, mode }) => {
    const [selectedDriver, setSelectedDriver] = useState<string | null>(null);
    const [betAmount, setBetAmount] = useState(100);
    const [view, setView] = useState<'form' | 'receipt'>('form');

    const now = new Date();
    const day = now.getDay();
    const isMainEventWindow = (day >= 4 && day <= 6); // Thu, Fri, Sat
    const isSundayNoon = (day === 0 && now.getHours() >= 12);

    const handlePlaceBet = (isMain: boolean) => {
        if (!selectedDriver) return;
        
        // Fee calculation: pass holders pay zero fees
        const hasPass = gameState.inventory.some(i => i.id === 'podrace_pass');
        const finalBet = hasPass ? betAmount : Math.floor(betAmount * 1.05); // 5% house fee for non-members

        if (gameState.credits < finalBet) {
            alert("Insufficient credits for wager and registration fees.");
            return;
        }

        let startTime = 0;
        if (isMain) {
            const nextSunday = new Date(now);
            const daysUntilSunday = (7 - day) % 7;
            const diff = daysUntilSunday === 0 ? 7 : daysUntilSunday; // Always target the upcoming Sunday
            
            nextSunday.setDate(now.getDate() + diff);
            nextSunday.setHours(12, 0, 0, 0);
            
            startTime = nextSunday.getTime();
        }

        onBetPlaced(selectedDriver, finalBet, isMain, startTime);
        setView('receipt');
    };

    if (mode === 'betting') {
        return (
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 overflow-hidden"
            >
                <motion.div 
                    initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }}
                    className="w-full max-w-5xl bg-black border-4 border-orange-600 rounded-3xl p-4 md:p-8 shadow-[0_0_80px_rgba(234,88,12,0.2)] relative flex flex-col h-full max-h-[800px]"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                    <div className="scanline z-10 opacity-10 pointer-events-none" />
                    
                    <div className="flex justify-between items-center border-b-2 border-orange-600/50 pb-6 mb-6 z-20">
                        <div className="flex items-center gap-4">
                            <div className="bg-orange-600 p-2 rounded-lg">
                                <Trophy className="text-black" size={32} />
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-4xl font-title text-orange-500 tracking-widest uppercase">Boonta Eve Classic</h1>
                                <p className="text-[10px] text-orange-900 font-mono uppercase tracking-widest mt-1">Official Betting Terminal // Mos Espa District</p>
                            </div>
                        </div>
                        <button onClick={onClose} className="text-orange-500 hover:text-white transition-colors bg-orange-600/10 p-2 rounded-full border border-orange-600/20">
                            <X size={24} />
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        {view === 'receipt' ? (
                            <motion.div 
                                key="receipt"
                                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                className="flex-1 flex flex-col items-center justify-center text-center z-20"
                            >
                                <div className="border-2 border-orange-500 p-8 md:p-12 bg-orange-950/20 rounded-3xl max-w-md w-full relative backdrop-blur-xl">
                                    <div className="text-7xl mb-6 animate-bounce">🎫</div>
                                    <h2 className="text-2xl text-white font-title mb-4">Wager Registered</h2>
                                    <p className="text-orange-300 mb-8 font-mono text-sm leading-relaxed">
                                        Your credits are held in escrow. Payouts will be processed automatically upon race completion.
                                    </p>
                                    <CommandButton 
                                        label="Close Terminal" 
                                        onClick={onClose} 
                                        className="w-full py-5 bg-orange-600 border-none text-black"
                                        icon={<ChevronRight size={20} />}
                                    />
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="form"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="flex-1 flex flex-col md:flex-row gap-6 z-20 overflow-hidden"
                            >
                                <div className="md:w-1/3 overflow-y-auto pr-2 custom-scrollbar bg-black/40 rounded-2xl p-2 border border-orange-900/20">
                                    {DRIVERS.map(d => (
                                        <button 
                                            key={d.id} 
                                            onClick={() => setSelectedDriver(d.id)}
                                            className={cn(
                                                "w-full p-4 mb-2 border-l-4 transition-all flex flex-col",
                                                selectedDriver === d.id 
                                                    ? 'border-orange-500 bg-orange-600/10 text-white translate-x-1' 
                                                    : 'border-transparent bg-white/5 text-gray-500 hover:bg-white/10 hover:border-orange-900'
                                            )}
                                        >
                                            <div className="flex justify-between items-center w-full">
                                                <span className="font-title text-sm tracking-widest">{d.name}</span>
                                                <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: d.color, boxShadow: `0 0 10px ${d.color}` }} />
                                            </div>
                                            <div className="flex justify-between mt-3 font-mono text-xs items-end">
                                                <span className="opacity-50">ODDS</span>
                                                <span className="text-orange-500 text-lg font-bold">x{d.odds}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <div className="flex-1 bg-white/5 backdrop-blur-sm p-6 md:p-10 border border-white/5 rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden">
                                        {!selectedDriver ? (
                                            <div className="flex flex-col items-center gap-4 opacity-30">
                                                <Zap size={64} className="text-orange-600" />
                                                <div className="font-title text-2xl tracking-[0.2em]">Select Your Pilot</div>
                                            </div>
                                        ) : (
                                            <motion.div 
                                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                                className="w-full flex flex-col h-full"
                                            >
                                                <div className="w-full flex justify-between items-start mb-12">
                                                    <div>
                                                        <div className="text-[10px] text-orange-600 font-bold tracking-[0.3em] uppercase mb-2">Authenticated Pick</div>
                                                        <h2 className="text-4xl text-white font-title tracking-tight">{DRIVERS.find(d => d.id === selectedDriver)?.name}</h2>
                                                    </div>
                                                    <div className="bg-orange-600/10 border border-orange-500 px-4 py-2 rounded-xl text-orange-500 font-mono">
                                                        x{DRIVERS.find(d => d.id === selectedDriver)?.odds}
                                                    </div>
                                                </div>

                                                <div className="flex-1 flex flex-col justify-center gap-8">
                                                    <div>
                                                        <div className="text-[10px] text-gray-500 font-bold tracking-[0.3em] uppercase mb-4">Escrow Commitment</div>
                                                        <div className="flex items-center justify-center gap-6">
                                                            <button onClick={() => setBetAmount(Math.max(50, betAmount - 50))} className="w-14 h-14 flex items-center justify-center border-2 border-orange-600/30 text-orange-600 hover:bg-orange-600 hover:text-black transition-all rounded-2xl text-2xl font-bold active:scale-90">-</button>
                                                            <div className="text-6xl font-title text-white min-w-[200px]">{betAmount}</div>
                                                            <button onClick={() => setBetAmount(Math.max(50, betAmount + 50))} className="w-14 h-14 flex items-center justify-center border-2 border-orange-600/30 text-orange-600 hover:bg-orange-600 hover:text-black transition-all rounded-2xl text-2xl font-bold active:scale-90">+</button>
                                                        </div>
                                                        <div className="text-orange-900 font-mono text-[10px] uppercase mt-4 tracking-widest">Balance: {gameState.credits} / Creds</div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                                                    <button 
                                                        onClick={() => handlePlaceBet(false)}
                                                        disabled={gameState.credits < betAmount}
                                                        className="py-5 bg-white/5 hover:bg-white/10 text-white font-title text-sm uppercase tracking-widest border border-white/10 rounded-2xl transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                                    >
                                                        <Timer size={18} className="text-gray-500" />
                                                        Rookie Race
                                                    </button>
                                                    <button 
                                                        onClick={() => handlePlaceBet(true)}
                                                        disabled={!isMainEventWindow || gameState.credits < betAmount}
                                                        className={cn(
                                                            "py-5 font-title text-sm uppercase tracking-widest rounded-2xl transition-all flex items-center justify-center gap-3",
                                                            isMainEventWindow ? 'bg-orange-600 hover:bg-orange-500 text-black shadow-lg shadow-orange-600/20' : 'bg-gray-950 text-gray-700 border border-gray-900 disabled:opacity-30'
                                                        )}
                                                    >
                                                        <Star size={18} />
                                                        {isMainEventWindow ? 'Sunday Main Event' : 'Main Event Closed'}
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        );
    }

    return <RaceTracker gameState={gameState} onRaceFinished={onRaceFinished} onClose={onClose} />;
};

const RaceTracker: React.FC<{ gameState: SaveData, onRaceFinished: (wid: string, pay: number) => void, onClose: () => void }> = ({ gameState, onRaceFinished, onClose }) => {
    const race = gameState.activeRace!;
    const [positions, setPositions] = useState<{id: string, progress: number, lap: number, totalDist: number}[]>([]);
    const [leaderboard, setLeaderboard] = useState<any[]>([]);
    const [timeToStart, setTimeToStart] = useState<number>(0);
    const pathElRef = useRef<SVGPathElement>(null);
    const [pathLength, setPathLength] = useState(0);
    
    // Course definition: Boonta Eve Classic inspired layout
    const TRACK_PATH = "M 20,15 L 80,15 C 95,15 98,40 85,55 L 95,80 C 95,95 75,95 55,85 L 35,95 C 10,95 5,75 12,50 L 5,25 C 5,10 10,15 20,15";
    
    const LAPS = 30;

    // Use an effect that triggers whenever the track might have appeared
    useEffect(() => {
        if (timeToStart === 0 && pathElRef.current && pathLength === 0) {
            setPathLength(pathElRef.current.getTotalLength());
        }
    }, [timeToStart, pathLength]);

    useEffect(() => {
        const update = () => {
            const now = Date.now();
            const raceStart = race.startTime || now;
            const elapsed = now - raceStart;

            if (elapsed < 0 && race.startTime > 0) {
                setTimeToStart(Math.abs(elapsed));
                setPositions([]);
            } else {
                setTimeToStart(0);
                const newPositions = DRIVERS.map(d => {
                    const rawLaps = (elapsed / 60000) * (d.speedMod || 1) * 1.8;
                    return { id: d.id, progress: (rawLaps % 1), lap: Math.floor(rawLaps), totalDist: rawLaps };
                });

                const winner = newPositions.find(p => p.lap >= LAPS);
                if (winner && !race.completed) {
                    newPositions.sort((a,b) => b.totalDist - a.totalDist);
                    const trueWinnerId = newPositions[0].id;
                    let payout = 0;
                    if (race.betDriverId === trueWinnerId) {
                        const winDriver = DRIVERS.find(d => d.id === trueWinnerId);
                        const winOdds = winDriver?.odds || 1;
                        payout = Math.floor(race.betAmount * winOdds * (race.type === 'main' ? 2 : 1));
                    }
                    onRaceFinished(trueWinnerId, payout);
                    return;
                }
                setPositions(newPositions);
                setLeaderboard([...newPositions].sort((a, b) => b.totalDist - a.totalDist));
            }
        };

        // Telemetry update every 500ms for accurate tracking
        const intervalId = setInterval(update, 500);
        update(); // Initial update
        
        return () => clearInterval(intervalId);
    }, [race]);

    const formatTime = (ms: number) => {
        const s = Math.floor(ms / 1000);
        const m = Math.floor((s % 3600) / 60);
        const h = Math.floor((s % 86400) / 3600);
        const d = Math.floor(s / 86400);
        const sec = s % 60;
        
        let timeStr = "";
        if (d > 0) timeStr += `${d}d `;
        if (h > 0 || d > 0) timeStr += `${h.toString().padStart(2,'0')}h `;
        timeStr += `${m.toString().padStart(2,'0')}m ${sec.toString().padStart(2,'0')}s`;
        return timeStr;
    };

    const getRacerCoords = (progress: number) => {
        if (!pathElRef.current || pathLength === 0) return { x: 50, y: 50 };
        try {
            const point = pathElRef.current.getPointAtLength(progress * pathLength);
            return { x: point.x, y: point.y };
        } catch (e) {
            return { x: 50, y: 50 };
        }
    };

    if (timeToStart > 0) {
        return (
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-title p-8 text-center"
            >
                <div className="bg-orange-600/10 p-4 rounded-full mb-8 border border-orange-600/20">
                    <Clock className="text-orange-600 animate-pulse" size={48} />
                </div>
                <h1 className="text-3xl md:text-5xl text-white mb-2 tracking-widest uppercase">
                    {race.type === 'main' ? 'Boonta Eve Main Event' : 'Race Incoming'}
                </h1>
                <p className="text-orange-900 font-mono uppercase tracking-[0.3em] mb-12">
                    {race.type === 'main' ? 'Race Scheduled for Sunday at Noon' : 'Next Heat Scheduled In:'}
                </p>
                <div className="text-4xl md:text-6xl text-orange-600 font-mono leading-none mb-12 drop-shadow-[0_0_50px_rgba(234,88,12,0.3)] border-2 border-orange-600/20 p-6 rounded-3xl bg-orange-600/5">
                    {formatTime(timeToStart)}
                </div>
                <div className="max-w-md text-orange-950 text-[10px] font-mono mb-8 space-y-2 uppercase leading-relaxed">
                    <p>Current Satellite Link: Mos Espa Grand Stand Uplink</p>
                    <p>Atmospheric Interference: Minimal</p>
                    <p>Betting Pool Status: locked for processing</p>
                </div>
                <CommandButton label="Return to Arena" onClick={onClose} className="border-white/20 text-white px-12" />
            </motion.div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col font-sans"
        >
            <BackgroundAudioPlayer src={AUDIO.PODRACE} volume={0.4} isPlaying={!race.completed} loop={true} />

            <div className="bg-gray-900/90 border-b border-orange-500/20 p-4 md:px-8 md:py-4 flex justify-between items-center z-10 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-red-600 animate-pulse rounded-full shadow-[0_0_15px_red] ring-2 ring-red-600/20" />
                    <div>
                        <h2 className="text-xl md:text-2xl font-title text-orange-500 tracking-[0.2em] leading-none uppercase">Sector Analysis</h2>
                        <p className="text-[10px] text-orange-900 font-mono uppercase tracking-widest mt-1">Telemetry Uplink // Active Feed 094</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                     {race.type === 'rookie' && (
                        <button 
                            onClick={() => {
                                const results = DRIVERS.map(d => ({
                                    id: d.id,
                                    score: (d.speedMod || 1) * (0.95 + Math.random() * 0.1)
                                })).sort((a, b) => b.score - a.score);
                                
                                const trueWinnerId = results[0].id;
                                let payout = 0;
                                if (race.betDriverId === trueWinnerId) {
                                    const winDriver = DRIVERS.find(d => d.id === trueWinnerId);
                                    const winOdds = winDriver?.odds || 1;
                                    payout = Math.floor(race.betAmount * winOdds * (race.type === 'main' ? 2 : 1));
                                }
                                onRaceFinished(trueWinnerId, payout);
                            }}
                            className="bg-orange-600 hover:bg-orange-500 text-black px-4 py-2 rounded-xl border border-orange-500 font-title text-xs tracking-widest transition-all active:scale-95 flex items-center gap-2"
                        >
                            <Zap size={14} />
                            Skip to Results
                        </button>
                     )}
                     <div className="bg-black/50 border border-white/10 px-6 py-2 text-orange-500 font-mono text-xl rounded-lg flex items-center gap-2">
                         <span className="text-xs text-gray-600 uppercase tracking-widest">Lap</span>
                         <span className="text-white text-2xl font-bold">{Math.min((leaderboard[0]?.lap || 0) + 1, LAPS)}</span>
                         <span className="text-gray-800">/</span>
                         <span className="text-gray-600">{LAPS}</span>
                     </div>
                     <button onClick={onClose} className="bg-orange-600/10 hover:bg-orange-600/20 text-orange-500 p-2 rounded-xl border border-orange-500/20 transition-all active:scale-95">
                        <X size={20} />
                     </button>
                </div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row relative overflow-hidden bg-black">
                <div className="flex-1 relative flex items-center justify-center overflow-hidden h-[400px] md:h-full min-h-[300px]">
                    {/* Retro-style grid floor */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
                    
                    <svg viewBox="-10 -10 120 120" className="w-full h-full max-h-[70vh] md:max-h-[85vh] drop-shadow-[0_0_50px_rgba(234,88,12,0.3)]">
                        {/* The Track Path */}
                        <path 
                            ref={pathElRef}
                            d={TRACK_PATH}
                            fill="none" 
                            stroke="rgba(249,115,22,0.3)" 
                            strokeWidth="12"
                            strokeLinecap="round"
                        />
                        <path 
                            d={TRACK_PATH}
                            fill="none" 
                            stroke="rgba(249,115,22,0.8)" 
                            strokeWidth="1" 
                        />
                        <path 
                            d={TRACK_PATH}
                            fill="none" 
                            stroke="white" 
                            strokeWidth="0.5" 
                            strokeDasharray="2 4"
                            opacity="0.5"
                        />

                        {/* Racers */}
                        <AnimatePresence>
                        {positions.map(p => {
                            const coords = getRacerCoords(p.progress);
                            const driver = DRIVERS.find(d => d.id === p.id);
                            if (!driver) return null;
                            const isPlayerPick = race.betDriverId === p.id;
                            return (
                                <motion.g 
                                    key={p.id}
                                    initial={false}
                                    animate={{ x: coords.x, y: coords.y }}
                                    transition={{ duration: 0.5, ease: "linear" }}
                                >
                                    {/* Engine glow/trail effect */}
                                    <circle r="3" fill={driver.color} opacity="0.15" className="blur-[2px]" />
                                    
                                    {isPlayerPick && (
                                        <circle r="5" fill={driver.color} opacity="0.2">
                                            <animate attributeName="r" values="5;9;5" dur="1.5s" repeatCount="indefinite" />
                                            <animate attributeName="opacity" values="0.2;0;0.2" dur="1.5s" repeatCount="indefinite" />
                                        </circle>
                                    )}
                                    
                                    <circle r={isPlayerPick ? 2.5 : 2} fill={driver.color} stroke="white" strokeWidth="0.5" className="shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                    
                                    {isPlayerPick && (
                                        <motion.text 
                                            y="-6" 
                                            textAnchor="middle" 
                                            fill="#f97316" 
                                            className="text-[4px] font-mono font-bold uppercase tracking-widest"
                                            style={{ filter: "drop-shadow(0 0 2px black)" }}
                                        >
                                            PILOT
                                        </motion.text>
                                    )}
                                </motion.g>
                            );
                        })}
                        </AnimatePresence>
                    </svg>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 pointer-events-none select-none">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-orange-950 font-mono tracking-widest mb-1 uppercase">Course Location</span>
                            <span className="text-2xl md:text-6xl font-bold text-white/5 font-display tracking-[0.5em] uppercase italic">Mos Espa Circuit</span>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-96 bg-gray-950 border-t md:border-t-0 md:border-l border-white/5 p-4 md:p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6 z-20">
                    <div>
                        <h3 className="text-orange-900 font-title text-[10px] tracking-[0.4em] uppercase mb-1">Telemetry Stream</h3>
                        <div className="h-0.5 w-full bg-orange-900/20" />
                    </div>

                    <div className="flex flex-col gap-3">
                        <AnimatePresence mode="popLayout">
                        {leaderboard.map((p, idx) => {
                            const driver = DRIVERS.find(d => d.id === p.id);
                            if (!driver) return null;
                            const isPlayerPick = race.betDriverId === p.id;
                            const progressPercent = ((p.totalDist / LAPS) * 100);

                            return (
                                <motion.div 
                                    key={p.id}
                                    layout
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className={cn(
                                        "relative group flex items-center gap-4 p-3 rounded-xl transition-all overflow-hidden border",
                                        idx === 0 ? 'bg-orange-600/10 border-orange-500/30' : 'bg-white/5 border-transparent hover:bg-white/[0.08]'
                                    )}
                                >
                                    <div className={cn("font-mono w-6 text-center text-lg font-bold", idx === 0 ? 'text-orange-500' : 'text-gray-700')}>
                                        {idx + 1}
                                    </div>
                                    
                                    <div className="w-1 h-8 rounded-full" style={{ backgroundColor: driver.color }} />
                                    
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-end mb-1">
                                            <div className={cn("text-xs font-title tracking-wider uppercase truncate", isPlayerPick ? 'text-white' : 'text-gray-400')}>
                                                {driver.name}
                                            </div>
                                            <span className="text-[10px] font-mono text-orange-900 whitespace-nowrap">
                                                {progressPercent.toFixed(1)}%
                                            </span>
                                        </div>
                                        
                                        {/* Dynamic progress bar in list */}
                                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div 
                                                className="h-full"
                                                style={{ backgroundColor: driver.color }}
                                                animate={{ width: `${Math.min(100, progressPercent)}%` }}
                                                transition={{ duration: 2, ease: "linear" }}
                                            />
                                        </div>
                                    </div>

                                    {isPlayerPick && (
                                        <div className="p-1.5 bg-orange-600 rounded-lg shadow-lg shadow-orange-600/30">
                                            <Zap size={14} className="text-black" />
                                        </div>
                                    )}

                                    {idx === 0 && (
                                        <div className="absolute top-0 right-0 p-1">
                                            <div className="bg-orange-500 h-1 w-4 rounded-full animate-pulse" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                        </AnimatePresence>
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/5">
                        <div className="bg-orange-600/5 p-4 rounded-2xl border border-orange-600/10">
                            <div className="text-[8px] text-orange-900 uppercase tracking-widest mb-2 font-bold">Wager Confirmation</div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500 font-mono">EST. PAYOUT:</span>
                                <span className="text-yellow-500 font-title text-lg flex items-center gap-2">
                                    {(DRIVERS.find(d => d.id === race.betDriverId)?.odds || 0) * race.betAmount * (race.type === 'main' ? 2 : 1)}
                                    <span className="text-[10px] text-yellow-900 tracking-tighter">CREDS</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

