import React, { useState, useEffect } from "react";
import "../style/carrossel.css";
import Fundacao from "../assets/fundacao.jpg";
import Alvenaria from "../assets/alvenaria.jpg";
import Porcelanato from "../assets/porcelanaot.png";
import Modelo from "../assets/modelo.jpg";

const Carrossel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

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
                    <button className="ver-todas">TODOS OS SERVIÇOS</button>
                </>
            )
        },
        {
            background: "#000",
        }
    ];

    return (
        <>
            <section className="carrossel" style={{ width: "100%", background: slides[activeSlide].background }}>
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
