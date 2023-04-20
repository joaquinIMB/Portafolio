import styled from "styled-components";

const Secciones = styled.li`
  margin: auto;
  cursor: pointer;
  color: #8585ff;
  transition: all 0.3s ease;
  font-weight: 500;
  font-family: "Roboto Slab", serif;
  font-size: 18px;
  &:hover {
    color: #6161ff;
  }
  &::before {
    content: "";
    position: absolute;
    height: 5px;
    width: 0.9em;
    background: #6161ff;
    top: 60px;
    border-radius: 0px 0px 0px 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  &::after {
    content: "";
    position: absolute;
    height: 5px;
    width: 0.9em;
    background: #6161ff;
    top: 5px;
    border-radius: 0px 2px 0px 0px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease;
  }
  &:hover::before {
    transform: scaleX(4);
  }
  &:hover::after {
    transform: scaleX(4);
  }
`;

export default Secciones;
