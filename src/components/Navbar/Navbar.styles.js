import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #0A3871;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const NavButton = styled.button`
  background-color: #F7F7F7;
  color: #0A3871;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ddd;
  }

  /* Estilo condicional baseado na prop $isActive */
  ${({ $isActive }) => $isActive && `
    background-color: #0A3871;
    color: #fff;
  `}
`;
