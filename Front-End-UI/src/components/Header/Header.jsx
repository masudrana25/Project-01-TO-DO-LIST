import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" id="home">
              <Link to="/" class="nav-link">
                <h6> Home</h6>
              </Link>
            </li>

            <li class="nav-item" id="task">
              <Link to="/task" class="nav-link">
                <h6>Task</h6>
              </Link>
            </li>

            <li class="nav-item" id="registration">
              <Link to="registration" class="nav-link">
                <h6>Registration</h6>
              </Link>
            </li>

            <li class="nav-item" id="login">
              <Link to="login" class="nav-link">
                <h6>Login</h6>
              </Link>
            </li>

            <li class="nav-item " id="profile">
              <Link to="profile" class="nav-link">
                <h6> Your Profile</h6>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
