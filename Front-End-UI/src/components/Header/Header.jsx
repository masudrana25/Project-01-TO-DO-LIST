import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" id='home'>
            <Link to="/" class="nav-link">
              {' '}
              <h6> Home</h6>
            </Link>
          </li>
          <li class="nav-item" id='task'>
            <Link to="/task" class="nav-link">
              <h6>Task</h6>
            </Link>
          </li>
          <li class="nav-item" id='login_registration'>
            <Link to="login/registration" class="nav-link">
              <h6>Login / Registration</h6>
            </Link>
          </li>
          <li class="nav-item" id='profile'>
            <Link to="profile" class="nav-link">
              {' '}
              <h6> Your Profile</h6>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
