import styled from "styled-components";

const ContenedorSecciones = styled.ul`
  width: 35%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  animation: aparecer 1s ease;
  @keyframes aparecer {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0.5;
    }
  }
`;

export default ContenedorSecciones;
