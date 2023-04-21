import styled from "styled-components";

const ContenedorHeader = styled.div`
  width: 100%;
  height: 70px;
  transition: 0.5s all ease;
  text-align: center;
  background: #ececec;
  box-shadow: rgb(0 0 0 / 15%) 0px 0.5px 5px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 99;
`;

export default ContenedorHeader;
