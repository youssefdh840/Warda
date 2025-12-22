
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-300 touch-none">
      <div className="w-full max-w-sm h-[70dvh] perspective-2000">
        <div className={`relative w-full h-full transition-all duration-700 transform-style-3d cursor-pointer shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] rounded-[3rem] ${revealed ? 'rotate-y-180' : ''}`}
             onClick={handleReveal}>
          
          {/* Front - Mystery State */}
          <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center bg-slate-900 rounded-[3rem] border-4 border-slate-800/50 p-8">
            <div className={`w-28 h-28 rounded-full ${style.color} flex items-center justify-center text-5xl mb-8 shadow-2xl animate-pulse`}>
              {style.icon}
            </div>
            <h2 className="text-3xl font-black text-white text-center tracking-tight mb-2 uppercase">
              {t.categories[content.type]}
            </h2>
            {isSecret && (
              <div className="bg-sky-500/20 text-sky-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-sky-500/30">
                {t.privateMission}
              </div>
            )}
            <p className="text-slate-500 text-center font-black uppercase tracking-widest text-[10px] animate-bounce mt-4">{t.tapReveal}</p>
          </div>

          {/* Back - Content State */}
          <div className={`absolute inset-0 backface-hidden rotate-y-180 flex flex-col bg-gradient-to-br ${style.gradient} rounded-[3rem] p-8 overflow-hidden border-4 border-white/20`}>
            {/* Shimmer Effect */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-white/5 rotate-45 pointer-events-none"></div>
            
            <div className="relative flex-1 flex flex-col items-center justify-center text-center">
              
              {isSecret && !confirmedPrivate ? (
                <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500" dir={isRtl ? 'rtl' : 'ltr'}>
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-4xl mb-6 backdrop-blur-xl border border-white/30">
                    🤫
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wider">
                    {t.secretMission}
                  </h3>
                  <p className="text-white/90 font-bold mb-8 text-base leading-snug px-4">
                    {t.passPhone} <span className="text-white underline decoration-wavy underline-offset-4">{playerName || ''}</span>.<br/>{t.lookAway}
                  </p>
                  <button
                    onClick={(e) => { e.stopPropagation(); setConfirmedPrivate(true); }}
                    className="bg-white text-slate-900 font-black px-8 py-4 rounded-[2rem] shadow-xl active:scale-95 transition-all uppercase tracking-widest text-xs"
                  >
                    {t.iAmAlone}
                  </button>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex flex-col items-center" dir={isRtl ? 'rtl' : 'ltr'}>
                  <span className="text-5xl mb-6 bg-white/10 p-5 rounded-[2.5rem] backdrop-blur-2xl border border-white/20 shadow-lg">
                    {style.icon}
                  </span>
                  <h3 className="text-xs font-black text-white/50 mb-4 uppercase tracking-[0.4em]">
                    {content.type === CardType.TRUTH ? (isRtl ? 'صراحة' : 'Truth') : (isRtl ? 'تحدي' : 'Dare')}
                  </h3>
                  <div className="min-h-[6rem] flex items-center px-4">
                    <p className="text-xl font-black text-white leading-tight drop-shadow-md">
                      {content.description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {(confirmedPrivate || !isSecret) && (
              <button
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="relative mt-8 w-full bg-white/10 active:bg-white/20 text-white font-black py-5 rounded-[2rem] backdrop-blur-xl border border-white/30 transition-all uppercase tracking-widest text-sm shadow-xl"
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
