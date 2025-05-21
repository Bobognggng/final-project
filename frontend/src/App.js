import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Movies from './pages/Movies';
import Clubs from './pages/Clubs';
import AddMovie from './pages/AddMovie';
import CreateClub from './pages/CreateClub';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/create-club" element={<CreateClub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;