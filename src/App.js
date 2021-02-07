import "./App.css";
import Title from "./title";
function App() {
  return (
    <div className="App">
      <div id="upperTitle">
        <div id="bottomTitle">
          <Title />
        </div>
      </div>
      <div className="footer">
        <a class="navbar-brand">
          <i className="far fa-snowflake" aria-hidden="true"></i>
          Created By Faiza Fiaz
          <i className="far fa-snowflake" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
