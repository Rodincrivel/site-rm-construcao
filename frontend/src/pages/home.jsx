import React from "react";
import Header from "../components/header";
import Carrossel from "../components/carrossel";
import Valores from "../components/valores"; // Importe o componente Valores

const Home = () => {
    return (
        <div>
            <Header />
            <Carrossel />
            <Valores /> 
        </div>
    );
};

export default Home;