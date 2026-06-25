import { useState } from "react";

function AddMovie({ addMovie }) {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewMovie({
      ...newMovie,
      [name]: name === "rating" ? Number(value) : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !newMovie.title ||
      !newMovie.description ||
      !newMovie.posterURL ||
      !newMovie.rating
    ) {
      alert("Please fill in all fields.");
      return;
    }

    addMovie({
      ...newMovie,
      id: Date.now(),
    });

    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: 1,
    });
  };

  return (
    <section className="add-movie-section">
      <h2>Add a New Movie</h2>

      <form className="add-movie-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Movie title"
          value={newMovie.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Movie description"
          value={newMovie.description}
          onChange={handleChange}
        />

        <input
          type="url"
          name="posterURL"
          placeholder="Poster image URL"
          value={newMovie.posterURL}
          onChange={handleChange}
        />

        <select
          name="rating"
          value={newMovie.rating}
          onChange={handleChange}
        >
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>

        <button type="submit">Add Movie</button>
      </form>
    </section>
  );
}

export default AddMovie;