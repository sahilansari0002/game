import { Level } from '../types';

const createLevels = (): Level[] => {
  const levels: Level[] = [];
  
  // Create 50 levels
  for (let i = 1; i <= 50; i++) {
    let difficulty: 'easy' | 'medium' | 'hard';
    
    if (i <= 10) {
      difficulty = 'easy';
    } else if (i <= 30) {
      difficulty = 'medium';
    } else {
      difficulty = 'hard';
    }
    
    levels.push({
      id: i,
      difficulty,
      requiredScore: 70, // 70% required to pass
      timeLimit: 240, // 4 minutes in seconds
      unlocked: i === 1 // Only level 1 is unlocked initially
    });
  }
  
  return levels;
};

export const levels = createLevels();