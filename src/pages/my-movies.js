import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MyMoviesPage = () => {
  return (
    <div id='home-page'>
        <div id='my-movies-top-container'>
            <div id='my-movies-top'>
                <div id='my-collection-caption'>
                    <FontAwesomeIcon icon={faFilm}/> My Collection
                </div>
                <Link to='/add-movie'>
                    <button id='add-new-movie-button'>
                        + Add New Movie
                    </button>
                </Link>
            </div>
        </div>
        <div id='movie-page-bottom'>
            <div id='movies-1'>
                <div id='movie-1'>
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
                </div>
                <div id='movie-1'>
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
                </div>
                <div id='movie-1'>
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
                </div>
                <div id='movie-1'>
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
                </div>
            </div>
            <div id='movies-1'>
                <div id='movie-1'>
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
                </div>
                <div id='movie-1'>
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
                </div>
                <div id='movie-1'>
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
                </div>
                <div id='movie-1'>
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
                </div>
            </div>
        </div>
    </div>
  );
};

export default MyMoviesPage;