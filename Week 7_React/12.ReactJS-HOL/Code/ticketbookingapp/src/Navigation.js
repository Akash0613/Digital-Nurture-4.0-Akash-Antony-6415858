import React from 'react';

function Navigation({ isLoggedIn, onLogin, onLogout }) {
  return (
    <nav>
      {isLoggedIn ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <button onClick={onLogin}>Login</button>
      )}
    </nav>
  );
}

export default Navigation;