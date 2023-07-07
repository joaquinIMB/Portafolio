import React from "react";
import styled from "styled-components";

const BotonSubirTodo = () => {
  window.addEventListener("scroll", () => {
    let flecha = document.getElementById("flecha");
    if (window.scrollY >= 150) {
      flecha.style.opacity = "1";
      flecha.style.pointerEvents = "auto";
    } else {
      flecha.style.opacity = "0";
      flecha.style.pointerEvents = "none";
    }
  });
  return (
    <ContenedorFlecha id="flecha">
      <Flecha href="#sobre-mi">↑</Flecha>
    </ContenedorFlecha>
  );
};

const ContenedorFlecha = styled.button`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  border: none;
  border-radius: 999px;
  width: 65px;
  background: cornflowerblue;
  height: 65px;
  box-shadow: 0px 0px 3px #0000006a;
  transition: all 0.3s ease;
  z-index: 999;
  opacity: 0;
  &:hover {
    background: #678cd9;
    box-shadow: #00000037 0px 4px 5px;
  }
`;

const Flecha = styled.a`
  text-decoration: none;
  padding: 0.5rem 1.2rem;
  font-size: 3rem;
  font-family: monospace;
  text-align: center;
  color: #ffffff;
`;

export default BotonSubirTodo;
