import React from "react";
import styled from "styled-components";

const Header = () => {
  window.addEventListener("scroll", () => {
    let contenedorHeader = document.getElementById("contenedorHeader");
    if (window.scrollY > 60) {
      contenedorHeader.style.display = "flex";
    } else {
      contenedorHeader.style.display = "none";
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
            <a className="enlace" href="#sobre-mi">
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
  display:none;
  text-align: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  z-index: 999;
  height: 60px;
  background:#00000090;
  box-shadow: 0px 3px 15px #0000001a;
  backdrop-filter: blur(8px);
  transition: all .4s ease;
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

export default Header;
