const handleAddMovie = () => {
  fetch('http://localhost:5000/api/movies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
    .then(res => res.json())
    .then(newMovie => {
      setMovies([newMovie, ...movies]);
      setForm({
        title: '',
        director: '',
        year: '',
        genre: '',
        description: '',
        imageUrl: '',
      });
    });
};