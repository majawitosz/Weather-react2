import "./App";

export default function SearchBar() {
  return (
    <div>
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a city..."
            aria-label="City"
            aria-describedby="city"
            autoComplete="off"
          />
          <input
            className="btn btn-outline-secondary"
            type="submit"
            value="Search"
          />
        </div>
      </form>
    </div>
  );
}
