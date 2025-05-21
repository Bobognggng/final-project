import React from 'react';

function ReviewList({ reviews }) {
  if (!reviews.length) return <p>No reviews yet.</p>;

  return (
    <div>
      <h4>Reviews:</h4>
      {reviews.map((review, i) => (
        <div key={i} style={{ borderBottom: '1px solid #ccc', marginBottom: 10 }}>
          <p><strong>{review.author}</strong> says:</p>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;