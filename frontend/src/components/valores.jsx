import React from "react";
import "../style/valores.css";

const Valores = () => {
    return (
        <section className="valores-container">
            {/* Primeiro valor */}
            <div className="valor-item">
                <box-icon name="award" type="solid" color="#333333" size="48px"></box-icon>
                <h2 className="valor-titulo">Qualidade em cada detalhe</h2>
                <p className="valor-paragrafo">
                    Trabalhamos com materiais confiáveis e atenção minuciosa em cada etapa, garantindo resultados duradouros e seguros.
                </p>
            </div>
            {/* Segundo valor */}
            <div className="valor-item">
                <box-icon name="comment-dots" type="solid" color="#333333" size="48px"></box-icon>
                <h2 className="valor-titulo">Comunicação e Transparência</h2>
                <p className="valor-paragrafo">
                    Mantemos diálogo aberto sobre prazos, custos e avanços de cada fase do projeto, evitando surpresas e fortalecendo a confiança.
                </p>
            </div>

            {/* Terceiro valor */}
            <div className="valor-item">
                <box-icon name="calendar-check" type="solid" color="#333333" size="48px"></box-icon>
                <h2 className="valor-titulo">Compromisso e Pontualidade</h2>
                <p className="valor-paragrafo">
                    Assumimos cada projeto com responsabilidade, cumprindo prazos e respeitando as necessidades de cada cliente.
                </p>
            </div>
        </section>
    );
};

export default Valores;