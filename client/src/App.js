// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Shared/NavBar/NavBar";
import Home from "./containers/Home/Home";
import Character from "./containers/Character/Character";

function App(props) {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            {/* {remembder to change this to Landing Page */}
            <Home />
          </Route>
          <Route
            path="/characters/:id"
            render={(props) => <Character {...props} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
