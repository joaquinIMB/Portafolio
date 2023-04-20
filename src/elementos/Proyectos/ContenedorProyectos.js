import styled, { css } from "styled-components";

const ContenedorProyectos = styled.div`
  width: 100%;
  height: 100vh;
  background: #ececec;
  margin: 0 auto;
  position: relative;
  z-index: 100;
  ${(props) =>
    props.ContenedorImgTexto &&
    css`
      display: flex;
      align-items: center;
      height: auto;
    `}
`;
export default ContenedorProyectos;
