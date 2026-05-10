import {
  Item,
  HoloNetArticle,
  Quest,
  Race,
  CharClass,
  Locations,
  NPC,
  Character,
  Podracer,
} from "./types";

// --- CONFIGURATION ---
export const IMAGES = {
  CANTINA: "https://i.postimg.cc/Fs6f2mFf/1765600631165.png",
  CANTINA_NIGHT:
    "https://i.postimg.cc/ryxM8k98/Gemini-Generated-Image-6p6bm96p6bm96p6b.png",
  STREET: "https://i.postimg.cc/Kj2svqqY/1765129927740.png",
  STREET_NIGHT: "https://i.postimg.cc/BbgTxz2C/1765600548950.png",
  START_SCREEN: "https://i.postimg.cc/3RFLkJ5c/1765128317691.png",
  SPACEPORT:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  CREATION:
    "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop", // Blue starfield
  ALLEY:
    "https://images.unsplash.com/photo-1555677284-6a6f971639e0?q=80&w=2000&auto=format&fit=crop",
  ALLEY_NIGHT:
    "https://images.unsplash.com/photo-1625660851897-40c2138b30a5?q=80&w=2000&auto=format&fit=crop",
  GUILD:
    "https://images.unsplash.com/photo-1535579716631-7484b3913077?q=80&w=2000&auto=format&fit=crop",
  SANDCRAWLER:
    "https://images.unsplash.com/photo-1541452294977-1643c16e7a25?q=80&w=2000&auto=format&fit=crop",
  BAZAAR:
    "https://i.postimg.cc/xj5sXxVz/Gemini-Generated-Image-cz5pf7cz5pf7cz5p.png",
  BLACK_MARKET:
    "https://i.postimg.cc/85WQPRL8/Gemini-Generated-Image-ahmarxahmarxahma.png",
  GARAGE:
    "https://i.postimg.cc/TY4vDYvh/Gemini-Generated-Image-9oitan9oitan9oit.png",
  MERCHANT_ROW:
    "https://i.postimg.cc/bJthz7BT/Gemini-Generated-Image-ascs6mascs6mascs.png",
  MERCHANT_ROW_NIGHT:
    "https://i.postimg.cc/fTvs9fpt/Gemini-Generated-Image-thtet8thtet8thte.png",
  TOURISM:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop",
  SCRAP_SHOP:
    "https://images.unsplash.com/photo-1532634994269-82936780c14b?q=80&w=2000&auto=format&fit=crop",
  GENERAL_SHOP:
    "https://images.unsplash.com/photo-1601599963565-b7b8b4088a8d?q=80&w=2000&auto=format&fit=crop",
  SAFEHOUSE:
    "https://i.postimg.cc/287R0FWx/Gemini-Generated-Image-8iligj8iligj8ili.png",
  IMPERIAL_OUTPOST:
    "https://i.postimg.cc/jjcMbv8k/Gemini-Generated-Image-sf42iesf42iesf42.png",
  IMPERIAL_OUTPOST_NIGHT:
    "https://i.postimg.cc/kgX0tV0X/Gemini-Generated-Image-4cywbq4cywbq4cyw.png",
  MED_CENTER:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
  DROID_SHOP:
    "https://images.unsplash.com/photo-1592301933930-b960538053a4?q=80&w=2000&auto=format&fit=crop",
  INTERIOR_SHOP:
    "https://i.postimg.cc/k47tXhSy/Gemini-Generated-Image-p5x76pp5x76pp5x7.png",
  FIGHT_PIT:
    "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2000&auto=format&fit=crop",
  FIGHT_PIT_NIGHT:
    "https://images.unsplash.com/photo-1563297135-23c2138b30a5?q=80&w=2000&auto=format&fit=crop",
  CASINO: "https://i.postimg.cc/rws6qfQX/1765169820545.png",
  IMPERIAL_RECORDS_OFFICE:
    "https://i.postimg.cc/Ssr5skDB/Gemini-Generated-Image-1jcz3y1jcz3y1jcz.png",
  IMPERIAL_RECORDS_OFFICE_NIGHT:
    "https://i.postimg.cc/T3sTdqpk/Gemini-Generated-Image-4xl1h64xl1h64xl1.png",

  // NEW LOCATIONS
  MOS_EISLEY_GATE:
    "https://images.unsplash.com/photo-1547234935-80c7142ee969?q=80&w=2000&auto=format&fit=crop",
  JUNDLAND_WASTES:
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2000&auto=format&fit=crop",
  LARS_HOMESTEAD:
    "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=2000&auto=format&fit=crop",
  KRAYT_VALLEY:
    "https://images.unsplash.com/photo-1500531279542-e3a3d5e0321f?q=80&w=2000&auto=format&fit=crop",
  JABBAS_PALACE:
    "https://images.unsplash.com/photo-1599933597447-06834125e172?q=80&w=2000&auto=format&fit=crop",
  MOS_ESPA_GATE:
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop",
  MOS_ESPA:
    "https://images.unsplash.com/photo-1549646875-1a87b640e764?q=80&w=2000&auto=format&fit=crop",
  GRAND_ARENA:
    "https://images.unsplash.com/photo-1516131206008-560d0116ac2d?q=80&w=2000&auto=format&fit=crop",
  ANCHORHEAD:
    "https://images.unsplash.com/photo-1547153760-18fc00438360?q=80&w=1000&auto=format&fit=crop",
  TOSCHE_STATION:
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",

  NPC_WUHER: "https://i.postimg.cc/PxQJKkfc/1765147827668.png",
  NPC_GUARD:
    "https://images.unsplash.com/photo-1626282874430-c11ae32d2898?q=80&w=1000&auto=format&fit=crop",
  NPC_JAWA:
    "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=1000&auto=format&fit=crop",
  NPC_GUILD:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  NPC_GREEDO:
    "https://i.postimg.cc/QtpxC9Tv/Gemini-Generated-Image-uao46puao46puao4.png",
  NPC_TEEMO:
    "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1000&auto=format&fit=crop",
  NPC_KAELEN:
    "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1000&auto=format&fit=crop",
  NPC_DROID_DOC:
    "https://images.unsplash.com/photo-1589254065878-42c9da9e2cb6?q=80&w=1000&auto=format&fit=crop",
  NPC_STORMTROOPER:
    "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1000&auto=format&fit=crop",
  NPC_OFFICER:
    "https://images.unsplash.com/photo-1596727147705-01a298de8ead?q=80&w=1000&auto=format&fit=crop",
  NPC_RUSTY:
    "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1000&auto=format&fit=crop",
  NPC_ZEEK:
    "https://images.unsplash.com/photo-1534346580983-34e88f773463?q=80&w=1000&auto=format&fit=crop",
  NPC_HK:
    "https://images.unsplash.com/photo-1616790934091-6284a142820d?q=80&w=1000&auto=format&fit=crop",
  NPC_XYLAR:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
  NPC_CLERK:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
  NPC_HERMIT:
    "https://i.postimg.cc/qvh8K6zV/Gemini-Generated-Image-7u3a9x7u3a9x7u3a.png",
  NPC_WATTO: "https://i.postimg.cc/85zK09q0/Gemini-Generated-Image-watty.png",
  NPC_KALDUN:
    "https://i.postimg.cc/6p1vW5D5/Gemini-Generated-Image-7r4z897r4z897r4z.png",

  ENEMY_TUSKEN:
    "https://images.unsplash.com/photo-1605218427360-36390f85841c?q=80&w=1000&auto=format&fit=crop",
  ENEMY_THUG:
    "https://images.unsplash.com/photo-1531278520962-f73d9733ad78?q=80&w=1000&auto=format&fit=crop",
};

export const AUDIO = {
  MENU_THEME:
    "https://archive.org/download/ANHSpecialEditionOST/Star%20Wars%20-%20A%20New%20Hope%20-%20The%20Original%20Motion%20Picture%20Soundtrack%20%5BSpecial%20Edition%5D/04%20The%20Dune%20Sea%20Of%20Tatooine-Jawa%20Sandcrawler.mp3",
  CANTINA_THEME_1:
    "https://archive.org/download/ANHSpecialEditionOST/Star%20Wars%20-%20A%20New%20Hope%20-%20The%20Original%20Motion%20Picture%20Soundtrack%20%5BSpecial%20Edition%5D/11%20Cantina%20Band.mp3",
  MAIN_TITLE:
    "https://archive.org/download/ANHSpecialEditionOST/Star%20Wars%20-%20A%20New%20Hope%20-%20The%20Original%20Motion%20Picture%20Soundtrack%20%5BSpecial%20Edition%5D/02%20Main%20Title-Rebel%20Blockade%20Runner.mp3",
  AMBIENT_THEME:
    "https://archive.org/download/ANHSpecialEditionOST/Star%20Wars%20-%20A%20New%20Hope%20-%20The%20Original%20Motion%20Picture%20Soundtrack%20%5BSpecial%20Edition%5D/08%20Binary%20Sunset-Cantina%20Band.mp3",
  PODRACE:
    "https://archive.org/download/TPMOST/Star%20Wars%20-%20The%20Phantom%20Menace%20-%20The%20Original%20Motion%20Picture%20Soundtrack/17%20The%20Flag%20Parade.mp3",
};

export const DRIVERS: Podracer[] = [
  {
    id: "tandin",
    name: "Tandin Moore",
    color: "#ff4400",
    odds: 1.5,
    speedMod: 1.05,
  },
  { id: "vexen", name: "Vexen", color: "#4488ff", odds: 3.0, speedMod: 1.02 },
  {
    id: "mawhonic",
    name: "Mawhonic",
    color: "#00cc44",
    odds: 5.0,
    speedMod: 0.98,
  },
  {
    id: "gasgano",
    name: "Gasgano",
    color: "#ffffff",
    odds: 4.5,
    speedMod: 0.99,
  },
  {
    id: "beed",
    name: "Aldar Beed",
    color: "#aaaaaa",
    odds: 6.0,
    speedMod: 0.97,
  },
  {
    id: "quadinaros",
    name: "B. Quadinaros",
    color: "#ffff00",
    odds: 10.0,
    speedMod: 0.95,
  },
  {
    id: "clegg",
    name: "Clegg Holdfast",
    color: "#8800ff",
    odds: 8.0,
    speedMod: 0.96,
  },
  { id: "neva", name: "Neva Kee", color: "#ff0088", odds: 7.0, speedMod: 0.97 },
  { id: "dud", name: "Dud Bolt", color: "#00ffff", odds: 9.0, speedMod: 0.95 },
  { id: "mars", name: "Mars Guo", color: "#004400", odds: 8.5, speedMod: 0.96 },
];

export const ITEM_DATABASE: Item[] = [
  {
    id: "1",
    name: "Blaster Pistol",
    rarity: "rare",
    count: 1,
    type: "weapon",
    dmg: 8,
  },
  {
    id: "bh1",
    name: "Wrist Rocket",
    rarity: "uncommon",
    count: 3,
    type: "weapon",
    dmg: 12,
  },
  {
    id: "m1",
    name: "Fusion Cutter",
    rarity: "uncommon",
    count: 1,
    type: "weapon",
    dmg: 6,
  },
  {
    id: "mc1",
    name: "Vibroblade",
    rarity: "uncommon",
    count: 1,
    type: "weapon",
    dmg: 7,
  },
  {
    id: "stimpack",
    name: "Stimpack",
    rarity: "common",
    count: 1,
    type: "consumable",
    heal: 20,
  },
  { id: "2", name: "Power Cell", rarity: "common", count: 1, type: "misc" },
  {
    id: "blue_milk",
    name: "Blue Milk",
    rarity: "common",
    count: 1,
    type: "consumable",
    heal: 5,
  },
  {
    id: "slicer_spike",
    name: "Slicer Spike",
    rarity: "rare",
    count: 1,
    type: "misc",
  },
  {
    id: "fusion_cutter",
    name: "Fusion Cutter",
    rarity: "uncommon",
    count: 1,
    type: "weapon",
    dmg: 6,
  },
  {
    id: "sabacc_table",
    name: "Personal Sabacc Table",
    rarity: "rare",
    count: 1,
    type: "furniture",
    service: "sabacc",
    description:
      "A portable Corellian mahogany table. Allows you to host games in your safehouse.",
  },
  {
    id: "dejarik_board",
    name: "Dejarik Holochess",
    rarity: "legendary",
    count: 1,
    type: "furniture",
    service: "buff_provider",
    buffEffect: { stat: "int", value: 2, durationHours: 12 },
    description:
      "A state-of-the-art holographic chess set. Sharpen your mind once every 12 hours.",
  },
  {
    id: "kloo_horn",
    name: "Kloo Horn",
    rarity: "rare",
    count: 1,
    type: "furniture",
    service: "buff_provider",
    buffEffect: { stat: "cha", value: 2, durationHours: 12 },
    description:
      "A double-reed wind instrument. Playing it boosts your charisma.",
  },
  {
    id: "holonet_sub",
    name: "HoloNet Premium Sub",
    rarity: "uncommon",
    count: 1,
    type: "utility",
    service: "podracing_live",
    description:
      "Restricted satellite access. Live podrace feeds from your safehouse terminal.",
  },
  {
    id: "imp_commend",
    name: "Imperial Commendation",
    rarity: "rare",
    count: 1,
    type: "misc",
    repModifier: { empire: 15, rebellion: -5 },
    description: "A formal recognition of service to the Empire.",
  },
  {
    id: "reb_cipher",
    name: "Rebel Cipher",
    rarity: "rare",
    count: 1,
    type: "misc",
    repModifier: { rebellion: 15, empire: -5 },
    description: "A piece of coded intelligence useful to the Alliance.",
  },
  {
    id: "hutt_token",
    name: "Hutt Favor",
    rarity: "rare",
    count: 1,
    type: "misc",
    repModifier: { hutt: 20 },
    description: "A coin given by a Hutt as a token of future favor.",
  },
  {
    id: "guild_chip",
    name: "Guild Voucher",
    rarity: "rare",
    count: 1,
    type: "misc",
    repModifier: { guild: 20 },
    description: "A signed voucher from a local Guild master.",
  },
  {
    id: "podrace_pass",
    name: "Podrace Season Pass",
    rarity: "legendary",
    count: 1,
    type: "misc",
    description:
      "Lifetime access to the Mos Espa Grand Arena and zero betting fees. Essential for serious Outer Rim gamblers.",
  },
  {
    id: "comm_scrambler",
    name: "Imperial Scrambler",
    rarity: "rare",
    count: 1,
    type: "utility",
    description:
      "A handheld device for bypassing low-level Imperial frequencies.",
  },
];

export const HOLONET_ARTICLES: HoloNetArticle[] = [
  {
    id: "a1",
    headline: "Imperial Garrison Strengthened",
    body: "More troopers have arrived in Mos Eisley to quell recent unrest.",
    source: "Imperial HoloNet",
    date: "35:4",
  },
  {
    id: "a2",
    headline: "Podrace Accident",
    body: "Tandin Moore claims another victory after a fiery crash took out three competitors.",
    source: "Mos Espa Daily",
    date: "35:3",
  },
  {
    id: "a3",
    headline: "Water Tax Increase",
    body: "Jabba the Hutt announces a 15% increase in water taxes for all moisture farmers.",
    source: "Tatooine Traders",
    date: "35:2",
  },
];

export const initialQuests: Quest[] = [
  {
    id: "q1",
    title: "The Blue Milk Run",
    description:
      "Wuher is an old business partner from your days as traveling merchants. Fetch him a crate of Blue Milk from the Bazaar, and he will help you get established on Tatooine.",
    status: "active",
    currentStepIndex: 0,
    type: "side",
    steps: [
      { id: 1, description: "Talk to Wuher in the Cantina.", completed: false },
      {
        id: 2,
        description:
          "Find the hidden crate in the Bazaar (Use [Look Around] to search the stalls).",
        completed: false,
      },
      { id: 3, description: "Return the milk to Wuher.", completed: false },
    ],
  },
  {
    id: "q2",
    title: "A New Base of Operations",
    description:
      "Teemo the Snitch controls the Old Quarter. Greedo wants you to liberate Kaelen, a slicer, from the Swoop Garage to act as your hacker.",
    status: "locked",
    currentStepIndex: 0,
    type: "main",
    steps: [
      {
        id: 1,
        description: "Talk to Greedo in the Cantina.",
        completed: false,
      },
      {
        id: 2,
        description: "Find the hidden Safehouse under the Swoop Garage.",
        completed: false,
      },
      { id: 3, description: "Free Kaelen from the gang.", completed: false },
      {
        id: 4,
        description: "Return to Greedo to claim the Safehouse as your base.",
        completed: false,
      },
    ],
  },
  {
    id: "q3",
    title: "The Wizard of the Wastes",
    description:
      "Greedo says an old hermit in the Jundland Wastes might be able to crack the Clone Wars encryption on your datapad.",
    status: "locked",
    currentStepIndex: 0,
    type: "main",
    steps: [
      {
        id: 1,
        description: "Travel through the Jundland Wastes.",
        completed: false,
      },
      {
        id: 2,
        description: "Find the hermit near the Lars Homestead.",
        completed: false,
      },
      {
        id: 3,
        description: "Show the datapad to the hermit.",
        completed: false,
      },
    ],
  },
  {
    id: "q4",
    title: "The Hutt's Fortune",
    description:
      "The data Ben unlocked points to a hidden stash in Jabba's Palace. It's time to claim your reward.",
    status: "locked",
    currentStepIndex: 0,
    type: "main",
    steps: [
      { id: 1, description: "Enter Jabba's Palace.", completed: false },
      {
        id: 2,
        description: "Find the hidden storehouse door.",
        completed: false,
      },
      { id: 3, description: "Loot the stash.", completed: false },
    ],
  },
  {
    id: "q5",
    title: "The Boonta Eve Rig",
    description:
      "To leave Tatooine, you need a ship. Watto has one, but he wants a favor first: ensure Tandin Moore doesn't win the Boonta Eve Classic.",
    status: "locked",
    currentStepIndex: 0,
    type: "main",
    steps: [
      { id: 1, description: "Talk to Watto in Mos Espa.", completed: false },
      {
        id: 2,
        description: "Slice the Arena Mainframe in the Grand Arena.",
        completed: false,
      },
      {
        id: 3,
        description: "Return to Watto for your ship.",
        completed: false,
      },
    ],
  },
  {
    id: "q6",
    title: "Establishing the Syndicate",
    description:
      "Docking Bay 94 was a trap, but it proved one thing: the Empire can't be ignored. Instead of fleeing, it's time to secure your influence. Eliminate the local Garrison's oversight at Anchorhead and claim your place as a power player in the Outer Rim.",
    status: "locked",
    currentStepIndex: 0,
    type: "main",
    steps: [
      {
        id: 1,
        description: "Survive the Imperial ambush at Docking Bay 94.",
        completed: false,
      },
      {
        id: 2,
        description: "Establish a new base of operations in Anchorhead.",
        completed: false,
      },
      {
        id: 3,
        description: "Compromise the Garrison Comms at Tosche Station.",
        completed: false,
      },
      {
        id: 4,
        description:
          "Secure indefinite residency status via the Records Office.",
        completed: false,
      },
    ],
  },
  {
    id: "q_endless",
    title: "Outer Rim Legend",
    description:
      "The main threats are handled, but life in the desert never stops. Build your reputation, upgrade your gear, and take on contracts from the Bounty Guild or Merchant Row to become the most feared—or respected—name on Tatooine.",
    status: "locked",
    currentStepIndex: 0,
    type: "main",
    steps: [
      {
        id: 1,
        description: "Live the life. Take on contracts at the Bounty Guild.",
        completed: false,
      },
      {
        id: 2,
        description: "Explore the wastes for hidden secrets.",
        completed: false,
      },
    ],
  },
];

export const RACES: Race[] = [
  {
    id: "human",
    name: "Human",
    description:
      "Versatile and ambitious. Humans dominate the Core Worlds but are found everywhere.",
    bonuses: { lck: 1, cha: 1 },
  },
  {
    id: "twilek",
    name: "Twi'lek",
    description:
      "Charismatic and agile. Known for their head-tails (lekku) and sharp wits.",
    bonuses: { cha: 2 },
  },
  {
    id: "rodian",
    name: "Rodian",
    description: "Alert hunters with keen eyes and infrared vision.",
    bonuses: { per: 2 },
  },
  {
    id: "wookiee",
    name: "Wookiee",
    description:
      "Immense strength and endurance. Loyal but dangerous when provoked.",
    bonuses: { str: 2, end: 1, cha: -1 },
  },
  {
    id: "droid",
    name: "Droid",
    description:
      "Calculated and intelligent. Mechanical lifeforms programmed for specific tasks.",
    bonuses: { int: 2, end: 2, cha: -2 },
  },
];

export const CLASSES: CharClass[] = [
  {
    id: "scoundrel",
    name: "Scoundrel",
    description:
      "Luck favors the bold. You live by your wits and your blaster.",
    bonuses: { lck: 2, agi: 1 },
    startingItem: {
      id: "1",
      name: "Blaster Pistol",
      rarity: "rare",
      count: 1,
      type: "weapon",
      dmg: 8,
    },
  },
  {
    id: "bounty_hunter",
    name: "Bounty Hunter",
    description: "Relentless pursuer. No target escapes your sight.",
    bonuses: { per: 2, str: 1 },
    startingItem: {
      id: "bh1",
      name: "Wrist Rocket",
      rarity: "uncommon",
      count: 3,
      type: "weapon",
      dmg: 12,
    },
  },
  {
    id: "mechanic",
    name: "Mechanic",
    description: "If it's broken, you fix it. Technology speaks to you.",
    bonuses: { int: 2, end: 1 },
    startingItem: {
      id: "m1",
      name: "Fusion Cutter",
      rarity: "uncommon",
      count: 1,
      type: "weapon",
      dmg: 6,
    },
  },
  {
    id: "merc",
    name: "Mercenary",
    description: "Soldier of fortune. Trained in combat and heavy weaponry.",
    bonuses: { str: 2, end: 1 },
    startingItem: {
      id: "mc1",
      name: "Vibroblade",
      rarity: "uncommon",
      count: 1,
      type: "weapon",
      dmg: 7,
    },
  },
];

export const ENEMIES: Record<string, Enemy> = {
  tusken: {
    id: "tusken",
    name: "Tusken Raider",
    hp: 30,
    maxHp: 30,
    dmg: 6,
    xp: 20,
    credits: 15,
    imageUrl: IMAGES.ENEMY_TUSKEN,
    introText: "A Tusken Raider screams and raises its gaderffii stick!",
  },
  thug: {
    id: "thug",
    name: "Street Thug",
    hp: 25,
    maxHp: 25,
    dmg: 4,
    xp: 15,
    credits: 10,
    imageUrl: IMAGES.ENEMY_THUG,
    introText: "A low-life thug blocks your path, blaster drawn.",
  },
  bounty_hunter: {
    id: "bounty_hunter",
    name: "Bounty Hunter",
    hp: 45,
    maxHp: 45,
    dmg: 8,
    xp: 50,
    credits: 40,
    imageUrl: IMAGES.ENEMY_THUG,
    introText: "A Bounty Hunter tracks you down! 'Jabba sends his regards.'",
  },
  jabba_enforcer: {
    id: "jabba_enforcer",
    name: "Jabba Enforcer",
    hp: 80,
    maxHp: 80,
    dmg: 12,
    xp: 150,
    credits: 200,
    imageUrl: IMAGES.ENEMY_THUG,
    introText:
      "A massive Enforcer blocks the docking bay access. 'Vuff! No one leaves today.'",
  },
  teemo: {
    id: "teemo",
    name: "Teemo the Snitch",
    hp: 40,
    maxHp: 40,
    dmg: 4,
    xp: 100,
    credits: 250,
    imageUrl: IMAGES.NPC_TEEMO,
    introText: "Teemo roars, his heavy blaster wine-ing as it powers up!",
  },
};

export const NPC_DATABASE: Record<string, NPC> = {
  wuher: {
    id: "wuher",
    name: "Wuher",
    imageUrl: IMAGES.NPC_WUHER,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Good to see you again! Looks like we've both settled into this dusty life on Tatooine pretty well, huh? Same old routine—surviving and making credits. If you're looking to branch out and make a real reputation for yourself, I've got a line on some business. Interested?",
        options: [
          {
            label: "Just a drink (5 credits).",
            nextId: "drink",
            action: (g: any) => {
              const hour = new Date().getHours();
              const cost = hour === 17 || hour === 18 ? 2 : 5; // Happy Hour 5-7PM
              if (g.gameState.credits >= cost) {
                g.setGameState((prev: any) => ({
                  ...prev,
                  credits: prev.credits - cost,
                }));
                g.addToLog(
                  `You enjoy a refreshing drink. ${cost === 2 ? "(Happy Hour Discount Applied!)" : ""}`,
                );
              } else {
                g.addToLog("You can't afford a drink.");
              }
            },
          },
          {
            label: "What do you need?",
            reqQuestState: { id: "q1", step: 0 },
            reqTime: "day",
            nextId: "quest_proposal_day",
          },
          {
            label: "What do you need?",
            reqQuestState: { id: "q1", step: 0 },
            reqTime: "night",
            nextId: "quest_proposal_night",
          },
          {
            label: "I have the milk you wanted.",
            reqQuestState: { id: "q1", step: 2 },
            nextId: "quest_end",
            action: (g: any) => {
              g.updateQuest("q1", 3);
              g.completeQuest("q1");
              g.setQuests((prev: Quest[]) =>
                prev.map((q) =>
                  q.id === "q2"
                    ? { ...q, status: "active", currentStepIndex: 1 }
                    : q,
                ),
              );
              g.setCredits((c: number) => c + 100);
              g.addToLog("Wuher takes the milk and tosses you a credit bag.");
              g.setInventory((inv: Item[]) => {
                const idx = inv.findIndex((i) => i.id === "blue_milk");
                if (idx > -1) {
                  const newInv = [...inv];
                  if (newInv[idx].count > 1) newInv[idx].count--;
                  else newInv.splice(idx, 1);
                  return newInv;
                }
                return inv;
              });
            },
          },
          { label: "Nothing.", nextId: null },
        ],
      },
      drink: {
        id: "drink",
        text: "Here you go. Best drink in the Outer Rim. Good to have you back.",
        options: [{ label: "Thanks.", nextId: null }],
      },
      quest_proposal_day: {
        id: "quest_proposal_day",
        text: "I need a crate of Blue Milk from the Bazaar. The Jawa vendor has it. He should be open right now. Bring it here, and I'll see what I can do to open some doors for you. We're partners again, remember?",
        options: [
          {
            label: "I'll be back.",
            nextId: null,
            action: (g: any) => g.updateQuest("q1", 1),
          },
        ],
      },
      quest_proposal_night: {
        id: "quest_proposal_night",
        text: "I need a crate of Blue Milk from the Bazaar. The Jawa vendor has it. He'll be closed for the night, but he usually hides it behind his stall. Bring it here, and I'll see what I can do to open some doors for you. We're partners again, remember?",
        options: [
          {
            label: "I'll be back.",
            nextId: null,
            action: (g: any) => g.updateQuest("q1", 1),
          },
        ],
      },
      quest_end: {
        id: "quest_end",
        text: "You haven't lost your touch. Here's your pay. Now, about that reputation... talk to the Rodian in the back booth. Name's Greedo. We were old partners, but he's looking for new blood in the Old Quarter.",
        options: [{ label: "I'll talk to him.", nextId: null }],
      },
    },
  },
  greedo: {
    id: "greedo",
    name: "Greedo",
    imageUrl: IMAGES.NPC_GREEDO,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Oota goota, Solo? Wait... you're not him. Wuher says you want to be a player. Ambitious. Teemo the Snitch has a stranglehold on the Old Quarter, and it's stagnating. If you want power, you need assets.",
        options: [
          {
            label: "Greedo, how do I expand?",
            nextId: "mission_brief",
            reqQuestState: { id: "q2", step: 1 },
          },
          {
            label: "We dealt with Teemo. His assets are ours.",
            reqQuestState: { id: "q2", step: 4 },
            nextId: "debrief",
          },
          { label: "Just passing through.", nextId: null },
        ],
      },
      mission_brief: {
        id: "mission_brief",
        text: "Teemo is hoarding infrastructure in the Old Quarter. His associate Kaelen has the technical skills needed to exploit it, but she's being held prisoner at the Swoop Garage. Get her out, and she can help you *build* your enterprise.",
        options: [
          {
            label: "I'll liberate the asset.",
            nextId: null,
            action: (g: any) => g.updateQuest("q2", 2),
          },
        ],
      },
      debrief: {
        id: "debrief",
        text: "You surprised me. Teemo was tough. Kaelen is already settling in to our new safehouse, and she says that salvaged Imperial tech is perfect for our tech infrastructure. Interesting... I've heard rumors of an old hermit living out in the Jundland Wastes. A wizard of some kind who arrived right after the war. He might know about advanced power sources.",
        options: [
          { label: "I'll find him. What about my share?", nextId: "reward" },
        ],
      },
      reward: {
        id: "reward",
        text: "Teemo won't be needing his bunker anymore. The Safehouse under the garage is yours. It's fully stocked. Consider us partners.",
        options: [
          {
            label: "Pleasure doing business.",
            nextId: null,
            action: (g: any) => {
              g.completeQuest("q2");
              g.setQuests((prev: any[]) =>
                prev.map((q) =>
                  q.id === "q3"
                    ? { ...q, status: "active", currentStepIndex: 1 }
                    : q,
                ),
              );
              g.addToLog(
                "Quest Completed: The Spy in the Garage. Reward: Safehouse Access.",
              );
              g.addToLog("New Quest: The Wizard of the Wastes.");
            },
          },
        ],
      },
    },
  },
  imperial_officer: {
    id: "imperial_officer",
    name: "Imperial Officer",
    imageUrl: IMAGES.NPC_OFFICER,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Citizen. Move along unless you want to be detained.",
        options: [{ label: "Moving along.", nextId: null }],
      },
    },
  },
  imperial_clerk: {
    id: "imperial_clerk",
    name: "Records Clerk",
    imageUrl: IMAGES.NPC_CLERK,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Form 27B-6 is required for all inquiries.",
        options: [{ label: "I'll come back.", nextId: null }],
      },
    },
  },
  clerk: {
    id: "clerk",
    name: "Market Clerk",
    imageUrl: IMAGES.NPC_CLERK,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Welcome to the market. We trade many items.",
        options: [{ label: "Just looking.", nextId: null }],
      },
    },
  },
  droid_doc: {
    id: "droid_doc",
    name: "2-1B Medical Droid",
    imageUrl: IMAGES.NPC_DROID_DOC,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Greetings. I am 2-1B, your primary medical assistant. My sensors indicate several physiological anomalies requiring immediate attention. Shall I initiate a full bacta-wash and cellular regeneration cycle?",
        options: [
          {
            label: "Initiate cellular regeneration. (50 Credits)",
            nextId: null,
            action: (g: any) => {
              if (g.credits >= 50) {
                g.setCredits((c: number) => c - 50);
                g.setStats((s: any) => ({ ...s, currentHp: s.maxHp }));
                g.addToLog(
                  "Droid: Cellular regeneration complete. You feel revitalized.",
                );
              } else {
                g.addToLog(
                  "Droid: Insufficient credits for this procedure. Perhaps a basic bandage?",
                );
              }
            },
          },
          { label: "I'll manage on my own.", nextId: null },
        ],
      },
    },
  },
  jawa_vendor: {
    id: "jawa_vendor",
    name: "Jawa",
    imageUrl: IMAGES.NPC_JAWA,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Utinni! (He gestures to a pile of junk)",
        options: [
          {
            label: "Wuher sent me for the Blue Milk.",
            reqQuestState: { id: "q1", step: 1 },
            nextId: "milk",
            action: (g: any) => {
              g.updateQuest("q1", 2);
              g.setInventory((i: Item[]) => [
                ...i,
                ITEM_DATABASE.find((x) => x.id === "blue_milk")!,
              ]);
              g.addToLog("Received Blue Milk Crate.");
            },
          },
          {
            label: "Buy Power Cell (20 credits)",
            nextId: null,
            action: (g: any) => {
              if (g.credits >= 20) {
                g.setCredits((c: number) => c - 20);
                g.setInventory((i: Item[]) => [
                  ...i,
                  ITEM_DATABASE.find((x) => x.id === "2")!,
                ]);
                g.addToLog("Bought Power Cell.");
              } else {
                g.addToLog("Not enough credits.");
              }
            },
          },
          { label: "No thanks.", nextId: null },
        ],
      },
      milk: {
        id: "milk",
        text: "Utinni! (The Jawa hands over a heavy crate, looking annoyed).",
        options: [{ label: "Thanks.", nextId: null }],
      },
    },
  },
  xylar: {
    id: "xylar",
    name: "Xy'lar",
    imageUrl: IMAGES.NPC_XYLAR,
    greetingId: "intro",
    onlyBetween: [0, 3],
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Psst. Looking for something... dangerous?",
        options: [{ label: "What do you have?", nextId: "shop" }],
      },
      shop: {
        id: "shop",
        text: "High-grade tech and exclusive memberships. Not for the faint of heart... or the broke.",
        options: [
          {
            label: "Podrace Season Pass (2000 Credits)",
            nextId: null,
            action: (g: any) => {
              if (g.credits >= 2000) {
                g.setCredits((c: number) => c - 2000);
                g.setInventory((i: any[]) => [
                  ...i,
                  {
                    ...ITEM_DATABASE.find((x) => x.id === "podrace_pass")!,
                    count: 1,
                  },
                ]);
                g.addToLog(
                  "Purchased: Podrace Season Pass. Betting fees eliminated.",
                );
              } else {
                g.addToLog("Xy'lar: Credits first, traveler.");
              }
            },
          },
          {
            label: "Personal Sabacc Table (500 Credits)",
            nextId: null,
            action: (g: any) => {
              if (g.credits >= 500) {
                g.setCredits((c: number) => c - 500);
                g.setInventory((i: any[]) => [
                  ...i,
                  {
                    ...ITEM_DATABASE.find((x) => x.id === "sabacc_table")!,
                    count: 1,
                  },
                ]);
                g.addToLog("Purchased: Sabacc Table for Safehouse.");
              } else {
                g.addToLog("Xy'lar: Come back when you're flush.");
              }
            },
          },
          {
            label: "HoloNet Premium Sub (300 Credits)",
            nextId: null,
            action: (g: any) => {
              if (g.credits >= 300) {
                g.setCredits((c: number) => c - 300);
                g.setInventory((i: any[]) => [
                  ...i,
                  {
                    ...ITEM_DATABASE.find((x) => x.id === "holonet_sub")!,
                    count: 1,
                  },
                ]);
                g.addToLog("Purchased: HoloNet Subscription.");
              } else {
                g.addToLog("Xy'lar: No credits, no show.");
              }
            },
          },
          { label: "I'll pass.", nextId: null },
        ],
      },
    },
  },
  zeek: {
    id: "zeek",
    name: "Zeek",
    imageUrl: IMAGES.NPC_ZEEK,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Wanna buy some death sticks?",
        options: [
          {
            label: "You don't want to sell me death sticks.",
            nextId: "mind_trick",
            reqSkill: "cha",
            reqVal: 6,
          },
          { label: "No.", nextId: null },
        ],
      },
      mind_trick: {
        id: "mind_trick",
        text: "I... I don't want to sell you death sticks.",
        options: [
          {
            label: "You want to go home and rethink your life.",
            nextId: "rethink",
          },
        ],
      },
      rethink: {
        id: "rethink",
        text: "I want to go home and rethink my life.",
        options: [{ label: "Move along.", nextId: null }],
      },
    },
  },
  guild_master_targa: {
    id: "guild_master_targa",
    name: "Guild Master Targa",
    imageUrl: IMAGES.NPC_GUILD,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "The Guild is for professionals only.",
        options: [
          { label: "I want to join.", nextId: "join" },
          { label: "Just looking.", nextId: null },
        ],
      },
      join: {
        id: "join",
        text: "Prove yourself first.",
        options: [{ label: "I will.", nextId: null }],
      },
    },
  },
  rusty: {
    id: "rusty",
    name: "Rusty",
    imageUrl: IMAGES.NPC_RUSTY,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Spare a credit? I was a pilot once...",
        options: [
          {
            label: "Here (5 credits).",
            nextId: null,
            action: (g: any) => {
              if (g.credits >= 5) {
                g.setCredits((c: number) => c - 5);
                g.addToLog("You gave Rusty 5 credits.");
              } else {
                g.addToLog("Not enough credits.");
              }
            },
          },
          { label: "Sorry.", nextId: null },
        ],
      },
    },
  },

  kaelen: {
    id: "kaelen",
    name: "Kaelen Vorr",
    imageUrl: IMAGES.NPC_KAELEN,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "(Kaelen is tied to a chair. She looks beaten but defiant.) You... you're not one of Teemo's Dune Rippers. Who are you?",
        options: [
          {
            label: "Greedo sent me. I'm getting you out.",
            nextId: "rescue",
            reqQuestState: { id: "q2", step: 3 },
          },
          {
            label: "(She is guarded by Teemo. You must deal with him first.)",
            nextId: null,
            reqQuestState: { id: "q2", step: 2 },
          },
          {
            label: "We should go. Greedo is waiting.",
            nextId: null,
            reqQuestState: { id: "q2", step: 4 },
          }, // Fallback exit if already joined
        ],
      },
      rescue: {
        id: "rescue",
        text: "(You cut her bonds. She stands up, rubbing her wrists.) Greedo... that slimy Rodian actually came through. (She looks at you intensely.) Thanks. I owe you one.",
        options: [
          {
            label: "Who are you exactly? Greedo didn't say much.",
            nextId: "identity",
          },
        ],
      },
      identity: {
        id: "identity",
        text: "I'm Kaelen. I used to be with the ISB... Imperial Security Bureau. I was tracking Teemo for the Guild before I found out he was selling rebel secrets to the Empire. I tried to intercept, but... well, you saw. I'm a double agent now. The Empire wants me dead.",
        options: [
          {
            label: "Greedo said you could slice this datapad.",
            nextId: "check_pad",
          },
        ],
      },
      check_pad: {
        id: "check_pad",
        text: "(She takes the device). Standard issue casing... wait. This port configuration. (She connects a small tool from her belt). I can't crack this. It's not standard Imperial encryption. It's... older. Heavy duty military grade from the Clone Wars.",
        options: [{ label: "Can we bypass it?", nextId: "proposal" }],
      },
      proposal: {
        id: "proposal",
        text: "Not here. And definitely not with standard slicer gear. Look, I'm already in trouble. Teemo's death will bring the Empire down on this sector. I need to disappear, and you're building a syndicate that could use someone with my technical skills. Let me join you.",
        options: [
          {
            label: "Welcome aboard.",
            nextId: "joined",
            action: (g: any) => {
              g.setStats((s: Character) => ({
                ...s,
                party: [...s.party, "Kaelen Vorr"],
              }));
              g.addToLog("Kaelen Vorr has joined your party.");
              g.updateQuest("q2", 4);
            },
          },
        ],
      },
      joined: {
        id: "joined",
        text: "Right. Let's get back to Greedo. He might know a fence or a specialist for this old tech. Lead the way.",
        options: [{ label: "Let's go.", nextId: null }],
      },
      setup: {
        id: "setup",
        text: "Look, about our partnership. We need to define how this works. I have the skills, you have the ambition. But I need to know you're committed.",
        options: [
          {
            label: "I'm committed to this partnership.",
            nextId: "talked",
            action: (g: any) => {
              g.updateReputation("kaelenTalkedTo", 1);
              g.addToLog("Kaelen: 'Good. Let's get to work.'");
            },
          },
        ],
      },
      talked: {
        id: "talked",
        text: "Good. We're partners now. Let's make something happen.",
        options: [{ label: "Let's get to work.", nextId: null }],
      },
    },
  },

  teemo: {
    id: "teemo",
    name: "Teemo the Snitch",
    imageUrl: IMAGES.NPC_TEEMO,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "(Huttese) Cha skrunee patogh! You dare walk into the Dune Rippers' den? You'll pay for this!",
        options: [
          {
            label: "Greedo sends his regards.",
            nextId: "fight",
            reqQuestState: { id: "q2", step: 2 },
          },
          { label: "Just looking around.", nextId: null },
        ],
      },
      fight: {
        id: "fight",
        text: "(Teemo roars and grabs his heavy blaster!)",
        options: [
          {
            label: "[ATTACK] Blast him!",
            nextId: null,
            action: (g: any) => {
              g.startCombat("teemo");
            },
          },
        ],
      },
    },
  },
  hk_droid: {
    id: "hk_droid",
    name: "HK-77",
    imageUrl: IMAGES.NPC_HK,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Statement: This unit is fully operational.",
        options: [{ label: "Good droid.", nextId: null }],
      },
    },
  },
  watto: {
    id: "watto",
    name: "Watto",
    imageUrl: IMAGES.NPC_WATTO,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Mind tricks don't work on me, only money! What do you want? I'm busy preparing for the Boonta Eve Classic.",
        options: [
          {
            label: "I heard you have a ship for sale.",
            nextId: "ship_query",
            reqQuestState: { id: "q5", step: 1 },
          },
          {
            label: "The race mainframe is rigged, Watto.",
            nextId: "reward",
            reqQuestState: { id: "q5", step: 3 },
          },
          { label: "Just looking for parts.", nextId: null },
        ],
      },
      ship_query: {
        id: "ship_query",
        text: "A ship? Maybe. But Tandin Moore... he's been winning too much. Bad for business. You help me 'rebalance' the odds at the Arena, and maybe we can talk about a discount. A big one.",
        options: [{ label: "What do I need to do?", nextId: "the_plan" }],
      },
      the_plan: {
        id: "the_plan",
        text: "Go to the Grand Arena. Find the Mainframe. Slice into it and calibrate Tandin's pod to... let's say, 'overestimate' its heat tolerance. Do that, and the ship is yours.",
        options: [
          {
            label: "Consider it done.",
            nextId: null,
            action: (g: any) => {
              g.updateQuest("q5", 2);
              g.addToLog(
                "Quest Updated: Go to the Grand Arena and slice the Mainframe.",
              );
            },
          },
        ],
      },
      reward: {
        id: "reward",
        text: "Chut chut! Tandin's pod went up in a glorious fireball! A deal is a deal. The freighter in Docking Bay 94 is yours. Here are the clearance codes.",
        options: [
          {
            label: "At last. Time to leave this dustball.",
            nextId: null,
            action: (g: any) => {
              g.completeQuest("q5");
              g.updateQuest("q6", 1);
              g.setQuests((prev: any) =>
                prev.map((q: any) =>
                  q.id === "q6" ? { ...q, status: "active" } : q,
                ),
              );
              g.addToLog(
                "Quest Completed: The Boonta Eve Rig. Reward: Freighter Access Codes.",
              );
              g.addToLog("NEW QUEST: Escape from Tatooine.");
              g.addToLog(
                "Game Narrative: You've secured your passage off Tatooine. Now reach Docking Bay 94.",
              );
            },
          },
        ],
      },
    },
  },
  kaldun: {
    id: "kaldun",
    name: "Kaldun",
    imageUrl: IMAGES.NPC_KALDUN,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Mmm-ohr-ee-ahn... welcome to the Spire. A home is not a home without the right amenities. How can I facilitate your domestic tranquility today?",
        options: [
          { label: "Show me furniture.", nextId: "shop" },
          { label: "Just admiring your collection.", nextId: null },
        ],
      },
      shop: {
        id: "shop",
        text: "I have several high-end pieces available. Which interests you?",
        options: [
          {
            label: "Personal Sabacc Table (1500 Credits)",
            nextId: null,
            action: (g: any) => {
              if (g.credits >= 1500) {
                g.setCredits((c: number) => c - 1500);
                g.setInventory((i: Item[]) => [
                  ...i,
                  ITEM_DATABASE.find((x) => x.id === "sabacc_table")!,
                ]);
                g.addToLog("Purchased Sabacc Table.");
              } else {
                g.addToLog("Insufficient funds.");
              }
            },
          },
          {
            label: "Dejarik Holochess Set (2500 Credits)",
            nextId: null,
            action: (g: any) => {
              if (g.credits >= 2500) {
                g.setCredits((c: number) => c - 2500);
                g.setInventory((i: Item[]) => [
                  ...i,
                  ITEM_DATABASE.find((x) => x.id === "dejarik_board")!,
                ]);
                g.addToLog("Purchased Holochess Set.");
              } else {
                g.addToLog("Insufficient funds.");
              }
            },
          },
          {
            label: "Kloo Horn (800 Credits)",
            nextId: null,
            action: (g: any) => {
              if (g.credits >= 800) {
                g.setCredits((c: number) => c - 800);
                g.setInventory((i: Item[]) => [
                  ...i,
                  ITEM_DATABASE.find((x) => x.id === "kloo_horn")!,
                ]);
                g.addToLog("Purchased Kloo Horn.");
              } else {
                g.addToLog("Insufficient funds.");
              }
            },
          },
          {
            label: "HoloNet Subscription (500 Credits)",
            nextId: null,
            action: (g: any) => {
              if (g.credits >= 500) {
                g.setCredits((c: number) => c - 500);
                g.setInventory((i: Item[]) => [
                  ...i,
                  ITEM_DATABASE.find((x) => x.id === "holonet_sub")!,
                ]);
                g.addToLog("Purchased HoloNet Subscription.");
              } else {
                g.addToLog("Insufficient funds.");
              }
            },
          },
          { label: "Back.", nextId: "intro" },
        ],
      },
    },
  },
  stormtrooper: {
    id: "stormtrooper",
    name: "Stormtrooper",
    imageUrl: IMAGES.NPC_STORMTROOPER,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Let me see your identification.",
        options: [
          {
            label: "You don't need to see his identification.",
            nextId: "mind_trick",
            reqSkill: "cha",
            reqVal: 7,
          },
          { label: "Here it is.", nextId: "check" },
        ],
      },
      check: {
        id: "check",
        text: "Move along.",
        options: [{ label: "Leaving.", nextId: null }],
      },
      mind_trick: {
        id: "mind_trick",
        text: "We don't need to see his identification.",
        options: [
          {
            label: "These aren't the droids you're looking for.",
            nextId: "droids",
          },
        ],
      },
      droids: {
        id: "droids",
        text: "These aren't the droids we're looking for.",
        options: [{ label: "Move along.", nextId: "move" }],
      },
      move: {
        id: "move",
        text: "Move along... move along.",
        options: [{ label: "Go.", nextId: null }],
      },
    },
  },
  hermit: {
    id: "hermit",
    name: "Old Ben",
    imageUrl: IMAGES.NPC_HERMIT,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Hello there. Not many travelers come this far into the Jundland Wastes. Especially not ones carrying Imperial hardware from the Clone Wars era.",
        options: [
          {
            label: "How did you know about the datapad?",
            nextId: "force_reveal",
            reqQuestState: { id: "q3", step: 1 },
          },
          {
            label: "The scouts are dealt with, Ben.",
            nextId: "post_combat",
            reqQuestState: { id: "q3", step: 3 },
          },
          { label: "Just looking for a way out of the sun.", nextId: null },
        ],
      },
      force_reveal: {
        id: "force_reveal",
        text: "The Force works in mysterious ways. That device contains coordinates to an old Republic treasury on Coruscant... and a list of Jedi sympathizers. It was meant to be destroyed years ago.",
        options: [{ label: "Can you unlock it?", nextId: "final_step" }],
      },
      final_step: {
        id: "final_step",
        text: "I can, but it will take time. And the Empire is already tracking its signature. You'll need to defend this hut while I work.",
        options: [
          {
            label: "I'm ready.",
            nextId: null,
            action: (g: any) => {
              g.updateQuest("q3", 2);
              g.addToLog("Prepare for defense. Imperial scouts incoming...");
              g.startCombat("thug"); // Simplification: encounter troopers/scouts
            },
          },
        ],
      },
      post_combat: {
        id: "post_combat",
        text: "The Empire's reach is long, but they are clumsy. The datapad is unlocked. It contains coordinates to a hidden stash in Jabba's old storehouse... behind the palace. Take it. You've earned it.",
        options: [
          {
            label: "Thank you, Ben.",
            nextId: null,
            action: (g: any) => {
              g.completeQuest("q3");
              g.setQuests((prev: any[]) =>
                prev.map((q) =>
                  q.id === "q4"
                    ? { ...q, status: "active", currentStepIndex: 1 }
                    : q,
                ),
              );
              g.addToLog(
                "Quest Completed: The Wizard of the Wastes. Reward: Jabba's Palace Access unlocked.",
              );
              g.addToLog("New Quest: The Hutt's Fortune.");
            },
          },
        ],
      },
    },
  },
  jabba_enforcer: {
    id: "jabba_enforcer",
    name: "Jabba Enforcer",
    imageUrl: IMAGES.ENEMY_THUG,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "You aren't going anywhere. Jabba wants that datapad. And your head.",
        options: [
          {
            label: "Try and take it.",
            nextId: null,
            action: (g: any) => {
              g.updateQuest("q6", 1);
              g.addToLog("The Enforcer draws a heavy blaster cannon!");
              g.startCombat("jabba_enforcer");
            },
          },
          {
            label: "Maybe we can reach an agreement? (1000 Credits)",
            nextId: "bribe",
            reqCredits: 1000,
          },
          { label: "Back away.", nextId: null },
        ],
      },
      bribe: {
        id: "bribe",
        text: "Hmph. Credits speak louder than Hutt loyalties. Fine. Get on your ship and get out before I change my mind.",
        options: [
          {
            label: "Smart choice.",
            nextId: null,
            action: (g: any) => {
              g.setCredits((c: number) => c - 1000);
              g.updateQuest("q6", 1);
              g.addToLog(
                "You paid off the Enforcer. The way to the ship... seems clear.",
              );
            },
          },
        ],
      },
    },
  },
  fixer: {
    id: "fixer",
    name: "Fixer",
    imageUrl: IMAGES.NPC_RUSTY,
    greetingId: "intro",
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Anchorhead's a quiet town. Keep it that way. You look like you've seen trouble.",
        options: [{ label: "I need to lie low.", nextId: "lie_low" }],
      },
      lie_low: {
        id: "lie_low",
        text: "Lying low costs money, or favors. The local Garrison commander is breathing down our necks. You help me with a small 'technical' problem at Tosche Station, and I'll find you a place to sleep.",
        options: [{ label: "I can help with tech.", nextId: "tech_problem" }],
      },
      tech_problem: {
        id: "tech_problem",
        text: "The power converters... no, joking. The communication array is being monitored. I need a bypass pulse from the station's main bus. Head over there and see what you can do.",
        options: [
          {
            label: "On it.",
            nextId: null,
            action: (g: any) => {
              g.updateQuest("q6", 3);
              g.addToLog("Quest Updated: Proceed to Tosche Station.");
            },
          },
        ],
      },
    },
  },
};

export const initialLocations: Locations = {
  mos_eisley_street: {
    id: "mos_eisley_street",
    name: "Main Street",
    description: "The dusty central artery of Mos Eisley.",
    imageUrl: IMAGES.STREET,
    nightImageUrl: IMAGES.STREET_NIGHT,
    exits: [
      "mos_eisley_cantina",
      "tourism_office",
      "imperial_outpost",
      "merchant_row",
      "mos_eisley_old_quarter",
      "spaceport",
      "mos_eisley_gate",
    ],
    actions: ["Look Around"],
    searchables: [
      {
        id: "street_crate",
        label: "Search Supply Crate",
        description: "You pry open the dusty crate.",
        item: "stimpack",
        chance: 1.0,
      },
    ],
    nightSearchables: [
      {
        id: "street_gleam",
        label: "Investigate Gleam",
        description:
          "You sift through the sand and find a dropped credit chip.",
        credits: 20,
        chance: 1.0,
      },
    ],
  },
  mos_eisley_gate: {
    id: "mos_eisley_gate",
    name: "Mos Eisley City Gate",
    description:
      "The massive archway leading out into the Dune Sea. Guards check IDs here.",
    imageUrl: IMAGES.MOS_EISLEY_GATE,
    exits: ["mos_eisley_street", "jundland_wastes"],
    actions: ["Look Around"],
    encounters: [
      {
        id: "gate_guard",
        description: "A guard asks for your papers.",
        chance: 0.2,
      },
    ],
  },
  jundland_wastes: {
    id: "jundland_wastes",
    name: "Jundland Wastes",
    description:
      "A vast, rocky canyon system. Tusken Raiders are known to ambush travelers here.",
    imageUrl: IMAGES.JUNDLAND_WASTES,
    exits: [
      "mos_eisley_gate",
      "lars_homestead",
      "krayt_valley",
      "sandcrawler",
      "anchorhead",
    ],
    actions: ["Look Around"],
    encounters: [
      {
        id: "tusken_ambush",
        description: "A Tusken Raider sniper shot rings out!",
        chance: 0.3,
      },
    ],
  },
  lars_homestead: {
    id: "lars_homestead",
    name: "Lars Homestead",
    description:
      "A moisture farm sunken into the salt flats. Smoke rises from a crater nearby.",
    imageUrl: IMAGES.LARS_HOMESTEAD,
    exits: ["jundland_wastes", "hermit_hut"],
    actions: ["Look Around"],
    searchables: [
      {
        id: "blue_milk_kitchen",
        label: "Check Kitchen",
        description: "You find some blue milk.",
        item: "blue_milk",
        chance: 0.5,
      },
    ],
  },
  hermit_hut: {
    id: "hermit_hut",
    name: "Hermit's Hut",
    description:
      "A small, domed dwelling perched on a cliffside. It feels peaceful here, despite the surrounding wastes.",
    reqQuestState: { id: "q3", step: 1 },
    hideIfLocked: true,
    imageUrl: IMAGES.LARS_HOMESTEAD,
    exits: ["lars_homestead"],
    npcs: ["hermit"],
    actions: ["Look Around"],
  },
  sandcrawler: {
    id: "sandcrawler",
    name: "Jawa Sandcrawler",
    description:
      "A massive fortress on tracks. Jawas swarm around it, selling scrap.",
    imageUrl: IMAGES.SANDCRAWLER,
    exits: ["jundland_wastes"],
    actions: ["Look Around", "Trade Scrap"],
  },
  krayt_valley: {
    id: "krayt_valley",
    name: "Krayt Dragon Valley",
    description: "A narrow canyon filled with the bones of massive beasts.",
    imageUrl: IMAGES.KRAYT_VALLEY,
    exits: ["jundland_wastes", "jabbas_palace", "mos_espa_gate"],
    actions: ["Look Around"],
  },
  mos_espa_gate: {
    id: "mos_espa_gate",
    name: "Mos Espa Gate",
    description:
      "The entrance to the city of Mos Espa, home of the Grand Arena.",
    imageUrl: IMAGES.MOS_ESPA_GATE,
    exits: ["krayt_valley", "mos_espa_city"],
    actions: ["Look Around"],
  },
  jabbas_palace: {
    id: "jabbas_palace",
    name: "Jabba's Palace",
    description:
      "The massive stone structure looms over the valley. Entry is restricted.",
    reqQuestState: { id: "q3", step: 3, completed: true },
    hideIfLocked: true,
    imageUrl: IMAGES.JABBAS_PALACE,
    exits: ["krayt_valley"],
    actions: ["Look Around"],
    searchables: [
      {
        id: "jabba_stash",
        label: "Search Storehouse Stash",
        description:
          "You find the hidden cache Ben spoke of. It's filled with credits and high-grade armor.",
        credits: 1000,
        item: "bh1",
        chance: 1.0,
        reqQuestState: { id: "q4", step: 1 },
        questUpdate: { id: "q4", step: 3 },
        questComplete: true,
        startQuest: "q5",
      },
    ],
  },
  mos_espa_city: {
    id: "mos_espa_city",
    name: "Mos Espa",
    description:
      "A sprawling city, busier and cleaner than Mos Eisley. Flags from the Podraces flutter in the wind.",
    imageUrl: IMAGES.MOS_ESPA,
    exits: ["mos_espa_gate", "grand_arena", "mos_espa_market"],
    npcs: ["watto"],
    actions: ["Look Around"],
  },
  mos_espa_market: {
    id: "mos_espa_market",
    name: "Mos Espa Market",
    description:
      "A chaotic bazaar filled with off-world traders and junk dealers. The smell of roasted bantha meat is strong.",
    imageUrl: IMAGES.MERCHANT_ROW,
    exits: ["mos_espa_city", "decorator_shop"],
    npcs: ["clerk"],
    actions: ["Look Around", "Trade Items"],
  },
  decorator_shop: {
    id: "decorator_shop",
    name: "The Decorator's Spire",
    description:
      "An elegant, well-lit shop specializing in safehouse furnishings and luxury H-Net terminals.",
    imageUrl: IMAGES.INTERIOR_SHOP,
    exits: ["mos_espa_market"],
    npcs: ["kaldun"],
    actions: ["Look Around"],
  },
  grand_arena: {
    id: "grand_arena",
    name: "Mos Espa Grand Arena",
    description:
      "The massive stadium where the Boonta Eve Classic is held. You can hear engines revving.",
    imageUrl: IMAGES.GRAND_ARENA,
    exits: ["mos_espa_city"],
    actions: [
      "Look Around",
      "Access Betting Terminal",
      "Enter Grand Stands",
      "Slice Mainframe",
    ],
    searchables: [
      {
        id: "arena_mainframe",
        label: "Mainframe Interface",
        description: "A glowing interface used to control the race systems.",
        difficulty: "hard",
        locked: true,
        chance: 1.0,
        reqQuestState: { id: "q5", step: 2 },
        questUpdate: { id: "q5", step: 3 },
      },
    ],
  },

  // Existing locations connected...
  imperial_outpost: {
    id: "imperial_outpost",
    name: "Imperial Outpost",
    description:
      "A heavily fortified checkpoint. White-armored Stormtroopers stand watch behind E-Web turrets. An Imperial shuttle sits on a landing pad nearby. A stern-looking clerk guards the entrance to the Records Office.",
    detailedDescription:
      "The outpost is strictly monitored. However, a maintenance hatch near the perimeter wall looks slightly ajar.",
    nightDescription:
      "Searchlights sweep the sand around the outpost. The Stormtroopers are on high alert, their white armor stark against the dark night. The silence is broken only by the static of their comms.",
    imageUrl: IMAGES.IMPERIAL_OUTPOST,
    nightImageUrl: IMAGES.IMPERIAL_OUTPOST_NIGHT,
    exits: ["mos_eisley_street", "imperial_records_office"],
    actions: ["Look Around", "Observe Patrols"],
    npcs: ["imperial_officer", "imperial_clerk"],
    searchables: [
      {
        id: "outpost_hatch",
        label: "Check Maintenance Hatch",
        description:
          "You carefully open the hatch. Inside is a forgotten technician's kit.",
        item: "fusion_cutter",
        chance: 0.5,
      },
    ],
    ambient: [
      "Static bursts from a stormtrooper's comm link.",
      "An officer shouts orders at a squad.",
      "The hum of the shield generator is constant.",
      "A probe droid floats by, scanning.",
    ],
    encounters: [
      {
        id: "imp_drill",
        description:
          "You watch a squad running drills. They look disciplined and dangerous.",
        chance: 0.4,
      },
      {
        id: "imp_trash",
        description:
          "Near the incinerator chute, you spot a discarded crate that hasn't been burned yet.",
        lootLabel: "Rummage",
        lootDescription: "A half-used stimpack.",
        item: "stimpack",
        chance: 0.2,
      },
      {
        id: "imp_comms",
        description:
          "You overhear a scrambled transmission about 'Rebel activity in Sector 4'. Probably nothing.",
        chance: 0.4,
      },
    ],
  },
  imperial_records_office: {
    id: "imperial_records_office",
    name: "Imperial Records Office",
    description:
      "Rows of data terminals hum quietly. This office manages all official traffic and records for the sector. A high-value target for a slicer.",
    nightDescription:
      "The office is dark, save for the blinking standby lights on the terminals. It's eerily quiet without the clerks.",
    imageUrl: IMAGES.IMPERIAL_RECORDS_OFFICE,
    nightImageUrl: IMAGES.IMPERIAL_RECORDS_OFFICE_NIGHT,
    exits: ["imperial_outpost"],
    actions: ["Look Around", "Slice Mainframe", "Secure Residency Status"],
  },
  mos_eisley_cantina: {
    id: "mos_eisley_cantina",
    name: "Mos Eisley Cantina",
    description:
      "The Cantina is dimly lit and crowded. Smoke hangs in the air, mixing with the sound of an upbeat Bith band playing the same song on loop. Patrons from a thousand worlds drink, argue, and make shady deals in the shadows.",
    detailedDescription:
      "Peering through the haze, you see the usual wretched scum. Under an empty table near the back, someone has kicked a small pouch.",
    nightDescription:
      "The Cantina is rowdy tonight. Drunks spill out the front door, and the music is louder. The air is thick with smoke and danger.",
    firstVisitDescription:
      "You are sitting in a dark booth in the corner, hood up. The Imperial Datapad burns a hole in your pocket. The bar is crowded, and the bartender, Wuher, is cleaning glasses with a rag. He spots you, eyeing the pocket where you hid the data.",
    imageUrl: IMAGES.CANTINA,
    nightImageUrl: IMAGES.CANTINA_NIGHT,
    exits: ["mos_eisley_street"],
    actions: ["Look Around", "Play Sabacc"],
    npcs: ["wuher", "greedo"],
    searchables: [
      {
        id: "cantina_pouch",
        label: "Check Under Table",
        description: "You slide your foot over and snag the pouch.",
        credits: 50,
        chance: 1.0,
      },
    ],
    ambient: [
      "The band starts playing 'Mad About Me'. Again.",
      "A Rodian argues loudly with a Human.",
      "Someone spills a drink nearby.",
      "Laughter erupts from a dark corner.",
      "The air smells of sweat and exotic spices.",
    ],
    encounters: [
      {
        id: "cantina_brawl",
        description:
          "Two Weequay thugs start shoving each other. A drink goes flying.",
        chance: 0.3,
      },
      {
        id: "cantina_dropped",
        description:
          "A drunk patron stumbles past you, dropping a credit chip without noticing.",
        lootLabel: "Swipe it",
        lootDescription: "Easy money.",
        credits: 10,
        chance: 0.2,
        onlyNight: true,
      },
      {
        id: "cantina_leftover",
        description:
          "A table nearby clears out. They left a partially full flask.",
        lootLabel: "Take Drink",
        lootDescription: "It burns going down. You feel revitalized.",
        item: "stimpack",
        chance: 0.1,
      },
      {
        id: "cantina_smoke",
        description:
          "The smoke is thick today. You can barely see the door. Nothing of interest here.",
        chance: 0.4,
      },
    ],
  },
  tourism_office: {
    id: "tourism_office",
    name: "Tourism Office",
    description:
      "A mostly abandoned office with faded posters of scenic Tatooine vistas. A lonely, silver protocol droid standing dusty in the corner. Shafts of sunlight cutting through dust motes in the air. Melancholic, bureaucratic atmosphere.",
    nightDescription:
      "The office is pitch black. The protocol droid is powered down, its eyes dark. Moonlight filters through the grimy windows, illuminating dust motes dancing in the cold air.",
    imageUrl: IMAGES.TOURISM,
    exits: ["mos_eisley_street"],
    npcs: [],
    actions: ["Look Around"],
    searchables: [
      {
        id: "tourism_pamphlet",
        label: "Check Counter",
        description:
          "Behind the counter, you find an old tourist map with some credits tucked inside.",
        credits: 10,
        chance: 1.0,
      },
    ],
    ambient: [
      "Dust motes dance in the light.",
      "The silence is heavy here.",
      "A poster peels slightly from the wall.",
    ],
    encounters: [
      {
        id: "tour_poster",
        description: "A poster for 'Scenic Alderaan' peels off the wall. Sad.",
        chance: 0.5,
      },
      {
        id: "tour_drawer",
        description: "One of the file cabinets is slightly open.",
        lootLabel: "Check File",
        lootDescription:
          "Just bureaucratic forms, but a credit chip was used as a bookmark.",
        credits: 5,
        chance: 0.3,
      },
      {
        id: "tour_rat",
        description:
          "A womp rat has made a nest in the waiting chairs. It hisses at you.",
        chance: 0.2,
      },
    ],
  },
  spaceport: {
    id: "spaceport",
    name: "Docking Bay 94",
    description:
      "Your ship, 'The Rusty Mynock', sits in the pit. It needs parts.",
    detailedDescription:
      "The docking bay is cluttered with hoses and fuel lines. A pile of scrap metal sits near the landing strut.",
    nightDescription:
      "Floodlights bathe the docking bay in harsh white light. Mechanics work late on a freighter nearby, sparks cascading down into the pit. Your ship sits silent in the shadows.",
    imageUrl: IMAGES.SPACEPORT,
    exits: ["mos_eisley_street"],
    actions: ["Look Around"],
    npcs: ["stormtrooper", "jabba_enforcer"],
    searchables: [
      {
        id: "bay_scrap",
        label: "Search Scrap Pile",
        description: "Digging through the rust, you find a usable power cell.",
        item: "2",
        chance: 0.8,
      },
      {
        id: "board_ship",
        label: "Board The Rusty Mynock",
        description:
          'As you power up the engines, sirens wail! Systems lock down. "Imperial Security! Kill the engines and come out with your hands up!"',
        chance: 1.0,
        reqQuestState: { id: "q6", step: 1 },
        action: (g: any) => {
          g.addToLog(
            "SYSTEM ERROR: Launch clearance REVOKED. Imperial Garrison has flagged this vessel.",
          );
          g.addToLog(
            "Game Narrative: You narrowly escape the hangar as blast doors start to close. You are now a fugitive on Tatooine.",
          );
          g.updateQuest("q6", 2);
        },
      },
    ],
    ambient: [
      "A ship blasts off in the distance, shaking the ground.",
      "The smell of ozone and fuel is strong.",
      "Coolant hisses from a nearby pipe.",
      "A droid beeps a warning.",
    ],
    encounters: [
      {
        id: "space_ship",
        description:
          "A massive freighter blasts off from a nearby bay, shaking the ground.",
        chance: 0.3,
      },
      {
        id: "space_tools",
        description: "A mechanic left a toolbox near the fuel pumps.",
        lootLabel: "Check Tools",
        lootDescription: "Most are broken, but you find a fusion cutter.",
        item: "m1",
        chance: 0.2,
      },
      {
        id: "space_nothing",
        description: "Just the smell of ozone and burnt fuel.",
        chance: 0.5,
      },
    ],
  },
  anchorhead: {
    id: "anchorhead",
    name: "Anchorhead",
    description:
      "A small, dusty township on the edge of the Jundland Wastes. Less dangerous than Mos Eisley, but just as forgotten.",
    imageUrl: IMAGES.ANCHORHEAD,
    exits: ["jundland_wastes", "tosche_station"],
    npcs: ["fixer"],
    actions: ["Look Around"],
  },
  tosche_station: {
    id: "tosche_station",
    name: "Tosche Station",
    description:
      "A power station and repair shop on the outskirts of Anchorhead. Young moisture farmers often loiter here.",
    imageUrl: IMAGES.TOSCHE_STATION,
    exits: ["anchorhead"],
    actions: ["Look Around", "Buy Power Converters"],
    searchables: [
      {
        id: "comm_array",
        label: "Access Comm Array",
        description:
          "You perform the bypass. The Imperial monitoring sigil flickers and fades.",
        chance: 1.0,
        difficulty: "medium",
        locked: true,
        reqQuestState: { id: "q6", step: 3 },
        questUpdate: { id: "q6", step: 3 }, // Completing step 3 logic... need to handle completion
      },
    ],
  },
  merchant_row: {
    id: "merchant_row",
    name: "Merchant Row",
    description:
      "A loud, crowded district lined with stalls and permanent shops. The air smells of spice and ozone.",
    nightDescription:
      "The honest merchants have packed up. The row is lit by flickering neon signs. Access to Calrissian's Casino is now open.",
    imageUrl: IMAGES.MERCHANT_ROW,
    nightImageUrl: IMAGES.MERCHANT_ROW_NIGHT,
    exits: [
      "mos_eisley_street",
      "mos_eisley_bazaar",
      "general_shop",
      "med_center",
      "droid_shop",
      "bounty_guild",
    ],
    nightExits: [
      "mos_eisley_street",
      "mos_eisley_bazaar",
      "general_shop",
      "med_center",
      "droid_shop",
      "bounty_guild",
      "casino",
    ],
    actions: ["Look Around", "Browse Stalls"],
    ambient: [
      "Merchants shout out their wares.",
      "The crowd pushes past you.",
      "You smell roasted nuna legs.",
      "A neon sign flickers overhead.",
    ],
    encounters: [
      {
        id: "merc_pickpocket",
        description:
          "You feel a tug on your belt! You spin around, and a small urchin runs off into the crowd. Close call.",
        chance: 0.2,
      },
      {
        id: "merc_dropped_goods",
        description:
          "A merchant cart hit a bump. A few items rolled under a stall.",
        lootLabel: "Retrieve Item",
        lootDescription: "A small piece of salvage.",
        item: "2",
        chance: 0.3,
      },
      {
        id: "merc_argument",
        description:
          "Two aliens are arguing loudly over the price of a ronto wrap.",
        chance: 0.3,
      },
      {
        id: "merc_neon",
        description:
          "The neon signs buzz and flicker above. Nothing of interest here.",
        chance: 0.2,
        onlyNight: true,
      },
    ],
  },
  med_center: {
    id: "med_center",
    name: "2-1B Medical Clinic",
    description:
      "A sterile, stark white room that smells of bacta. A 2-1B medical droid hums quietly as it organizes surgical instruments.",
    nightDescription:
      "The clinic is dimly lit by blue emergency LEDs. The 2-1B droid stands silently in its charging station, waiting for the inevitable late-night blaster victims.",
    imageUrl: IMAGES.MED_CENTER,
    exits: ["merchant_row"],
    npcs: ["droid_doc"],
    actions: ["Look Around"],
    ambient: [
      "The hum of the bacta tank is soothing.",
      "It smells of antiseptic.",
      "A medical monitor beeps rhythmically.",
    ],
    encounters: [
      {
        id: "med_clean",
        description: "The floor is spotless. Not a speck of dust.",
        chance: 0.6,
      },
      {
        id: "med_cabinet",
        description: "A disposal bin for medical waste is unlocked.",
        lootLabel: "Check Bin",
        lootDescription:
          "You find a sealed stimpack someone threw away by mistake.",
        item: "stimpack",
        chance: 0.2,
      },
      {
        id: "med_droid",
        description: "The droid beeps at you inquiringly.",
        chance: 0.2,
      },
    ],
  },
  droid_shop: {
    id: "droid_shop",
    name: "Circuit City Droid Emporium",
    description:
      "The shop is filled with the chirps and beeps of dozens of droids. Astromechs, protocol droids, and gonk droids are all for sale here.",
    nightDescription:
      "The shop is quiet, the droids powered down for the night. The eyes of a dozen astromechs glow faintly in standby mode, watching the street through the grate.",
    imageUrl: IMAGES.DROID_SHOP,
    exits: ["merchant_row"],
    actions: ["Look Around", "Inspect Droids"],
    ambient: [
      "Droids chirp and whistle.",
      "You hear the grinding of gears.",
      "Oil drips somewhere in the back.",
    ],
    encounters: [
      {
        id: "droid_loose",
        description: "An R5 unit rolls past you, beeping frantically.",
        chance: 0.3,
      },
      {
        id: "droid_part",
        description: "On a workbench, you spot a loose servomotor.",
        lootLabel: "Pocket it",
        lootDescription: "Useful scrap.",
        item: "2",
        chance: 0.3,
      },
      {
        id: "droid_oil",
        description: "You slip on an oil slick. The floor is messy.",
        chance: 0.4,
      },
    ],
  },
  mos_eisley_bazaar: {
    id: "mos_eisley_bazaar",
    name: "The Bazaar",
    description:
      "An open-air market within Merchant Row. Food stalls dominate this area.",
    detailedDescription:
      "The market is bustling. Most vendors are selling local produce. A Jawa stall seems to have the most 'variety'.",
    nightName: "The Shadow Market",
    nightDescription:
      "At night, the food stalls are replaced by black market dealers selling illicit weapons and stolen tech. The air is tense.",
    nightDetailedDescription:
      "The shadows are deep here. Most honest merchants have packed up. You spot a loose tarp behind one of the closed food stalls.",
    imageUrl: IMAGES.BAZAAR,
    nightImageUrl: IMAGES.BLACK_MARKET,
    exits: ["merchant_row"],
    npcs: ["jawa_vendor", "xylar"],
    nightNpcs: ["zeek"],
    actions: ["Look Around"],
    ambient: [
      "Flies buzz around the food stalls.",
      "The heat is intense here.",
      "A Jawa shouts 'Utinni!'.",
    ],
    encounters: [
      {
        id: "baz_smell",
        description:
          "The smell of roasting meat is overwhelming. It makes your stomach grow.",
        chance: 0.3,
        onlyDay: true,
      },
      {
        id: "baz_dropped_food",
        description: "Someone dropped a bag of spices.",
        lootLabel: "Take Spices",
        lootDescription: "Valuable on the black market.",
        credits: 20,
        chance: 0.2,
      },
      {
        id: "baz_shadow",
        description: "A cloaked figure offers you death sticks. You decline.",
        chance: 0.3,
        onlyNight: true,
      },
      {
        id: "baz_nothing",
        description: "Just the hustle and bustle of trade.",
        chance: 0.2,
      },
    ],
    nightSearchables: [
      {
        id: "milk_crate_night",
        label: "Search Behind Stall",
        description:
          "You sneak around the back of the closed food stall. Hidden under a dusty tarp, you find the crate Wuher mentioned.",
        item: "blue_milk",
        chance: 1.0,
        reqQuestState: { id: "q1", step: 1 },
        questUpdate: { id: "q1", step: 2 },
      },
    ],
  },
  casino: {
    id: "casino",
    name: "Calrissian's Casino",
    description:
      "A hidden underground gambling den. Pazaak tables are full, and high-stakes Sabacc games are running in the back.",
    nightDescription:
      "The casino is at peak capacity. The noise of credits chinking and patrons cheering fills the air. The smoke is thick enough to chew on.",
    imageUrl: IMAGES.CASINO,
    exits: ["merchant_row"],
    actions: ["Play Sabacc", "Order Drink"],
    ambient: [
      "Credits clink together.",
      "A slot machine chimes.",
      "The crowd cheers for a winner.",
      "Smoke curls in the air.",
    ],
    encounters: [
      {
        id: "cas_cheer",
        description:
          "A massive cheer erupts from the Pazaak table. Someone just won big.",
        chance: 0.4,
      },
      {
        id: "cas_floor",
        description: "Scanning the floor near the slots...",
        lootLabel: "Check Floor",
        lootDescription: "You find a dropped chip!",
        credits: 10,
        chance: 0.2,
      },
      {
        id: "cas_bouncer",
        description: "A Gamorrean bouncer eyes you suspiciously.",
        chance: 0.4,
      },
    ],
  },
  general_shop: {
    id: "general_shop",
    name: "General Store",
    description:
      "Shelves packed with survival gear, water rations, and power packs.",
    nightDescription:
      "The shop is dimly lit by a single glowpanel. A sleepy night-shift clerk watches you suspiciously from behind a reinforced counter.",
    imageUrl: IMAGES.GENERAL_SHOP,
    exits: ["merchant_row"],
    npcs: [],
    actions: ["Look Around"],
    ambient: [
      "The air recycler hums.",
      "Dust settles on the shelves.",
      "The clerk taps their fingers on the counter.",
    ],
    encounters: [
      {
        id: "gen_dust",
        description: "The shelves are dusty. Business must be slow.",
        chance: 0.5,
      },
      {
        id: "gen_sale",
        description: "A 'Clearance' bin catches your eye.",
        lootLabel: "Dig Deep",
        lootDescription: "You find a usable power pack.",
        item: "2",
        chance: 0.3,
      },
      {
        id: "gen_clerk",
        description:
          "The clerk is asleep. You could steal something... better not risk it.",
        chance: 0.2,
      },
    ],
  },
  bounty_guild: {
    id: "bounty_guild",
    name: "Bounty Hunters' Guild",
    description:
      "A dimly lit hall where hunters gather to pick up contracts. The atmosphere is tense.",
    nightDescription:
      "The Guild hall is busier now than during the day. Hunters prefer the cover of darkness. The holographic bounty board casts a red glow over the drinking patrons.",
    imageUrl: IMAGES.GUILD,
    exits: ["merchant_row"],
    npcs: ["guild_master_targa"],
    actions: [
      "Look Around",
      "Collect Daily Stipend",
      "Range Practice",
      "Access Contract Terminal",
    ],
    ambient: [
      "Hunters whisper in low voices.",
      "A hologram flickers on the bounty board.",
      "Someone sharpens a vibroblade.",
    ],
    encounters: [
      {
        id: "guild_stare",
        description: "A Trandoshan hisses at you as you walk by.",
        chance: 0.3,
      },
      {
        id: "guild_puck",
        description: "Someone left a bounty puck on a table.",
        lootLabel: "Examine Puck",
        lootDescription:
          "The target is dead, but the puck still has deposit value.",
        credits: 25,
        chance: 0.2,
      },
      {
        id: "guild_fight",
        description: "Two hunters are arm wrestling in the corner.",
        chance: 0.5,
      },
    ],
  },
  mos_eisley_old_quarter: {
    id: "mos_eisley_old_quarter",
    name: "Old Quarter Hub",
    description:
      "The oldest part of the city. Crumbling stone buildings and narrow alleys. Shadows stretch long here.",
    detailedDescription:
      "The alleyways here are a maze. Heaps of rubble block some paths. You notice a glimmer in a pile of refuse.",
    nightDescription:
      "The shadows here are absolute. Use your light. Something scuttles in the debris nearby. This is no place for the unwary.",
    nightDetailedDescription:
      "It's hard to see, but the debris field nearby looks disturbed. There might be something hidden in the junk.",
    imageUrl: IMAGES.ALLEY,
    nightImageUrl: IMAGES.ALLEY_NIGHT,
    exits: ["mos_eisley_street", "scrap_shop", "swoop_garage", "fight_pit"],
    actions: ["Look Around"],
    nightActions: ["Look Around", "Hunt for Trouble"],
    npcs: ["rusty"],
    nightNpcs: ["hk_droid"],
    searchables: [
      {
        id: "alley_rubble",
        label: "Search Rubble",
        description: "You dig through the filth.",
        credits: 5,
        chance: 0.5,
      },
    ],
    nightSearchables: [
      {
        id: "alley_junk",
        label: "Sift Junk",
        description: "You find a discarded blaster clip.",
        item: "1",
        chance: 0.2,
      },
    ],
    ambient: [
      "The wind whistles through ruins.",
      "Something scuttles in the dark.",
      "Debris crunches underfoot.",
      "It's unnervingly quiet.",
    ],
    encounters: [
      {
        id: "old_rat",
        description:
          "A massive womp rat scurries across your path. It ignores you.",
        chance: 0.3,
      },
      {
        id: "old_body",
        description:
          "You stumble across... a body? No, just a pile of rags. Wait.",
        lootLabel: "Check Rags",
        lootDescription: "Hidden in the folds is a credstick.",
        credits: 30,
        chance: 0.1,
      },
      {
        id: "old_wind",
        description:
          "The wind howls through the ruined buildings. It sounds like a scream.",
        chance: 0.4,
      },
      {
        id: "old_scrap",
        description: "A pile of debris looks promising.",
        lootLabel: "Scavenge",
        lootDescription: "Rusted metal, worth a few credits.",
        credits: 5,
        chance: 0.2,
      },
    ],
  },
  fight_pit: {
    id: "fight_pit",
    name: "The Blood Pit",
    description:
      "An illegal underground arena. The crowd roars as two Gamorreans pummel each other in the dirt. Credits change hands rapidly.",
    nightName: "Swamp Rat Arena",
    nightDescription:
      "At night, the arena floor is flooded with mud. Giant Womp Rats and Swamp Rats screech as handlers goad them into fighting. The betting is frantic.",
    imageUrl: IMAGES.FIGHT_PIT,
    nightImageUrl: IMAGES.FIGHT_PIT_NIGHT,
    exits: ["mos_eisley_old_quarter"],
    actions: ["Look Around", "Bet on Fighter"],
    nightActions: ["Look Around", "Bet on Rats"],
    ambient: [
      "The crowd roars for blood.",
      "Fighters grunt and clash.",
      "Bets are shouted across the pit.",
    ],
    encounters: [
      {
        id: "pit_blood",
        description: "Fresh blood stains the sand near your feet.",
        chance: 0.5,
      },
      {
        id: "pit_ticket",
        description: "A torn betting slip lies on the ground.",
        lootLabel: "Check Slip",
        lootDescription:
          "It's a winner! Someone must have dropped it in excitement.",
        credits: 50,
        chance: 0.1,
      },
      {
        id: "pit_cheer",
        description: "The crowd goes wild as a fighter goes down.",
        chance: 0.4,
      },
    ],
  },
  scrap_shop: {
    id: "scrap_shop",
    name: "Watto's Scrap",
    description:
      "Piles of rusted droid parts and ship components clutter the yard.",
    detailedDescription:
      "It's a chaotic mess of metal. However, a stack of motivator units looks somewhat stable.",
    nightDescription:
      "The piles of junk loom like jagged mountains against the stars. It is silent, save for the wind whistling through the hollowed-out engine casings.",
    imageUrl: IMAGES.SCRAP_SHOP,
    exits: ["mos_eisley_old_quarter"],
    npcs: [],
    actions: ["Look Around", "Salvage Scraps"],
    searchables: [
      {
        id: "scrap_stack",
        label: "Search Motivators",
        description: "You find a functional circuit board.",
        item: "slicer_spike",
        chance: 0.3,
      },
    ],
    ambient: [
      "Metal creaks in the wind.",
      "Sand blows over rusted parts.",
      "A loose chain clinks against a hull.",
    ],
    encounters: [
      {
        id: "scrap_fall",
        description: "A pile of junk shifts and collapses nearby. Dangerous.",
        chance: 0.4,
      },
      {
        id: "scrap_hidden",
        description: "Inside a hollow engine casing, you spot something.",
        lootLabel: "Reach In",
        lootDescription: "You pull out a fusion cutter.",
        item: "m1",
        chance: 0.2,
      },
      {
        id: "scrap_toydarian",
        description: "You hear wings buzzing. Watto must be nearby.",
        chance: 0.4,
      },
    ],
  },
  swoop_garage: {
    id: "swoop_garage",
    name: "Swoop Bike Garage",
    description:
      "The headquarters of Teemo's swoop gang, the 'Dune Rippers'. Oil stains the floor. A heavy cargo lift sits in the corner.",
    detailedDescription:
      "The garage is cluttered with tools. A workbench in the back seems to have been used recently.",
    nightDescription:
      "The garage is dark, illuminated only by the flicker of a single faulty glowpanel. The unfinished projects look like skeletal beasts in the dark.",
    firstVisitDescription:
      "You sneak into the dimly lit garage. It smells of oil and burnt ozone. Hiding behind a massive swoop bike engine, you peer out to see Teemo interrogating a prisoner tied to a chair in the center of the room. It is Kaelen.",
    imageUrl: IMAGES.GARAGE,
    exits: ["mos_eisley_old_quarter", "safehouse"],
    npcs: ["teemo", "kaelen"],
    actions: ["Look Around"],
    searchables: [
      {
        id: "garage_bench",
        label: "Check Workbench",
        description: "Hidden under a rag is a heavy wrench.",
        item: "m1",
        chance: 1.0,
      },
      {
        id: "garage_chest",
        label: "Locked Security Chest",
        description: "A sturdy plasteel chest with a mag-lock.",
        difficulty: "medium",
        locked: true,
        credits: 100,
        item: "bh1",
        chance: 1.0,
      },
    ],
    ambient: [
      "Oil drips rhythmically.",
      "A tool clatters to the floor.",
      "The smell of burnt engine grease is strong.",
    ],
    encounters: [
      {
        id: "gar_drip",
        description: "Oil drips from the ceiling. Plip. Plip. Plip.",
        chance: 0.5,
      },
      {
        id: "gar_tool",
        description: "A toolbox was kicked under a swoop bike.",
        lootLabel: "Open Box",
        lootDescription: "Just some bolts and a few credits.",
        credits: 8,
        chance: 0.3,
      },
      {
        id: "gar_shadow",
        description: "Was that a movement in the shadows? Probably just a rat.",
        chance: 0.2,
      },
    ],
  },
  safehouse: {
    id: "safehouse",
    name: "The Safehouse",
    description:
      "The bunker is humming with activity. A massive strategy table dominates the room, covered in maps of the Dune Sea and Imperial patrols. Kaelen is busy working at a cluttered workbench.",
    npcs: ["kaelen"],
    reqQuestState: { id: "q2", step: 4, completed: true },
    hideIfLocked: true,
    nightDescription:
      "The safehouse is your sanctuary. The hum of the air recyclers is soothing against the harsh desert night. Through the blast doors, you hear the distant winds of the Wastes.",
    imageUrl: IMAGES.SAFEHOUSE,
    exits: ["swoop_garage", "safehouse_bedroom"],
    actions: ["Look Around", "Check Strategy Table"],
    searchables: [
      {
        id: "safehouse_stash",
        label: "Search Supply Cache",
        description: "You find some old Imperial munitions.",
        item: "bh1",
        chance: 0.3,
      },
    ],
  },
  safehouse_bedroom: {
    id: "safehouse_bedroom",
    name: "Crew Quarters",
    description:
      "Your private quarters. It's cozy, with a warm bunk, a secure locker for your gear, and a terminal that glows with the latest HoloNet news.",
    nightDescription:
      "Peaceful. You can finally rest. The sound of the wind is just a whisper here.",
    imageUrl: IMAGES.SAFEHOUSE,
    exits: ["safehouse"],
    actions: ["Rest (Heal)", "Check Terminal"],
    searchables: [
      {
        id: "bedroom_locker",
        label: "Check Locker",
        description: "Your personal stash of gear.",
        item: "stimpack",
        chance: 0.8,
      },
    ],
  },
};
