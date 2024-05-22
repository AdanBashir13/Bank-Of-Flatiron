import React, { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    const term = e.target.value;
    setSearch(term);
    props.onSearch(term);
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={search}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;