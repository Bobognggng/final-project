import React, { useState } from 'react';

function CreateClub() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const club = { name, description };

    try {
      const response = await fetch('http://localhost:5000/api/clubs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(club)
      });

      if (response.ok) {
        setSuccess('Club created successfully!');
        setName('');
        setDescription('');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to create a club.');
      }
    } catch (err) {
      setError('Network error or server is not running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Create Club</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="club-name">Club Name:</label><br />
          <input id="club-name" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="club-description">Description:</label><br />
          <textarea id="club-description" value={description} onChange={e => setDescription(e.target.value)} required />
        </div>
        <button type="submit" disabled={loading} style={{ marginTop: 10 }}>
          {loading ? 'Creating...' : 'Create Club'}
        </button>
      </form>
    </div>
  );
}

export default CreateClub;