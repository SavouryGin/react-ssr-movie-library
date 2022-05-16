import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

// Stateless functional component
const SearchDisplay = ({ searchQueries = [] }) => {
  const items = searchQueries.map((item, index) => (
    <li key={`query-${index}`}>{item}</li>
  ));

  return (
    <div className="search-display">
      {items.length > 0 && (
        <h2 className="search-display__header">Search History</h2>
      )}
      <ul className="search-display__list">{items}</ul>
    </div>
  );
};

SearchDisplay.propTypes = {
  searchQueries: PropTypes.arrayOf(PropTypes.string),
};

export default SearchDisplay;
