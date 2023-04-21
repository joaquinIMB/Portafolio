import styled, { css } from "styled-components";

const Icono = styled.img`
  width: 34px;
  height: auto;
  margin: auto 10px;
  padding: 7px;
  position: relative;
  cursor: pointer;
  z-index: 7;
  animation: mover 0.5s infinite;
  @keyframes mover {
    50% {
      transform: translateX(7px);
    }
  }
  ${(props) =>
    props.IconoAdaptable &&
    css`
      animation: none;
    `}
  ${(props) =>
    props.IconoAdaptable1 &&
    css`
      animation: none;
      width: 54px;
      right: 20px;
      transition: 0.3s filter ease;
      &:hover {
        filter: drop-shadow(0px 0px 2px #fff);
      }
    `}
`;

export default Icono;
