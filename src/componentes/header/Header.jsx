import React from "react";
import styled from "styled-components";

const Header = () => {
  window.addEventListener("scroll", () => {
    let contenedorHeader = document.getElementById("contenedorHeader");
    if(window.scrollY >= 590){
      contenedorHeader.style.top = "0px"
      contenedorHeader.style.boxShadow = "0px 3px 12px #00000060";
      contenedorHeader.style.backdropFilter = "none";
      contenedorHeader.style.background = "rgb(13 22 41)";
    }
     else {
      contenedorHeader.style.top = "-60px"
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
          <Secciones>
            <a className="enlace" href="#contacto">
              Contacto
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
  top: -60px;
  z-index: 999;
  height: 60px;
  box-shadow: 0px 3px 15px #0000001a;
  backdrop-filter: blur(8px);
  transition:all .3s ease;
`;

const ContenedorSecciones = styled.ul`
  width: 35%;
  list-style: none;
  display: flex;
  justify-content: space-between;
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

export default Header;
