import React from "react";
import "./proyectos.css";
import { misProyectos } from "../elementos/misProyectos";
import logoGitHub from "./../assets/img/Icons/GitHub.png";
const AgregaProyecto = () => {
  return (
    <>
      {misProyectos.map((proyecto) => {
        return (
          <div key={proyecto.id} className="contenedor-proyectos__misProyectos">
            <div className="contenedor-imagen__misProyectos">
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="imagen-proyecto__misProyectos"
              />
            </div>
            <div className="contenedor-hover__misProyectos">
              <header className="header_misProyectos">
                <a
                  className="enlace-repositorio_misProyectos"
                  href={proyecto.repositorio}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="logoGitHub_misProyectos"
                    src={logoGitHub}
                    alt="Enlace para ir al repositorio"
                  />
                </a>
                <h2 className="titulo_misProyectos">{proyecto.titulo}</h2>
                <button className="boton_misProyectos">
                  <a
                    className="enlace_misProyectos"
                    href={proyecto.enlace}
                    target="_blank"
                    rel="noreferrer"
                  >
                    DEMO
                  </a>
                </button>
              </header>
              <section className="contenedor-descripcion-logos_misProyectos">
                <article className="contenedor-descripcion_misProyectos">
                  {proyecto.descripcion && (
                    <p className="descripcion_misProyectos">
                      {proyecto.descripcion}
                    </p>
                  )}
                </article>
                <aside className="contenedor-logos_misProyectos">
                  {proyecto.logos.map((logoProyecto, index) => (
                    <img
                      key={index}
                      className="logos_misProyectos"
                      src={logoProyecto}
                      alt={`${logoProyecto} proyecto ${index}`}
                    />
                  ))}
                </aside>
              </section>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AgregaProyecto;
