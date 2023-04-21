import styled, { css } from "styled-components";
const Titulos = styled.h1`
  margin: 20px;
  font-family: "Roboto Slab", serif;
  font-size: 90px;
  letter-spacing: 2px;
  position: relative;
  color: #6161ff;
  text-shadow: 0px 3px 2px #b0c4f6;
  ${(props) =>
    props.segundoTitulo &&
    css`
      font-size: 60px;
      margin: 0;
      text-align: end;
      color: #3f3f87;
      text-shadow: none;
      animation: movimiento 0.8s ease;
      @keyframes movimiento {
        0% {
          left: 400px;
        }
        100% {
          left: 0;
        }
      }
    `}
`;

export default Titulos;
