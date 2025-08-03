import React, { useState } from 'react';
import './App.css';
import GuestPage from './GuestPage';
import UserPage from './UserPage';
import Navigation from './Navigation';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Navigation isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;