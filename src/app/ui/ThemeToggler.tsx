import React from 'react';
import { useStore } from '../providers/ThemeProvider/themeStore';

const ThemeToggler: React.FC = () => {
  const toggleTheme = useStore((state) => state.toggleTheme);

  return (
    <button data-cy="theme-toggler" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggler;
