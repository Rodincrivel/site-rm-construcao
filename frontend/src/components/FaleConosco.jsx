import React from 'react';
import '../style/FaleConosco.css';
import zapIcon from '../assets/icone-zap.svg';

const FaleConosco = () => {
    return (
        <section className="fale-conosco">
            <div className="fale-conosco-content" id='fale-conosco'>
                <h2 className="fale-conosco-subtitulo">FALE CONOSCO</h2>
                <p className="fale-conosco-titulo">
                    Faça um orçamento sem compromisso de forma rápida e segura através de nossos canais oficiais, confira a baixo:
                </p>
                <div className='container-info-whatsapp'>
                    <div className="whatsapp-info">
                        <h3 className="whatsapp-titulo">WHATSAPP</h3>
                        <span className="whatsapp-numero">55 11 91087-2993</span>
                    </div>
                    <div className='icon-div'>
                        <img src={zapIcon} alt="WhatsApp Icon" className="whatsapp-icon" />
                    </div>
                </div>
            </div>

            {/* FORMULÁRIO COM O LINK CORRETO DO FORMSPREE */}
            <form
                className="fale-conosco-form"
                action="https://formspree.io/f/xzzdvqlk" // Link correto do Formspree
                method="POST"
            >
                <label htmlFor="nome" className="form-label">Nome</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Insira seu nome completo"
                    className="form-input"
                    required
                />

                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="exemplo@exemplo.com.br"
                    className="form-input"
                    required
                />

                <label htmlFor="mensagem" className="form-label">Descreva sua mensagem</label>
                <textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Insira uma mensagem de até 500 caracteres"
                    className="form-textarea"
                    maxLength="500"
                    required
                ></textarea>

                <button type="submit" className="form-button">ENVIAR</button>
            </form>
        </section>
    );
};

export default FaleConosco;