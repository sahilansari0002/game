import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import UserRegistration from './components/UserRegistration';
import AgeSelection from './components/AgeSelection';
import LevelSelection from './components/LevelSelection';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';
import AppHeader from './components/AppHeader';
import About from './components/About';

const AppContent: React.FC = () => {
  const { gameState, userProgress } = useGame();
  
  const renderScreen = () => {
    if (!userProgress.name || !userProgress.age) {
      return <UserRegistration />;
    }
    
    if (!userProgress.ageGroup) {
      return <AgeSelection />;
    }
    
    if (gameState.isPlaying) {
      return <GameScreen />;
    }
    
    if (gameState.gameOver || gameState.levelComplete) {
      return <ResultScreen />;
    }
    
    return <LevelSelection />;
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader />
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full">
          {renderScreen()}
        </div>
      </main>
      
      <About />
      
      <footer className="py-4 text-center text-gray-500 text-sm">
          Brain Buzz: Quest for Knowledge &copy; 2025
      </footer>
    </div>
  );
};

function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;