import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/news">Noticias</NavLink>
          <NavLink to="/squads">Clanes hispanos</NavLink>
          <NavLink to="/servers">Servidores</NavLink>
          <NavLink to="/about">Sobre Squad Hispano</NavLink>
       </div>
    );
}

export default Navigation;
