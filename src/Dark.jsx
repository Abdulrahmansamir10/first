import React, { useState } from 'react'
import "./App.css"

const Dark = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
     
    </div>
  );
}


export default Dark