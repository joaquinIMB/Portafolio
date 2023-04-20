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
    `}
`;

export default Titulos;
