import styled, { css } from "styled-components";

let Proyecto = styled.div`
  background: rgb(0 0 0 / 63%);
  width: 40%;
  height: 500px;
  margin: 60px 40px;
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
