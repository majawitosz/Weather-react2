import "./App.css";
import SearchBar from "./SearchBar";
import Location from "./Location";
import City from "./City";
import Date from "./Date";
import Icon from "./Icon";
import Temp from "./Temp";
import Conditions from "./Conditions";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <div className="row justify-content-md-center">
            <div className="col-8 col-md-10">
              <SearchBar />
            </div>
            <div className="col-2 col-md-2">
              <Location />
            </div>
          </div>
          <City />
          <Date />
          <div className="row">
            <div className="col-6 col-sm-4 col-md-3 main-icon">
              <Icon />
            </div>
            <div className="col-6 col-sm-8 col-md-9">
              <Temp />
              <Conditions />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
