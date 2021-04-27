import "./App.css";
import Form from "./components/form";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import MapVisualizer from "./components/GoogleMaps/MapVisualizer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/trip">
          <Form />
        </Route>

        <Route path="/map">
          <MapVisualizer />
        </Route>
        <Route path="*">
          <Redirect to="/map" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
