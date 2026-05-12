import { Character, SaveData } from '../types';

export const calculateXpToNextLevel = (level: number) => {
    return Math.floor(100 * Math.pow(1.5, level - 1));
};

export const addXp = (gameState: SaveData, amount: number): { state: SaveData, leveledUp: boolean } => {
    if (!gameState.stats) return { state: gameState, leveledUp: false };
    
    let newXp = gameState.stats.xp + amount;
    let newLevel = gameState.stats.level;
    let newSkillPoints = gameState.stats.skillPoints;
    let leveledUp = false;
    let xpToNext = gameState.stats.xpToNextLevel;
    let newMaxHp = gameState.stats.maxHp;
    let newCurrentHp = gameState.stats.currentHp;

    while (newXp >= xpToNext) {
        newXp -= xpToNext;
        newLevel += 1;
        newSkillPoints += 2;
        xpToNext = calculateXpToNextLevel(newLevel);
        leveledUp = true;
        // Small HP boost per level
        newMaxHp += 5;
        newCurrentHp = newMaxHp; // Full heal on level up
    }

    return {
        state: {
            ...gameState,
            stats: {
                ...gameState.stats,
                xp: newXp,
                level: newLevel,
                xpToNextLevel: xpToNext,
                skillPoints: newSkillPoints,
                maxHp: newMaxHp,
                currentHp: newCurrentHp
            },
            history: [
                ...gameState.history,
                `Gained ${amount} XP.`,
                ...(leveledUp ? [`LEVEL UP! You are now level ${newLevel}. Gained 2 Skill Points.`] : [])
            ]
        },
        leveledUp
    };
};

export const updateReputation = (gameState: SaveData, faction: string, amount: number): SaveData => {
    const currentRep = gameState.reputation?.[faction] || 0;
    const newRep = currentRep + amount;
    
    // Define faction opposition
    const opposition: Record<string, string> = {
        'rebels': 'empire',
        'empire': 'rebels',
    };

    let updatedReputation = {
        ...gameState.reputation,
        [faction]: newRep
    };

    let logMessage = `Reputation with ${faction.toUpperCase()} ${amount >= 0 ? 'increased' : 'decreased'} by ${Math.abs(amount)}.`;

    // Apply opposing penalty
    const opponent = opposition[faction];
    if (opponent && amount !== 0) {
        const penalty = Math.floor(amount * (amount > 0 ? -0.5 : 0.5));
        const opponentCurrentRep = updatedReputation[opponent] || 0;
        updatedReputation[opponent] = opponentCurrentRep + penalty;
        logMessage += ` (Rep with ${opponent.toUpperCase()} changed by ${penalty})`;
    }
    
    return {
        ...gameState,
        reputation: updatedReputation,
        history: [
            ...gameState.history,
            logMessage
        ]
    };
};
