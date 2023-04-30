import React from "react";
import "./SobreMi.css"

const SobreMi = () => {
  return (
    <section className="contenedor-SobreMi">
      <h1 className="titulo-vertical__SobreMi">Front <span style={{color: "#fff"}}>End</span></h1>
      <aside className="aside-SobreMi">
      <h1 className="titulo-horizontal__SobreMi">Desarrollador Web</h1>
        <p className="texto-SobreMi">
          Apasionado por la tecnología, actualmente incursionando en el <span className="span-texto__SobreMi">Desarrollo Web. </span>
          Estudiante <span className="span-texto__SobreMi">autónomo</span>, plagado de curiosidad y en constante crecimiento. 
          Actualmente realizando proyectos personales, capacitado en <span className="span-texto__SobreMi">UI</span> para crear experiencias de usuario confortables.

        </p>
      </aside>
      <h1 className="titulo-vertical-derecho__SobreMi">Front <span style={{color: "#fff"}}>End</span></h1>
    </section>
  );
};

export default SobreMi;
