import React from "react";
import Header from "../components/header";
import Carrossel from "../components/carrossel";
import Valores from "../components/valores";
import SobreNos from "../components/SobreNos";
import Service from "../components/service";
import FaleConosco from '../components/FaleConosco';
import Footer from '../components/footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Carrossel />
            <Valores />
            <SobreNos />
            <Service />
            <FaleConosco />
            <Footer />
        </div>
    );
};

export default Home;