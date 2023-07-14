import React from "react";
import "./sobreMi.css";
import imagenSobreMi from "./../assets/img/imagenSobreMi.jpeg";

const SobreMi = () => {
  return (
    <section className="contenedor_SobreMi" id="sobre-mi">
      <article className="contenedor-descripcion_SobreMi">
        <p className="descripcion-SobreMi parrafo1">
          Desde pequeño me apasiona la
          <span className="tags"> tecnologia </span> y sus distintas ramas.
          Aprendí a <span className="tags"> desarrollar </span> por mi cuenta,
          principalmente utilizando la plataforma
          <span className="tags"> Udemy</span>.
        </p>
        <p className="descripcion-SobreMi parrafo2">
          Destaco de mis cualidades mi
          <span className="tags"> constancia </span> y
          <span className="tags"> responsabilidad </span> a la hora de perseguir
          metas y objetivos, además de mis habilidades interpersonales, que
          pueden favorecer al trabajo en
          <span className="tags"> equipo</span>.
        </p>
        <p className="descripcion-SobreMi parrafo3">
          Espero con ansias mi primer <span className="tags">oportunidad </span>
          laboral en el sector para poner en práctica toda la
          <span className="tags"> experiencia</span> adquirida en mi etapa de
          <span className="tags"> aprendizaje</span>.
        </p>
      </article>
      <aside className="contenedor-imagen_SobreMi">
        <img
          className="imagen_SobreMi"
          src={imagenSobreMi}
          id="imagen1"
          alt="Foto en las montañas Joaquin Imbriago"
        />
      </aside>
    </section>
  );
};
export default SobreMi;
