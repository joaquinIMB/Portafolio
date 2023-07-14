import React from "react";
import fondo from "./../../assets/fondoComprimido.mp4";
import poster from "./../../assets/img/posterFondo.jpg"
import styled from "styled-components";

const Fondo = () => {
  return (
    <ContenedorFondo>
      <FondoVideo loop muted poster={poster} src={fondo}></FondoVideo>
    </ContenedorFondo>
  );
};
// autoPlay playsInline
const ContenedorFondo = styled.div`
  position: absolute;
  height: 100vh;
  overflow: hidden;
`;

const FondoVideo = styled.video`
  width: 100%;
  height: auto;
  position: static;
  filter: brightness(0.3) grayscale(0.5);
`;

export default Fondo;
