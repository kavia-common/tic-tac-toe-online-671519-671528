import React, { useState } from 'react';
import GameBoard from '../components/GameBoard';

export default function PlayLocal() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleCellClick = (i) => {
    setBoard((prev) => {
      if (prev[i] != null) return prev;
      const next = [...prev];
      next[i] = xIsNext ? 'X' : 'O';
      return next;
    });
    setXIsNext((p) => !p);
  };

  const status = `Turn: ${xIsNext ? 'X' : 'O'}`;

  const controls = (
    <div style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
      <button className="btn" onClick={() => { setBoard(Array(9).fill(null)); setXIsNext(true); }}>Reset</button>
    </div>
  );

  return (
    <>
      <header className="hero">
        <h1>Local Match</h1>
        <p className="subtitle">Two players on the same device.</p>
      </header>
      <GameBoard board={board} onCellClick={handleCellClick} status={status} controls={controls} />
    </>
  );
}
