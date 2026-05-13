import React, { useState, useEffect, useRef } from 'react';
import { toggleFullScreen } from '../utils';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Minimize2, Play, Pause, ChevronRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Utility for Tailwind class merging */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BackgroundAudioPlayer: React.FC<{ src: string; volume: number; isPlaying: boolean; loop?: boolean }> = ({ src, volume, isPlaying, loop = true }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeInterval = useRef<any>(null);
  
  const [internalSrc, setInternalSrc] = useState(src);
  const pendingSrc = useRef<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const doPlay = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Audio playback failed:", error);
          const onInteract = () => {
            if (audioRef.current) audioRef.current.play().catch(() => {});
            window.removeEventListener('click', onInteract);
            window.removeEventListener('keydown', onInteract);
            window.removeEventListener('touchstart', onInteract);
          };
          window.addEventListener('click', onInteract);
          window.addEventListener('keydown', onInteract);
          window.addEventListener('touchstart', onInteract);
        });
      }
    };

    if (src !== internalSrc) {
       pendingSrc.current = src;
       if (fadeInterval.current) clearInterval(fadeInterval.current);
       fadeInterval.current = setInterval(() => {
          if (audio.volume > 0.05) {
             audio.volume = Math.max(0, audio.volume - 0.05);
          } else {
             audio.volume = 0;
             clearInterval(fadeInterval.current!);
             audio.pause();
             setInternalSrc(pendingSrc.current as string);
          }
       }, 50);
    } else {
       if (isPlaying) {
          if (audio.paused) {
             audio.volume = 0;
             doPlay();
          }
          if (fadeInterval.current) clearInterval(fadeInterval.current);
          fadeInterval.current = setInterval(() => {
             if (audio.volume < volume - 0.05) {
                audio.volume = Math.min(volume, audio.volume + 0.05);
             } else {
                audio.volume = volume;
                clearInterval(fadeInterval.current!);
             }
          }, 50);
       } else {
          if (fadeInterval.current) clearInterval(fadeInterval.current);
          fadeInterval.current = setInterval(() => {
             if (audio.volume > 0.05) {
                audio.volume = Math.max(0, audio.volume - 0.05);
             } else {
                audio.volume = 0;
                clearInterval(fadeInterval.current!);
                if (!audio.paused) audio.pause();
             }
          }, 50);
       }
    }

    return () => {
      if (fadeInterval.current) {
        // We do NOT clear interval on just cleanup because we want the interval to keep going on re-renders,
        // Wait, if we return a cleanup that clears interval, it will clear it on every re-render!
        // We shouldn't clear interval here unless we know it's unmounting.
      }
    };
  }, [src, internalSrc, volume, isPlaying]);

  useEffect(() => {
    return () => {
      // Unmount cleanup
      if (fadeInterval.current) clearInterval(fadeInterval.current);
      if (audioRef.current) audioRef.current.pause();
    }
  }, []);

  return <audio ref={audioRef} src={internalSrc} loop={loop} preload="auto" />;
};

export const FullscreenButton = () => {
    const [isFull, setIsFull] = useState(false);
    
    const handleToggle = () => {
        toggleFullScreen();
        setIsFull(!isFull);
    };

    return (
        <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggle} 
            className="fixed top-4 right-4 z-[9999] bg-black/60 border border-cyan-500/30 text-cyan-400 p-2.5 rounded-full hover:bg-cyan-900/40 transition-colors backdrop-blur-md shadow-lg group"
            aria-label="Toggle Fullscreen"
        >
            {isFull ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </motion.button>
    );
};

export const Typewriter: React.FC<{ text: string, onFinished?: () => void, onUpdate?: () => void, textKey: any, className?: string, cursor?: boolean }> = ({ text, onFinished, onUpdate, textKey, className, cursor = true }) => {
    const [displayedText, setDisplayedText] = useState('');
    const intervalRef = useRef<number | null>(null);
    const finishTyping = () => { if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; } setDisplayedText(text); if (onUpdate) onUpdate(); if (onFinished) onFinished(); };
    useEffect(() => {
        if (onUpdate) onUpdate();
    }, [displayedText, onUpdate]);

    useEffect(() => { 
        finishTyping(); 
        setDisplayedText(''); 
        let i = 0; 
        intervalRef.current = window.setInterval(() => { 
            if (i < text.length) { 
                setDisplayedText(text.slice(0, i + 1)); 
                i++; 
            } else { 
                if (intervalRef.current) clearInterval(intervalRef.current); 
                if (onFinished) onFinished(); 
            } 
        }, 20); // Slightly faster typing for logs
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); }; 
    }, [text, textKey, onFinished]);
    
    const isFinished = displayedText.length === text.length;
    return ( 
        <span className={className} onClick={finishTyping}> 
            {displayedText} 
            {cursor && !isFinished && <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1" />} 
        </span> 
    );
};

export const CommandButton: React.FC<{ 
    label: React.ReactNode, 
    onClick: () => void, 
    className?: string, 
    disabled?: boolean,
    icon?: React.ReactNode 
}> = ({ label, onClick, className, disabled, icon }) => ( 
    <motion.button 
        whileHover={{ x: 4, scale: 1.02, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick} 
        disabled={disabled} 
        className={cn(
            "flex items-center gap-3 px-5 py-3 border border-cyan-500/30 bg-black/40 text-cyan-400 font-display text-sm tracking-wide transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-md shadow-lg",
            className
        )}
    > 
        {icon || <ChevronRight size={16} className="text-cyan-600" />}
        <span className="uppercase">{label}</span>
    </motion.button> 
);
