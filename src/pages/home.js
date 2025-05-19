import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <div id='home-page'>
      <div id='search-section'>
        <div>
          <div id='caption'>CineMate</div>
          <div id='p1'>Your personal movie collection and review platform. Discover,</div>
          <div id='p1'>review, and discuss your favorite films with like-minded enthusiasts.</div>
          <div id='search-bar-container'>
            <input id='search-bar'/>
          </div>
        </div>
      </div>
      <div id='rate-section'>
        <div id='rate-section-top'>
          <h1>Top Rated Movies</h1>
          <div></div>
          <button id='view-all'>View All</button>
        </div>
        <div id='rate-section-bottom'>
          <div id='star-icon-container'>
            <FontAwesomeIcon icon={faStar} id='star-icon'/>
          </div>
          <div id='no-movies-found'>
            No Movies Found
          </div>
          <div id='no-movies'>
            There are no movies available at the moment
          </div>
          <div id='rate-movie-container'>
            <button id='rate-movie'>
              Add Your First Movie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;