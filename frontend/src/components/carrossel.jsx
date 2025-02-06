import React, { useState } from "react";
import "../style/carrossel.css"; // Importando o CSS

const Carrossel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "https://via.placeholder.com/1200x600", // Substituir pela imagem real
            alt: "Imagem 1",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/1200x600",
            alt: "Imagem 2",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/1200x600",
            alt: "Imagem 3",
        },
    ];

    return (
        <section className="carrossel">
            <div className="carrossel-container">
                {slides.map((slide, index) => (
                    <div 
                        key={slide.id} 
                        className={`slide ${index === activeSlide ? "active" : ""}`}
                    >
                        <img src={slide.image} alt={slide.alt} />
                        <div className="overlay"></div>
                        <h2 className="subtitulo">
                            <span className="semibold">Fundação</span> ao <span className="semibold">Acabamento</span>: Tudo em um só lugar.
                        </h2>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Carrossel;
