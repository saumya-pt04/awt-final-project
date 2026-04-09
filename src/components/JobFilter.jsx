function JobFilter({ setSearch }) {

  return (
    <div className="filter">

      <input
        type="text"
        placeholder="Search jobs..."
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default JobFilter;