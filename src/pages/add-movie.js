import React, { useState } from 'react';

const AddMoviePage = () => {
    const [movies, setMovies] = useState([]);

    const [form, setForm] = useState({
        title: '',
        director: '',
        year: '',
        genre: '',
        description: '',
        imageUrl: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddMovie = () => {
        const { title, director, year, genre, description, imageUrl } = form;
        if (title && director && year && genre && description && imageUrl) {
            const newMovie = {
                id: Date.now(),
                ...form,
            };
            setMovies([newMovie, ...movies]);
            setForm({
                title: '',
                director: '',
                year: '',
                genre: '',
                description: '',
                imageUrl: '',
            });
        }
    };

    return (
        <div id='thread-page-container'>
            <div>
                <div id='add-movie-title'>Add New Movie</div>
                <div id='movie-title-ha'>
                    Movie Title
                </div>
                <input type="text" name="title" value={form.title} onChange={handleChange} id='input-movie-title'/>
                <div id='movie-title-ha'>
                    Director
                </div>
                <input type="text" name='director' value={form.director} onChange={handleChange} id='input-movie-title'/>
                <div id='movie-title-ha'>
                    Release Year
                </div>
                <input type='number' name='year' id='input-movie-title' value={form.year} onChange={handleChange}/>
                <div id='movie-title-ha'>
                    Genre
                </div>
                <input type='text' name='genre' id='input-movie-title' value={form.genre} onChange={handleChange}/>
                <div id='movie-title-ha'>
                    Description
                </div>
                <input type='text' name='description' id='input-movie-title' value={form.description} onChange={handleChange}/>
                <div id='movie-title-ha'>
                    Image URL
                </div>
                <input type='text' name='imageUrl' id='input-movie-title' value={form.imageUrl} onChange={handleChange}/>

                <hr />

                <button id='add-movie-button' onClick={handleAddMovie}>
                    Add Movie
                </button>
            </div>
        </div>
    );
};

export default AddMoviePage;