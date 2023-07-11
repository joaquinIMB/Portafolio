import React from "react";
import styled from "styled-components";
import {ReactComponent as IconoHome} from "./../assets/img/Icons/home.svg"

const Header = ({cambiarAbrirPortafolio}) => {
  window.addEventListener("scroll", () => {
    let contenedorHeader = document.getElementById("contenedorHeader");
    if (window.scrollY > 30) {
      contenedorHeader.style.boxShadow = "0px 3px 12px #00000060";
      contenedorHeader.style.backdropFilter = "blur(8px)";
      contenedorHeader.style.background = "#0000007d";
    } else {
      contenedorHeader.style.boxShadow = "0";
      contenedorHeader.style.backdropFilter = "none";
      contenedorHeader.style.background = "none";
    }
  });

  return (
    <>
      <ContenedorHeader id="contenedorHeader">
        <ContenedorSecciones>
        <Secciones>
            <a className="enlace" href="#home" onClick={() => cambiarAbrirPortafolio(false)}>
              <Home/>
            </a>
          </Secciones>
          <Secciones>
            <a className="enlace" href="#sobre-mi">
              Sobre mi
            </a>
          </Secciones>
          <Secciones>
            <a className="enlace" href="#habilidades">
              Habilidades
            </a>
          </Secciones>
          <Secciones>
            <a className="enlace" href="#proyectos">
              Proyectos
            </a>
          </Secciones>
        </ContenedorSecciones>
      </ContenedorHeader>
    </>
  );
};

const ContenedorHeader = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  z-index: 999;
  height: 60px;
  box-shadow: 0px 3px 15px #0000001a;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
`;

const ContenedorSecciones = styled.ul`
  width: 35%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  position: relative;
`;

const Secciones = styled.li`
  list-style: none;
  align-self: center;
  pointer-events: none;
  & > a {
    margin: auto 0px;
    text-decoration: none;
    font-size: 17px;
    color: #ffffff;
    pointer-events: auto;
    position: relative;
    letter-spacing: 1px;
  }
  & > a:hover {
    color: #ffffff99;
  }
`;

const Home = styled(IconoHome)`
fill: #ffffff;
height: auto;
`
export default Header;
