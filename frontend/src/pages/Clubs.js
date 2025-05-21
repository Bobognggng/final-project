import React, { useState, useEffect } from 'react';
import ClubCard from '../components/ClubCard';

function Clubs() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/clubs');
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to fetch clubs');
        }
        const data = await response.json();
        setClubs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  return (
    <div>
      <h2>Clubs</h2>
      {loading && <p>Loading clubs...</p>}
      {error && <p>{error}</p>}
      {clubs.map(club => (
        <ClubCard key={club._id || club.id} club={club} />
      ))}
    </div>
  );
}

export default Clubs;