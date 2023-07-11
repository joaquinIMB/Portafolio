import React from "react";
import "./sobreMi.css";
import imagenSobreMi from "./../assets/img/imagenSobreMi.jpeg";

const SobreMi = () => {
  return (
    <section className="contenedor_SobreMi" id="sobre-mi">
      <article className="contenedor-descripcion_SobreMi">
        <p className="descripcion-SobreMi parrafo1">
          Desde pequeño me apasiona la <span className="tags"> tecnologia </span> y sus distintas
          ramas. Aprendí a <span className="tags"> desarrollar </span> por mi cuenta,
          principalmente utilizando la plataforma
          <span className="tags"> Udemy</span>.
        </p>
        <p className="descripcion-SobreMi parrafo2">
          Destaco de mis cualidades mi <span className="tags"> constancia </span> y
          <span className="tags"> responsabilidad </span> a la hora de perseguir metas y objetivos,
          además de mis habilidades interpersonales, que considero infaltables
          para trabajar en <span className="tags"> equipo</span>.
        </p>
        <p className="descripcion-SobreMi parrafo3">
          Espero con ansias mi primer oportunidad laboral como
          <span className="tags"> Desarrollador Front end </span> para poner en práctica todo lo
          experimentado en mi etapa de aprendizaje.
        </p>
      </article>
      <aside className="contenedor-imagen_SobreMi">
        <img
          className="imagen_SobreMi"
          src={imagenSobreMi}
          alt="Foto en las montañas Joaquin Imbriago"
        />
      </aside>
    </section>
  );
};

export default SobreMi;
