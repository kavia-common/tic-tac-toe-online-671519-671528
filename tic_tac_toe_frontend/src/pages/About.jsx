import React from 'react';

export default function About() {
  return (
    <div className="container">
      <header className="hero">
        <h1>About</h1>
        <p className="subtitle">A simple web-based Tic Tac Toe game with a modern, minimalist design using the Ocean Professional theme.</p>
      </header>
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">Tech Stack</h3>
          <p className="subtitle">React 18, React Router v6, vanilla CSS.</p>
        </div>
      </div>
    </div>
  );
}
