
import React, { useState } from 'react';
import { Player, Intensity } from '../types';
import { INTENSITY_INFO, UI_TEXT } from '../constants';

interface PlayerSetupProps {
  onStart: (players: Player[], intensity: Intensity) => void;
  isDarkMode: boolean;
  language?: 'en' | 'ar' | 'fr';
}

export const PlayerSetup: React.FC<PlayerSetupProps> = ({ onStart, isDarkMode, language = 'en' }) => {
  const [players, setPlayers] = useState<Player[]>([
    { id: '1', name: 'Player 1' },
    { id: '2', name: 'Player 2' }
  ]);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [intensity, setIntensity] = useState<Intensity>(Intensity.CASUAL);

  const t = UI_TEXT[language] || UI_TEXT.en;

  const addPlayer = () => {
    if (players.length >= 12) return;
    const name = newPlayerName.trim() || `${t.players.slice(0, -1)} ${players.length + 1}`;
    setPlayers([...players, { id: Math.random().toString(36).substr(2, 9), name }]);
    setNewPlayerName('');
  };

  const removePlayer = (id: string) => {
    if (players.length <= 2) return;
    setPlayers(players.filter(p => p.id !== id));
  };

  const textPrimary = isDarkMode ? "text-white" : "text-slate-900";
  const textSecondary = isDarkMode ? "text-slate-400" : "text-slate-500";
  const bgContainer = isDarkMode ? "bg-slate-900" : "bg-white";
  const bgInput = isDarkMode ? "bg-slate-800" : "bg-slate-100";
  const borderClass = isDarkMode ? "border-slate-700" : "border-slate-200";

  return (
    <div className={`flex flex-col h-full max-w-lg mx-auto p-6 rounded-3xl shadow-xl overflow-y-auto ${bgContainer}`}>
      <h1 className={`text-4xl bangers text-center mb-8 tracking-wider ${textPrimary}`}>
        Spin <span className="text-emerald-400">&</span> Reveal
      </h1>
      
      <section className="mb-8">
        <label className={`${textSecondary} font-bold text-sm uppercase tracking-widest block mb-4`}>{t.gameIntensity}</label>
        <div className="grid grid-cols-3 gap-3">
          {(Object.keys(INTENSITY_INFO) as Intensity[]).map((level) => {
            const info = INTENSITY_INFO[level];
            const levelLabel = typeof info.label === 'object' ? (info.label[language] || info.label.en) : info.label;
            return (
              <button
                key={level}
                onClick={() => setIntensity(level)}
                className={`flex flex-col items-center p-3 rounded-2xl transition-all border-2 ${
                  intensity === level 
                    ? 'border-emerald-400 bg-emerald-400/10 scale-105 shadow-md' 
                    : `${bgInput} ${borderClass}`
                }`}
              >
                <span className="text-3xl mb-1">{info.emoji}</span>
                <span className={`text-xs font-bold ${intensity === level ? 'text-emerald-500' : textPrimary}`}>{levelLabel}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="flex-1">
        <label className={`${textSecondary} font-bold text-sm uppercase tracking-widest block mb-4`}>{t.players} ({players.length}/12)</label>
        <div className="space-y-3 mb-6">
          {players.map((p) => (
            <div key={p.id} className={`flex items-center gap-3 p-3 rounded-xl border animate-in fade-in slide-in-from-bottom-2 ${bgInput} ${borderClass}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${isDarkMode ? 'bg-slate-600' : 'bg-slate-400'}`}>
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
                className={`flex-1 bg-transparent border-none focus:ring-0 font-semibold ${textPrimary}`}
              />
              <button 
                onClick={() => removePlayer(p.id)}
                className="text-slate-500 hover:text-rose-400 transition-colors"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {players.length < 12 && (
          <div className="flex gap-2">
            <input
              placeholder={t.enterName}
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addPlayer()}
              className={`flex-1 border-2 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none transition-colors ${bgInput} ${borderClass} ${textPrimary}`}
            />
            <button 
              onClick={addPlayer}
              className="bg-emerald-500 hover:bg-emerald-400 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform"
            >
              +
            </button>
          </div>
        )}
      </section>

      <button
        onClick={() => onStart(players, intensity)}
        className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-4 rounded-2xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-xl"
      >
        {t.letsSpin}
      </button>
    </div>
  );
};
