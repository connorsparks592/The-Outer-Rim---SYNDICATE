import React, { useEffect, useState } from 'react';
import { SaveData, Item } from '../types';
import { ITEM_DATABASE } from '../data';

interface DailyRewardsProps {
    gameState: SaveData;
    onClaimed: (credits: number, item: Item | null, streak: number) => void;
    onClose: () => void;
}

const REWARDS = [
    { day: 1, credits: 50, item: null },
    { day: 2, credits: 100, item: null },
    { day: 3, credits: 150, item: '2' }, // Power cell
    { day: 4, credits: 200, item: null },
    { day: 5, credits: 250, item: null },
    { day: 6, credits: 300, item: null },
    { day: 7, credits: 500, item: '3' }, // Medpac
];

export const DailyRewards: React.FC<DailyRewardsProps> = ({ gameState, onClaimed, onClose }) => {
    const [claimed, setClaimed] = useState(false);

    // Calculate the streak to display
    const currentStreak = (gameState.dailyStreak % 7) || 0;
    const nextRewardDay = currentStreak + 1; // 1 to 7

    const handleClaim = () => {
        const reward = REWARDS.find(r => r.day === nextRewardDay)!;
        const rewardItem = reward.item ? ITEM_DATABASE.find(i => i.id === reward.item) || null : null;
        
        onClaimed(reward.credits, rewardItem, gameState.dailyStreak + 1);
        setClaimed(true);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-gray-900 border border-cyan-500 rounded p-6 max-w-lg w-full shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                <h2 className="text-2xl text-yellow-400 font-title mb-2 text-center uppercase tracking-widest">Daily Login Reward</h2>
                <p className="text-gray-400 text-center mb-6">Log in every day to claim increasing rewards.</p>
                
                <div className="grid grid-cols-7 gap-2 mb-8">
                    {REWARDS.map((reward, idx) => {
                        const isPast = reward.day < nextRewardDay;
                        const isCurrent = reward.day === nextRewardDay;
                        return (
                            <div key={reward.day} className={`
                                flex flex-col items-center justify-center border p-2 rounded
                                ${isPast ? 'bg-cyan-900/30 border-cyan-800' : ''}
                                ${isCurrent ? 'bg-cyan-700/50 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]' : ''}
                                ${!isPast && !isCurrent ? 'bg-gray-800 border-gray-700' : ''}
                            `}>
                                <div className="text-xs text-gray-500 mb-1">D{reward.day}</div>
                                {isPast ? (
                                    <div className="text-cyan-500 text-xl">✓</div>
                                ) : (
                                    <div className="flex flex-col items-center">
                                        <span className={`text-sm ${isCurrent ? 'text-yellow-400' : 'text-yellow-600'}`}>{reward.credits}c</span>
                                        {reward.item && <span className="text-xl">📦</span>}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-center">
                    {!claimed ? (
                        <button 
                            onClick={handleClaim}
                            className="bg-cyan-600 hover:bg-cyan-500 text-black font-bold py-3 px-8 uppercase tracking-widest rounded shadow-md"
                        >
                            Claim Reward
                        </button>
                    ) : (
                        <button 
                            onClick={onClose}
                            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 uppercase tracking-widest rounded"
                        >
                            Continue
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
