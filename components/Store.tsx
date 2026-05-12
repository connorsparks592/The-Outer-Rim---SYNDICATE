import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  ShoppingBag, 
  Coins, 
  ShieldCheck, 
  Zap, 
  Info, 
  Package,
  TrendingDown,
  ChevronRight,
  ShoppingCart
} from "lucide-react";
import { SaveData, Item, NPC } from "../types";
import { ITEM_DATABASE, NPC_DATABASE } from "../data";
import { cn } from "./Shared";

interface StoreProps {
  npcId: string;
  gameState: SaveData;
  setGameState: React.Dispatch<React.SetStateAction<SaveData>>;
  onClose: () => void;
}

export const Store: React.FC<StoreProps> = ({
  npcId,
  gameState,
  setGameState,
  onClose,
}) => {
  const npc = NPC_DATABASE[npcId];
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");

  const inventory = npc.shopInventory?.map(id => ITEM_DATABASE.find(i => i.id === id)).filter(Boolean) as Item[] || [];

  const hasTraderInstinct = gameState.unlockedSkills?.includes("trader_instinct");
  const hasSmoothTalker = gameState.unlockedSkills?.includes("smooth_talker");
  const isFastTalker = gameState.stats?.charClass?.id === "scoundrel";

  const buyDiscount = (hasTraderInstinct ? 0.15 : 0) + (isFastTalker ? 0.10 : 0); // up to 25% discount
  const sellBonus = hasSmoothTalker ? 0.15 : 0; // 15% better sell price

  const calculateBuyPrice = (basePrice: number) => Math.floor(basePrice * (1 - buyDiscount));
  const calculateSellPrice = (item: Item) => Math.floor(item.price * (0.6 + sellBonus));

  const handleBuy = (item: Item) => {
    const finalPrice = calculateBuyPrice(item.price);
    if (gameState.credits >= finalPrice) {
      setGameState(prev => {
        const existing = prev.inventory.find(i => i.id === item.id);
        const newInventory = existing 
          ? prev.inventory.map(i => i.id === item.id ? { ...i, count: (i.count || 0) + 1 } : i)
          : [...prev.inventory, { ...item, count: 1 }];
        
        return {
          ...prev,
          credits: prev.credits - finalPrice,
          inventory: newInventory,
          history: [...prev.history, `Purchased ${item.name} for ${finalPrice} credits.`].slice(-50)
        };
      });
    }
  };

  const handleSell = (item: Item) => {
    const sellPrice = calculateSellPrice(item);
    setGameState(prev => {
      const existing = prev.inventory.find(i => i.id === item.id);
      if (!existing || (existing.count || 0) <= 0) return prev;

      const newInventory = existing.count === 1
        ? prev.inventory.filter(i => i.id !== item.id)
        : prev.inventory.map(i => i.id === item.id ? { ...i, count: i.count! - 1 } : i);

      return {
        ...prev,
        credits: prev.credits + sellPrice,
        inventory: newInventory,
        history: [...prev.history, `Sold ${item.name} for ${sellPrice} credits.`].slice(-50)
      };
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8 bg-black/90 backdrop-blur-md"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_70%)]" />
        <div className="scanline" />
      </div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative w-full max-w-6xl h-full md:h-[90vh] flex flex-col bg-[#080808] border-2 border-yellow-500/40 rounded-none md:rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(234,179,8,0.15)]"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-yellow-500/20 bg-yellow-500/5 relative">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 border-yellow-500/40 overflow-hidden bg-black shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                <img 
                  src={npc.imageUrl} 
                  className="w-full h-full object-cover grayscale brightness-90 contrast-125" 
                  alt={npc.name} 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay group-hover:bg-transparent transition-colors" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-black">
                LEVEL 4
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl md:text-4xl font-title text-yellow-500 uppercase tracking-tighter glow-yellow leading-none">
                  {npc.name.toUpperCase()}
                </h2>
                <div className="h-4 w-px bg-yellow-500/30 hidden md:block" />
                <span className="text-[10px] text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20 font-mono tracking-widest hidden md:block">
                  VERIFIED MERCHANT
                </span>
              </div>
              <p className="text-yellow-500/40 text-[9px] md:text-[11px] uppercase font-mono tracking-[0.3em] mt-1 italic">
                Outer Rim Trade Registry // Protocol {npcId.toUpperCase()}-94
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="hidden lg:flex flex-col items-end gap-1 mr-4">
                <span className="text-[9px] text-yellow-500/40 font-mono tracking-widest uppercase">Encryption Status</span>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-1 bg-yellow-500/40 rounded-full" />)}
                </div>
             </div>
             <button 
              onClick={onClose}
              className="p-3 hover:bg-yellow-500/20 rounded-2xl transition-all border-2 border-yellow-500/20 group"
            >
              <X className="text-yellow-500 group-hover:rotate-90 transition-transform" size={28} />
            </button>
          </div>
        </div>

        {/* Central HUD */}
        <div className="px-6 py-4 bg-black/60 flex flex-wrap items-center justify-between border-b border-yellow-500/10 gap-4">
            <div className="flex gap-6">
                <div className="flex flex-col">
                  <span className="text-[8px] text-yellow-500/40 uppercase font-mono tracking-widest mb-1">Current Balance</span>
                  <div className="flex items-center gap-3 text-yellow-500">
                      <Coins size={20} className="glow-yellow" />
                      <span className="text-2xl font-title tracking-tight">{gameState.credits.toLocaleString()} <span className="text-xs opacity-50">CR</span></span>
                  </div>
                </div>
                <div className="h-10 w-px bg-yellow-500/10" />
                <div className="flex flex-col">
                  <span className="text-[8px] text-cyan-500/40 uppercase font-mono tracking-widest mb-1">Reputation Bonus</span>
                  <div className="flex items-center gap-2 text-cyan-400">
                      <ShieldCheck size={20} />
                      <span className="text-2xl font-title tracking-tight">15<span className="text-xs opacity-50">%</span></span>
                  </div>
                </div>
            </div>

            <div className="flex bg-black p-1 rounded-2xl border border-yellow-500/20 min-w-[280px]">
              <button 
                onClick={() => setActiveTab("buy")}
                className={cn(
                  "flex-1 py-3 px-6 text-[11px] font-title uppercase tracking-[0.2em] rounded-xl transition-all flex items-center justify-center gap-3",
                  activeTab === "buy" ? "bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]" : "text-yellow-500 hover:bg-yellow-500/5"
                )}
              >
                <ShoppingBag size={14} /> Buy
              </button>
              <button 
                onClick={() => setActiveTab("sell")}
                className={cn(
                  "flex-1 py-3 px-6 text-[11px] font-title uppercase tracking-[0.2em] rounded-xl transition-all flex items-center justify-center gap-3",
                  activeTab === "sell" ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]" : "text-cyan-500 hover:bg-cyan-500/5"
                )}
              >
                <TrendingDown size={14} /> Sell
              </button>
            </div>
        </div>

        {/* Main Interface Split */}
        <div className="flex-1 flex overflow-hidden flex-col md:flex-row">
          {/* Left: Tactical Grid */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar bg-black/40 relative">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                {(activeTab === "buy" ? inventory : gameState.inventory).map((item, idx) => {
                  const isOwned = gameState.inventory.some(i => i.id === item.id);
                  const isSelected = selectedItem?.id === item.id;
                  
                  return (
                    <motion.button
                      key={`${item.id}-${idx}`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedItem(item)}
                      className={cn(
                        "group relative flex flex-col p-4 rounded-2xl border-2 transition-all text-left overflow-hidden min-h-[120px] backdrop-blur-sm",
                        isSelected 
                          ? activeTab === 'buy' ? "bg-yellow-500/10 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.1)]" : "bg-cyan-500/10 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                          : "bg-black/80 border-white/5 hover:border-white/20 shadow-xl"
                      )}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center text-yellow-500 group-hover:glow-yellow transition-all">
                          <Package size={20} className="opacity-40" />
                        </div>
                        <div className="flex flex-col items-end">
                            <span className={cn(
                              "text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-full border tracking-tighter mb-1",
                              item.rarity === 'legendary' ? "border-yellow-500 text-yellow-500" :
                              item.rarity === 'rare' ? "border-purple-500 text-purple-400" :
                              "border-white/20 text-white/40"
                            )}>
                              {item.rarity}
                            </span>
                            <span className="text-[10px] font-mono text-white/20">#{item.id.slice(0,4)}</span>
                        </div>
                      </div>

                      <h3 className="text-sm font-title text-white uppercase tracking-tight mb-2 group-hover:text-yellow-400 transition-colors">
                        {item.name}
                      </h3>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Coins size={14} className={activeTab === 'buy' ? "text-yellow-500" : "text-cyan-500"} />
                          <span className={cn("text-lg font-title", activeTab === 'buy' ? "text-yellow-500" : "text-cyan-500")}>
                            {activeTab === "buy" ? calculateBuyPrice(item.price) : calculateSellPrice(item)}
                          </span>
                        </div>
                        {isOwned && activeTab === 'buy' && (
                          <div className="text-[10px] text-white/20 bg-white/5 px-2 py-0.5 rounded uppercase font-mono">Owned</div>
                        )}
                        {activeTab === 'sell' && (
                           <div className="text-[10px] text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded uppercase font-mono">x{item.count}</div>
                        )}
                      </div>

                      {/* Hover Effect */}
                      <div className={cn(
                        "absolute top-0 right-0 w-8 h-8 opacity-10 group-hover:opacity-100 transition-opacity",
                        activeTab === 'buy' ? "text-yellow-500" : "text-cyan-500"
                      )}>
                        <ChevronRight className="scale-150 rotate-45 translate-x-2 -translate-y-2" />
                      </div>
                    </motion.button>
                  );
                })}
             </div>
          </div>

          {/* Right: Technical Inspector */}
          <div className="w-full md:w-[380px] lg:w-[450px] p-6 md:p-10 flex flex-col bg-black/80 border-l border-yellow-500/10 relative">
            <AnimatePresence mode="wait">
              {selectedItem ? (
                <motion.div
                  key={selectedItem.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  className="flex flex-col h-full"
                >
                  {/* Holographic Item View */}
                  <div className="aspect-square w-full max-w-[300px] mx-auto bg-black border-2 border-yellow-500/20 rounded-[2.5rem] flex items-center justify-center text-yellow-500 mb-8 relative overflow-hidden group shadow-[inset_0_0_50px_rgba(234,179,8,0.05)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(234,179,8,0.2),transparent_70%)]" />
                    <Package size={120} className="relative z-10 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700" />
                    
                    {/* UI Ornaments */}
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-yellow-500 animate-pulse">
                          <Zap size={12} />
                          <span className="text-[10px] font-mono tracking-widest uppercase">Active Link</span>
                        </div>
                    </div>
                    
                    {/* Corners */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-500/40 rounded-tl-3xl" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-500/40 rounded-br-3xl" />
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-[10px] text-yellow-500/40 uppercase font-mono tracking-[0.4em] mb-2 block">Item Specification</span>
                    <h3 className="text-3xl md:text-5xl font-title text-white uppercase tracking-tighter glow-white leading-none mb-4">
                      {selectedItem.name}
                    </h3>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-yellow-500/40 to-transparent mb-6" />

                  <div className="space-y-6 flex-1">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                          <span className="text-[9px] text-white/40 uppercase font-mono block mb-1">Rarity Class</span>
                          <span className="text-sm font-title text-yellow-500 uppercase">{selectedItem.rarity || 'Common'}</span>
                        </div>
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                          <span className="text-[9px] text-white/40 uppercase font-mono block mb-1">Module Type</span>
                          <span className="text-sm font-title text-cyan-400 uppercase">{selectedItem.type}</span>
                        </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-yellow-500/20" />
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed font-display italic">
                        "{selectedItem.description || 'Standard procurement item. Reliable hardware for the discerning traveler.'}"
                      </p>
                    </div>

                    {selectedItem.dmg && (
                      <div className="flex items-center gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                          <Zap size={18} className="text-red-500" />
                          <div className="flex flex-col">
                             <span className="text-[9px] text-red-500 uppercase font-mono">Offensive Rating</span>
                             <span className="text-xl font-title text-white">DAMAGE {selectedItem.dmg}</span>
                          </div>
                      </div>
                    )}

                    {selectedItem.armor && (
                      <div className="flex items-center gap-3 p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
                          <ShieldCheck size={18} className="text-cyan-400" />
                          <div className="flex flex-col">
                             <span className="text-[9px] text-cyan-400 uppercase font-mono">Defensive Rating</span>
                             <span className="text-xl font-title text-white">ARMOR {selectedItem.armor}</span>
                          </div>
                      </div>
                    )}

                    {selectedItem.abilities && selectedItem.abilities.length > 0 && (
                      <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
                           <span className="text-[9px] text-green-500 uppercase font-mono block mb-2 tracking-widest">Integrated Abilities</span>
                           <div className="flex flex-wrap gap-2">
                             {selectedItem.abilities.map(a => (
                               <span key={a} className="text-[9px] px-2 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/20 uppercase font-bold tracking-widest">
                                 {a}
                               </span>
                             ))}
                           </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border-2 border-white/5 shadow-inner">
                        <div className="flex items-center gap-3 text-xs font-mono text-white/40 uppercase tracking-widest">
                           <ShoppingCart size={18} className="text-yellow-500/50" /> Transfer Cost
                        </div>
                        <div className={cn("flex items-center gap-2 font-title text-3xl", activeTab === 'buy' ? "text-yellow-500" : "text-cyan-500")}>
                            <Coins size={24} />
                            {activeTab === "buy" ? calculateBuyPrice(selectedItem.price) : calculateSellPrice(selectedItem)}
                        </div>
                    </div>

                    <button
                      onClick={() => activeTab === "buy" ? handleBuy(selectedItem) : handleSell(selectedItem)}
                      disabled={activeTab === "buy" && gameState.credits < calculateBuyPrice(selectedItem.price)}
                      className={cn(
                        "w-full py-6 rounded-2xl font-title uppercase tracking-[0.3em] text-lg flex items-center justify-center gap-3 transition-all",
                        activeTab === "buy" 
                          ? (gameState.credits >= calculateBuyPrice(selectedItem.price) ? "bg-yellow-500 text-black hover:scale-[1.02] shadow-[0_10px_40px_rgba(234,179,8,0.4)] active:scale-95" : "bg-gray-900 text-white/20 cursor-not-allowed border border-white/5")
                          : "bg-black text-cyan-500 border-2 border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 active:scale-95"
                      )}
                    >
                      {activeTab === "buy" ? (
                        <>
                          <ShoppingBag size={22} strokeWidth={2} /> Transfer Ownership
                        </>
                      ) : (
                        <>
                          <TrendingDown size={22} strokeWidth={2} /> Process Liquidation
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-12">
                  <div className="relative mb-8">
                    <Package size={120} className="text-yellow-500/5 animate-pulse" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-24 h-24 border-2 border-dashed border-yellow-500/20 rounded-full animate-spin-slow" />
                    </div>
                  </div>
                  <h4 className="text-sm font-title text-yellow-500/40 uppercase tracking-[0.5em] mb-2">Awaiting Target Selection</h4>
                  <p className="text-[10px] font-mono text-white/10 uppercase tracking-widest max-w-[200px]">Select a manifest entry to initiate technical inspection and transaction protocol.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Technical Rail */}
        <div className="px-6 py-3 bg-black border-t border-yellow-500/20 flex items-center justify-between text-[8px] font-mono whitespace-nowrap overflow-hidden">
          <div className="flex gap-4 text-yellow-500/30 uppercase tracking-widest">
            <span>UPLINK ATTEMPT: OK</span>
            <span>DATA-STREAM: ENCRYPTED</span>
            <span>LICENSE: 094-TATOOINE-CITY-HUB</span>
          </div>
          <div className="flex gap-2 text-cyan-500/40 uppercase tracking-widest ml-12">
            <span className="animate-pulse">● LIVE MARKET FEED ACTIVATED</span>
            <span className="hidden md:block">|</span>
            <span className="hidden md:block">SECURE TRANSACTION BUFFER: READY</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
