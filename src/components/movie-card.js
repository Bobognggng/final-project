import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div id="movie-1">
            <Link to="/movies/movie">
                <div id="movie-top">
                    {movie.imageUrl ? (
                        <img
                        src={movie.imageUrl}
                        alt={movie.title}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                    ) : (
                        <div
                            style={{
                                width: '100%',
                                height: '200px',
                                backgroundColor: 'rgb(255, 255, 255)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#555',
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '10px'

                            }}
                        >
                            No Image
                        </div>
                    )}
                </div>
                <div id="movie-bottom">
                    <div>
                        <div id="movie-title">{movie.title}</div>
                        <div id="author">{movie.director}</div>
                        <div id="movie-genre-container">
                            <button id="movie-genre">{movie.genre}</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;