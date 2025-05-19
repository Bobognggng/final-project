import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import MoviesPage from './pages/movies'
import Navbar from './components/navbar';
import ClubsPage from './pages/clubs';
import MyMoviesPage from './pages/my-movies';
import MovieDetail from './pages/movie-detail';
import AuthPage from './pages/auth';
import RegisterPage from './pages/register';
import ThreadPage from './pages/thread';
import AddMoviePage from './pages/add-movie';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/clubs" element={<ClubsPage />} />
        <Route path="/my-movies" element={<MyMoviesPage />} />
        <Route path="/movies/movie" element={<MovieDetail />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/clubs/thread" element={<ThreadPage />} />
        <Route path="/add-movie" element={<AddMoviePage />} />
      </Routes>
    </div>
  );
}

export default App;