import React from "react";
import ReactDOM from "react-dom/client";
import SobreMi from "./componentes/SobreMi";
import Header from "./componentes/Header";
import Proyectos from "./componentes/Proyectos";

const Main = () => {
  return (
    <>
      <Header />
      <SobreMi />
      <Proyectos />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
