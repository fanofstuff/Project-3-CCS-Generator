import React, { Component } from "react";

/*
This page has only one purpose: look pretty. Users will click on the Login button on the top right,
and nothing more. 
*/

class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col homepage-cover">
              <h1 className="text-style">Characters</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
