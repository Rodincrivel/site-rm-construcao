import React from 'react';
import '../style/footer.css';
import logoFooterMobile from '../assets/logo-footer-mobile.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logoFooterMobile} alt="Logo RM Construções" className="footer-logo" />
        <nav className="footer-nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#sobre-nos" className="nav-link">Sobre Nós</a>
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#fale-conosco" className="nav-link">Fale Conosco</a>
        </nav>
        <div className="footer-line"></div>
        <p className="footer-copyright">
          ©2024 - 2025, R Mundial Construções e Reformas Ltda.
        </p>
        <p className="footer-cnpj">
          CNPJ 57.242.650/0001-60 - Rua Nereu Bertini Magalhães, nº 78 - São Paulo/SP - Brasil
        </p>
      </div>
    </footer>
  );
};

export default Footer;