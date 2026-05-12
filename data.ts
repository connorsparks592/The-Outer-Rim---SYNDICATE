import {
  Item,
  HoloNetArticle,
  Quest,
  Race,
  CharClass,
  Backstory,
  Faction,
  Locations,
  NPC,
  Character,
  Podracer,
  Enemy,
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

  NPC_REBEL_LEADER: "https://images.unsplash.com/photo-1544725176-7c40e5f71c5e?q=80&w=1000&auto=format&fit=crop",
  NPC_IMPERIAL_LEADER: "https://images.unsplash.com/photo-1558231732-75ca46401037?q=80&w=1000&auto=format&fit=crop",
  NPC_HUTT_LEADER: "https://images.unsplash.com/photo-1596727147705-61a532da6599?q=80&w=1000&auto=format&fit=crop",
  NPC_TUSKEN_LEADER: "https://images.unsplash.com/photo-1590487988256-9ed22133802e?q=80&w=1000&auto=format&fit=crop",

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
    price: 450,
  },
  {
    id: "bh1",
    name: "Wrist Rocket",
    rarity: "uncommon",
    count: 3,
    type: "weapon",
    dmg: 12,
    price: 350,
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
    price: 200,
  },
  {
    id: "stimpack",
    name: "Stimpack",
    rarity: "common",
    count: 1,
    type: "consumable",
    heal: 20,
    price: 50,
  },
  {
    id: "blaster_rifle",
    name: "Blaster Rifle",
    rarity: "rare",
    count: 1,
    type: "weapon",
    dmg: 12,
    price: 850,
    description: "Standard issue E-11 blaster rifle. Accurate and deadly."
  },
  {
    id: "heavy_blaster",
    name: "DL-44 Heavy Blaster",
    description: "A classic. High power, high reliability. Handles well and packs a punch.",
    price: 1200,
    type: "weapon",
    rarity: "legendary",
    dmg: 22,
  },
  {
    id: "pulse_rifle",
    name: "Cycler Rifle",
    description: "Primitive but effective. Fires physical slugs that penetrate energy shields.",
    price: 450,
    type: "weapon",
    rarity: "rare",
    dmg: 18,
  },
  {
    id: "flight_suit",
    name: "Reinforced Flight Suit",
    description: "Standard pilot gear, modified with light plating for extra protection.",
    price: 350,
    type: "clothing",
    rarity: "uncommon",
    armor: 5,
  },
  {
    id: "bounty_armor",
    name: "Custom Durasteel Plate",
    description: "Mandalorian-grade? Probably not, but it's heavy enough to stop a blaster bolt.",
    price: 1500,
    type: "clothing",
    rarity: "legendary",
    armor: 20,
  },
  {
    id: "r2_unit",
    name: "R2 Astromech Droid",
    description: "A versatile astromech droid. Excellent for slicing, universal translation, and emergency repairs.",
    price: 2500,
    type: "droid",
    rarity: "rare",
    abilities: ["Slicing Support", "Universal Translation", "Repair Support"],
  },
  {
    id: "protocol_droid",
    name: "3PO Protocol Droid",
    description: "Fluent in over six million forms of communication. Essential for diplomacy and etiquette.",
    price: 1800,
    type: "droid",
    rarity: "rare",
    abilities: ["Universal Translation", "Etiquette Analysis"],
  },
  {
    id: "vibro_ax",
    name: "Gamorrean Vibro-Ax",
    rarity: "rare",
    count: 1,
    type: "weapon",
    dmg: 15,
    price: 600,
    description: "A brutal melee weapon used by palace guards. Vibrating edge cuts through armor."
  },
  {
    id: "blast_vest",
    name: "Blast Vest",
    rarity: "uncommon",
    count: 1,
    type: "clothing",
    armor: 3,
    price: 300,
    description: "Basic protection against light blaster fire and shrapnel."
  },
  {
    id: "bounty_hunter_plate",
    name: "Mandalorian Plate",
    rarity: "legendary",
    count: 1,
    type: "clothing",
    armor: 12,
    price: 5000,
    description: "Rare beskar alloy plating. Nearly indestructible and highly coveted."
  },
  {
    id: "smuggler_jacket",
    name: "Smuggler's Flight Jacket",
    rarity: "rare",
    count: 1,
    type: "clothing",
    armor: 5,
    price: 1200,
    description: "Stylish and practical. Features hidden pockets for small contraband."
  },
  {
    id: "power_converter",
    name: "Tosche Station Power Converter",
    rarity: "common",
    count: 1,
    type: "misc",
    price: 25,
    description: "You were going to go pick some of these up anyway."
  },
  {
    id: "bacta_stim",
    name: "Bacta Injector",
    rarity: "rare",
    count: 1,
    type: "consumable",
    heal: 50,
    price: 250,
    description: "High-grade bacta for immediate wound closure and tissue regeneration."
  },
  {
    id: "death_sticks",
    name: "Death Sticks",
    rarity: "common",
    count: 1,
    type: "consumable",
    buffEffect: { stat: "per", value: -2, durationHours: 4 },
    price: 10,
    description: "You want to go home and rethink your life."
  },
  {
    id: "blue_milk",
    name: "Blue Milk",
    rarity: "common",
    count: 1,
    type: "consumable",
    heal: 5,
    price: 2,
  },
  {
    id: "slicer_spike",
    name: "Slicer Spike",
    rarity: "rare",
    count: 1,
    type: "misc",
    price: 150,
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
  {
    id: "comlink",
    name: "C-10 Comlink",
    rarity: "common",
    count: 1,
    type: "misc",
    price: 15,
    description: "Standard encrypted long-range communicator.",
  },
  {
    id: "credits_pouch",
    name: "Leather Credit Pouch",
    rarity: "common",
    count: 1,
    type: "misc",
    price: 10,
    description: "A small pouch for carrying physical credit chits.",
  },
  {
    id: "scrap",
    name: "Metal Scraps",
    rarity: "common",
    count: 1,
    type: "misc",
    price: 5,
    description: "Salvaged starship hull plating and wires.",
  },
  {
    id: "re-breather",
    name: "Emergency Re-breather",
    rarity: "uncommon",
    count: 1,
    type: "utility",
    price: 45,
    description: "Allows survival in toxic or low-oxygen environments.",
  },
  {
    id: "sensor_pouch",
    name: "Diagnostic Sensor Pouch",
    rarity: "uncommon",
    count: 1,
    type: "utility",
    price: 60,
    description: "A set of sensors for analyzing biological and mechanical data.",
  },
  {
    id: "hydrospanner",
    name: "Hydrospanner",
    rarity: "common",
    count: 1,
    type: "misc",
    price: 25,
    description: "Essential tool for adjusting pressurized fluid lines.",
  },
  {
    id: "power_cell",
    name: "Power Cell",
    rarity: "common",
    count: 1,
    type: "misc",
    price: 20,
    description: "Standard energy cell for blasters and tools.",
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

export const SECTORS = {
  mos_eisley: {
    id: "mos_eisley",
    name: "Mos Eisley",
    description: "A wretched hive of scum and villainy. The primary spaceport hub on Tatooine.",
    imageUrl: IMAGES.STREET,
  },
  mos_espa: {
    id: "mos_espa",
    name: "Mos Espa",
    description: "Famous for its podracing and heavy merchant influence.",
    imageUrl: IMAGES.MOS_ESPA,
  },
  jundland_wastes: {
    id: "jundland_wastes",
    name: "Jundland Wastes",
    description: "Desolate canyons and rocky plateaus. Home to Tusken Raiders and hermits.",
    imageUrl: IMAGES.JUNDLAND_WASTES,
  },
  dune_sea: {
    id: "dune_sea",
    name: "The Dune Sea",
    description: "The vast, endless sands of Tatooine. Silent and deadly.",
    imageUrl: IMAGES.SANDCRAWLER,
  },
  anchorhead: {
    id: "anchorhead",
    name: "Anchorhead",
    description: "A remote mining settlement and outpost. Quieter than the main cities.",
    imageUrl: IMAGES.ANCHORHEAD,
  },
  safehouse: {
    id: "safehouse",
    name: "Syndicate Base",
    description: "Your secret headquarters.",
    imageUrl: IMAGES.SAFEHOUSE,
  },
  rebel_base: {
    id: "rebel_base",
    name: "Rebel Outpost",
    description: "A hidden rebel cell on the outskirts of the Jundland Wastes.",
    imageUrl: IMAGES.SAFEHOUSE, // placeholder
  },
  imperial_hq: {
    id: "imperial_hq",
    name: "Imperial Garrison HQ",
    description: "A fortified stronghold of the Galactic Empire.",
    imageUrl: IMAGES.IMPERIAL_OUTPOST,
  },
  tusken_settlement: {
    id: "tusken_settlement",
    name: "Tusken Encampment",
    description: "A volatile settlement of the indigenous Tusken Raiders.",
    imageUrl: IMAGES.SAFEHOUSE, // placeholder
  },
};

export interface RTCEvent {
  id: string;
  name: string;
  message: string;
  chance: number; // 0-1 per check
  sector?: string;
  condition?: (gameState: any) => boolean;
  onTrigger?: (gameState: any) => Partial<any> | void;
}

export const RTC_EVENTS: RTCEvent[] = [
  {
    id: "sandstorm",
    name: "Sandstorm",
    message: "[ENV-ALERT] A heavy sandstorm is blowing in from the Dune Sea. Visibility is low.",
    chance: 0.05,
    sector: "Jundland Wastes",
  },
  {
    id: "imperial_patrol",
    name: "Imperial Patrol",
    message: "[SEC-ALERT] Imperial stormtroopers are conducting random ID checks in the sector.",
    chance: 0.08,
    sector: "Mos Eisley",
  },
  {
    id: "bounty_tracker",
    name: "HoloNet Alert",
    message: "[NEWS] Bounty Hunters' Guild reports a rogue Jedi spotted in the Mid Rim.",
    chance: 0.03,
  },
  {
    id: "market_crash",
    name: "Market Volatility",
    message: "[ECON] Galactic credit exchange rate fluctuates. Merchant prices may vary.",
    chance: 0.04,
    sector: "Mos Eisley",
  },
  {
    id: "cantina_band",
    name: "Cantina Band",
    message: "[AMB] The Modal Nodes just started a new set at the Cantina.",
    chance: 0.1,
    condition: (gs) => gs.currentLocationId === "mos_eisley_cantina",
  },
  {
    id: "jawa_scavengers",
    name: "Jawa Sighting",
    message: "[AMB] A Sandcrawler is spotted on the horizon, scavenging scrap metal.",
    chance: 0.07,
    sector: "Jundland Wastes",
  },
  {
    id: "podracing_hype",
    name: "Race Day Hype",
    message: "[NEWS] The Boonta Eve Classic is approaching. Betting pools are growing.",
    chance: 0.1,
    sector: "Mos Espa",
  },
  {
    id: "droid_malfunction",
    name: "Droid Malfunction",
    message: "[EVT] A nearby astromech droid has binary hiccups. Beep-boop-whirrr!",
    chance: 0.12,
  },
  {
    id: "spice_runners",
    name: "Spice Runner",
    message: "[SEC] A Kessel runner just made a low-altitude pass over Mos Eisley.",
    chance: 0.05,
    sector: "Mos Eisley",
  },
  {
    id: "krayt_dragon",
    name: "Krayt Roar",
    message: "[ENV] A bone-chilling roar echoes through the canyon floor.",
    chance: 0.02,
    sector: "Jundland Wastes",
  },
  {
    id: "found_credits",
    name: "Lucky Find",
    message: "[LOOT] You found a lost credit chip in the sand! (+25 Credits)",
    chance: 0.02,
    onTrigger: (gs) => ({ credits: gs.credits + 25 }),
  },
  {
    id: "rebel_transmission",
    name: "Encrypted Stream",
    message: "[HACK] Your comm-link intercepted a burst transmission in Rebel cipher.",
    chance: 0.03,
  },
  {
    id: "scrap_value_up",
    name: "Scrap Boom",
    message: "[ECON] Galactic scrap prices have surged. It's a good time to sell.",
    chance: 0.05,
    sector: "Mos Espa",
  },
  {
    id: "tusken_raiders",
    name: "Tusken Ambush",
    message: "[SEC-ALERT] Tusken Raiders are harassing travelers near the homesteads.",
    chance: 0.04,
    sector: "Jundland Wastes",
  },
  {
    id: "bounty_notice",
    name: "Bounty Notice",
    message: "[GUILD] A new high-priority bounty has been posted on the HoloNet.",
    chance: 0.06,
  },
  {
    id: "vaporator_moisture",
    name: "Vaporator Yield",
    message: "[LOOT] A nearby moisture vaporator has excess yield. You collect some water. (+1 Rations)",
    chance: 0.03,
    sector: "Anchorhead",
  },
  {
    id: "droid_fight",
    name: "Street Brawl",
    message: "[AMB] Two power droids are bumping into each other in a metallic fight.",
    chance: 0.08,
    sector: "Mos Eisley",
  },
  {
    id: "hidden_stash",
    name: "Hidden Stash",
    message: "[LOOT] You spotted a loose panel hiding some credits. (+50 Credits)",
    chance: 0.015,
    onTrigger: (gs) => ({ credits: gs.credits + 50 }),
  },
  {
    id: "jabba_favor",
    name: "Crime Boss Activity",
    message: "[SEC] Jabba's sail barge was seen leaving the palace. The locals are nervous.",
    chance: 0.04,
    sector: "Dune Sea",
  },
  {
    id: "sector_scan",
    name: "Satellite Scan",
    message: "[NAV] An orbital scan reveals clear paths through the Dune Sea canyons.",
    chance: 0.1,
    sector: "Dune Sea",
  },
  {
    id: "comms_jamming",
    name: "Frequency Jamming",
    message: "[NAV-ALERT] Local comms are being jammed by an unknown source.",
    chance: 0.05,
  },
  {
    id: "celebration",
    name: "Street Celebration",
    message: "[AMB] Locals are celebrating a successful harvest. The mood is lighter.",
    chance: 0.07,
    sector: "Anchorhead",
  },
  {
    id: "sewer_rats",
    name: "Womp Rat Sighting",
    message: "[AMB] A group of womp rats scurries through the alleyway.",
    chance: 0.15,
    sector: "Mos Eisley",
  },
  {
    id: "star_destroyer",
    name: "Imperial Presence",
    message: "[SEC] A Star Destroyer is visible in the upper atmosphere, blocking out the suns.",
    chance: 0.05,
  },
  {
    id: "droid_auction",
    name: "Droid Auction",
    message: "[NEWS] Merchant Row is holding a flash auction for refurbished pit droids.",
    chance: 0.08,
    sector: "Mos Eisley",
  },
  {
    id: "sand_crawler_moving",
    name: "Sandcrawler Trek",
    message: "[AMB] You hear the deep rumble of massive treads in the distance.",
    chance: 0.12,
    sector: "Jundland Wastes",
  },
  {
    id: "moisture_vaporator_hum",
    name: "Vaporator Hum",
    message: "[AMB] The moisture vaporators are producing a steady, reassuring drone.",
    chance: 0.2,
    sector: "Anchorhead",
  },
  {
    id: "swoop_bike_pass",
    name: "Swoop Pass",
    message: "[AMB] A swoop bike screams past you, kicking up a rooster tail of sand.",
    chance: 0.1,
    sector: "Mos Espa",
  },
  {
    id: "jawa_barter",
    name: "Jawa Barter",
    message: "[EVT] A Jawa tries to sell you a shiny but useless piece of scrap. You decline.",
    chance: 0.06,
  },
  {
    id: "rebel_spy",
    name: "Shadowy Figure",
    message: "[SEC] You spot a hooded figure watching the Imperial outpost from the shadows.",
    chance: 0.04,
    sector: "Mos Eisley",
  },
  {
    id: "kessel_run_rumor",
    name: "Spaceport Rumor",
    message: "[AMB] Overheard at the dock: Someone just beat the Kessel Run record. Again.",
    chance: 0.05,
    sector: "Mos Eisley",
  },
  {
    id: "power_surge",
    name: "Grid Surge",
    message: "[ENV] A momentary power surge flickers the lights. The city hums louder.",
    chance: 0.07,
    sector: "Mos Eisley",
  },
  {
    id: "bantha_herd",
    name: "Bantha Herd",
    message: "[AMB] A herd of Banthas is migrating across the canyon floor.",
    chance: 0.09,
    sector: "Jundland Wastes",
  },
  {
    id: "sarlacc_burp",
    name: "Great Pit Rumble",
    message: "[ENV] The ground trembles slightly. Something is stirring in the Great Pit of Carkoon.",
    chance: 0.03,
    sector: "Dune Sea",
  },
  {
    id: "scrapper_luck",
    name: "Discarded Parts",
    message: "[LOOT] You scavenge some usable tech parts from a junk pile. (+15 Credits)",
    chance: 0.05,
    onTrigger: (gs) => ({ credits: gs.credits + 15 }),
  },
  {
    id: "imperial_evasion",
    name: "Bypassing Patrols",
    message: "[REP] You successfully navigated around a stormtrooper checkpoint without detection.",
    chance: 0.03,
    onTrigger: (gs) => ({ reputation: { ...gs.reputation, empire: (gs.reputation.empire || 0) - 1 } }),
  },
  {
    id: "pazaak_winning",
    name: "Gambler's Luck",
    message: "[AMB] You overhear cheers from a nearby high-stakes Pazaak table.",
    chance: 0.1,
    sector: "Mos Eisley",
  },
  {
    id: "holonet_leak",
    name: "HoloNet Leak",
    message: "[HACK] An unsecured data stream reveals blueprints for a new droid model.",
    chance: 0.02,
  },
  {
    id: "desert_flower",
    name: "Desert Bloom",
    message: "[ENV] Rare desert flowers have sprouted after the morning dew. A brief moment of beauty.",
    chance: 0.02,
    sector: "Jundland Wastes",
  },
  {
    id: "tusken_war_cry",
    name: "Tusken Cry",
    message: "[AMB] A distant Tusken war cry sends shivers down your spine.",
    chance: 0.1,
    sector: "Jundland Wastes",
  },
  {
    id: "ship_landing",
    name: "Ship Arrival",
    message: "[NAV] A Corellian freighter just touched down in Bay 94.",
    chance: 0.08,
    sector: "Mos Eisley",
  },
  {
    id: "market_haggling",
    name: "Haggling Duel",
    message: "[AMB] A merchant and a customer are locked in a fierce debate over the price of a power cell.",
    chance: 0.12,
    sector: "Mos Eisley",
  },
  {
    id: "droid_beeping",
    name: "Binary Chatter",
    message: "[AMB] The air is filled with the clicks and whistles of droids communicating.",
    chance: 0.15,
  },
  {
    id: "smoke_signal",
    name: "Desert Signal",
    message: "[SEC] You spot a thin trail of smoke rising from a nearby ridge.",
    chance: 0.06,
    sector: "Jundland Wastes",
  },
  {
    id: "hidden_treasure",
    name: "Buried Stash",
    message: "[LOOT] You dig up a small box buried under the sand. (+100 Credits)",
    chance: 0.01,
    onTrigger: (gs) => ({ credits: gs.credits + 100 }),
  },
  {
    id: "radio_static",
    name: "Ghost Frequency",
    message: "[HACK] Your comm-link captures a snippet of an old distress signal from the Clone Wars.",
    chance: 0.02,
  },
  {
    id: "safehouse_hum",
    name: "Safehouse Systems",
    message: "[AMB] The safehouse computers are whirring contentedly. All data remains secure.",
    chance: 0.2,
    sector: "Safehouse",
  },
];

export const initialQuests: Quest[] = [
  {
    id: "q_rebel",
    title: "Supply the Resistance",
    description: "Provide essential supplies to the local Rebel cell.",
    status: "active",
    currentStepIndex: 0,
    type: "side",
    steps: [
      { id: 1, description: "Deliver supplies to Commander Vahn.", completed: false },
    ],
  },
  {
    id: "q_imperial",
    title: "Smash the Insurgents",
    description: "Eliminate a rebel insurgent presence for the Empire.",
    status: "active",
    currentStepIndex: 0,
    type: "side",
    steps: [
      { id: 1, description: "Report to Moff Gideon at the garrison.", completed: false },
    ],
  },
  {
    id: "q_hutt",
    title: "Debt Collection",
    description: "Recover borrowed credits for the local crime syndicate.",
    status: "active",
    currentStepIndex: 0,
    type: "side",
    steps: [
      { id: 1, description: "Speak with Jabba about the outstanding debts.", completed: false },
    ],
  },
  {
    id: "q_tusken",
    title: "Sacred Artifact",
    description: "Retrieve a lost artifact for the Tusken Chieftain.",
    status: "active",
    currentStepIndex: 0,
    type: "side",
    steps: [
      { id: 1, description: "Meet with the Tusken Chieftain.", completed: false },
    ],
  },
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
    uniqueTrait: "Adaptable: Gain 10% more XP from completed quests."
  },
  {
    id: "twilek",
    name: "Twi'lek",
    description:
      "Charismatic and agile. Known for their head-tails (lekku) and sharp wits.",
    bonuses: { cha: 2 },
    uniqueTrait: "Seductive Charm: High chance to persuade NPCs or bypass minor checks."
  },
  {
    id: "rodian",
    name: "Rodian",
    description: "Alert hunters with keen eyes and infrared vision.",
    bonuses: { per: 2 },
    uniqueTrait: "Tracker's Instinct: 15% better rewards from bounty contracts."
  },
  {
    id: "wookiee",
    name: "Wookiee",
    description:
      "Immense strength and endurance. Loyal but dangerous when provoked.",
    bonuses: { str: 2, end: 1, cha: -1 },
    uniqueTrait: "Berserker Rage: Deal 20% more damage in combat."
  },
  {
    id: "droid",
    name: "Droid",
    description:
      "Calculated and intelligent. Mechanical lifeforms programmed for specific tasks.",
    bonuses: { int: 2, end: 2, cha: -2 },
    uniqueTrait: "Silicon Plating: Take 15% less damage from physical attacks."
  },
  {
    id: "zabrak",
    name: "Zabrak",
    description: "Fierce and resilient warriors. Known for their facial tattoos and crowning horns.",
    bonuses: { str: 1, end: 1 },
    uniqueTrait: "Iron Will: Resist 10% of all damage."
  },
  {
    id: "chiss",
    name: "Chiss",
    description: "Blue-skinned and tactical. Highly intelligent string-pullers from the Unknown Regions.",
    bonuses: { int: 2, per: 1 },
    uniqueTrait: "Tactical Genius: 15% bonus credits when turning in quests."
  },
  {
    id: "trandoshan",
    name: "Trandoshan",
    description: "Reptilian bounty hunters with regenerative scaling and an appetite for Wookiees.",
    bonuses: { str: 2 },
    uniqueTrait: "Regeneration: Heal 5 HP after every combat encounter."
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
      id: "scoundrel_blaster",
      name: "DL-44 Heavy Blaster",
      rarity: "rare",
      count: 1,
      type: "weapon",
      dmg: 10,
    },
    uniqueBuff: "Fast Talker: Get a 10% discount on all purchases."
  },
  {
    id: "bounty_hunter",
    name: "Bounty Hunter",
    description: "Relentless pursuer. No target escapes your sight.",
    bonuses: { per: 2, str: 1 },
    startingItem: {
      id: "bh_rifle",
      name: "EE-3 Carbine Rifle",
      rarity: "uncommon",
      count: 1,
      type: "weapon",
      dmg: 12,
    },
    uniqueBuff: "Tracker: 20% increased chance to find credits in encounters."
  },
  {
    id: "mechanic",
    name: "Mechanic",
    description: "If it's broken, you fix it. Technology speaks to you.",
    bonuses: { int: 2, end: 1 },
    startingItem: {
      id: "mech_spanner",
      name: "Heavy Hydrospanner",
      rarity: "uncommon",
      count: 1,
      type: "weapon",
      dmg: 8,
    },
    uniqueBuff: "Scrapper: Start with the Scavenger skill unlocked."
  },
  {
    id: "merc",
    name: "Mercenary",
    description: "Soldier of fortune. Trained in combat and heavy weaponry.",
    bonuses: { str: 2, end: 1 },
    startingItem: {
      id: "merc_carbine",
      name: "E-11 Blaster Rifle",
      rarity: "uncommon",
      count: 1,
      type: "weapon",
      dmg: 9,
    },
    uniqueBuff: "Battle Hardened: Max HP is increased by 15."
  },
];

export const BACKSTORIES: Backstory[] = [
    { id: "street_rat", name: "Street Rat", description: "You grew up on the mean streets, learning to snatch bread and credits to survive.", buff: { stat: "agi", value: 1 } },
    { id: "kid_stuff", name: "Kid Stuff", description: "Your parents are still alive and well on Tatooine, occasionally sending you modest care packages.", buff: { stat: "cha", value: 1 } },
    { id: "wanted", name: "Wanted", description: "Someone out there is looking for you, and it's not for a reward. You are faster on your feet because of it.", buff: { stat: "per", value: 1 } },
    { id: "task_master", name: "Task Master", description: "You've been pushed harder than most during your time as an apprentice.", buff: { stat: "int", value: 1 } },
    { id: "lone_wolf", name: "Lone Wolf", description: "You thrive when you're on your own, away from the distractions of others.", buff: { stat: "str", value: 1 } },
    { id: "smuggler", name: "Smuggler", description: "You spent years navigating hyperspace lanes and avoiding Imperial blockades.", buff: { stat: "agi", value: 1 } },
    { id: "moisture_farmer", name: "Moisture Farmer", description: "You know the harsh desert better than anyone, and how to make the most of limited resources.", buff: { stat: "end", value: 1 } },
    { id: "imperial_deserter", name: "Imperial Deserter", description: "You abandoned the Empire, taking valuable technical knowledge—and maybe a piece of gear—with you.", buff: { stat: "int", value: 1 } },
    { id: "jawa_scavenger", name: "Jawa Scavenger", description: "You have a knack for finding valuable tech in the most unlikely piles of junk.", buff: { stat: "per", value: 1 } },
    { id: "podracer", name: "Podracer", description: "You've survived high-speed crashes and mechanical failures that would kill a lesser being.", buff: { stat: "str", value: 1 } },
];

export const FACTIONS: Faction[] = [
    { id: "hutt_cartel", name: "Hutt Cartel", description: "The ruthless crime syndicate that controls much of Tatooine." },
    { id: "empire", name: "Galactic Empire", description: "The galactic regime with an iron fist, seeking order and control." },
    { id: "rebels", name: "Rebel Alliance", description: "Freedom fighters seeking to restore the Republic and end Imperial tyranny." },
    { id: "local_tatooine", name: "Local Tatooine Settlers", description: "Common folk just trying to scrape by on a harsh desert planet." },
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
    conditionalGreetings: [
      {
        reqRace: "droid",
        greetingId: "droid_intro"
      },
      {
        reqBackgroundContains: "jawa",
        greetingId: "jawa_intro"
      },
      {
        reqQuestState: { id: "q1", completed: true },
        greetingId: "loyal",
      },
      {
        reqQuestState: { id: "q1", step: 1 },
        greetingId: "waiting_for_milk",
      },
      {
        reqQuestState: { id: "q1", step: 2 },
        greetingId: "have_milk_question",
      },
    ],
    dialogueTree: {
      loyal: {
        id: "loyal",
        text: "My favorite customer! Ever since you cleared out those pests, business has been booming. First round is on the house.",
        options: [
          { 
            label: "Thanks, Wuher. (Free Drink)", 
            nextId: null,
            action: (g) => g.addToLog("Wuher: 'Enjoy! Don't tell the others.'")
          },
          { label: "Any more work?", nextId: "no_work" },
          { label: "Just stopping by.", nextId: null }
        ]
      },
      no_work: {
        id: "no_work",
        text: "Things are quiet for now. Go talk to Greedo in the back booth if you're looking for real trouble.",
        options: [{ label: "I will.", nextId: null }]
      },
      waiting_for_milk: {
        id: "waiting_for_milk",
        text: "You're back empty-handed? That Blue Milk isn't going to walk itself over here. Look, if you've forgotten, head to the Bazaar. The Jawa vendor usually has a crate stashed behind his stall or near the back. Just tell him I sent you, he knows the drill.",
        options: [
          { label: "I'm heading back to the Bazaar now.", nextId: null },
          { label: "Where exactly is the Bazaar?", nextId: "bazaar_directions" }
        ]
      },
      bazaar_directions: {
        id: "bazaar_directions",
        text: "Exit the Cantina, turn left past the moisture vaporators. It's the big open area with all the stalls. You can't miss it.",
        options: [{ label: "Got it.", nextId: null }]
      },
      have_milk_question: {
        id: "have_milk_question",
        text: "I see you're back. Judging by the dust on your cloak, you've been to the Bazaar. Did you secure my shipment?",
        options: [
          {
            label: "I have the milk you wanted.",
            nextId: "quest_end",
            action: (g: any) => {
              g.updateQuest("q1", 3);
              g.completeQuest("q1");
              g.setQuests((prev: any[]) =>
                prev.map((q: any) =>
                  q.id === "q2"
                    ? { ...q, status: "active", currentStepIndex: 1 }
                    : q,
                ),
              );
              g.setCredits((c: number) => c + 100);
              g.addToLog("Wuher takes the milk and tosses you a credit bag.");
              g.setInventory((inv: any[]) => {
                const idx = inv.findIndex((i) => i.id === "blue_milk");
                if (idx > -1) {
                  const newInv = [...inv];
                  if (newInv[idx].count > 1) newInv[idx].count--;
                  else newInv.splice(idx, 1);
                  return newInv;
                }
                return inv;
              });
            }
          },
          { label: "Working on it.", nextId: null }
        ]
      },
      intro: {
        id: "intro",
        text: "Ah, my absolute best friend in the entire galaxy! Sit! Sit! I still haven't forgotten how you dragged me out of that burning sandcrawler back in the Wastes. I owe you my life, kid! Look, you're the only soul in this dirt pit I actually trust. If you're looking to make some real credits, I've got something lined up. For you, anything.",
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
      droid_intro: {
        id: "droid_intro",
        text: "Normally I yell 'We don't serve your kind here!' when a droid rolls in... but for my best friend who pulled me from that burning sandcrawler? You can leak oil all over the bar if you want! What do you need, my mechanical savior?",
        options: [
          {
            label: "I seek employment. (And to not leak oil)",
            reqQuestState: { id: "q1", step: 0 },
            nextId: "quest_proposal_day",
          },
          { label: "[Leave] My gratitude subroutines are fulfilled.", nextId: null }
        ]
      },
      jawa_intro: {
        id: "jawa_intro",
        text: "My absolute favorite scavenger! I don't care if you smell like scrap oil and Jawa sweat—you saved my life back in the Wastes, and you're the only person in this dirt pit I trust! Sit down! How can I help my best friend make some credits?",
        options: [
          {
            label: "I'm always looking for work, friend.",
            reqQuestState: { id: "q1", step: 0 },
            nextId: "quest_proposal_day",
          },
          { label: "Just passing through to say hi.", nextId: null }
        ]
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
    conditionalGreetings: [
      {
        reqQuestState: { id: "q2", step: 2 },
        greetingId: "waiting",
      },
      {
        reqQuestState: { id: "q2", step: 4 },
        greetingId: "post_teemo",
      },
    ],
    dialogueTree: {
      waiting: {
        id: "waiting",
        text: "Kaelen is still in that garage. If Teemo finds out you're coming, he'll double the guard. Don't waste time.",
        options: [
          { label: "On my way.", nextId: null }
        ],
      },
      post_teemo: {
        id: "post_teemo",
        text: "The Old Quarter feels... different without the Dune Rippers breathing down our necks. You've earned some respect around here.",
        options: [
          { label: "Teemo had a lot of data on the Imperial tech.", nextId: "debrief" },
          { label: "Just checking in.", nextId: null }
        ]
      },
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
  rebel_commander: {
    id: "rebel_commander",
    name: "Commander Vahn",
    imageUrl: IMAGES.NPC_REBEL_LEADER,
    greetingId: "intro",
    dialogueTree: {
        intro: {
          id: "intro",
          text: "The Rebellion appreciates your efforts. Tatooine is a strategic point, but we need more than just hope.",
          options: [
            { label: 'Take the supply run mission (+5 Rebel Rep, -2 Imperial Rep)', action: (g: any) => { 
                g.updateReputation('rebels', 5); 
                g.updateReputation('empire', -2);
                g.updateQuest('q_rebel', 1);
                const scenarios = ["Deliver supplies to the secret Jundland rebel outpost", "Recover stolen fuel cells from an Imperial patrol", "Transport encrypted rebel intelligence to the safehouse"];
                const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
                g.addToLog(`Accepted Rebel supply mission: ${scenario}`);
            }},
            { label: 'Nothing for now.', nextId: null }
          ]
       }
    }
  },
  imperial_commander: {
    id: "imperial_commander",
    name: "Moff Gideon",
    imageUrl: IMAGES.NPC_IMPERIAL_LEADER,
    greetingId: "intro",
    dialogueTree: {
        intro: {
          id: "intro",
          text: "Order must be maintained. The Empire rewards loyalty... and punishes dissent with absolute efficiency.",
          options: [
            { label: 'Take the insurgent hunt mission (+5 Imperial Rep, -2 Rebel Rep)', action: (g: any) => { 
                g.updateReputation('empire', 5); 
                g.updateReputation('rebels', -2);
                g.updateQuest('q_imperial', 1);
                const scenarios = ["Locate a rogue rebel comms dish in the Jundland Wastes", "Eliminate a rebel saboteur in town", "Search for a hidden rebel weapon cache"];
                const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
                g.addToLog(`Accepted Imperial insurgent hunt mission: ${scenario}`);
            }},
            { label: 'Nothing for now.', nextId: null }
          ]
       }
    }
  },
  hutt_commander: {
    id: "hutt_commander",
    name: "Jabba the Hutt",
    imageUrl: IMAGES.NPC_HUTT_LEADER,
    greetingId: "intro",
    dialogueTree: {
       intro: {
          id: "intro",
          text: "You seek audience with me? Bring me credits, and perhaps I'll overlook your incompetence.",
          options: [
            { label: 'Take the debt collection mission (+5 Hutt Rep, -2 Tusken Rep)', action: (g: any) => { 
                g.updateReputation('hutt', 5); 
                g.updateReputation('tusken', -2);
                g.updateQuest('q_hutt', 1);
                const scenarios = ["Collect credits from a stubborn moisture farmer", "Retrieve goods from an overdue smuggler", "Intimidate a cantina owner into paying up"];
                const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
                g.addToLog(`Accepted Hutt debt collection mission: ${scenario}`);
            }},
            { label: 'Nothing for now.', nextId: null }
          ]
       }
    }
  },
  tusken_commander: {
    id: "tusken_commander",
    name: "Tusken Chieftain",
    imageUrl: IMAGES.NPC_TUSKEN_LEADER,
    greetingId: "intro",
    dialogueTree: {
       intro: {
          id: "intro",
          text: "*The chieftain grunts, his voice a series of guttural clicks and barks. He gestures to the horizon.*",
          options: [
            { label: 'Take the sacred artifact retrieval mission (+5 Tusken Rep, -2 Hutt Rep)', action: (g: any) => { 
                g.updateReputation('tusken', 5); 
                g.updateReputation('hutt', -2);
                g.updateQuest('q_tusken', 1);
                const scenarios = ["Recover a stolen ancestral mask", "Retrieve a lost mystical totem from scavengers", "Clear out trespassers from a sacred burial ground"];
                const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
                g.addToLog(`Accepted Tusken sacred artifact mission: ${scenario}`);
            }},
            { label: 'Nothing for now.', nextId: null }
          ]
       }
    }
  },
  imperial_officer: {
    id: "imperial_officer",
    name: "Imperial Officer",
    imageUrl: IMAGES.NPC_OFFICER,
    greetingId: "intro",
    conditionalGreetings: [
      {
        reqRace: "chiss",
        greetingId: "chiss_intro",
      },
      {
        reqRace: "wookiee",
        greetingId: "wookiee_intro",
      },
    ],
    dialogueTree: {
      chiss_intro: {
        id: "chiss_intro",
        text: "A Chiss. We don't see many of your kind outside the Unknown Regions, but your intellect is well known to the Empire. State your business.",
        options: [{ label: "I am merely observing local customs.", nextId: null }],
      },
      wookiee_intro: {
        id: "wookiee_intro",
        text: "A Wookiee? Let me see your transit papers! If you don't have them, consider yourself assigned to the spice mines. Back away!",
        options: [{ label: "[Growl and walk away]", nextId: null }],
      },
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
    shopInventory: ["stimpack", "comlink", "credits_pouch", "scrap", "power_cell"],
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Welcome to the market. We have standard supplies for any traveler. If you have the credits, we have the goods.",
        options: [
          { label: "Trade Items", nextId: "trade" },
          { 
            label: "Ask about rare cargo", 
            nextId: "rare_info",
            reqReputation: { id: "merchant", min: 20 }
          },
          { label: "Just looking.", nextId: null },
        ],
      },
      trade: {
        id: "trade",
        text: "Our inventory is updated daily. What are you looking for?",
        options: [
          { label: "Open Store Interface", nextId: null, action: (g) => g.setShopNpcId(g.currentNpcId) },
          { label: "Back", nextId: "intro" }
        ]
      },
      rare_info: {
        id: "rare_info",
        text: "Since you've done right by the merchants around here... I heard a shipment of contraband Imperial sensors was intercepted. They're being held at the Records Office. High value if you can slice the lock.",
        options: [{ label: "Interesting. Thanks.", nextId: null }]
      }
    },
  },
  droid_doc: {
    id: "droid_doc",
    name: "2-1B Medical Droid",
    imageUrl: IMAGES.NPC_DROID_DOC,
    greetingId: "intro",
    shopInventory: ["stimpack", "re-breather", "sensor_pouch"],
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Greetings. I am 2-1B, your primary medical assistant. My sensors indicate several physiological anomalies requiring immediate attention. Shall I initiate a full bacta-wash and cellular regeneration cycle?",
        options: [
          { label: "Open Medical Supply Terminal", nextId: null, action: (g) => g.setShopNpcId(g.currentNpcId) },
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
    language: "jawan",
    greetingId: "intro",
    shopInventory: ["scrap", "hydrospanner", "fusion_cutter", "power_converter", "flight_suit"],
    conditionalGreetings: [
      {
        reqQuestState: { id: "q1", step: 1 },
        greetingId: "milk_greeting",
      },
      {
        reqQuestState: { id: "q1", step: 2 },
        greetingId: "milk_done",
      },
      {
        reqRace: "wookiee",
        greetingId: "scared_jawa",
      },
      {
        reqRace: "trandoshan",
        greetingId: "scared_jawa",
      },
    ],
    dialogueTree: {
      scared_jawa: {
        id: "scared_jawa",
        text: "Utinni! (The Jawa shrieks and immediately ducks behind a pile of old power converters, peeking out nervously)",
        options: [
          { label: "Relax, little one. I just want to trade.", nextId: null, action: (g) => g.setShopNpcId(g.currentNpcId) },
          { label: "[Growl and leave]", nextId: null },
        ]
      },
      milk_done: {
        id: "milk_done",
        text: "(He waves you away, busy sorting through shiny pieces of metal)",
        options: [{ label: "Leave.", nextId: null }]
      },
      milk_greeting: {
        id: "milk_greeting",
        text: "Utinni! (He recognizes you as Wuher's messenger and points to a crate in the corner)",
        options: [
          {
            label: "Take the Blue Milk.",
            nextId: null,
            action: (g: any) => {
              g.updateQuest("q1", 2);
              g.setInventory((i: any) => [
                ...i,
                { ...ITEM_DATABASE.find((x) => x.id === "blue_milk")!, count: 1 },
              ]);
              g.addToLog("Received Blue Milk Crate.");
            }
          }
        ]
      },
      intro: {
        id: "intro",
        text: "Utinni! (He gestures to a pile of junk)",
        options: [
          { label: "Trade Scrap & Supplies", nextId: null, action: (g) => g.setShopNpcId(g.currentNpcId) },
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
    conditionalGreetings: [
      {
        reqReputation: { id: "guild", min: 40 },
        greetingId: "member_intro",
      },
      {
        reqRace: "trandoshan",
        greetingId: "trandoshan_intro",
      },
      {
        reqRace: "zabrak",
        greetingId: "zabrak_intro",
      },
    ],
    dialogueTree: {
      member_intro: {
        id: "member_intro",
        text: "Back from the field, Hunter? The Guild is only as strong as its active members. What do you need?",
        options: [
          { label: "Access Guild Contracts", nextId: null, action: (g) => g.addToLog("System: Initializing Contract Terminal... [Access Granted]") },
          { label: "I need more training.", nextId: "training" },
          { label: "Just preparing for my next job.", nextId: null },
        ],
      },
      trandoshan_intro: {
        id: "trandoshan_intro",
        text: "A Trandoshan? Excellent. Your kind make natural hunters. The Guild is always looking for pure predatory instincts. Are you looking to join?",
        options: [
          { label: "I want to become a Guild Tracker.", nextId: "training", reqReputation: { id: "guild", min: 40 } },
          { label: "I have 400 Credits for the membership fee.", nextId: "join_success", reqCredits: 400, action: (g: any) => { g.setCredits((c: number) => c - 400); g.updateReputation("guild", 50); g.addToLog("Targa: 'Discounted for a fellow predator. Welcome to the Guild.'"); } },
          { label: "I have a recommendation from Greedo.", nextId: "greedo_check", reqQuestState: { id: "q2", step: 4, completed: true } },
          { label: "Maybe later.", nextId: null },
        ],
      },
      zabrak_intro: {
        id: "zabrak_intro",
        text: "A Zabrak outside Iridonia? I respect your people's resilience. The Guild values strength and determination. What brings you to this dustball?",
        options: [
          { label: "I'm looking for specialized training.", nextId: "training", reqReputation: { id: "guild", min: 40 } },
          { label: "I have 500 Credits for the membership fee.", nextId: "join_success", reqCredits: 500, action: (g: any) => { g.setCredits((c: number) => c - 500); g.updateReputation("guild", 50); g.addToLog("Targa: 'A standard entry, but accepted. Welcome to the Guild.'"); } },
          { label: "I have a recommendation from Greedo.", nextId: "greedo_check", reqQuestState: { id: "q2", step: 4, completed: true } },
          { label: "Just passing through.", nextId: null },
        ],
      },
      intro: {
        id: "intro",
        text: "The Bounty Hunters' Guild doesn't just take anyone who can pull a trigger. We need reliability. We need professionals. You look like you've got some miles on those boots, but are you Guild material?",
        options: [
          { 
            label: "I'm looking for specialized training.", 
            nextId: "training",
            reqReputation: { id: "guild", min: 40 }
          },
          { 
            label: "I'm the best tracker you'll find on this dustball.", 
            nextId: "prove_it",
            reqSkill: "per",
            reqVal: 6,
          },
          { 
             label: "Access Guild Contracts",
             nextId: null,
             reqReputation: { id: "guild", min: 40 },
             action: (g) => g.addToLog("System: Initializing Contract Terminal... [Access Granted]")
          },
          { 
            label: "I have 500 Credits for the membership fee.", 
            nextId: "join_success",
            reqCredits: 500,
            action: (g: any) => {
              g.setCredits((c: number) => c - 500);
              g.updateReputation("guild", 50);
              g.addToLog("Targa: 'A standard entry, but accepted. Welcome to the Guild.'");
            }
          },
          { 
            label: "I have a recommendation from Greedo.", 
            nextId: "greedo_check",
            reqQuestState: { id: "q2", step: 4, completed: true }
          },
          { label: "Maybe another time.", nextId: null },
        ],
      },
      training: {
        id: "training",
        text: "Knowledge is as sharp as any blade. We offer combat drills and technical workshops. It will cost you 200 credits per session. Ready to sharpen your edge?",
        options: [
          { 
            label: "Strength Training (200 Credits)", 
            nextId: null, 
            reqCredits: 200, 
            action: (g) => {
              g.setCredits((c: number) => c - 200);
              g.setStats((s: any) => ({ ...s, stats: { ...s.stats, str: s.stats.str + 1 } }));
              g.addToLog("Targa: 'Push your limits. Again!' (+1 STR)");
            }
          },
          { 
            label: "Bypass Protocols Workshop (200 Credits)", 
            nextId: null, 
            reqCredits: 200, 
            action: (g) => {
              g.setCredits((c: number) => c - 200);
              g.setStats((s: any) => ({ ...s, stats: { ...s.stats, int: s.stats.int + 1 } }));
              g.addToLog("Targa: 'Not every door needs an explosion.' (+1 INT)");
            }
          },
          { label: "Back", nextId: "intro" }
        ]
      },
      prove_it: {
        id: "prove_it",
        text: "Perception is half the battle. You spotted my concealed carry, didn't you? Impressive. I'll waive the entry fee. The Guild could use eyes like yours.",
        options: [
          { 
            label: "Glad to be here.", 
            nextId: null,
            action: (g: any) => {
              g.updateReputation("guild", 75);
              g.addToLog("Targa: 'Don't make me regret this.'");
            }
          }
        ]
      },
      greedo_check: {
        id: "greedo_check",
        text: "Greedo? That green lizard actually likes someone? Fine. If he trusts you enough to share his territory, the Guild will extend a hand. Basic membership active.",
        options: [
          { 
            label: "Tell Greedo I'm in.", 
            nextId: null,
            action: (g: any) => {
              g.updateReputation("guild", 40);
            }
          }
        ]
      },
      join_success: {
        id: "join_success",
        text: "Your credits have been logged. You now have access to the Guild Contract Network and the Training Range. Don't die on your first job; it's a lot of paperwork.",
        options: [{ label: "Understood.", nextId: null }],
      },
    },
  },
  quartermaster_jax: {
    id: "quartermaster_jax",
    name: "Quartermaster Jax",
    imageUrl: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=1000&auto=format&fit=crop",
    greetingId: "intro",
    shopInventory: ["heavy_blaster", "bounty_armor", "pulse_rifle", "blaster_rifle"],
    dialogueTree: {
      intro: {
        id: "intro",
        text: "You want protection or you want to deal damage? The Guild only stocks the best. Prices are non-negotiable.",
        options: [
          { label: "Show me your gear.", nextId: null, action: (g) => g.setShopNpcId("quartermaster_jax") },
          { label: "Leave.", nextId: null },
        ],
      },
    },
  },
  rusty: {
    id: "rusty",
    name: "Rusty",
    imageUrl: IMAGES.NPC_RUSTY,
    greetingId: "intro",
    shopInventory: ["r2_unit", "protocol_droid", "power_cell", "power_converter"],
    dialogueTree: {
      intro: {
        id: "intro",
        text: "Beep-boop-brrrrt! Oh, sorry. My translator module is acting up. Welcome to Circuit City. Best droids in the sector, guaranteed. Looking for a companion or just some scrap?",
        options: [
          { label: "Show me your droids.", nextId: null, action: (g) => g.setShopNpcId("rusty") },
          { label: "Do you fix droids here?", nextId: "repair" },
          { label: "Leave.", nextId: null },
        ],
      },
      repair: {
        id: "repair",
        text: "Mostly sales, but if you've got a motivator that's blown, I can take a look. It'll cost you though. Credits aren't cheap on this ball of dust.",
        options: [
          { label: "I'll keep that in mind.", nextId: "intro" },
        ],
      },
    },
  },
  kaelen: {
    id: "kaelen",
    name: "Kaelen Vorr",
    imageUrl: IMAGES.NPC_KAELEN,
    greetingId: "intro",
    conditionalGreetings: [
      {
        reqQuestState: { id: "q2", step: 4 },
        greetingId: "safehouse_greeting",
      },
    ],
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
        ],
      },
      safehouse_greeting: {
        id: "safehouse_greeting",
        text: "The safehouse is ready. I'm already working on the decryption modules. Do you have the components we discussed?",
        options: [
          { label: "Give Components", nextId: "components", reqItem: "parts_kit" },
          { label: "Not yet. I'll be back.", nextId: null },
        ],
      },
      components: {
        id: "components",
        text: "Perfect. This should be enough to bypass the first layer. I'll need more time.",
        options: [
          { 
            label: "Keep at it.", 
            nextId: null,
            action: (g: any) => {
              g.addToLog("Quest Updated: Kaelen is working on the datapad.");
            }
          }
        ]
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
  jabba_entrance: {
        id: "jabba_entrance",
        name: "Jabba's Palace Entrance",
        description: "The ominous entrance to the Hutt's palace, guarded by security droids.",
        imageUrl: IMAGES.CANTINA,
        sector: "Jabba's Palace",
        exits: ["jundland_wastes", "jabba_throne_room"],
        actions: ["Look Around"],
    },
    jabba_throne_room: {
        id: "jabba_throne_room",
        name: "Jabba's Throne Room",
        description: "The opulent and smelly center of Jabba's power.",
        imageUrl: IMAGES.CANTINA,
        sector: "Jabba's Palace",
        exits: ["jabba_entrance", "jabba_dungeon", "jabba_kitchen"],
        actions: ["Look Around"],
    },
    jabba_dungeon: {
        id: "jabba_dungeon",
        name: "Dungeon",
        description: "Cold, dark, and damp, holding captives for Jabba's amusement.",
        imageUrl: IMAGES.ALLEY_NIGHT,
        sector: "Jabba's Palace",
        exits: ["jabba_throne_room"],
        actions: ["Look Around"],
    },
    jabba_kitchen: {
        id: "jabba_kitchen",
        name: "Kitchen",
        description: "A chaotic kitchen where exotic dishes are prepared for the Hutt.",
        imageUrl: IMAGES.GUILD,
        sector: "Jabba's Palace",
        exits: ["jabba_throne_room"],
        actions: ["Look Around"],
    },
  mos_eisley_street: {
    id: "mos_eisley_street",
    name: "Main Street",
    description: "The dusty central artery of Mos Eisley.",
    imageUrl: IMAGES.STREET,
    nightImageUrl: IMAGES.STREET_NIGHT,
    sector: "Mos Eisley",
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
    sector: "Jundland Wastes",
    exits: [
      "mos_eisley_gate",
      "lars_homestead",
      "krayt_valley",
      "sandcrawler",
      "anchorhead",
      "jabba_entrance",
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
    sector: "Mos Espa",
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
    sector: "Mos Eisley",
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
    sector: "Anchorhead",
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
    npcs: ["rusty"],
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
    sector: "Mos Eisley",
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
    sector: "Mos Eisley",
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
    sector: "Mos Eisley",
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
    sector: "Mos Eisley",
    description:
      "A dimly lit hall where hunters gather to pick up contracts. The atmosphere is tense.",
    nightDescription:
      "The Guild hall is busier now than during the day. Hunters prefer the cover of darkness. The holographic bounty board casts a red glow over the drinking patrons.",
    imageUrl: IMAGES.GUILD,
    exits: ["merchant_row"],
    npcs: ["guild_master_targa", "quartermaster_jax"],
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
    sector: "Mos Eisley",
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
    sector: "Safehouse",
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
