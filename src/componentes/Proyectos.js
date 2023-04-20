import React, { useState } from "react";
import ContenedorProyectos from "../elementos/Proyectos/ContenedorProyectos";
import Proyecto from "../elementos/Proyectos/Proyecto";
import SeccionProyecto from "../elementos/Proyectos/SeccionProyecto";
// import SeccionAbierta from "../elementos/Proyectos/SeccionAbierta";
import TituloProy from "../elementos/Proyectos/TituloProy";
import Icono from "../elementos/Proyectos/Icono";

const Proyectos = () => {
  const [cerrado, abrirSeccion] = useState(false);

  return (
    <>
      {cerrado === false ? (
        <ContenedorProyectos>
          <SeccionProyecto onClick={() => abrirSeccion(true)}>
            <TituloProy>Proyectos</TituloProy>
            <Icono src="img/flecha.png" alt="Flechas" />
          </SeccionProyecto>
          <ContenedorProyectos ContenedorImgTexto>
            <Proyecto></Proyecto>
            <Proyecto Descripcion></Proyecto>
          </ContenedorProyectos>
        </ContenedorProyectos>
      ) : (
        <ContenedorProyectos>
          <SeccionProyecto SeccionAbierta onClick={() => abrirSeccion(false)}>
            <TituloProy TituloProy>Proyectos</TituloProy>
            <Icono src="img/flecha-invertida.png" alt="Flechas" />
          </SeccionProyecto>
          <ContenedorProyectos ContenedorImgTexto>
            <Proyecto></Proyecto>
            <Proyecto Descripcion></Proyecto>
          </ContenedorProyectos>
        </ContenedorProyectos>
      )}
    </>
  );
};

export default Proyectos;
