import React from "react";
import styled from "styled-components";

const Header = () => {
    window.addEventListener("scroll", () => {
    let contenedorHeader = document.getElementById("contenedorHeader");
    if(window.scrollY >= 40){
      contenedorHeader.style.boxShadow ="0px 3px 15px #0000001a";
      contenedorHeader.style.backdropFilter = "blur(8px)"
      contenedorHeader.style.background = "#00000090"
    }else{
      contenedorHeader.style.boxShadow ="none";
      contenedorHeader.style.backdropFilter = "blur(0px)"
      contenedorHeader.style.background = "transparent"
    }
  });

  return (
    <>
      <ContenedorHeader id="contenedorHeader">
        <ContenedorSecciones>
          <Secciones>
            <a className="enlace" href="#sobre-mi">Sobre mi</a>
          </Secciones>
          <Secciones>
            <a className="enlace" href="#sobre-mi">Habilidades</a>
          </Secciones>
          <Secciones>
            <a className="enlace" href="#proyectos">Proyectos</a>
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
  height:60px;
`;

const ContenedorSecciones = styled.ul`
  width: 35%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  animation: aparecer 1.5s ease;
  align-self:center;
  position: relative;
`;

const Secciones = styled.li`
  list-style: none;
  align-self:center;
  pointer-events: none;
  & > a {
    margin: auto 0px;
    text-decoration: none;
    font-size: 17px;
    cursor: pointer;
    color: #ffffff;
    pointer-events: auto;
    position:relative;
    letter-spacing: 1px;
  }
  & > a:hover{
    color:#ffffff99 ;
  }
  & > a {
    @keyframes aparecer {
    0% {
      bottom:4rem;
    }
    100% {
      bottom:0;
    }
  }
  }
`;

export default Header;
