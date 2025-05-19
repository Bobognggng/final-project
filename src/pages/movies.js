import React from 'react';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
  return (
    <div id='home-page'>
        <div id='movie-page-top'>
            <div id='movie-searching'>
                <div>
                    <input id='movie-input'/>
                </div>
                <div id='search-movie-button-container'>
                    <button id='search-movie-button'>Search</button>
                </div>
            </div>
            <div id='filter-genre'>
                Filter By Genre
            </div>
            <div id='genres'>
                <button id='all'>All</button>
                <button id='all'>Action</button>
                <button id='all'>Crime</button>
                <button id='all'>Sci-Fi</button>
                <button id='all'>Drama</button>
            </div>
        </div>
        <div id='movie-page-bottom'>
            <div id='movies-1'>
                <div id='movie-1'>
                    <Link to="/movies/movie">
                        <div id='movie-top'>
                        </div>
                        <div id='movie-bottom'>
                            <div>
                                <div id='movie-title'>
                                    The Shawshank Redemption
                                </div>
                                <div id='author'>
                                    Frank Darabont
                                </div>
                                <div id='movie-genre-container'>
                                    <button id='movie-genre'>Drama</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div id='movie-1'>
                    <Link to="movies/movie">
                        <div id='movie-top'>
                        </div>
                        <div id='movie-bottom'>
                            <div>
                                <div id='movie-title'>
                                    The Shawshank Redemption
                                </div>
                                <div id='author'>
                                    Frank Darabont
                                </div>
                                <div id='movie-genre-container'>
                                    <button id='movie-genre'>Drama</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div id='movie-1'>
                    <Link to="movies/movie">
                        <div id='movie-top'>
                        </div>
                        <div id='movie-bottom'>
                            <div>
                                <div id='movie-title'>
                                    The Shawshank Redemption
                                </div>
                                <div id='author'>
                                    Frank Darabont
                                </div>
                                <div id='movie-genre-container'>
                                    <button id='movie-genre'>Drama</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div id='movie-1'>
                    <Link to="movies/movie">
                        <div id='movie-top'>
                        </div>
                        <div id='movie-bottom'>
                            <div>
                                <div id='movie-title'>
                                    The Shawshank Redemption
                                </div>
                                <div id='author'>
                                    Frank Darabont
                                </div>
                                <div id='movie-genre-container'>
                                    <button id='movie-genre'>Drama</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                
            </div>
            <div id='movies-1'>
                <div id='movie-1'>
                    <Link to="movies/movie">
                        <div id='movie-top'>
                        </div>
                        <div id='movie-bottom'>
                            <div>
                                <div id='movie-title'>
                                    The Shawshank Redemption
                                </div>
                                <div id='author'>
                                    Frank Darabont
                                </div>
                                <div id='movie-genre-container'>
                                    <button id='movie-genre'>Drama</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div id='movie-1'>
                    <Link to="movies/movie">
                        <div id='movie-top'>
                        </div>
                        <div id='movie-bottom'>
                            <div>
                                <div id='movie-title'>
                                    The Shawshank Redemption
                                </div>
                                <div id='author'>
                                    Frank Darabont
                                </div>
                                <div id='movie-genre-container'>
                                    <button id='movie-genre'>Drama</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div id='movie-1'>
                    <Link to="movies/movie">
                        <div id='movie-top'>
                        </div>
                        <div id='movie-bottom'>
                            <div>
                                <div id='movie-title'>
                                    The Shawshank Redemption
                                </div>
                                <div id='author'>
                                    Frank Darabont
                                </div>
                                <div id='movie-genre-container'>
                                    <button id='movie-genre'>Drama</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div id='movie-1'>
                    <Link to="movies/movie">
                        <div id='movie-top'>
                        </div>
                        <div id='movie-bottom'>
                            <div>
                                <div id='movie-title'>
                                    The Shawshank Redemption
                                </div>
                                <div id='author'>
                                    Frank Darabont
                                </div>
                                <div id='movie-genre-container'>
                                    <button id='movie-genre'>Drama</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MoviesPage;