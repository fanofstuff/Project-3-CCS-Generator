// import logo from "./logo.svg";
// import "./App.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Shared/NavBar/NavBar";
import Home from "./containers/Home/Home";
import Character from "./containers/Character/Character";
import Landing from "./containers/Landing/Landing";
import Login from "./containers/Login/Login";
import jwt from "jsonwebtoken";

function App(props) {
  const [userObject, setUserObject] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkForToken();
  }, []);

  const checkForToken = async () => {
    const tokenFromStorage = await sessionStorage.getItem("jwt");
    if (tokenFromStorage) {
      setIsLoggedIn(true);
      try {
        const decoded = await jwt.verify(
          tokenFromStorage,
          process.env.REACT_APP_SECRET_KEY
        );
        if (decoded && decoded.email && decoded.id) {
          setUserObject(decoded);
          setIsLoggedIn(true);
        }
      } catch (e) {
        setUserObject({});
        setIsLoggedIn(false);
        sessionStorage.setItem("jwt", "");
        console.error(e);
      }
    }
  };

  const logOutUser = () => {
    setUserObject({});
    setIsLoggedIn(false);
    sessionStorage.setItem("jwt", "");
  };
  return (
    <>
      <Router>
        <NavBar
          isLoggedIn={isLoggedIn}
          logOutUser={logOutUser}
          userObject={userObject}
        />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} checkForToken={checkForToken} />
            )}
          />
          <Route exact path="/home/:id">
            <Home />
          </Route>
          <Route
            exact
            path="/characters/:id"
            render={(props) => <Character {...props} />}
          />
          <Route path="*">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
