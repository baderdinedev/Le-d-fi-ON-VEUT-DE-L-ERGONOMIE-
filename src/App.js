// src/App.js
import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import { useTheme } from './ThemeContext';

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <div style={{ background: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#222' }}>
      <h1>Dark Mode Example</h1>
      <DarkModeToggle />
    </div>
  );
};

export default App;
