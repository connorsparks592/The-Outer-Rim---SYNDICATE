import { SkillNode, Perk } from './types';

export const SKILL_TREE: SkillNode[] = [
    // COMBAT BRANCH
    {
        id: 'blaster_training',
        name: 'Blaster Training',
        description: '+2 Damage with blasters.',
        cost: 1,
        category: 'Combat',
        icon: 'Target'
    },
    {
        id: 'deadeye',
        name: 'Deadeye',
        description: 'Blaster attacks have a 25% chance to crit (double damage).',
        cost: 2,
        prerequisiteSkillId: 'blaster_training',
        statRequirement: { stat: 'per', value: 6 },
        category: 'Combat',
        icon: 'Crosshair'
    },
    {
        id: 'toughness',
        name: 'Toughness',
        description: 'Permanent +10 Max HP.',
        cost: 1,
        category: 'Combat',
        icon: 'Plus'
    },
    
    // SLICING BRANCH
    {
        id: 'logic_buffer',
        name: 'Logic Buffer',
        description: 'Slicing minigames are 20% easier (wider target zones).',
        cost: 1,
        category: 'Slicing',
        icon: 'Cpu'
    },
    {
        id: 'ghost_in_shell',
        name: 'Ghost in the Shell',
        description: 'Automated slicing tasks complete 30% faster.',
        cost: 2,
        prerequisiteSkillId: 'logic_buffer',
        statRequirement: { stat: 'int', value: 6 },
        category: 'Slicing',
        icon: 'ShieldCheck'
    },

    // DIPLOMACY BRANCH
    {
        id: 'smooth_talker',
        name: 'Smooth Talker',
        description: '10% discount in all shops.',
        cost: 1,
        category: 'Diplomacy',
        icon: 'MessageSquare'
    },
    {
        id: 'silver_tongue',
        name: 'Silver Tongue',
        description: 'Reputation gains are increased by 25%.',
        cost: 2,
        prerequisiteSkillId: 'smooth_talker',
        statRequirement: { stat: 'cha', value: 7 },
        category: 'Diplomacy',
        icon: 'Sparkles'
    },

    // SURVIVAL BRANCH
    {
        id: 'scavenger',
        name: 'Scavenger',
        description: 'Finding items while searching locations is 20% more likely.',
        cost: 1,
        category: 'Survival',
        icon: 'Search'
    },
    {
        id: 'trader_instinct',
        name: 'Trader Instinct',
        description: 'Sell items for 20% more credits.',
        cost: 2,
        prerequisiteSkillId: 'scavenger',
        statRequirement: { stat: 'lck', value: 6 },
        category: 'Survival',
        icon: 'Coins'
    }
];

export const PERKS: Perk[] = [
    {
        id: 'seasoned_traveler',
        name: 'Seasoned Traveler',
        description: 'Chance encounters while traveling are 50% less likely to be hostile.',
        reqLevel: 5,
        icon: 'Compass'
    },
    {
        id: 'bounty_hunter_legend',
        name: 'Bounty Hunter Legend',
        description: 'Contract rewards are increased by 50%.',
        reqLevel: 10,
        icon: 'Skull'
    },
    {
        id: 'luck_of_the_draw',
        name: 'Luck of the Draw',
        description: 'Sabacc hands are naturally better.',
        reqLevel: 3,
        icon: 'Dices'
    }
];
