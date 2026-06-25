function Filter({
  searchTitle,
  setSearchTitle,
  searchRating,
  setSearchRating,
}) {
  return (
    <section className="filter">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTitle}
        onChange={(event) => setSearchTitle(event.target.value)}
      />

      <select
        value={searchRating}
        onChange={(event) => setSearchRating(Number(event.target.value))}
      >
        <option value="0">All ratings</option>
        <option value="1">1 star and above</option>
        <option value="2">2 stars and above</option>
        <option value="3">3 stars and above</option>
        <option value="4">4 stars and above</option>
        <option value="5">5 stars only</option>
      </select>
    </section>
  );
}

export default Filter;