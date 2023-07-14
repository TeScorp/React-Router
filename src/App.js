import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieDescription from './components/MovieDescription';
import './components/styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDescription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
