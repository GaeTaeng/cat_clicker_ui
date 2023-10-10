import React from 'react';
import GameContents from './GameContents/GameContents';
import './MainGameManagement.css';
import MenuManagement from './MenuManagement/MenuManagement';

function MainGameManagement() {
  return (
    <div className="MainGameManagement">
      <div className='section'>
        <GameContents />
      </div>
      <div className='section'>
        <MenuManagement />
      </div>
    </div>
  );
}

export default MainGameManagement;
