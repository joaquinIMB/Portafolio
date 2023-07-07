import React from "react";
import fondo from "./../assets/fondoComprimido.mp4";
import poster from "./../assets/img/posterFondo.jpg"
import styled from "styled-components";

const Fondo = () => {
  return (
    <ContenedorFondo>
      <FondoVideo loop muted poster={poster} src={fondo}></FondoVideo>
    </ContenedorFondo>
  );
};

const ContenedorFondo = styled.div`
  position: absolute;
`;

const FondoVideo = styled.video`
  width: 100%;
  height: auto;
  position: fixed;
  top: 0px;
  left: 0px;
  filter: brightness(0.3) grayscale(0.5);
`;

export default Fondo;
