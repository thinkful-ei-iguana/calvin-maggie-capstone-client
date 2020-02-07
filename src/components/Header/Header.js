import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../contexts/UserContext";
import "./Header.css";

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div>
        <nav className="log-out-user">
          <div className="logged-in-user">{this.context.user.name}</div>
          <Link
            className="log-out-user-link"
            onClick={this.handleLogoutClick}
            to="/login"
          >
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav className="heading login-page-heading">
        <Link className="heading login-page-login" to="/login">
          Login
        </Link>{" "}
        <Link className="heading login-page-register" to="/register">
          Sign up
        </Link>
      </nav>
    );
  }

  render() {
    return (
      <header>
        <h1 className="heading login-page-header">
          <Link className="heading login-page-link" to="/login">
            Spaced repetition
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header;
