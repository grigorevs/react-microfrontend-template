import React from 'react';
import { useStore } from '../providers/ThemeProvider/themeStore';

const ThemeToggler: React.FC = () => {
  const toggleTheme = useStore((state) => state.toggleTheme);

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggler;
