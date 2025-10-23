import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './index.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import PlayLocal from './pages/PlayLocal';
import PlayComputer from './pages/PlayComputer';
import About from './pages/About';

// PUBLIC_INTERFACE
function App() {
  /** The root application that sets up the routes and shared layout. */
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/play/local" element={<PlayLocal />} />
          <Route path="/play/computer" element={<PlayComputer />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
