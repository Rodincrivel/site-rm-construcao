import React, { useState, useEffect } from "react";
import "../style/carrossel.css";
import Fundacao from "../assets/fundacao.jpg";
import Alvenaria from "../assets/alvenaria.jpg";
import Porcelanato from "../assets/porcelanaot.png";
import Modelo from "../assets/modelo.jpg";
import cellDesktop from '../assets/cell-desktop.svg';
import zapMobile from '../assets/zap-mobile.svg';

const Carrossel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const scrollToServicos = () => {
        const servicosSection = document.getElementById("servicos");
        if (servicosSection) {
            servicosSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = '5511910872993'; 
        const message = encodeURIComponent('Olá, gostaria de solicitar um orçamento.');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    const slides = [
        {
            background: "linear-gradient(to bottom, #FBAB7E 0%, #F7CE68 100%)",
            content: (
                <>
                    <div className="carrossel-text">
                        <span className="semibold">Fundação</span> ao <span className="semibold">Acabamento</span>: Tudo em um só lugar.
                    </div>
                    <div className="carrossel-line"></div>
                    <div className="slides">
                        {[Fundacao, Alvenaria, Porcelanato, Modelo].map((image, i) => (
                            <div key={i} className="carrossel-item" style={{ backgroundImage: `url(${image})` }}></div>
                        ))}
                    </div>
                    <button className="ver-todas" onClick={scrollToServicos}>
                        TODOS OS SERVIÇOS
                    </button>
                </>
            )
        },
        {
            background: "linear-gradient(to left, #81FBB8 0%, #28C76F 100%)",
            content: (
                <>
                    <div className="container-two-carrossel">
                        <div className="two-carrossel">
                            <div className="carrossel-text">
                                <span className="semibold">Orçamento Rápido: Fale no WhatsApp</span>
                                <div className="carrossel-line"></div>
                                <div width="173px">
                                    <span className="semibold cta-text">Clique no botão a baixo e comece agora mesmo a transformar seu projeto em realidade</span>
                                </div>
                                {/* Botão "enviar mensagem" */}
                                <button className="ver-todas" onClick={handleWhatsAppClick}>
                                    ENVIAR MENSAGEM
                                </button>
                            </div>
                        </div>
                        <img src={zapMobile} alt="Mobile" className="zap-mobile" />
                        <img src={cellDesktop} alt="Desktop" className="cell-desktop" />
                    </div>
                </>
            )
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 10000); 

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <>
            <section className="carrossel" style={{ width: "100%", background: slides[activeSlide].background }} id="home">
                {slides[activeSlide].content}
            </section>
            <div className="indicators-wrapper">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${activeSlide === index ? "active" : ""}`}
                        onClick={() => setActiveSlide(index)}
                    ></span>
                ))}
            </div>
        </>
    );
};

export default Carrossel;