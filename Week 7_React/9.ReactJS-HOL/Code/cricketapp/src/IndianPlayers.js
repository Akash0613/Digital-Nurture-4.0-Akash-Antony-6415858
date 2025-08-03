// src/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const T20players = ["Rohit", "Virat", "Pant", "Hardik", "Bumrah"];
  const RanjiTrophyPlayers = ["Gambhir", "Pujara", "Manoj", "Jadeja", "Iyer"];

  // Merge arrays
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  // Destructure even/odd players
  const evenPlayers = allPlayers.filter((_, index) => index % 2 === 0);
  const oddPlayers = allPlayers.filter((_, index) => index % 2 !== 0);

  return (
    <div>
      <h2>Even Team Players:</h2>
      {evenPlayers.map((player, idx) => <p key={idx}>{player}</p>)}

      <h2>Odd Team Players:</h2>
      {oddPlayers.map((player, idx) => <p key={idx}>{player}</p>)}
    </div>
  );
};

export default IndianPlayers;
