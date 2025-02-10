import React, { useState, useEffect, useRef } from "react";
import "../style/header.css";
import LogoMobile from "../assets/logo-rmundial.svg";
import LogoDesktop from "../assets/logo-rmundial-desktop.svg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1080);
    const menuRef = useRef(null);
    const menuIconRef = useRef(null);


    const handleSmoothScroll = (id) => (e) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start" 
            });
        }
        setMenuOpen(false); 
    };

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 1080);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !menuIconRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);

    return (
        <header className="header">
            <div className="logo">
                <img src={isDesktop ? LogoDesktop : LogoMobile} alt="Logo MR Mundial Construções" />
            </div>

            <button className="menu-icon" ref={menuIconRef} onClick={() => setMenuOpen(!menuOpen)}>
                <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`} style={{ fontSize: "48px", color: "#FBAB7E" }}></i>
            </button>

            <nav className={`menu ${menuOpen ? "active" : ""}`} ref={menuRef}>
                <ul>
                    <li>
                        <a
                            href="#home"
                            onClick={handleSmoothScroll('home')}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#sobre-nos"
                            onClick={handleSmoothScroll('sobre-nos')}
                        >
                            Sobre Nós
                        </a>
                    </li>
                    <li>
                        <a
                            href="#servicos"
                            onClick={handleSmoothScroll('servicos')}
                        >
                            Serviços
                        </a>
                    </li>
                    <li>
                        <a
                            href="#fale-conosco"
                            onClick={handleSmoothScroll('fale-conosco')}
                        >
                            Fale Conosco
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;