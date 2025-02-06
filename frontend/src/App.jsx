import React from "react";
import Home from "./pages/home"; // Importando a Home


const App = () => {
  return (
    <div>
      <Home /> {/* Carregando a Home, que já inclui o Header e o Carrossel */}
    </div>
  );
};

export default App;
