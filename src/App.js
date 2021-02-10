import "./App.css";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./footer";
function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/Quiz">
        <Quiz />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
