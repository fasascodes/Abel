import { useState } from "react";
import AddMovie from "./Components/AddMovie";
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
import moviesData from "./Components/data/movies";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatches = movie.title
      .toLowerCase()
      .includes(searchTitle.toLowerCase());

    const ratingMatches = movie.rating >= searchRating;

    return titleMatches && ratingMatches;
  });

  return (
    <main className="app">
      <header>
        <h1>Movie App</h1>
        <p>Discover, filter, and add your favorite movies or TV shows.</p>
      </header>

      <AddMovie addMovie={addMovie} />

      <h2>Find a Movie</h2>

      <Filter
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        searchRating={searchRating}
        setSearchRating={setSearchRating}
      />

      <MovieList movies={filteredMovies} />
    </main>
  );
}

export default App;