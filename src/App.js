import "./App.css";
import Context from "./title";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Context />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
