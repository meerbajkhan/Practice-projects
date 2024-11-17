// Search.js
import React from 'react';

function Search({ onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by heading"
      onChange={handleSearch}
    />
  );
}

export default Search;
