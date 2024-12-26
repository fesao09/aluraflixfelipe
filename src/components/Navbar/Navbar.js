import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NavbarContainer, Logo, NavButton, ButtonContainer } from './Navbar.styles'; // Importando os estilos

const Navbar = () => {
  const location = useLocation();

  return (
    <NavbarContainer>
      <Logo>Aluraflix</Logo>
      <ButtonContainer>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <NavButton $isActive={location.pathname === '/'}>Home</NavButton>
        </NavLink>
        <NavLink to="/novo-video" style={{ textDecoration: 'none' }}>
          <NavButton $isActive={location.pathname === '/novo-video'}>Novo Vídeo</NavButton>
        </NavLink>
      </ButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar;

