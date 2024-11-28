import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">LogoMarca</h3>
          <div className="footer-icons">
            <a href="#" className="footer-icon">📸</a>
            <a href="#" className="footer-icon">📘</a>
            <a href="#" className="footer-icon">📹</a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Empresa</h3>
          <ul className="footer-list">
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Faça parte do time</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Funcionalidades</h3>
          <ul className="footer-list">
            <li><a href="#">Marketing</a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Recursos</h3>
          <ul className="footer-list">
            <li><a href="#">iOS & Android</a></li>
            <li><a href="#">Teste a Demo</a></li>
            <li><a href="#">Clientes</a></li>
            <li><a href="#"></a></li>
          </ul>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
