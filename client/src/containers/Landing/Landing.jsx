import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col homepage-cover">
              <h1 className="text-style">Pathfinder Custom Character Sheet</h1>
              <h5 className="color-style">When a Napkin Just Won't Cut It</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 mt-4 mb-4">
              <img
                src="https://i.pinimg.com/564x/16/cb/f0/16cbf0f788c190e79a2ccd82af32843c.jpg"
                alt="knightly king being crowned"
                className="w-100"
              />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
