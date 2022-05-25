import React, { useState } from 'react';

function SearchBar(props) {
  const { searchFilter } = props;
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);

    searchFilter(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search Food: </label>
      <input type="text" name="search" value={search} onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;
