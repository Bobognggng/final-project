import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/movies');
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      {loading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}
      {movies.map(movie => (
        <MovieCard key={movie._id || movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;