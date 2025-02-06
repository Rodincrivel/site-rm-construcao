import React, { useState, useEffect } from "react";
import "../style/header.css"; // Importando o CSS
import LogoMobile from "../assets/logo-rmundial.svg"; // Logo versão Mobile
import LogoDesktop from "../assets/logo-rmundial-desktop.svg"; // Logo versão Desktop

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1080);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1080);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="header">
            {/* Alterna automaticamente entre logo mobile e desktop */}
            <div className="logo">
                <img src={isDesktop ? LogoDesktop : LogoMobile} alt="Logo MR Mundial Construções" />
            </div>

            {/* Ícone do menu hambúrguer - Só aparece no mobile */}
            <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`} style={{ fontSize: "48px", color: "#FBAB7E" }}></i>
            </button>

            {/* Menu de navegação */}
            <nav className={`menu ${menuOpen ? "active" : ""}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre">Sobre Nós</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#contato">Fale Conosco</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
