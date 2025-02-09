import React from "react";
import Header from "../components/header";
import Carrossel from "../components/carrossel";
import Valores from "../components/valores";
import SobreNos from "../components/SobreNos"; // Importe o componente SobreNos

const Home = () => {
    return (
        <div>
            <Header />
            <Carrossel />
            <Valores />
            <SobreNos /> 
        </div>
    );
};

export default Home;