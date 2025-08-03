// src/ListofPlayers.js
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Rohit", score: 85 },
    { name: "Virat", score: 92 },
    { name: "Rahul", score: 40 },
    { name: "Dhawan", score: 65 },
    { name: "Pant", score: 55 },
    { name: "Hardik", score: 73 },
    { name: "Jadeja", score: 60 },
    { name: "Ashwin", score: 45 },
    { name: "Bumrah", score: 90 },
    { name: "Shami", score: 88 },
    { name: "Sundar", score: 30 }
  ];

  // Arrow function to filter scores below 70
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      {players.map((player, idx) => (
        <p key={idx}>{player.name} - {player.score}</p>
      ))}

      <h2>Players with score below 70:</h2>
      {lowScorers.map((player, idx) => (
        <p key={idx}>{player.name} - {player.score}</p>
      ))}
    </div>
  );
};

export default ListofPlayers;
