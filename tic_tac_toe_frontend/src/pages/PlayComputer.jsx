import React, { useState } from 'react';
import GameBoard from '../components/GameBoard';

export default function PlayComputer() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerMark] = useState('X');
  const [turn, setTurn] = useState('X');

  const handleCellClick = (i) => {
    setBoard((prev) => {
      if (prev[i] != null || turn !== playerMark) return prev;
      const next = [...prev];
      next[i] = playerMark;
      return next;
    });
    setTurn('O'); // placeholder; AI not implemented yet
  };

  const status = `Turn: ${turn}`;

  const controls = (
    <div style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
      <button className="btn" onClick={() => { setBoard(Array(9).fill(null)); setTurn('X'); }}>Reset</button>
    </div>
  );

  return (
    <>
      <header className="hero">
        <h1>Vs Computer</h1>
        <p className="subtitle">Challenge a computer opponent. AI coming soon.</p>
      </header>
      <GameBoard board={board} onCellClick={handleCellClick} status={status} controls={controls} />
    </>
  );
}
