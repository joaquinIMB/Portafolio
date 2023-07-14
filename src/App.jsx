import React from "react";
import Fondo from "./componentes/home/Fondo";
import Home from "./componentes/home/Home";
import Header from "./componentes/header/Header";
import SobreMi from "./componentes/sobreMi/SobreMi";
import Habilidades from "./componentes/habilidades/Habilidades";
import Proyectos from "./componentes/proyectos/Proyectos";
import BotonSubirTodo from "./elementos/BotonSubirTodo";
import Contacto from "./componentes/contacto/Contacto";

const App = () => {
  return (
    <>
      <Fondo />
      <Home />
      <Header />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Contacto/>
      <BotonSubirTodo />
    </>
  );
};

export default App;
