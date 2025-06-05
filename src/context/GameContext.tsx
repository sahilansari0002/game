import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AgeGroup, GameState, UserProgress } from '../types';
import { levels } from '../data/levels';

interface GameContextType {
  gameState: GameState;
  userProgress: UserProgress;
  setUserInfo: (name: string, age: number) => void;
  setAgeGroup: (ageGroup: AgeGroup) => void;
  startGame: (levelId: number) => void;
  answerQuestion: (answerIndex: number, isCorrect: boolean) => void;
  nextQuestion: () => void;
  endGame: () => void;
  resetLevel: () => void;
}

const initialGameState: GameState = {
  isPlaying: false,
  currentLevel: null,
  currentQuestionIndex: 0,
  score: 0,
  timeRemaining: 0,
  selectedAnswer: null,
  showExplanation: false,
  gameOver: false,
  levelComplete: false
};

const initialUserProgress: UserProgress = {
  currentLevel: 1,
  highestLevel: 1,
  achievements: [],
  totalScore: 0,
  ageGroup: 'teens',
  name: '',
  age: 0
};

type GameAction =
  | { type: 'SET_USER_INFO'; payload: { name: string; age: number } }
  | { type: 'SET_AGE_GROUP'; payload: AgeGroup }
  | { type: 'START_GAME'; payload: number }
  | { type: 'ANSWER_QUESTION'; payload: { answerIndex: number; isCorrect: boolean } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'UPDATE_TIMER'; payload: number }
  | { type: 'END_GAME' }
  | { type: 'COMPLETE_LEVEL' }
  | { type: 'RESET_LEVEL' };

const GameContext = createContext<GameContextType | undefined>(undefined);

const gameReducer = (
  state: { gameState: GameState; userProgress: UserProgress },
  action: GameAction
) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        userProgress: {
          ...state.userProgress,
          name: action.payload.name,
          age: action.payload.age
        }
      };
    
    case 'SET_AGE_GROUP':
      return {
        ...state,
        userProgress: {
          ...state.userProgress,
          ageGroup: action.payload
        }
      };
    
    case 'START_GAME':
      const level = levels.find(l => l.id === action.payload);
      return {
        ...state,
        gameState: {
          ...initialGameState,
          isPlaying: true,
          currentLevel: action.payload,
          timeRemaining: level?.timeLimit || 240
        }
      };
    
    case 'ANSWER_QUESTION':
      return {
        ...state,
        gameState: {
          ...state.gameState,
          selectedAnswer: action.payload.answerIndex,
          score: action.payload.isCorrect 
            ? state.gameState.score + 1 
            : state.gameState.score,
          showExplanation: true
        }
      };
    
    case 'NEXT_QUESTION':
      if (state.gameState.currentQuestionIndex >= 9) {
        const levelId = state.gameState.currentLevel!;
        const level = levels.find(l => l.id === levelId)!;
        const isLevelPassed = (state.gameState.score / 10) * 100 >= level.requiredScore;
        
        let newHighestLevel = state.userProgress.highestLevel;
        if (isLevelPassed && levelId === state.userProgress.highestLevel) {
          newHighestLevel = Math.min(50, levelId + 1);
        }
        
        return {
          ...state,
          gameState: {
            ...state.gameState,
            levelComplete: true,
            isPlaying: false
          },
          userProgress: {
            ...state.userProgress,
            highestLevel: newHighestLevel,
            totalScore: state.userProgress.totalScore + state.gameState.score
          }
        };
      }
      
      return {
        ...state,
        gameState: {
          ...state.gameState,
          currentQuestionIndex: state.gameState.currentQuestionIndex + 1,
          selectedAnswer: null,
          showExplanation: false
        }
      };
    
    case 'UPDATE_TIMER':
      if (action.payload <= 0) {
        return {
          ...state,
          gameState: {
            ...state.gameState,
            timeRemaining: 0,
            gameOver: true,
            isPlaying: false
          }
        };
      }
      
      return {
        ...state,
        gameState: {
          ...state.gameState,
          timeRemaining: action.payload
        }
      };
    
    case 'END_GAME':
      return {
        ...state,
        gameState: {
          ...state.gameState,
          gameOver: true,
          isPlaying: false
        }
      };
    
    case 'RESET_LEVEL':
      return {
        ...state,
        gameState: initialGameState
      };
    
    default:
      return state;
  }
};

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, {
    gameState: initialGameState,
    userProgress: initialUserProgress
  });
  
  useEffect(() => {
    let timerId: number | undefined;
    
    if (state.gameState.isPlaying && state.gameState.timeRemaining > 0) {
      timerId = window.setInterval(() => {
        dispatch({ 
          type: 'UPDATE_TIMER', 
          payload: state.gameState.timeRemaining - 1 
        });
      }, 1000);
    }
    
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [state.gameState.isPlaying, state.gameState.timeRemaining]);
  
  const setUserInfo = (name: string, age: number) => {
    dispatch({ type: 'SET_USER_INFO', payload: { name, age } });
  };
  
  const setAgeGroup = (ageGroup: AgeGroup) => {
    dispatch({ type: 'SET_AGE_GROUP', payload: ageGroup });
  };
  
  const startGame = (levelId: number) => {
    dispatch({ type: 'START_GAME', payload: levelId });
  };
  
  const answerQuestion = (answerIndex: number, isCorrect: boolean) => {
    dispatch({ 
      type: 'ANSWER_QUESTION', 
      payload: { answerIndex, isCorrect } 
    });
  };
  
  const nextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };
  
  const endGame = () => {
    dispatch({ type: 'END_GAME' });
  };
  
  const resetLevel = () => {
    dispatch({ type: 'RESET_LEVEL' });
  };
  
  const value = {
    gameState: state.gameState,
    userProgress: state.userProgress,
    setUserInfo,
    setAgeGroup,
    startGame,
    answerQuestion,
    nextQuestion,
    endGame,
    resetLevel
  };
  
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};