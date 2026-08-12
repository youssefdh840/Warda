import React, { useState } from 'react';
import { CardType, CardContent } from '../types';
import { CARD_STYLES, CARD_TITLES, UI_TEXT } from '../constants';

interface GameCardProps {
  content: CardContent;
  onClose: () => void;
  playerName?: string;
  language?: 'en' | 'ar' | 'fr';
}

export const GameCard: React.FC<GameCardProps> = ({ content, onClose, playerName, language = 'en' }) => {
  const [revealed, setRevealed] = useState(false);
  const [confirmedPrivate, setConfirmedPrivate] = useState(false);
  const style = CARD_STYLES[content.type];
  const isSecret = content.type === CardType.SECRET;
  const t = UI_TEXT[language] || UI_TEXT.en;
  const localizedCardTitle = CARD_TITLES[language]?.[content.type] || content.title || content.type;

  const handleReveal = () => {
    if (!revealed) {
      setRevealed(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-sm h-[500px] perspective-1000">
        <div className={`relative w-full h-full transition-all duration-700 transform-style-3d cursor-pointer ${revealed ? 'rotate-y-180' : ''}`}
             onClick={handleReveal}>
          
          {/* Front - Card Back Design */}
          <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center bg-slate-800 rounded-[2.5rem] border-4 border-slate-700 shadow-2xl p-8">
            <div className={`w-24 h-24 rounded-full ${style.color} flex items-center justify-center text-5xl mb-6 shadow-xl`}>
              {style.icon}
            </div>
            <h2 className="text-3xl font-black text-white text-center tracking-tight mb-2 uppercase">
              {localizedCardTitle}
            </h2>
            {isSecret && (
              <div className="bg-sky-500/20 text-sky-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                {t.privateMission}
              </div>
            )}
            <p className="text-slate-400 text-center font-medium">{t.tapToReveal}</p>
          </div>

          {/* Back - Card Front Design */}
          <div className={`absolute inset-0 backface-hidden rotate-y-180 flex flex-col bg-gradient-to-br ${style.gradient} rounded-[2.5rem] shadow-2xl p-8 overflow-hidden`}>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative flex-1 flex flex-col items-center justify-center text-center">
              
              {isSecret && !confirmedPrivate ? (
                <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl mb-6 backdrop-blur-md">
                    🤫
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wider">
                    {t.secretMission}
                  </h3>
                  <p className="text-white/80 font-medium mb-8">
                    {t.passPhone} <span className="text-white font-bold">{playerName || 'the player'}</span>. {t.everyoneElseLookAway}
                  </p>
                  <button
                    onClick={(e) => { e.stopPropagation(); setConfirmedPrivate(true); }}
                    className="bg-white text-sky-700 font-black px-8 py-4 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-sm"
                  >
                    {t.iAmAlone}
                  </button>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col items-center">
                  <span className="text-5xl mb-6 bg-white/20 p-4 rounded-3xl backdrop-blur-md">
                    {style.icon}
                  </span>
                  <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-wider">
                    {content.title || localizedCardTitle}
                  </h3>
                  <p className="text-xl font-medium text-white/90 leading-relaxed px-2">
                    {content.description}
                  </p>
                </div>
              )}
            </div>

            {(confirmedPrivate || !isSecret) && (
              <button
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="relative mt-auto w-full bg-white/20 hover:bg-white/30 text-white font-bold py-4 rounded-2xl backdrop-blur-md border border-white/30 transition-all uppercase tracking-widest text-sm"
              >
                {t.done}
              </button>
            )}
          </div>
        </div>
      </div>
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};
