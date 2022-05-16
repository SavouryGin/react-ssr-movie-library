import TextInput from "../text-input";
import SearchForm from "../search-form";
import "./styles.scss";

function App() {
  const input = (
    <TextInput
      name="searchMovies"
      label="Find you movie"
      placeholder="What do you want to watch?"
    />
  );

  const takeValues = (values) => console.log(values);

  return (
    <div className="app">
      <SearchForm
        inputs={input}
        initialValues={{ searchMovies: "" }}
        passValues={takeValues}
      />
    </div>
  );
}

export default App;
