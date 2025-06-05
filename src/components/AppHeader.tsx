import React from 'react';
import { Brain } from 'lucide-react';
import { useGame } from '../context/GameContext';

const AppHeader: React.FC = () => {
  const { userProgress } = useGame();
  
  const getAgeGroupLabel = () => {
    switch(userProgress.ageGroup) {
      case 'kids':
        return 'Kids (7-12)';
      case 'teens':
        return 'Teens (13-19)';
      case 'adults':
        return 'Adults (20+)';
      default:
        return '';
    }
  };
  
  return (
    <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Brain className="w-8 h-8 mr-3" />
          <div>
            <h1 className="text-2xl font-bold">Brain Buzz</h1>
            <p className="text-xs text-purple-200">Quest for Knowledge</p>
          </div>
        </div>
        
        {userProgress.ageGroup && (
          <div className="flex items-center">
            <div className="mr-4">
              <div className="text-xs text-purple-200">Age Group</div>
              <div className="font-medium">{getAgeGroupLabel()}</div>
            </div>
            
            <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
              Level {userProgress.highestLevel}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;