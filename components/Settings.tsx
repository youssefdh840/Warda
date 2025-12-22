import React from 'react';
import { GameState, Intensity, Difficulty } from '../types';
import { INTENSITY_INFO, DIFFICULTY_INFO, TRANSLATIONS } from '../constants';

interface SettingsProps {
  state: GameState;
  onUpdate: (updates: Partial<GameState>) => void;
  onClose: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ state, onUpdate, onClose }) => {
  const containerClasses = state.isDarkMode 
    ? "bg-slate-900 shadow-emerald-500/10" 
    : "bg-white shadow-slate-200";
  
  const textPrimary = state.isDarkMode ? "text-white" : "text-slate-900";
  const textSecondary = state.isDarkMode ? "text-slate-400" : "text-slate-500";
  const sectionBg = state.isDarkMode ? "bg-slate-800" : "bg-slate-100";
  const borderClass = state.isDarkMode ? "border-slate-700" : "border-slate-200";

  const t = TRANSLATIONS[state.language];
  const isRtl = state.language === 'ar';

  return (
    <div 
      className={`flex flex-col h-full max-w-lg mx-auto p-6 rounded-3xl shadow-2xl overflow-y-auto animate-in fade-in zoom-in-95 duration-200 ${containerClasses}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className={`text-3xl bangers tracking-widest ${textPrimary}`}>{t.settings}</h2>
        <button 
          onClick={onClose}
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${state.isDarkMode ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-200 text-slate-500 hover:text-slate-900'}`}
        >
          ✕
        </button>
      </div>

      <div className="space-y-8">
        {/* Appearance Toggle */}
        <section>
          <div className={`flex items-center justify-between p-4 rounded-2xl border ${sectionBg} ${borderClass}`}>
            <div>
              <h3 className={`font-bold ${textPrimary}`}>{t.darkMode}</h3>
            </div>
            <button
              onClick={() => onUpdate({ isDarkMode: !state.isDarkMode })}
              className={`w-14 h-8 rounded-full transition-colors relative ${state.isDarkMode ? 'bg-emerald-500' : 'bg-slate-300'}`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all shadow-md ${state.isDarkMode ? (isRtl ? 'left-1' : 'right-1') : (isRtl ? 'right-1' : 'left-1')}`} />
            </button>
          </div>
        </section>

        {/* Difficulty Selection */}
        <section>
          <label className={`${textSecondary} font-bold text-sm uppercase tracking-widest block mb-4`}>{t.difficulty}</label>
          <div className="grid grid-cols-2 gap-3">
            {(Object.keys(DIFFICULTY_INFO) as Difficulty[]).map((diff) => (
              <button
                key={diff}
                onClick={() => onUpdate({ selectedDifficulty: diff })}
                className={`flex items-center justify-center gap-2 p-3 rounded-2xl transition-all border-2 ${
                  state.selectedDifficulty === diff 
                    ? 'border-emerald-500 bg-emerald-500/10 scale-105 shadow-lg' 
                    : `${borderClass} ${sectionBg}`
                }`}
              >
                <span className="text-xl">{DIFFICULTY_INFO[diff].emoji}</span>
                <span className={`font-bold uppercase ${state.selectedDifficulty === diff ? 'text-emerald-500' : textSecondary}`}>
                  {isRtl ? (diff === Difficulty.EASY ? 'سهل' : 'صعب') : DIFFICULTY_INFO[diff].label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Language Selection */}
        <section>
          <label className={`${textSecondary} font-bold text-sm uppercase tracking-widest block mb-4`}>{t.language}</label>
          <div className="grid grid-cols-3 gap-2">
            {(['en', 'ar', 'fr'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => onUpdate({ language: lang })}
                className={`py-3 rounded-xl font-bold transition-all border-2 ${
                  state.language === lang 
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-500' 
                    : `${borderClass} ${sectionBg} ${textSecondary}`
                }`}
              >
                {lang === 'en' ? 'English' : lang === 'ar' ? 'العربية' : 'Français'}
              </button>
            ))}
          </div>
        </section>

        {/* Intensity Selection */}
        <section>
          <label className={`${textSecondary} font-bold text-sm uppercase tracking-widest block mb-4`}>{t.intensity}</label>
          <div className="grid grid-cols-3 gap-3">
            {(Object.keys(INTENSITY_INFO) as Intensity[]).map((level) => (
              <button
                key={level}
                onClick={() => onUpdate({ selectedIntensity: level })}
                className={`flex flex-col items-center p-3 rounded-2xl transition-all border-2 ${
                  state.selectedIntensity === level 
                    ? 'border-emerald-400 bg-emerald-400/10 scale-105 shadow-lg' 
                    : `${borderClass} ${sectionBg}`
                }`}
              >
                <span className="text-2xl mb-1">{INTENSITY_INFO[level].emoji}</span>
                <span className={`text-[10px] font-bold uppercase ${state.selectedIntensity === level ? 'text-emerald-500' : textSecondary}`}>
                  {isRtl ? (level === Intensity.CASUAL ? 'عادي' : level === Intensity.BOLD ? 'جرئ' : 'قوي') : INTENSITY_INFO[level].label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Rules Summary */}
        <section className={`${state.isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50'} p-6 rounded-2xl border border-dashed ${borderClass}`}>
          <h3 className={`${textPrimary} font-bold mb-3 flex items-center gap-2`}>
            <span>📜</span> {t.gameRules}
          </h3>
          <ul className={`text-sm ${textSecondary} space-y-2 list-disc pl-4 pr-4`}>
            {t.rules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
        </section>
      </div>

      <button
        onClick={onClose}
        className={`mt-10 font-bold py-4 rounded-2xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-lg ${state.isDarkMode ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'}`}
      >
        {t.backToGame}
      </button>
    </div>
  );
};
