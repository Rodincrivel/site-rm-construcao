import React, { useState, useEffect } from "react";
import "../style/carrossel.css";
import Fundacao from "../assets/fundacao.jpg";
import Alvenaria from "../assets/alvenaria.jpg";
import Porcelanato from "../assets/porcelanaot.png";
import Modelo from "../assets/modelo.jpg";

const Carrossel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        [Fundacao, Alvenaria, Porcelanato, Modelo],
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 30000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section
            className="carrossel"
            style={{
                width: "100%",
                background: activeSlide === 0
                    ? "linear-gradient(to bottom, #FBAB7E 0%, #F7CE68 100%)"
                    : "none"
            }}
        >
            <div className="carrossel-text" style={{ margin: "12px 0" }}>
                <span className="semibold">Fundação</span> ao <span className="semibold">Acabamento</span>: Tudo em um só lugar.
            </div>
            <div className="slides" style={{ transform: `translateX(-${activeSlide * 100}%)`, width: "100%" }}>
                {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                        {slide.map((image, i) => (
                            <div
                                key={i}
                                className="carrossel-item"
                                style={{ backgroundImage: `url(${image})` }}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
            <button className="ver-todas">Ver todas soluções</button>
            <div className="indicators" style={{ marginTop: "6px", textAlign: "center" }}>
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${activeSlide === index ? "active" : ""}`}
                        onClick={() => setActiveSlide(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Carrossel;
