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
    { id: '1', name: 'Player 1' },
    { id: '2', name: 'Player 2' }
  ]);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [intensity, setIntensity] = useState<Intensity>(Intensity.CASUAL);

  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  const addPlayer = () => {
    if (players.length >= 12) return;
    const name = newPlayerName.trim() || `${isRtl ? 'لاعب' : 'Player'} ${players.length + 1}`;
    setPlayers([...players, { id: Math.random().toString(36).substr(2, 9), name }]);
    setNewPlayerName('');
  };

  const removePlayer = (id: string) => {
    if (players.length <= 2) return;
    setPlayers(players.filter(p => p.id !== id));
  };

  const textPrimary = isDarkMode ? "text-white" : "text-slate-900";
  const textSecondary = isDarkMode ? "text-slate-400" : "text-slate-500";
  const bgContainer = isDarkMode ? "bg-slate-900/50" : "bg-white/80";
  const bgInput = isDarkMode ? "bg-slate-800/80" : "bg-slate-100";
  const borderClass = isDarkMode ? "border-slate-700/50" : "border-slate-200";

  return (
    <div className={`flex flex-col h-full max-w-lg mx-auto p-8 rounded-[2.5rem] shadow-2xl backdrop-blur-xl border border-white/5 overflow-y-auto ${bgContainer}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <header className="mb-10 text-center">
        <h1 className={`text-5xl bangers tracking-wider mb-2 ${textPrimary}`}>
          {t.title.split(' & ')[0]} <span className="text-emerald-500">&</span> {t.title.split(' & ')[1] || ''}
        </h1>
        <div className="h-1 w-20 bg-emerald-500/50 mx-auto rounded-full"></div>
      </header>
      
      <section className="mb-10">
        <label className={`${textSecondary} font-black text-xs uppercase tracking-[0.2em] block mb-5 opacity-60`}>{t.intensity}</label>
        <div className="grid grid-cols-3 gap-4">
          {(Object.keys(INTENSITY_INFO) as Intensity[]).map((level) => (
            <button
              key={level}
              onClick={() => setIntensity(level)}
              className={`flex flex-col items-center p-4 rounded-3xl transition-all border-2 relative overflow-hidden group ${
                intensity === level 
                  ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/20' 
                  : `${bgInput} ${borderClass}`
              }`}
            >
              <span className={`text-4xl mb-2 transition-transform group-hover:scale-110 ${intensity === level ? 'scale-110' : ''}`}>
                {INTENSITY_INFO[level].emoji}
              </span>
              <span className={`text-[10px] font-black uppercase tracking-widest ${intensity === level ? 'text-emerald-500' : textSecondary}`}>
                {isRtl ? (level === Intensity.CASUAL ? 'عادي' : level === Intensity.BOLD ? 'جرئ' : 'قوي') : INTENSITY_INFO[level].label}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="flex-1">
        <label className={`${textSecondary} font-black text-xs uppercase tracking-[0.2em] block mb-5 opacity-60`}>
          {isRtl ? `اللاعبون (${players.length}/12)` : `Players (${players.length}/12)`}
        </label>
        <div className="space-y-4 mb-8">
          {players.map((p) => (
            <div key={p.id} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all animate-in fade-in slide-in-from-bottom-2 ${bgInput} ${borderClass}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-white shadow-inner ${isDarkMode ? 'bg-slate-700' : 'bg-slate-400'}`}>
                {p.name.charAt(0)}
              </div>
              <input 
                value={p.name}
                onChange={(e) => {
                  const newPlayers = [...players];
                  const idx = newPlayers.findIndex(pl => pl.id === p.id);
                  newPlayers[idx].name = e.target.value;
                  setPlayers(newPlayers);
                }}
                className={`flex-1 bg-transparent border-none focus:ring-0 font-bold ${textPrimary}`}
              />
              <button 
                onClick={() => removePlayer(p.id)}
                className="w-8 h-8 flex items-center justify-center rounded-full text-slate-500 hover:text-rose-500 hover:bg-rose-500/10 transition-all"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {players.length < 12 && (
          <div className="flex gap-3">
            <input
              placeholder={isRtl ? "أدخل الاسم..." : "Enter name..."}
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addPlayer()}
              className={`flex-1 border-2 rounded-2xl px-6 py-4 focus:border-emerald-500 outline-none transition-all ${bgInput} ${borderClass} ${textPrimary} font-bold`}
            />
            <button 
              onClick={addPlayer}
              className="bg-emerald-500 hover:bg-emerald-400 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-black shadow-xl shadow-emerald-500/20 active:scale-90 transition-all"
            >
              +
            </button>
          </div>
        )}
      </section>

      <button
        onClick={() => onStart(players, intensity)}
        className="mt-10 bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-black py-5 rounded-3xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all text-xl uppercase tracking-[0.1em] border-t border-white/20"
      >
        {t.letsSpin}
      </button>
    </div>
  );
};
