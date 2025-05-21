import React, { useState } from 'react';

function AddMovie() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [director, setDirector] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const movie = { title, genre, year, description, director };

    try {
      const response = await fetch('http://localhost:5000/api/movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie)
      });

      if (response.ok) {
        setSuccess('Movie added successfully!');
        setTitle('');
        setGenre('');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to add movie.');
      }
    } catch (err) {
      setError('Network error or server is not running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Genre:</label><br />
          <input
            value={genre}
            onChange={e => setGenre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Year:</label><br />
          <input
            value={year}
            onChange={e => setYear(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label><br />
          <input
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Director:</label><br />
          <input
            value={director}
            onChange={e => setDirector(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: 10 }} disabled={loading}>
          {loading ? 'Adding...' : 'Add Movie'}
        </button>
      </form>

      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default AddMovie;