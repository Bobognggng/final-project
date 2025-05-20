import React, { useState } from 'react';
import MovieCard from '../components/movie-card';

const MoviesPage = () => {
    const [movies] = useState([
        {
            id: 1,
            title: 'The Shawshank Redemption',
            director: 'Frank Darabont',
            genre: 'Drama',
            imageUrl: '',
        },
        {
            id: 2,
            title: 'Inception',
            director: 'Christopher Nolan',
            genre: 'Sci-Fi',
            imageUrl: '',
        },
        {
            id: 3,
            title: 'The Godfather',
            director: 'Francis Ford Coppola',
            genre: 'Crime',
            imageUrl: '',
        },
        {
            id: 4,
            title: 'The Matrix',
            director: 'The Wachowskis',
            genre: 'Action',
            imageUrl: '',
        },
    ]);

  return (
    <div id="home-page">
      <div id="movie-page-top">
        <div id="movie-searching">
          <div>
            <input id="movie-input" />
          </div>
          <div id="search-movie-button-container">
            <button id="search-movie-button">Search</button>
          </div>
        </div>
        <div id="filter-genre">Filter By Genre</div>
        <div id="genres">
          <button id="all">All</button>
          <button id="all">Action</button>
          <button id="all">Crime</button>
          <button id="all">Sci-Fi</button>
          <button id="all">Drama</button>
        </div>
      </div>

      <div id="movie-page-bottom">
        <div id="movies-1">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;