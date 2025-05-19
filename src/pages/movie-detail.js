import React, { useState } from 'react';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [input, setInput] = useState('');

  const handleAddReview = () => {
    if (input.trim()) {
      const newReview = {
        id: Date.now(),
        text: input.trim(),
      };
      setReviews([newReview, ...reviews]);
      setInput('');
    }
  };

  const handleDeleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  return (
    <div id="movie-detail-page">
      <div id="something-container">
        <div id='movie-photo'>
        </div>
        <div>
          <div id='movie-detail-title'>
            The Shawshank Redemption
          </div>
          <div id='movie-detail-author'>
            Frank Darabont - 1994
          </div>
          <button id='movie-detail-genre'>
            Drama
          </button>
          <div id='movie-detail-detail'>
            Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.
          </div>
          <div id='reviews-title'>
            Reviews
          </div>
          <div>
            <input id='review-input' type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button id='review-input-button' onClick={handleAddReview}>
              Add
            </button>
          </div>
          <div>
            {reviews.map((review) => (
              <div id='review-container'>
                <div key={review.id} id='review'>
                  <span>{review.text}</span>
                </div>
                <button id='review-input-button' onClick={() => handleDeleteReview(review.id)}>
                  Delete
                </button>
              </div>
            ))}
            {reviews.length === 0 && (
              <div id="review">No reviews yet.</div>
            )}
          </div>
        </div>
      </div>
        
    </div>
  );
};

export default ReviewSection;