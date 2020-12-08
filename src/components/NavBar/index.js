import React from 'react'
import './style.scss';
import { NavLink } from 'react-router-dom';
import Logo from '@assets/images/navbar-logo.svg';

export const NavBar = () => (
  <div className="navbar">
    <div className="container">
      <img src={Logo} alt="Лого" type="image/svg+xml" />
      <div className="navbar__header"><NavLink to="/">MERN CLOUD</NavLink></div>
      <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div>
      <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>
    </div>
  </div>
  )
