
import React, { useState, useEffect } from 'react';
import { Player, Intensity, GameMode, CardType, GameState, CardContent, Difficulty } from './types';
import { PlayerSetup } from './components/PlayerSetup';
import { Wheel } from './components/Wheel';
import { GameCard } from './components/GameCard';
import { Settings } from './components/Settings';
import { FALLBACK_CARDS, CARD_STYLES, TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [state, setState] = useState<GameState>(() => {
    const savedTheme = localStorage.getItem('spin_reveal_theme');
    const isDarkMode = savedTheme ? JSON.parse(savedTheme) : true;
    const savedLang = localStorage.getItem('spin_reveal_lang') as 'en' | 'ar' | 'fr' | null;
    
    return {
      players: [],
      selectedIntensity: Intensity.CASUAL,
      selectedDifficulty: Difficulty.EASY,
      currentPlayerIndex: null,
      history: [],
      mode: GameMode.SETUP,
      language: savedLang || 'en',
      isDarkMode
    };
  });

  const [isSpinning, setIsSpinning] = useState(false);
  const [activeCard, setActiveCard] = useState<CardContent | null>(null);
  const [loadingCard, setLoadingCard] = useState(false);
  const [lastMode, setLastMode] = useState<GameMode>(GameMode.SETUP);

  useEffect(() => {
    localStorage.setItem('spin_reveal_theme', JSON.stringify(state.isDarkMode));
  }, [state.isDarkMode]);

  useEffect(() => {
    localStorage.setItem('spin_reveal_lang', state.language);
  }, [state.language]);

  const handleStart = (players: Player[], intensity: Intensity) => {
    setState(prev => ({
      ...prev,
      players,
      selectedIntensity: intensity,
      mode: GameMode.SPINNING
    }));
  };

  const onSpinFinished = (index: number) => {
    setIsSpinning(false);
    setState(prev => ({
      ...prev,
      currentPlayerIndex: index,
      mode: GameMode.CATEGORY_SELECT
    }));
  };

  const selectCategory = (type: CardType) => {
    if (state.currentPlayerIndex === null) return;
    setLoadingCard(true);
    setTimeout(() => {
      const content = getFallback(type);
      setActiveCard(content);
      setLoadingCard(false);
      setState(prev => ({ ...prev, mode: GameMode.REVEAL }));
    }, 400);
  };

  const getFallback = (type: CardType): CardContent => {
    const langPool = FALLBACK_CARDS[state.language] || FALLBACK_CARDS['en'];
    const diffPool = langPool[state.selectedDifficulty] || langPool[Difficulty.EASY];
    const intensityPool = diffPool[state.selectedIntensity] || diffPool[Intensity.CASUAL];
    const pool = intensityPool[type];
    const text = pool[Math.floor(Math.random() * pool.length)];
    
    return {
      type,
      title: TRANSLATIONS[state.language].categories[type],
      description: text,
      difficulty: state.selectedDifficulty
    };
  };

  const openSettings = () => {
    setLastMode(state.mode);
    setState(prev => ({ ...prev, mode: GameMode.SETTINGS }));
  };

  const themeClasses = state.isDarkMode 
    ? "bg-slate-950 text-white" 
    : "bg-slate-50 text-slate-900";

  const t = TRANSLATIONS[state.language];
  const isRtl = state.language === 'ar';

  return (
    <div className={`h-[100dvh] w-full flex flex-col overflow-hidden relative transition-colors duration-500 ${themeClasses}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className={`absolute top-[-5%] left-[-10%] w-[50%] h-[30%] blur-[100px] rounded-full transition-opacity duration-1000 ${state.isDarkMode ? 'bg-emerald-500/10' : 'bg-emerald-500/5'}`}></div>
        <div className={`absolute bottom-[-5%] right-[-10%] w-[50%] h-[30%] blur-[100px] rounded-full transition-opacity duration-1000 ${state.isDarkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'}`}></div>
      </div>

      {state.mode === GameMode.SETTINGS && (
        <Settings 
          state={state} 
          onUpdate={(u) => setState(prev => ({...prev, ...u}))} 
          onClose={() => setState(prev => ({ ...prev, mode: lastMode }))} 
        />
      )}

      {state.mode === GameMode.SETUP && (
        <PlayerSetup onStart={handleStart} isDarkMode={state.isDarkMode} language={state.language} />
      )}

      {(state.mode === GameMode.SPINNING || state.mode === GameMode.CATEGORY_SELECT) && (
        <div className="flex-1 flex flex-col w-full max-w-lg mx-auto p-6 pt-10">
          <header className="flex items-center justify-between mb-8 px-2">
            <button 
              onClick={() => setState(prev => ({ ...prev, mode: GameMode.SETUP }))}
              className={`w-11 h-11 flex items-center justify-center rounded-2xl shadow-sm active:scale-90 transition-all ${state.isDarkMode ? 'bg-slate-900 text-slate-400 border border-slate-800' : 'bg-white text-slate-500 border border-slate-200'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
            </button>
            <div className="text-center">
              <h1 className="text-3xl bangers tracking-widest leading-none drop-shadow-lg">
                {t.title}
              </h1>
              <div className="flex gap-2 justify-center mt-2">
                <span className="text-[10px] font-black uppercase text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">{state.selectedIntensity}</span>
                <span className="text-[10px] font-black uppercase text-blue-500 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/20">{state.selectedDifficulty}</span>
              </div>
            </div>
            <button 
              onClick={openSettings}
              className={`w-11 h-11 flex items-center justify-center rounded-2xl shadow-sm active:scale-90 transition-all ${state.isDarkMode ? 'bg-slate-900 text-slate-400 border border-slate-800' : 'bg-white text-slate-500 border border-slate-200'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM227,152.05l-20,3.31a88,88,0,0,1-13.84,33.43l11,17a12,12,0,0,1-1.78,15l-19.14,19.14a12,12,0,0,1-15,1.78l-17-11a88,88,0,0,1-33.43,13.84l-3.31,20a12,12,0,0,1-11.85,10H79.35a12,12,0,0,1-11.85-10l-3.31-20a88,88,0,0,1-33.43-13.84l-17,11a12,12,0,0,1-15-1.78L-10.39,219.86a12,12,0,0,1-1.78-15l11-17A88,88,0,0,1-15,154.43l-20-3.31a12,12,0,0,1-10-11.85V112.72a12,12,0,0,1,10-11.85l20-3.31a88,88,0,0,1,13.84-33.43l-11-17a12,12,0,0,1,1.78-15l19.14-19.14a12,12,0,0,1,15-1.78l17,11a88,88,0,0,1,33.43-13.84l3.31-20a12,12,0,0,1,11.85-10h24.65a12,12,0,0,1,11.85,10l3.31,20a88,88,0,0,1,33.43,13.84l17-11a12,12,0,0,1,15,1.78l19.14,19.14a12,12,0,0,1,1.78,15l-11,17A88,88,0,0,1,215,101.57l20,3.31a12,12,0,0,1,10,11.85v23.47A12,12,0,0,1,227,152.05Z" opacity="0.2"></path><path d="M239.11,108l-23.71-3.95A79.52,79.52,0,0,0,203,76.51l13-20a16,16,0,0,0-2.37-20l-19.14-19.14a16,16,0,0,0-20-2.37l-20,13A79.52,79.52,0,0,0,128.32,16.89L124.37-6.82A16,16,0,0,0,108.52-20.82H83.87a16,16,0,0,0-15.85,14L64.07,16.89A79.52,79.52,0,0,0,36.51,29.89l-20-13a16,16,0,0,0-20,2.37L-22.63,38.4a16,16,0,0,0-2.37,20l13,20A79.52,79.52,0,0,0-25,108.43l-23.71,4a16,16,0,0,0-14,15.85v24.65a16,16,0,0,0,14,15.85l23.71,4A79.52,79.52,0,0,0-12,203l-13,20a16,16,0,0,0,2.37,20l19.14,19.14a16,16,0,0,0,20,2.37l20-13a79.52,79.52,0,0,0,27.56,13l3.95,23.71a16,16,0,0,0,15.85,14h24.65a16,16,0,0,0,15.85-14l3.95-23.71A79.52,79.52,0,0,0,176,252.63l20,13a16,16,0,0,0,20-2.37l19.14-19.14a16,16,0,0,0,2.37-20l-13-20a79.52,79.52,0,0,0,13-27.56l23.71-4a16,16,0,0,0,14-15.85V123.85A16,16,0,0,0,239.11,108ZM236,148.5,212.29,152.46a8,8,0,0,0-6.52,6.52,95.5,95.5,0,0,1-15.06,36.33,8,8,0,0,0,1,9.08l13.11,20.21L185.64,243.78,165.43,230.67a8,8,0,0,0-9.08-1,95.5,95.5,0,0,1-36.33,15.06,8,8,0,0,0-6.52,6.52L109.54,275H82.85l-4-23.71a8,8,0,0,0-6.52-6.52,95.5,95.5,0,0,1-36.33-15.06,8,8,0,0,0-9.08,1L2.73,243.78-16.41,224.64l13.11-20.21a8,8,0,0,0,1-9.08A95.5,95.5,0,0,1-17.36,159a8,8,0,0,0-6.52-6.52L-47.59,148.5V121.8l23.71-4a8,8,0,0,0,6.52-6.52,95.5,95.5,0,0,1,15.06-36.33,8,8,0,0,0-1-9.08L-16.41,45.65,2.73,26.51l20.21,13.11a8,8,0,0,0,9.08-1,95.5,95.5,0,0,1,36.33-15.06,8,8,0,0,0,6.52-6.52L78.83-6.68h26.69l4,23.71a8,8,0,0,0,6.52,6.52,95.5,95.5,0,0,1,36.33,15.06,8,8,0,0,0,9.08-1l20.21-13.11,19.14,19.14-13.11,20.21a8,8,0,0,0-1,9.08,95.5,95.5,0,0,1,15.06,36.33,8,8,0,0,0,6.52,6.52l23.71,4ZM128.32,88.39a56,56,0,1,0,56,56A56.06,56.06,0,0,0,128.32,88.39Zm0,96a40,40,0,1,1,40-40A40,40,0,0,1,128.32,184.39Z"></path></svg>
            </button>
          </header>

          <div className="flex-1 flex flex-col justify-center gap-10 min-h-0 overflow-hidden">
            {state.mode === GameMode.SPINNING && (
              <div className="flex flex-col items-center justify-center animate-in fade-in duration-500">
                <Wheel 
                  players={state.players} 
                  isSpinning={isSpinning} 
                  onFinished={onSpinFinished} 
                />
                <div className="w-full mt-12 max-w-[280px]">
                  <button
                    disabled={isSpinning}
                    onClick={() => setIsSpinning(true)}
                    className={`group relative w-full py-5 rounded-3xl bangers text-3xl tracking-[0.15em] shadow-2xl transition-all active:scale-95 ${
                      isSpinning 
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed border-slate-700' 
                        : 'bg-white text-slate-900 border-b-[6px] border-slate-300 hover:brightness-105 active:border-b-0 active:translate-y-[6px]'
                    }`}
                  >
                    {isSpinning ? t.spinning : t.tapToSpin}
                  </button>
                </div>
              </div>
            )}

            {state.mode === GameMode.CATEGORY_SELECT && state.currentPlayerIndex !== null && (
              <div className="animate-in slide-in-from-bottom-12 duration-500 flex flex-col items-center px-4 overflow-y-auto pb-8">
                <div className="text-center mb-10">
                  <div className={`w-24 h-24 rounded-[2rem] mx-auto flex items-center justify-center text-4xl font-black shadow-2xl mb-4 text-white border-4 border-white/20 ${CARD_STYLES[CardType.TRUTH].color}`}>
                    {state.players[state.currentPlayerIndex].name.charAt(0).toUpperCase()}
                  </div>
                  <h2 className="text-4xl font-black mb-1 leading-tight tracking-tight">{state.players[state.currentPlayerIndex].name}</h2>
                  <p className={`${state.isDarkMode ? 'text-slate-400' : 'text-slate-500'} font-black uppercase tracking-[0.3em] text-[10px] opacity-80`}>{t.chooseChallenge}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                  {(Object.keys(CARD_STYLES) as CardType[]).map((type) => (
                    <button
                      key={type}
                      disabled={loadingCard}
                      onClick={() => selectCategory(type)}
                      className={`group relative overflow-hidden aspect-[1/1] p-4 rounded-[2.5rem] transition-all active:scale-95 flex flex-col items-center justify-center ${CARD_STYLES[type].color} shadow-xl border-b-4 border-black/20`}
                    >
                      <span className="text-5xl mb-2 drop-shadow-md group-hover:scale-110 transition-transform">{CARD_STYLES[type].icon}</span>
                      <span className="font-black text-white text-sm uppercase tracking-widest">{t.categories[type]}</span>
                      {loadingCard && <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-[4px] z-10">
                        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {state.mode === GameMode.REVEAL && activeCard && (
        <GameCard 
          content={activeCard} 
          playerName={state.players[state.currentPlayerIndex!]?.name}
          language={state.language}
          onClose={() => {
            setActiveCard(null);
            setState(prev => ({ ...prev, mode: GameMode.SPINNING }));
          }} 
        />
      )}
    </div>
  );
};

export default App;
