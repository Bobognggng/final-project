import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
      <Link to="/movies" style={{ marginRight: 10 }}>Movies</Link>
      <Link to="/clubs" style={{ marginRight: 10 }}>Clubs</Link>
      <Link to="/add-movie" style={{ marginRight: 10 }}>Add Movie</Link>
      <Link to="/create-club" style={{ marginRight: 10 }}>Create Club</Link>
      <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}

export default Navbar;