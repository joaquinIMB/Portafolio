import styled, { css } from "styled-components";

let Proyecto = styled.div`
  background: rgb(0 0 0);
  width: auto;
  height: 500px;
  margin: 60px 40px;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  z-index: 4;
  ${(props) =>
    props.Descripcion &&
    css`
      width: 60%;
      background: transparent;
      margin: 0;
      height: auto;
    `}
`;
export default Proyecto;
