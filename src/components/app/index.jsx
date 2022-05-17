import React, { useState } from "react";
import TextInput from "../text-input";
import SearchForm from "../search-form";
import SearchDisplay from "../search-display";
import "./styles.scss";

// Stateful functional component
const App = () => {
  const [searchQueries, setSearchQueries] = useState([]);

  const input = (
    <TextInput
      name="searchMovies"
      label="Find you movie"
      placeholder="What do you want to watch?"
    />
  );

  const takeValues = (values) =>
    setSearchQueries([...searchQueries, values.searchMovies]);

  return (
    <div className="app">
      <SearchForm
        formChildren={input}
        initialValues={{ searchMovies: "" }}
        passValues={takeValues}
      />
      <SearchDisplay searchQueries={searchQueries} />
    </div>
  );
};

export default App;
