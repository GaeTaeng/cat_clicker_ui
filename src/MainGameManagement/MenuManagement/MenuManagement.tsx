import React from 'react';
import MenuContents from './MenuContents/MenuContents';
import './MenuManagement.css';
import MenuTab from './MenuTab/MenuTab';

function MenuManagement() {
  return (
    <div className="MenuManagement">
        <MenuTab />
        <MenuContents />
    </div>
  );
}

export default MenuManagement;
