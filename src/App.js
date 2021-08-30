import "./App.css";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <SearchBar defaultCity="New York" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
