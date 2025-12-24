
export enum GameMode {
  SETUP = 'SETUP',
  SPINNING = 'SPINNING',
  CATEGORY_SELECT = 'CATEGORY_SELECT',
  REVEAL = 'REVEAL',
  SETTINGS = 'SETTINGS'
}

export enum Intensity {
  CASUAL = 'CASUAL',
  BOLD = 'BOLD',
  EXTREME = 'EXTREME'
}

export enum Difficulty {
  EASY = 'EASY',
  HARD = 'HARD'
}

export enum CardType {
  TRUTH = 'TRUTH',
  DARE = 'DARE',
  SECRET = 'SECRET',
  CHAOS = 'CHAOS'
}

export interface Player {
  id: string;
  name: string;
  gender?: 'male' | 'female' | 'other';
}

export interface CustomPrompt {
  id: string;
  type: CardType;
  text: string;
}

export interface GameState {
  players: Player[];
  customPrompts: CustomPrompt[];
  selectedIntensity: Intensity;
  selectedDifficulty: Difficulty;
  currentPlayerIndex: number | null;
  history: GameHistoryItem[];
  recentCards: string[];
  mode: GameMode;
  language: 'en' | 'ar' | 'fr';
  isDarkMode: boolean;
  isMusicEnabled: boolean;
}

export interface GameHistoryItem {
  playerId: string;
  cardType: CardType;
  content: string;
}

export interface CardContent {
  type: CardType;
  title: string;
  description: string;
  difficulty: Difficulty;
}
