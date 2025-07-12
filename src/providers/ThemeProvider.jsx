
import React, {  useState, useEffect } from 'react';
import ThemeContext from '../context/ThemeContext';

//exportación 
const ThemeProvider = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme === 'true';
  });


  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };


  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);


  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;


