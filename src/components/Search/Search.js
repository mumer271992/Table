import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  return (
    <div className="input-group search">
      <input type="text" className="form-control" name="keyword" placeholder="Search keywords" aria-label="Search keywords" aria-describedby="basic-addon2" onChange={(e) => setKeyword(e.target.value)} />
      <div className="input-group-append">
        <button className="btn btn-secondary" type="button" onClick={() => onSearch(keyword)}>Search</button>
      </div>
    </div>
  )
};

export default Search;