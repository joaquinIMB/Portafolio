import imagenProyecto1 from "./../assets/img/ClickVeloz.png";
import imagenProyecto2 from "./../assets/img/ToDoList.png";
import imagenProyecto3 from "./../assets/img/ReCon.png";
import { logos } from "./logos";
const [logoHTML, logoCSS, logoJS, logoReact, logoFirebase] = logos;
const logosProyecto1 = [logoHTML, logoCSS, logoJS];
const logosProyecto2 = [logoHTML, logoCSS, logoReact];
const logosProyecto3 = [logoReact, logoFirebase];
export const misProyectos = [
  {
    id: crypto.randomUUID(),
    titulo: "Click Veloz",
    descripcion: "Es el primer proyecto que realicé. Éste juego contiene 3 modos de dificultad. Para ganar debemos tocar todos los cuadrados blancos en el menor tiempo posible. Cuenta con un diseño adaptable.",
    imagen: imagenProyecto1,
    repositorio:"https://github.com/joaquinIMB/ClickVeloz",
    enlace: "https://clickveloz.netlify.app",
    logos: logosProyecto1,
  },
  {
    id: crypto.randomUUID(),
    titulo: "Lista de tareas",
    descripcion: "Web con la que podemos crear, editar y borrar nuestras tareas. Cuenta con un diseño adaptable para todos los dispositivos. Almacena cada cambio realizado en el navegador del usuario (LocalStorage).",
    imagen: imagenProyecto2,
    repositorio:"https://github.com/joaquinIMB/ListaDeTareas",
    enlace: "https://listadetareas-joaquinimbriago.netlify.app/",
    logos: logosProyecto2,
  },
  {
    id: crypto.randomUUID(),
    titulo: "Re-Con",
    descripcion:"App Web que nos permite llevar el registro de nuestros gastos mensuales ordenandolos por categoria y fecha. Para comenzar debemos registrarnos e iniciar sesion, luego podremos crear, editar y borrar nuestros gastos. ",
    imagen: imagenProyecto3,
    repositorio:"https://github.com/joaquinIMB/Re-Con-Gastos",
    enlace: "https://app-registro-gastos.web.app/",
    logos: logosProyecto3,
  },
];
