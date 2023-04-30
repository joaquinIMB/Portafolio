import React from "react";
import "./Proyectos.css";
import AgregarProyecto from "./AgregarProyecto";
// -----------------Proyecto 1 ---------------------------
import imagenProyecto1 from "../assets/img/ClickVeloz.png"
import logo1Proyecto1 from "../assets/img/Icons/html .png"
import logo2Proyecto1 from "../assets/img/Icons/css.png"
import logo3Proyecto1 from "../assets/img/Icons/js.png"
// -----------------Proyecto 2 ---------------------------
import imagenProyecto2 from "../assets/img/ToDoList.png"
import logo1Proyecto2 from "../assets/img/Icons/react1.png"

const logosProyecto1 = [logo1Proyecto1, logo2Proyecto1, logo3Proyecto1]
const logosProyecto2 = [logo1Proyecto2]

const Proyectos = () => {

  return (
    <>
    <div className="contenedor_misProyectos">
    <div className="misProyectos">
      <AgregarProyecto 
      imagen={imagenProyecto1} 
      logosHover={logosProyecto1} 
      titulo={"ClickVeloz"} 
      descripcion={"Un juego creado con HTML, CSS y Javascript. Adaptable a dispositivos móviles. Debes clickear todos los cuadrados para ganar. Para comenzar el juego seleccionamos el modo de dificultad y luego play. Una cuenta atrás aparecerá en pantalla para indicar el tiempo restante."}
      enlace={"https://clickveloz.netlify.app"}/>
      <AgregarProyecto 
      imagen={imagenProyecto2}
      logosHover={logosProyecto2} 
      titulo={"To Do List"} 
      descripcion={"Lista de tareas creada con React. Adaptable a dispositivos móviles. En ésta lista podemos agendar tareas para hacer guardadas en LocalStorage. Cuenta con botones para mostrar u ocultar las tareas completatas, también podemos editar o borrar las mismas."}
      enlace={"https://listadetareas-joaquinimbriago.netlify.app/"} />
    </div>
    </div>
    </>
  );
};

export default Proyectos;
