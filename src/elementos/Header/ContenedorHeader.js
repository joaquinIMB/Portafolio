import styled from "styled-components";

const ContenedorHeader = styled.div`
  width: 100%;
  height: 60px;
  transition: 0.5s all ease;
  text-align: center;
  background: #000000;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  overflow: hidden;
  z-index: 99;
`;

export default ContenedorHeader;
