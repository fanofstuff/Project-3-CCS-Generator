import React, { Component } from "react";
import "./Login.css";
import API from "../../utils/API";
import jwt from "jsonwebtoken";

/*
This page has two purposes: Sign Up and Sign In. Both require their own logic, though we should
just be able to make API calls to get this done. Both are forms. 
*/

class Home extends Component {
  state = {
    suEmail: "",
    suPassword: "",
    suError: "",
    liEmail: "",
    liPassword: "",
    liError: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      suError: "",
      liError: "",
    });
  };

  signUp = (event) => {
    event.preventDefault();
    const suEmail = this.state.suEmail;
    const suPassword = this.state.suPassword;
    API.signUp({ suEmail, suPassword })
      .then(async (response) => {
        // console.log(response.data.data);
        if (response.data.success) {
          const decoded = await jwt.verify(
            response.data.data,
            process.env.REACT_APP_SECRET_KEY
          );
          // console.log(decoded);
          await sessionStorage.setItem("jwt", response.data.data);
          await this.props.checkForToken();
          await this.props.history.push(`/home/${decoded.id}`);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ suError: err.response.data.message });
      });
  };

  login = (event) => {
    event.preventDefault();
    const liEmail = this.state.liEmail;
    const liPassword = this.state.liPassword;
    API.login({ liEmail, liPassword })
      .then(async (response) => {
        // console.log(response.data.data);
        if (response.data.success) {
          const decoded = await jwt.verify(
            response.data.data,
            process.env.REACT_APP_SECRET_KEY
          );
          // console.log(decoded);
          await sessionStorage.setItem("jwt", response.data.data);
          await this.props.checkForToken();
          await this.props.history.push(`/home/${decoded.id}`);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ liError: err.response.data.message });
      });
  };

  render() {
    return (
      <>
        <div className="container">
          {this.state.suError && (
            <div
              className="row mb-1"
              id="login-alert"
              style={{ backgroundColor: "#FE6D73", paddingTop: 3 }}
            >
              <div className="col">
                <p style={{ color: "#ffffff" }}>{this.state.suError}</p>
              </div>
            </div>
          )}
          {this.state.liError && (
            <div
              className="row"
              id="login-alert"
              style={{ backgroundColor: "#FE6D73", paddingTop: 3 }}
            >
              <div className="col">
                <p style={{ color: "#ffffff" }}>{this.state.liError}</p>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-md-5 homepage-cover text-center m-1 mr-auto">
              <h1 className="text-style">Sign Up</h1>
              <form
                className="pb-4 px-3"
                onSubmit={(e) => {
                  this.signUp(e);
                }}
              >
                <div className="form-group text-left">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-text-style"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="signUpEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="suEmail"
                    value={this.state.suEmail}
                    onChange={(e) => {this.handleInputChange(e)}}
                  />
                  <small id="emailHelp" className="form-text form-text-style">
                    This will be your username going forward.
                  </small>
                </div>
                <div className="form-group text-left">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-text-style"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="signUpPassword"
                    placeholder="Password"
                    name="suPassword"
                    value={this.state.suPassword}
                    onChange={(e) => {this.handleInputChange(e)}}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-5 homepage-cover text-center m-1 ml-auto">
              <h1 className="text-style">Login</h1>
              <form
                className="pb-4 px-3"
                onSubmit={(e) => {
                  this.login(e);
                }}
              >
                <div className="form-group text-left">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-text-style"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="liEmail"
                    value={this.state.liEmail}
                    onChange={(e) => {this.handleInputChange(e)}}
                  />
                  <small id="emailHelp" className="form-text form-text-style">
                    Account recovery is not possible at this time. Sorry.
                  </small>
                </div>
                <div className="form-group text-left">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-text-style"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    placeholder="Password"
                    name="liPassword"
                    value={this.state.liPassword}
                    onChange={(e) => {this.handleInputChange(e)}}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
