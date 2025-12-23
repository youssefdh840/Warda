
import React, { useState } from 'react';
import { Player, Intensity, CardType, CustomPrompt } from '../types';
import { INTENSITY_INFO, TRANSLATIONS, CARD_STYLES } from '../constants';

interface PlayerSetupProps {
  onStart: (players: Player[], intensity: Intensity, customPrompts: CustomPrompt[]) => void;
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
  
  const [customPrompts, setCustomPrompts] = useState<CustomPrompt[]>([]);
  const [isAddingPrompt, setIsAddingPrompt] = useState(false);
  const [newPromptText, setNewPromptText] = useState('');
  const [newPromptType, setNewPromptType] = useState<CardType>(CardType.TRUTH);

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

  const addCustomPrompt = () => {
    if (!newPromptText.trim()) return;
    const newPrompt: CustomPrompt = {
      id: Math.random().toString(36).substr(2, 9),
      type: newPromptType,
      text: newPromptText.trim()
    };
    setCustomPrompts([...customPrompts, newPrompt]);
    setNewPromptText('');
    setIsAddingPrompt(false);
  };

  const removeCustomPrompt = (id: string) => {
    setCustomPrompts(customPrompts.filter(p => p.id !== id));
  };

  const textPrimary = isDarkMode ? "text-white" : "text-slate-900";
  const textSecondary = isDarkMode ? "text-slate-400" : "text-slate-500";
  const bgContainer = isDarkMode ? "bg-slate-950" : "bg-white";
  const bgInput = isDarkMode ? "bg-slate-900" : "bg-slate-100";
  const borderClass = isDarkMode ? "border-slate-800" : "border-slate-200";

  return (
    <div className={`flex flex-col h-full w-full max-w-lg mx-auto overflow-hidden relative ${bgContainer}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Background Globs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full bg-glow"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full bg-glow" style={{animationDelay: '2s'}}></div>
      </div>

      <header className="pt-12 pb-6 px-6 text-center">
        <h1 className={`text-5xl bangers tracking-widest leading-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] ${textPrimary}`}>
          {t.title}
        </h1>
        <div className="h-1.5 w-16 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded-full shadow-lg shadow-emerald-500/20"></div>
      </header>
      
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-10 scroll-smooth pb-32">
        {/* Intensity Selection */}
        <section>
          <label className={`${textSecondary} font-black text-[11px] uppercase tracking-[0.25em] block mb-5 opacity-80`}>{t.intensity}</label>
          <div className="grid grid-cols-3 gap-3">
            {(Object.keys(INTENSITY_INFO) as Intensity[]).map((level) => (
              <button
                key={level}
                onClick={() => setIntensity(level)}
                className={`flex flex-col items-center justify-center py-5 rounded-[2rem] transition-all border-2 ${
                  intensity === level 
                    ? 'border-emerald-500 bg-emerald-500/10 shadow-xl shadow-emerald-500/10 scale-105' 
                    : `${bgInput} ${borderClass} hover:border-slate-700`
                }`}
              >
                <span className={`text-4xl mb-2 ${intensity === level ? 'animate-bounce' : ''}`}>
                  {INTENSITY_INFO[level].emoji}
                </span>
                <span className={`text-[9px] font-black uppercase tracking-widest ${intensity === level ? 'text-emerald-400' : textSecondary}`}>
                  {isRtl ? (level === Intensity.CASUAL ? 'عادي' : level === Intensity.BOLD ? 'جرئ' : 'قوي') : INTENSITY_INFO[level].label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Player List */}
        <section>
          <div className="flex justify-between items-end mb-5">
            <label className={`${textSecondary} font-black text-[11px] uppercase tracking-[0.25em] opacity-80`}>
              {isRtl ? `اللاعبون (${players.length}/12)` : `Players (${players.length}/12)`}
            </label>
          </div>
          <div className="space-y-3">
            {players.map((p, idx) => (
              <div key={p.id} className={`group flex items-center gap-4 p-4 rounded-3xl border ${bgInput} ${borderClass} transition-all hover:border-slate-700 animate-in slide-in-from-left-4 duration-300`}>
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm text-white shadow-lg ${isDarkMode ? 'bg-slate-800' : 'bg-slate-300'}`}>
                  {idx + 1}
                </div>
                <input 
                  value={p.name}
                  onChange={(e) => {
                    const newPlayers = [...players];
                    const pIdx = newPlayers.findIndex(pl => pl.id === p.id);
                    newPlayers[pIdx].name = e.target.value;
                    setPlayers(newPlayers);
                  }}
                  className={`flex-1 bg-transparent border-none focus:ring-0 font-extrabold text-base outline-none ${textPrimary}`}
                />
                <button 
                  onClick={() => removePlayer(p.id)}
                  className="w-10 h-10 flex items-center justify-center rounded-2xl text-slate-500 hover:text-rose-500 hover:bg-rose-500/10 transition-all active:scale-90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                </button>
              </div>
            ))}
          </div>

          {players.length < 12 && (
            <div className="flex gap-3 mt-5">
              <input
                placeholder={isRtl ? "أدخل الاسم..." : "Enter name..."}
                value={newPlayerName}
                onChange={(e) => setNewPlayerName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addPlayer()}
                className={`flex-1 border-2 rounded-3xl px-6 py-4.5 focus:border-emerald-500 outline-none transition-all shadow-inner ${bgInput} ${borderClass} ${textPrimary} font-bold text-sm`}
              />
              <button 
                onClick={addPlayer}
                className="bg-emerald-500 text-white w-14 h-14 rounded-3xl flex items-center justify-center font-black shadow-lg shadow-emerald-500/30 active:scale-90 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
              </button>
            </div>
          )}
        </section>

        {/* Custom Cards Section */}
        <section className="pt-6 border-t border-slate-800/40">
          <div className="flex items-center justify-between mb-5">
            <label className={`${textSecondary} font-black text-[11px] uppercase tracking-[0.25em] opacity-80`}>
              {isRtl ? 'البطاقات المخصصة' : 'Custom Cards'}
            </label>
            <button 
              onClick={() => setIsAddingPrompt(true)}
              className="text-[11px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20 active:scale-95 transition-all shadow-sm"
            >
              {isRtl ? '+ أضف تحدي' : '+ Add Card'}
            </button>
          </div>

          {customPrompts.length > 0 ? (
            <div className="space-y-3">
              {customPrompts.map((cp) => (
                <div key={cp.id} className={`flex items-center gap-4 p-4 rounded-3xl border ${bgInput} ${borderClass} animate-in zoom-in-95 duration-200 shadow-sm`}>
                   <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl shadow-lg border border-white/10 ${CARD_STYLES[cp.type].color}`}>
                    {CARD_STYLES[cp.type].icon}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className={`text-sm font-bold truncate ${textPrimary}`}>{cp.text}</p>
                    <p className="text-[9px] uppercase font-black tracking-widest text-slate-500">{t.categories[cp.type]}</p>
                  </div>
                  <button 
                    onClick={() => removeCustomPrompt(cp.id)}
                    className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-rose-500 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className={`text-center py-10 rounded-3xl border-2 border-dashed ${borderClass} opacity-60`}>
              <p className={`text-xs italic ${textSecondary}`}>
                {isRtl ? 'لم تضف أي تحديات مخصصة بعد' : 'No custom cards yet. Add your own spice!'}
              </p>
            </div>
          )}
        </section>
      </div>

      {/* Footer Buttons */}
      <div className={`fixed bottom-0 left-0 w-full p-6 border-t ${borderClass} ${bgContainer} backdrop-blur-xl bg-opacity-95 flex items-center gap-4 z-50`}>
        {/* Instagram Button */}
        <a 
          href="https://www.instagram.com/dh_youssef_8_4?igsh=cXhybnJudHQ1MGhp"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-shrink-0 w-16 h-16 rounded-3xl flex items-center justify-center shadow-xl transition-all active:scale-90 border-2 ${isDarkMode ? 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700' : 'bg-slate-50 text-slate-500 border-slate-200'}`}
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
          </svg>
        </a>

        {/* Start Game Button */}
        <button
          onClick={() => onStart(players, intensity, customPrompts)}
          className="flex-1 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-black rounded-3xl shadow-2xl active:scale-95 transition-all text-xl uppercase tracking-[0.2em] border-b-4 border-black/20 hover:brightness-110 active:border-b-0 bangers"
        >
          {t.letsSpin}
        </button>
      </div>

      {/* Add Custom Prompt Modal */}
      {isAddingPrompt && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className={`w-full max-w-sm rounded-[3rem] p-8 border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} shadow-2xl`}>
            <h2 className={`text-3xl bangers tracking-widest mb-8 text-center ${textPrimary}`}>
              {isRtl ? 'أضف تحديك الخاص' : 'NEW CUSTOM CARD'}
            </h2>
            
            <div className="space-y-8">
              <div>
                <label className={`${textSecondary} font-black text-[10px] uppercase tracking-[0.3em] block mb-4 opacity-70`}>
                  {isRtl ? 'اختر الفئة' : 'Select Category'}
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {(Object.keys(CARD_STYLES) as CardType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setNewPromptType(type)}
                      className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all ${
                        newPromptType === type 
                          ? `${CARD_STYLES[type].color} border-white shadow-lg scale-110 z-10` 
                          : `${bgInput} ${borderClass} opacity-30 grayscale`
                      }`}
                    >
                      <span className="text-2xl">{CARD_STYLES[type].icon}</span>
                    </button>
                  ))}
                </div>
                <p className="text-center mt-3 font-black text-[10px] uppercase tracking-widest text-emerald-500">
                  {TRANSLATIONS[language].categories[newPromptType]}
                </p>
              </div>

              <div>
                <label className={`${textSecondary} font-black text-[10px] uppercase tracking-[0.3em] block mb-4 opacity-70`}>
                  {isRtl ? 'نص التحدي' : 'Challenge Text'}
                </label>
                <textarea
                  value={newPromptText}
                  onChange={(e) => setNewPromptText(e.target.value)}
                  placeholder={isRtl ? "اكتب سؤالك هنا..." : "Enter your challenge text..."}
                  className={`w-full h-32 p-5 rounded-3xl border-2 outline-none focus:border-emerald-500 transition-all ${bgInput} ${borderClass} ${textPrimary} font-bold text-base resize-none shadow-inner`}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setIsAddingPrompt(false)}
                  className={`flex-1 py-5 rounded-3xl font-black uppercase text-xs tracking-widest ${textSecondary} ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-200'} active:scale-95 transition-all`}
                >
                  {isRtl ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  onClick={addCustomPrompt}
                  className="flex-1 py-5 rounded-3xl font-black uppercase text-xs tracking-widest bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 active:scale-95 transition-all"
                >
                  {isRtl ? 'إضافة' : 'Save Card'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
