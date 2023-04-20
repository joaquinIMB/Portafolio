import styled, { css } from "styled-components";

const TituloProy = styled.h2`
  color: #ececec;
  font-size: 26px;
  margin: auto;
  font-weight: 200;
  position: relative;
  font-family: "Roboto Slab", serif;
  z-index: 5;
  ${(props) =>
    props.TituloAbierto &&
    css`
      text-align: left;
      color: #ececec;
      font-size: 26px;
      font-weight: 200;
      font-family: "Roboto Slab", serif;
    `}
`;

export default TituloProy;
