import React from "react";
import "./home.css";
import styled from "styled-components";
import imagenJoaquin from "./../../assets/img/retrato.png";
import RedesContacto from "./RedesContacto";
import {ReactComponent as IconoFlecha} from "./../../assets/img/Icons/arrow.svg"

const Home = () => {
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
        </aside>
      </section>
      <Flecha/>
    </>
  );
};

const Flecha = styled(IconoFlecha)`
fill:#ffffff;
position:absolute;
bottom: 15px;
left:50%;
transform:rotate(90deg) scale(2);
animation: movimiento 0.8s infinite;
@keyframes movimiento {
  0%{
    bottom: 15px;
    transform:rotate(90deg) scale(2);
  }
  100%{
    bottom: 5px;
    transform: rotate(90deg) scale(1.5);
  }
}
`

export default Home;
