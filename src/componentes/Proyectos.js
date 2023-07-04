import React from "react";
import "./proyectos.css";
import AgregarProyecto from "./AgregarProyecto";
// -----------------Proyecto 1 ---------------------------
import imagenProyecto1 from "../assets/img/ClickVeloz.png";
import logo1Proyecto1 from "../assets/img/Icons/html .png";
import logo2Proyecto1 from "../assets/img/Icons/css.png";
import logo3Proyecto1 from "../assets/img/Icons/js.png";
// -----------------Proyecto 2 ---------------------------
import imagenProyecto2 from "../assets/img/ToDoList.png";
import logo1Proyecto2 from "../assets/img/Icons/react1.png";

const logosProyecto1 = [logo1Proyecto1, logo2Proyecto1, logo3Proyecto1];
const logosProyecto2 = [logo1Proyecto2];

const Proyectos = () => {
  return (
    <>
      <div className="contenedor_misProyectos" id="proyectos">
        <div className="misProyectos">
          <AgregarProyecto
            imagen={imagenProyecto1}
            logosHover={logosProyecto1}
            titulo={"ClickVeloz"}
            enlace={"https://clickveloz.netlify.app"}
          />
          <AgregarProyecto
            imagen={imagenProyecto2}
            logosHover={logosProyecto2}
            titulo={"To Do List"}
            enlace={"https://listadetareas-joaquinimbriago.netlify.app/"}
          />
        </div>
      </div>
    </>
  );
};

export default Proyectos;
