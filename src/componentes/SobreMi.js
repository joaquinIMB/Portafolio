import React from "react";
import "./sobreMi.css";
import imagenJoaquin from "./../assets/img/retrato.png";

const SobreMi = () => {
  return (
    <>
      <section className="contenedor-SobreMi" id="sobre-mi">
        <div className="contenedorImagen">
          <img
            className="imagen1-sobreMi"
            src={imagenJoaquin}
            alt="paisaje-montaña"
          />
        </div>
        <article className="contenedorAside">
          <h1 className="contenedorAside_titulo">
            Desarrollador <span>Front-end</span>
          </h1>
          <p className="contenedorAside_descripcion">
          Tengo 22 años y soy argentino. Aprendí a programar por mi cuenta, principalmente utilizando la plataforma Udemy. Destaco entre otras aptitudes, mi constancia y responsabilidad a la hora de realizar proyectos, además de mis habilidades interpersonales. Espero con ansias mi primer oportunidad laboral para poner en práctica todo lo experimentado en mi etapa de aprendizaje.
          </p>
        </article>
      </section>
    </>
  );
};


export default SobreMi;
