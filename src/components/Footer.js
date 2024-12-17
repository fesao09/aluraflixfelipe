// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">AluraFlix</div>
      <nav>
        <a href="/ajuda">Ajuda</a>
        <a href="/contato">Contato</a>
        {/* Adicione mais links conforme necessário */}
      </nav>
    </footer>
  );
}

export default Footer;
