import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Layout() {
  /** Shared layout with top navigation using Ocean Professional theme. */
  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          <div className="brand">
            <span className="dot" aria-hidden="true"></span>
            Tic Tac Toe
            <span className="badge" style={{ marginLeft: 8 }}>Ocean</span>
          </div>
          <div className="nav-links">
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
            <NavLink to="/play/local" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Play vs Player</NavLink>
            <NavLink to="/play/computer" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Play vs Computer</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
          </div>
        </div>
      </nav>
      <main className="layout-content container">
        <Outlet />
      </main>
    </>
  );
}
