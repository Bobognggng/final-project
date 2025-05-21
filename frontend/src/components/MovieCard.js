import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 10, margin: 10, width: 200 }}>
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
      <Link to={`/movies/${movie.id}`}>Details</Link>
    </div>
  );
}

export default MovieCard;