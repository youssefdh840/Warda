
import React, { useState } from 'react';
import { Player, Intensity } from '../types';
import { INTENSITY_INFO, TRANSLATIONS } from '../constants';

interface PlayerSetupProps {
  onStart: (players: Player[], intensity: Intensity) => void;
  isDarkMode: boolean;
  language: 'en' | 'ar' | 'fr';
}

export const PlayerSetup: React.FC<PlayerSetupProps> = ({ onStart, isDarkMode, language }) => {
  const [players, setPlayers] = useState<Player[]>([
    { id: '1', name: language === 'ar' ? 'لاعب 1' : 'Player 1' },
    { id: '2', name: language === 'ar' ? 'لاعب 2' : 'Player 2' }
  ]);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [intensity, setIntensity] = useState<Intensity>(Intensity.CASUAL);

  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  const addPlayer = () => {
    if (players.length >= 12) return;
    const name = newPlayerName.trim() || (isRtl ? `لاعب ${players.length + 1}` : `Player ${players.length + 1}`);
    setPlayers([...players, { id: Math.random().toString(36).substr(2, 9), name }]);
    setNewPlayerName('');
  };

  const removePlayer = (id: string) => {
    if (players.length <= 2) return;
    setPlayers(players.filter(p => p.id !== id));
  };

  const textPrimary = isDarkMode ? "text-white" : "text-slate-900";
  const textSecondary = isDarkMode ? "text-slate-400" : "text-slate-500";
  const bgContainer = isDarkMode ? "bg-slate-950" : "bg-white";
  const bgInput = isDarkMode ? "bg-slate-900" : "bg-slate-100";
  const borderClass = isDarkMode ? "border-slate-800" : "border-slate-200";

  return (
    <div className={`flex flex-col h-full w-full max-w-lg mx-auto overflow-hidden ${bgContainer}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="pt-10 pb-4 px-6 text-center">
        <h1 className={`text-4xl bangers tracking-wider ${textPrimary}`}>
          {t.title}
        </h1>
        <div className="h-1 w-12 bg-emerald-500 mx-auto mt-2 rounded-full"></div>
      </header>
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-8 scroll-smooth overscroll-contain">
        {/* Intensity Selection */}
        <section>
          <label className={`${textSecondary} font-black text-[10px] uppercase tracking-[0.2em] block mb-4 opacity-70`}>{t.intensity}</label>
          <div className="grid grid-cols-3 gap-3">
            {(Object.keys(INTENSITY_INFO) as Intensity[]).map((level) => (
              <button
                key={level}
                onClick={() => setIntensity(level)}
                className={`flex flex-col items-center justify-center py-4 rounded-3xl transition-all border-2 ${
                  intensity === level 
                    ? 'border-emerald-500 bg-emerald-500/10' 
                    : `${bgInput} ${borderClass}`
                }`}
              >
                <span className={`text-3xl mb-1 ${intensity === level ? 'scale-110' : ''} transition-transform`}>
                  {INTENSITY_INFO[level].emoji}
                </span>
                <span className={`text-[8px] font-black uppercase tracking-widest ${intensity === level ? 'text-emerald-500' : textSecondary}`}>
                  {isRtl ? (level === Intensity.CASUAL ? 'عادي' : level === Intensity.BOLD ? 'جرئ' : 'قوي') : INTENSITY_INFO[level].label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Player List */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <label className={`${textSecondary} font-black text-[10px] uppercase tracking-[0.2em] opacity-70`}>
              {isRtl ? `اللاعبون (${players.length}/12)` : `Players (${players.length}/12)`}
            </label>
          </div>
          <div className="space-y-3">
            {players.map((p, idx) => (
              <div key={p.id} className={`flex items-center gap-3 p-3 rounded-2xl border ${bgInput} ${borderClass} animate-in slide-in-from-left-4 duration-300`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs text-white ${isDarkMode ? 'bg-slate-800' : 'bg-slate-400'}`}>
                  {idx + 1}
                </div>
                <input 
                  value={p.name}
                  onChange={(e) => {
                    const newPlayers = [...players];
                    const idx = newPlayers.findIndex(pl => pl.id === p.id);
                    newPlayers[idx].name = e.target.value;
                    setPlayers(newPlayers);
                  }}
                  className={`flex-1 bg-transparent border-none focus:ring-0 font-bold text-sm ${textPrimary}`}
                />
                <button 
                  onClick={() => removePlayer(p.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-slate-500 active:bg-rose-500/10 active:text-rose-500 transition-all"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {players.length < 12 && (
            <div className="flex gap-2 mt-4">
              <input
                placeholder={isRtl ? "أدخل الاسم..." : "Enter name..."}
                value={newPlayerName}
                onChange={(e) => setNewPlayerName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addPlayer()}
                className={`flex-1 border-2 rounded-2xl px-5 py-4 focus:border-emerald-500 outline-none transition-all ${bgInput} ${borderClass} ${textPrimary} font-bold text-sm`}
              />
              <button 
                onClick={addPlayer}
                className="bg-emerald-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-black shadow-lg shadow-emerald-500/20 active:scale-90 transition-all"
              >
                +
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Footer CTA */}
      <div className={`p-6 border-t ${borderClass} bg-inherit`}>
        <button
          onClick={() => onStart(players, intensity)}
          className="w-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-black py-5 rounded-[2rem] shadow-xl active:scale-95 transition-all text-lg uppercase tracking-wider border-b-4 border-black/10"
        >
          {t.letsSpin}
        </button>
      </div>
    </div>
  );
};
