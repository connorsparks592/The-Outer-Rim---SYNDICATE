import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { StartScreen, OpeningCrawl, CharacterCreator } from './components/Cinematics';
import { Dashboard } from './components/Dashboard';
import { BackgroundAudioPlayer, FullscreenButton } from './components/Shared';
import { loadGame, saveGame } from './utils';
import { initialLocations, initialQuests, AUDIO } from './data';
import { SaveData, Character, Item, Quest } from './types';

// Default State for new games
const DEFAULT_GAME_STATE: SaveData = {
    currentLocationId: 'mos_eisley_cantina',
    stats: null,
    inventory: [{ id: '1', name: 'Blaster Pistol', rarity: 'rare', count: 1, type: 'weapon', dmg: 8 }],
    quests: initialQuests,
    credits: 100,
    isNight: false,
    visitedLocations: ['mos_eisley_cantina'],
    lootedContainers: [],
    unlockedContainers: [],
    lastStipendClaimDate: '',
    history: ["System Initialized.", "Location: Tatooine, Outer Rim.", "Objective: Survive."],
    defeatedNpcs: [],
    reputation: { 'empire': 0, 'rebellion': 0, 'hutt': 0, 'guild': 0 },
    activeContracts: []
};

const App = () => {
    const [screen, setScreen] = useState<'START' | 'INTRO' | 'CREATOR' | 'GAME'>('START');
    const [gameState, setGameState] = useState<SaveData>(DEFAULT_GAME_STATE);
    const [hasSave, setHasSave] = useState(false);

    // Audio Logic
    const [audioTrack, setAudioTrack] = useState(AUDIO.MENU_THEME);
    const [audioVolume, setAudioVolume] = useState(0.5);
    const [isGlobalAudioPlaying, setIsGlobalAudioPlaying] = useState(true);

    useEffect(() => {
        const saved = loadGame();
        if (saved) {
            setHasSave(true);
        }
    }, []);

    // Manage Audio based on Screen and Location
    useEffect(() => {
        if (screen === 'START') {
            setAudioTrack(AUDIO.MENU_THEME);
            setAudioVolume(0.4);
            setIsGlobalAudioPlaying(true);
        } else if (screen === 'INTRO') {
            setIsGlobalAudioPlaying(false);
            const timer = setTimeout(() => {
                setAudioTrack(AUDIO.MAIN_TITLE);
                setAudioVolume(0.6);
                setIsGlobalAudioPlaying(true);
            }, 4000);
            return () => clearTimeout(timer);
        } else if (screen === 'CREATOR') {
            setAudioTrack(AUDIO.MENU_THEME);
            setAudioVolume(0.4);
            setIsGlobalAudioPlaying(true);
        } else if (screen === 'GAME') {
            setIsGlobalAudioPlaying(true);
            const locId = gameState.currentLocationId;
            if (locId === 'mos_eisley_cantina') {
                setAudioTrack(AUDIO.CANTINA_THEME_1);
                setAudioVolume(0.3);
            } else {
                setAudioTrack(AUDIO.AMBIENT_THEME);
                setAudioVolume(0.2);
            }
        }
    }, [screen, gameState.currentLocationId]);

    const handleNewGame = () => {
        setGameState(DEFAULT_GAME_STATE);
        setScreen('INTRO');
    };

    const handleContinue = () => {
        const saved = loadGame();
        if (saved) {
            setGameState(saved);
            setScreen('GAME');
        }
    };

    const handleIntroFinish = () => {
        setScreen('CREATOR');
    };

    const handleCharacterCreated = (char: Character) => {
        setGameState(prev => ({
            ...prev,
            stats: char,
            // Merge starting class item into inventory
            inventory: [...prev.inventory, char.charClass.startingItem]
        }));
        setScreen('GAME');
    };

    const handleSave = () => {
        saveGame(gameState);
        setGameState(prev => ({ ...prev, history: [...prev.history, "Game Saved."] }));
    };

    return (
        <div className="w-full h-full relative font-sans select-none">
            {screen !== 'GAME' && <FullscreenButton />}
            <BackgroundAudioPlayer 
                src={audioTrack} 
                volume={audioVolume} 
                isPlaying={isGlobalAudioPlaying} 
                loop={true} 
            />
            
            {screen === 'START' && (
                <StartScreen 
                    onNewGame={handleNewGame} 
                    onContinue={handleContinue} 
                    hasSave={hasSave} 
                />
            )}
            
            {screen === 'INTRO' && (
                <OpeningCrawl 
                    onFinished={handleIntroFinish} 
                    volume={0.6} 
                />
            )}
            
            {screen === 'CREATOR' && (
                <CharacterCreator 
                    onFinished={handleCharacterCreated} 
                />
            )}
            
            {screen === 'GAME' && (
                <div className="w-full h-full bg-gray-900 overflow-hidden relative animate-fade-in">
                    <Dashboard 
                        gameState={gameState} 
                        setGameState={setGameState} 
                        locations={initialLocations}
                        onSave={handleSave}
                    />
                </div>
            )}
        </div>
    );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);