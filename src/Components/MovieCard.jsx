function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img
        className="movie-poster"
        src={movie.posterURL}
        alt={`${movie.title} poster`}
      />

      <div className="movie-content">
        <h3>{movie.title}</h3>

        <p className="movie-description">{movie.description}</p>

        <p className="movie-rating">
          Rating: {"⭐".repeat(movie.rating)} ({movie.rating}/5)
        </p>
      </div>
    </article>
  );
}

export default MovieCard;