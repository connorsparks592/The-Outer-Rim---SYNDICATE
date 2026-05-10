export interface Searchable { 
    id: string; 
    label: string; 
    description: string; 
    item?: string; 
    credits?: number; 
    chance: number;
    reqQuestState?: { id: string, step: number, completed?: boolean };
    questUpdate?: { id: string, step: number };
    questComplete?: boolean;
    startQuest?: string;
    locked?: boolean;
    difficulty?: 'easy' | 'medium' | 'hard';
}

export interface Encounter { 
    id: string; 
    description: string; 
    lootLabel?: string; 
    lootDescription?: string; 
    item?: string; 
    credits?: number; 
    chance: number; 
    onlyNight?: boolean; 
    onlyDay?: boolean; 
}

export interface Location { 
    id: string; 
    name: string; 
    description: string; 
    detailedDescription?: string; 
    firstVisitDescription?: string; 
    imageUrl: string; 
    exits: string[]; 
    reqQuestState?: { id: string, step: number, completed?: boolean };
    reqItem?: string;
    hideIfLocked?: boolean;
    actions?: string[]; 
    npcs?: string[]; 
    searchables?: Searchable[]; 
    encounters?: Encounter[]; 
    nightName?: string; 
    nightDescription?: string; 
    nightDetailedDescription?: string; 
    nightImageUrl?: string; 
    nightExits?: string[]; 
    nightActions?: string[]; 
    nightNpcs?: string[]; 
    nightSearchables?: Searchable[]; 
    ambient?: string[]; 
}

export interface Locations { [key: string]: Location; }

export interface Stats { str: number; per: number; end: number; cha: number; int: number; agi: number; lck: number; }

export interface Item { 
    id: string; 
    name: string; 
    rarity: 'common' | 'uncommon' | 'rare' | 'legendary'; 
    count: number; 
    type?: 'weapon' | 'consumable' | 'misc' | 'furniture' | 'utility'; 
    dmg?: number; 
    heal?: number; 
    service?: 'sabacc' | 'podracing_live' | 'buff_provider';
    buffEffect?: { stat: keyof Stats, value: number, durationHours: number };
    repModifier?: Record<string, number>;
    lastUsedAt?: number;
    description?: string;
}

export interface QuestStep { id: number; description: string; completed: boolean; }

export interface Quest { 
    id: string; 
    title: string; 
    description: string; 
    status: 'locked' | 'active' | 'completed'; 
    currentStepIndex: number; 
    steps: QuestStep[]; 
    reward?: string; 
    type: 'main' | 'side'; 
}

export interface Race { id: string; name: string; description: string; bonuses: Partial<Stats>; }

export interface CharClass { id: string; name: string; description: string; bonuses: Partial<Stats>; startingItem: Item; }

export interface Character { 
    name: string; 
    race: Race; 
    charClass: CharClass; 
    stats: Stats; 
    currentHp: number; 
    maxHp: number; 
    background: string; 
    party: string[]; 
    level: number;
    xp: number;
    xpToNextLevel: number;
    skillPoints: number;
}

export interface Enemy { id: string; name: string; hp: number; maxHp: number; dmg: number; xp: number; credits: number; imageUrl: string; introText: string; }

export interface CombatState { active: boolean; enemy: Enemy | null; log: string[]; turn: 'player' | 'enemy'; }

export interface DialogueOption { 
    label: string; 
    nextId: string | null; 
    reqSkill?: keyof Stats; 
    reqVal?: number; 
    reqItem?: string; 
    reqQuestState?: { id: string, step: number, completed?: boolean }; 
    reqReputation?: { id: string, min: number };
    reqTime?: 'day' | 'night'; 
    action?: (gameState: any) => void; 
}

export interface DialogueNode { id: string; text: string; options: DialogueOption[]; }

export interface NPC { 
    id: string; 
    name: string; 
    imageUrl: string; 
    greetingId: string; 
    nightGreetingId?: string; 
    dialogueTree: Record<string, DialogueNode>; 
    onlyBetween?: [number, number]; // [startHour, endHour]
}

export interface HoloNetArticle { id: string; headline: string; body: string; source: string; date: string; }

// --- PODRACING TYPES ---
export interface Podracer {
    id: string;
    name: string;
    color: string;
    odds: number; // e.g. 2.5 means 2.5x payout
    speedMod: number; // Internal speed variance
}

export interface ActiveRace {
    type: 'rookie' | 'main';
    startTime: number; // Timestamp
    betDriverId: string | null;
    betAmount: number;
    completed: boolean;
}

export interface SlicingTask {
    startTime: number;
    duration: number;
    targetId: string;
}

// --- CONTRACT TYPES ---
export interface Contract {
    id: string;
    title: string;
    type: 'bounty' | 'smuggle' | 'slicing';
    targetName: string;
    targetLocation: string;
    reward: number;
    description: string;
    completed: boolean;
}

export interface SaveData { 
    currentLocationId: string; 
    stats: Character | null; 
    inventory: Item[]; 
    quests: Quest[]; 
    credits: number; 
    isNight: boolean; 
    visitedLocations: string[]; 
    lootedContainers: string[]; 
    unlockedContainers: string[]; 
    history: string[]; 
    lastLoginDate?: string; 
    lastStipendClaimDate?: string; 
    defeatedNpcs?: string[]; 
    activeRace?: ActiveRace | null;
    activeSlicingTask?: SlicingTask | null;
    reputation: Record<string, number>;
    activeContracts: Contract[];
}