import React from 'react';

// PUBLIC_INTERFACE
export default function GameBoard({ onCellClick, board = Array(9).fill(null), status = 'Ready to play', controls }) {
  /**
   * A reusable Tic Tac Toe board scaffold.
   * Props:
   * - board: array of 9 values (null | 'X' | 'O')
   * - onCellClick: function(index) -> void
   * - status: string status text
   * - controls: optional React node for additional controls above the board
   */
  return (
    <section className="board-wrapper">
      {controls ? <div>{controls}</div> : null}
      <div className="board" role="grid" aria-label="Tic Tac Toe Board">
        {board.map((value, i) => (
          <button
            key={i}
            role="gridcell"
            aria-label={`Cell ${i + 1}${value ? `, ${value}` : ''}`}
            className="cell"
            onClick={() => onCellClick?.(i)}
          >
            {value ?? ''}
          </button>
        ))}
      </div>
      <div className="status" aria-live="polite">{status}</div>
    </section>
  );
}
