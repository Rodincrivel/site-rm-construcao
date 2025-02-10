import React, { useState } from "react";
import "../style/SobreNos.css";
import Imagem1 from "../assets/imagem-1.jpg";
import Imagem2 from "../assets/imagem-2.jpg";
import Imagem3 from "../assets/imagem-3.jpg";
import Imagem4 from "../assets/imagem-4.jpg";
import Imagem5 from "../assets/imagem-5.jpg";
import Imagem6 from "../assets/imagem-6.jpg";

const SobreNos = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [Imagem6, Imagem1, Imagem2, Imagem3, Imagem4, Imagem5];

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="sobre-nos-container">
            {/* Subtítulo e Título */}
            <div className="sobre-nos-titulos" id="sobre-nos">
                <h3 className="sobre-nos-subtitulo">SOBRE NÓS</h3>
                <h1 className="sobre-nos-titulo">Há 30 anos ajudando a realizar sonhos</h1>
            </div>
            <div className="container-01">
                {/* Carrossel de Imagens */}
                <div className="carrossel-sobre-nos">
                    <button className="carrossel-btn" onClick={prevImage}>
                        <box-icon name="chevron-left" type="solid" color="#ffffff"></box-icon>
                    </button>
                    <div
                        className="carrossel-imagem"
                        style={{ backgroundImage: `url(${images[currentImage]})` }}
                    ></div>
                    <button className="carrossel-btn" onClick={nextImage}>
                        <box-icon name="chevron-right" type="solid" color="#ffffff"></box-icon>
                    </button>
                </div>

                {/* Parágrafos */}
                <div className="sobre-nos-paragrafos">
                    <p>
                        Há mais de 30 anos, a MR Mundial Construções vem transformando projetos em realidade, oferecendo soluções completas para cada etapa da obra. Com expertise e compromisso, atuamos desde a fundação até o acabamento, garantindo qualidade, segurança e eficiência em cada detalhe.
                    </p>
                    <p>
                        Nossa missão é proporcionar a melhor experiência para nossos clientes, unindo inovação e tradição para entregar resultados que superam expectativas. Com uma equipe altamente qualificada e materiais de alto padrão, oferecemos serviços que abrangem fundação, alvenaria, revestimentos em porcelanato e acabamentos de alto nível.
                    </p>
                    <p>
                        A confiança dos nossos clientes é o que nos impulsiona a continuar evoluindo e entregando excelência. Seja para construções residenciais, comerciais ou industriais, estamos prontos para transformar cada projeto em uma obra de referência.
                    </p>
                    <p>
                        MR Mundial Construções — do alicerce ao acabamento, construindo com qualidade e compromisso.
                    </p>
                </div>


            </div>

        </section>
    );
};

export default SobreNos;