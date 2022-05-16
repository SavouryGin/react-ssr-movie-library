import TextInput from "../text-input";
import "./styles.scss";

function App() {
  return (
    <div className="app">
      <TextInput
        name="search-movies"
        label="Find you movie"
        placeholder="What do you want to watch?"
      />
    </div>
  );
}

export default App;
