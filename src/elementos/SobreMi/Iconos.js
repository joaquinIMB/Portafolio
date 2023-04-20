import styled, { css } from "styled-components";

const Iconos = styled.div`
  position: absolute;
  z-index: 1;
  opacity: 0.6;
  height: auto;
  ${(props) =>
    props.iconoComputadora &&
    css`
      position: relative;
      left: -36px;
      height: auto;
      bottom: none;
      opacity: 1;
      filter: drop-shadow(-12px 0px 15px #00000063);
    `}
`;

export default Iconos;
