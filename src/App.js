import "./App.css";
import SearchBar from "./SearchBar";
import Date from "./Date";
import Icon from "./Icon";
import Temp from "./Temp";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <SearchBar />
          <Date />
          <div className="row">
            <div className="col-6 col-sm-4 col-md-3 main-icon">
              <Icon />
            </div>
            <div className="col-6 col-sm-8 col-md-9">
              <Temp />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
