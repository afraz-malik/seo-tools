import React from "react";
import "./SearchBar.css";
const SearchBar = ({ url, setUrl, searchUrl }) => {
  const presearchUrl = () => {
    if (!url.empty) {
    }
  };
  return (
    <div className="mt-1 relative rounded-md shadow-sm w-full text-center">
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Paste youtube link here"
          className="search-bar"
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <div className="text-center">
        <button
          className="search-btn"
          type="button"
          onClick={searchUrl}
          disabled={!url}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
