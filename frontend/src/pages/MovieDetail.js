import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewList from '../components/ReviewList';

const sampleMovie = {
  id: '1',
  title: 'Inception',
  genre: 'Sci-Fi',
  description: 'A thief who steals corporate secrets through dream-sharing technology.',
};

const sampleReviews = [
  { author: 'Alice', text: 'Amazing movie!' },
  { author: 'Bob', text: 'Mind-blowing concepts.' },
];

function MovieDetail() {
  const { id } = useParams();

  const [movie] = useState(sampleMovie);
  const [reviews, setReviews] = useState(sampleReviews);
  const [newReview, setNewReview] = useState('');

  const handleAddReview = () => {
    if (!newReview.trim()) return;
    setReviews([...reviews, { author: 'Anonymous', text: newReview }]);
    setNewReview('');
  };

  if (id !== movie.id) return <p>Movie not found.</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p><em>{movie.genre}</em></p>
      <p>{movie.description}</p>

      <ReviewList reviews={reviews} />

      <div>
        <h4>Add a review:</h4>
        <textarea
          rows={3}
          value={newReview}
          onChange={e => setNewReview(e.target.value)}
          placeholder="Write your review..."
          style={{ width: '100%' }}
        />
        <button onClick={handleAddReview} style={{ marginTop: 5 }}>Submit Review</button>
      </div>
    </div>
  );
}

export default MovieDetail;