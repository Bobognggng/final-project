import React from 'react';

function ClubCard({ club }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 10, margin: 10, width: 200 }}>
      <h3>{club.name}</h3>
      <p>{club.description}</p>
    </div>
  );
}

export default ClubCard;