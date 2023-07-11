import React from "react";
import "./proyectos.css";
import AgregarProyecto from "./AgregarProyecto";
const Proyectos = () => {
  return (
    <>
      <div className="contenedor_misProyectos" id="proyectos">
        <div className="misProyectos">
          <AgregarProyecto />
        </div>
      </div>
    </>
  );
};

export default Proyectos;
