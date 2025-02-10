import React from "react";
import "../style/service.css";
import Fundacao from "../assets/fundacao.jpg";
import Alvenaria from "../assets/alvenaria.jpg";
import Hidraulica from "../assets/hidraulica.jpg";
import Eletrica from "../assets/instalacao-eletrica-residencial.jpg";
import Porcelanato from "../assets/porcelanaot.png";
import Externo from "../assets/externo.jpg";
import Demolicao from "../assets/demolicao.jpg";
import Gesso from "../assets/gesso.jpg";

const Service = () => {
    const services = [
        { 
            title: "Fundação e Estrutura", 
            image: Fundacao,
            paragraphs: [
                "Fundação (Sapatas, baldrames, estacas)",
                "Escavação e preparo do terreno",
                "Estrutura em concreto armado ou alvenaria estrutural"
            ]
        },
        { 
            title: "Alvenaria e Paredes", 
            image: Alvenaria,
            paragraphs: [
                "Levantamento de paredes (Tijolos, Blocos)",
                "Assentamento de portas e janelas",
                "Preparação para acabamentos"
            ]
        },
        { 
            title: "Instalações Hidráulicas e Esgoto", 
            image: Hidraulica,
            paragraphs: [
                "Rede de água limpa",
                "Rede de esgoto e drenagem",
                "Instalação de torneiras, ralos, sanitários, caixas de gordura"
            ]
        },
        { 
            title: "Instalação Elétrica", 
            image: Eletrica,
            paragraphs: [
                "Passagem de fiação",
                "Instalação de tomada, interruptores e iluminação",
                "Quadro de distribuição e aterramento"
            ]
        },
        { 
            title: "Revestimentos (Piso e Parede)", 
            image: Porcelanato,
            paragraphs: [
                "Colocação de pisos e revestimentos porcelanato",
                "assentamento de porcelanato, ladrilhos, azulejos",
                "Acabamento de paredes e teto (Massa corrida, Textura)"
            ]
        },
        { 
            title: "Acabamentos Internos", 
            image: Externo,
            paragraphs: [
                "Pintura interna (Paredes, Tetos)",
                "Aplicação de gesso ou Molduras",
                "Instalação de Rodapés, portas e janelas acabadas"
            ]
        },
        { 
            title: "Acabamentos Externos", 
            image: Demolicao,
            paragraphs: [
                "Pintura externa",
                "Colocação de pastilhas, pedras decorativas ou texturas",
                "impermeabilização de áreas molhadas (Varandas, Lajes)"
            ]
        },
        { 
            title: "Serviços de Manutenção e Reforma", 
            image: Gesso,
            paragraphs: [
                "Pequenos reparos (Troca de pisos, Reparo de vazamentos)",
                "Ampliação de espaços",
                "Demolição e reconstrução de áreas específicas"
            ]
        },
        { 
            title: "Serviços de Manutenção e Reforma", 
            image: Gesso,
            paragraphs: [
                "Instalação de bancadas, pias, Louças sanitárias",
                "Montagem de estruturas metálicas",
                "Colocação de forro(PVC, Gesso, ETC.)"
            ]
        }
    ];

    return (
        <section className="service-container">
            <div className="service-titulos">
                <h3 className="service-subtitulo">SERVIÇOS</h3>
                <h1 className="service-titulo">Confira todas as nossas soluções</h1>
            </div>

            <div className="service-cards">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h2 className="service-card-titulo">{service.title}</h2>
                        <div
                            className="service-card-imagem"
                            style={{ backgroundImage: `url(${service.image})` }}
                        >
                            <div className="service-card-content">
                                {service.paragraphs.map((paragraph, idx) => (
                                    <p key={idx} className="service-paragraph">{paragraph}</p>
                                ))}
                                <button className="service-button">ORÇAR</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Service;