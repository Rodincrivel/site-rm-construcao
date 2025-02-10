import React from "react";
import Header from "../components/header";
import Carrossel from "../components/carrossel";
import Valores from "../components/valores";
import SobreNos from "../components/SobreNos";
import Service from "../components/service"; // Importe o componente Service

const Home = () => {
    return (
        <div>
            <Header />
            <Carrossel />
            <Valores />
            <SobreNos />
            <Service /> 
        </div>
    );
};

export default Home;