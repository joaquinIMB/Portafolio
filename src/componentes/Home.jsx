import React from "react";
import "./home.css";
import imagenJoaquin from "./../assets/img/retrato.png";
import RedesContacto from "./RedesContacto";

const Home = ({cambiarAbrirPortafolio}) => {
  return (
    <>
      <section className="contenedor_Home" id="home">
        <figure className="contenedor-imagen_Home">
          <img
            className="imagen_Home"
            src={imagenJoaquin}
            alt="Retrato Joaquin Imbriago"
          />
        </figure>
        <aside className="contenedor-aside_Home">
          <h1 className="titulo_Home">Desarrollador</h1>
          <h2 className="subtitulo_Home">Front-end</h2>
          <RedesContacto />
          <div className="contenedor-botones-Home">
            <button className="boton-contacto-Home">Contacto</button>
            <button className="boton-sobreMi-Home" onClick={() => cambiarAbrirPortafolio(true)}>
              <a href="#sobre-mi" className="enlace-boton-sobreMi_Home">
              Sobre mi
              </a>
              </button>
          </div>
        </aside>
      </section>
      {/* <p className="descripcion-sobreMi">
      Tengo 22 años y soy argentino. Aprendí a programar por mi cuenta, principalmente utilizando la plataforma Udemy. Destaco entre otras aptitudes, mi constancia y responsabilidad a la hora de realizar proyectos, además de mis habilidades interpersonales. Espero con ansias mi primer oportunidad laboral para poner en práctica todo lo experimentado en mi etapa de aprendizaje.
      </p> */}
    </>
  );
};

export default Home;
