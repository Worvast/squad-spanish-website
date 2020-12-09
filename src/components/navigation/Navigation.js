import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
    return (
      <div className="header__container">
        <div className="logo__container"></div>
        <img src="../../images/logo.png" alt="Squad"></img>
        <div className="header__navbar">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/news">Noticias</NavLink>
          <NavLink to="/squads">Clanes hispanos</NavLink>
          <NavLink to="/servers">Servidores</NavLink>
          <NavLink to="/about">Sobre Squad Hispano</NavLink>
        </div>
      </div>
    );
}

export default Navigation;
