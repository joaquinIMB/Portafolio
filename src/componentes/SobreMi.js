import React from "react";
import "./sobreMi.css";
import imagenJoaquin from "./../assets/img/retrato.png";
import RedesContacto from "./RedesContacto";

const SobreMi = () => {
  return (
    <>
      <section className="contenedor-SobreMi" id="sobre-mi">
        <figure className="contenedorImagen">
          <img
            className="imagen1-sobreMi"
            src={imagenJoaquin}
            alt="Retrato Joaquin Imbriago"
          />
        </figure>
        <aside className="contenedorAside">
          <h1 className="contenedorAside_titulo">Desarrollador</h1>
          <h2 className="contenedorAside_subtitulo">Front-end</h2>
          <RedesContacto />
        </aside>
      </section>
      {/* <p className="contenedorAside_descripcion">
      Tengo 22 años y soy argentino. Aprendí a programar por mi cuenta, principalmente utilizando la plataforma Udemy. Destaco entre otras aptitudes, mi constancia y responsabilidad a la hora de realizar proyectos, además de mis habilidades interpersonales. Espero con ansias mi primer oportunidad laboral para poner en práctica todo lo experimentado en mi etapa de aprendizaje.
      </p> */}
    </>
  );
};

export default SobreMi;
