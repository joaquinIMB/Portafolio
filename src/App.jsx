import React from "react";
import Fondo from "./componentes/Fondo";
import Home from "./componentes/Home";
import Header from "./componentes/Header";
import SobreMi from "./componentes/SobreMi";
import Habilidades from "./componentes/Habilidades";
import Proyectos from "./componentes/Proyectos";
import BotonSubirTodo from "./elementos/BotonSubirTodo";

const App = () => {
  return (
    <>
      <Fondo />
      <Home />
      <Header />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <BotonSubirTodo />
    </>
  );
};

export default App;
