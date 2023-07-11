import React from "react";
import "./habilidades.css";
import { logos } from "../elementos/logos";

const Habilidades = () => {
  return (
    <div className="contenedor_Habilidades" id="habilidades">
        <ul className="contenedor-listas_Habilidades">
      {logos &&
        logos.map((logo, index) => {
          return (
              <li key={index} className="lista_Habilidades">
                <img className="logo_Habilidades" src={logo.logo} alt={logo.nombreHabilidad}/>
                <h2 className="titulo_Habilidades">{logo.nombreHabilidad}</h2>
              </li>
          );
        })}
        </ul>
    </div>
  );
};

export default Habilidades;
