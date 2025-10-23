import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Play Tic Tac Toe</h1>
        <p className="subtitle">Modern, minimalist interface with Ocean Professional theme. Choose a mode to begin.</p>
      </div>

      <div className="grid">
        <div className="col-6">
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Play vs Player</h3>
              <p className="subtitle">Pass-and-play on a single device.</p>
              <div style={{ marginTop: 12 }}>
                <Link to="/play/local" className="btn btn-primary">Start</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Play vs Computer</h3>
              <p className="subtitle">Battle a smart opponent.</p>
              <div style={{ marginTop: 12 }}>
                <Link to="/play/computer" className="btn btn-primary">Start</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
