import React, { useState } from "react";
import Fondo from "./componentes/Fondo";
import Home from "./componentes/Home";
import Header from "./componentes/Header";
import SobreMi from "./componentes/SobreMi";
import Habilidades from "./componentes/Habilidades";
import Proyectos from "./componentes/Proyectos";
import BotonSubirTodo from "./elementos/BotonSubirTodo";

const App = () => {
  const [abrirPortafolio, cambiarAbrirPortafolio] = useState(false);
  return (
    <>
      <Fondo />
      {!abrirPortafolio ? (
        <Home cambiarAbrirPortafolio={cambiarAbrirPortafolio} />
      ) : (
        <>
          <Header cambiarAbrirPortafolio={cambiarAbrirPortafolio}/>
          <SobreMi />
          <Habilidades />
          <Proyectos />
          <BotonSubirTodo />
        </>
      )}
    </>
  );
};

export default App;
