import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav>
    <div id='home-button-container'>
      <div><Link to="/" id='home-button'> <FontAwesomeIcon icon={faFilm} id='film-icon'/> Cinemate</Link></div>
    </div>
    <div id='nav-button-container'>
      <div><Link to="/movies"  className='nav-button'>Movies</Link></div>
      <div><Link to="/clubs" className='nav-button'>Clubs</Link></div>
      <div><Link to="/my-movies" className='nav-button'>My Movies</Link></div>
    </div>
    <div id='auth-button-container'>
      <div><Link to="/auth" id='auth-button'>Auth</Link></div>
    </div>
  </nav>
);

export default Navbar;