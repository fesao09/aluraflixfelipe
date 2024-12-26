// src/components/Footer/Footer.js
import React from 'react';
import { FooterContainer } from './Footer.styles';
import Logo from '../../assets/logo.png'; // Certifique-se de ter o logo na pasta correta

const Footer = () => (
  <FooterContainer>
    <img src={Logo} alt="Logotipo Aluraflix" />
  </FooterContainer>
);

export default Footer;
