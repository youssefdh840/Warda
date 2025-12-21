import React, { useState } from 'react';
import { CardType, CardContent } from '../types';
import { CARD_STYLES, TRANSLATIONS } from '../constants';

interface GameCardProps {
  content: CardContent;
  onClose: () => void;
  playerName?: string;
  language: 'en' | 'ar' | 'fr';
}

export const GameCard: React.FC<GameCardProps> = ({ content, onClose, playerName, language }) => {
  const [revealed, setRevealed] = useState(false);
  const [confirmedPrivate, setConfirmedPrivate] = useState(false);
  const style = CARD_STYLES[content.type];
  const isSecret = content.type === CardType.SECRET;
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  const handleReveal = () => {
    if (!revealed) {
      setRevealed(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full max-w-sm aspect-[3/4.5] perspective-2000">
        <div className={`relative w-full h-full transition-all duration-700 transform-style-3d cursor-pointer shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] rounded-[2.5rem] ${revealed ? 'rotate-y-180' : ''}`}
             onClick={handleReveal}>
          
          {/* Front - Mystery State */}
          <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center bg-slate-900 rounded-[2.5rem] border-2 border-slate-800 p-8">
            <div className={`w-32 h-32 rounded-full ${style.color} flex items-center justify-center text-6xl mb-8 shadow-2xl animate-pulse`}>
              {style.icon}
            </div>
            <h2 className="text-3xl font-black text-white text-center tracking-tight mb-4 uppercase">
              {t.categories[content.type]}
            </h2>
            {isSecret && (
              <div className="bg-sky-500/20 text-sky-400 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 border border-sky-500/30">
                {t.privateMission}
              </div>
            )}
            <p className="text-slate-500 text-center font-bold uppercase tracking-widest text-xs animate-bounce mt-4">{t.tapReveal}</p>
          </div>

          {/* Back - Content State */}
          <div className={`absolute inset-0 backface-hidden rotate-y-180 flex flex-col bg-gradient-to-br ${style.gradient} rounded-[2.5rem] p-8 overflow-hidden border-2 border-white/10`}>
            {/* Decorative Shine */}
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 rotate-45 pointer-events-none"></div>
            
            <div className="relative flex-1 flex flex-col items-center justify-center text-center">
              
              {isSecret && !confirmedPrivate ? (
                <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500" dir={isRtl ? 'rtl' : 'ltr'}>
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-5xl mb-8 backdrop-blur-xl border border-white/30">
                    🤫
                  </div>
                  <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-wider">
                    {t.secretMission}
                  </h3>
                  <p className="text-white/90 font-bold mb-10 text-lg leading-relaxed">
                    {t.passPhone} <span className="text-white underline decoration-wavy">{playerName || ''}</span>.<br/>{t.lookAway}
                  </p>
                  <button
                    onClick={(e) => { e.stopPropagation(); setConfirmedPrivate(true); }}
                    className="bg-white text-slate-900 font-black px-10 py-5 rounded-3xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-sm"
                  >
                    {t.iAmAlone}
                  </button>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 flex flex-col items-center" dir={isRtl ? 'rtl' : 'ltr'}>
                  <span className="text-6xl mb-8 bg-white/20 p-6 rounded-[2rem] backdrop-blur-2xl border border-white/30">
                    {style.icon}
                  </span>
                  <h3 className="text-lg font-black text-white/60 mb-4 uppercase tracking-[0.3em]">
                    {content.type === CardType.TRUTH ? (isRtl ? 'صراحة' : 'Truth') : (isRtl ? 'تحدي' : 'Dare')}
                  </h3>
                  <p className="text-2xl font-black text-white leading-tight px-2 drop-shadow-lg">
                    {content.description}
                  </p>
                </div>
              )}
            </div>

            {(confirmedPrivate || !isSecret) && (
              <button
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="relative mt-auto w-full bg-white/20 hover:bg-white/30 text-white font-black py-5 rounded-3xl backdrop-blur-xl border border-white/40 transition-all uppercase tracking-widest text-sm shadow-xl"
              >
                {t.done}
              </button>
            )}
          </div>
        </div>
      </div>
      
      <style>{`
        .perspective-2000 { perspective: 2000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};
