import styled, { css } from "styled-components";
const SeccionProyecto = styled.div`
  width: 20%;
  height: 70px;
  margin: 0px 0px 30px;
  background: linear-gradient(
    to right,
    rgba(67, 90, 166, 1),
    rgba(83, 50, 143, 1)
  );
  border-radius: 0px 5px 5px 0px;
  box-shadow: rgb(0, 0, 0) 0px 1.5px 2px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  transition: all 0.6s ease;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(83, 50, 143, 1),
      rgba(67, 90, 166, 1)
    );
    position: absolute;
    transform: scaleX(0);
    transform-origin: left;
    border-radius: 0px 5px 5px 0px;
    transition: transform 0.3s ease;
  }
  &:hover::before {
    transform: scaleX(1);
  }
  /* ----------------------------------------------- */
  /* ----------------------------------------------- */
  /* ----------------------------------------------- */
  ${(props) =>
    props.SeccionAbierta &&
    css`
      width: 80%;
      justify-content: right;
      animation: abrirDos 1.2s ease;
      &::before {
        content: "";
        transform: scaleX(1);
        transform-origin: left;
        animation: abrir 0.6s ease;
        z-index: 6;
      }
      @keyframes abrirDos {
        0% {
          width: 20%;
        }
        100% {
          width: 80%;
        }
      }
      @keyframes abrir {
        30% {
          transform: scaleX(1);
        }
      }
    `}
`;
export default SeccionProyecto;
