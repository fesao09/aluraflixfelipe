import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CorContexto } from '../Contexto/CorContexto';

const HeaderContainer = styled.header`
  background-color: ${({ corFundo }) => corFundo};
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }

  nav {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;

      li {
        margin-left: 20px;

        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
`;

function Header() {
  const { corFundo } = useContext(CorContexto); // useContext dentro da função

  return (
    <HeaderContainer corFundo={corFundo}>
      <Link to="/" className="logo">
        AluraFlix
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/favoritos">Favoritos</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;