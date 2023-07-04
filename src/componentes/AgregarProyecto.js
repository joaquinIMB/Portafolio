import React from "react";
import "./proyectos.css";

const AgregaProyecto = ({imagen,logosHover,titulo,enlace}) => {
  return (
    <div className="contenedor-proyectos__misProyectos">
      <div className="contenedor-imagen__misProyectos">
        <img
          src={imagen}
          alt={imagen.name}
          className="imagen-proyecto__misProyectos"
        />
        <div className="contenedor-hover-imagen__misProyectos">
          <a href={enlace}>
            <span className="contenedor-icon-hover__misProyectos">
              {logosHover.length > 0
                ? logosHover.map((icono, index) => (
                    <img
                      className="icon-hover-imagen__misProyectos"
                      alt="icono"
                      src={[icono]}
                      key={index}
                    />
                  ))
                : console.log("")}
            </span>
          </a>
        </div>
      </div>
      <div className="contenedor-descripcion__misProyectos">
        <h2 className="titulo-descripcion__misProyectos">{titulo}</h2>
      </div>
    </div>
  );
};

export default AgregaProyecto;
