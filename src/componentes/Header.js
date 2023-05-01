import React from "react";
import ContenedorHeader from "../elementos/Header/ContenedorHeader";
import Nombre from "../elementos/Header/Nombre";
import ContenedorSecciones from "../elementos/Header/ContenedorSecciones";
import Secciones from "../elementos/Header/Secciones";

const Header = () => {
  return (
    <>
      <ContenedorHeader>
        <Nombre>Joaquin Imbriago</Nombre>
        <ContenedorSecciones>
          <Secciones>Sobre mi</Secciones>
          <Secciones>Proyectos</Secciones>
          <Secciones>Habilidades</Secciones>
        </ContenedorSecciones>
      </ContenedorHeader>
    </>
  );
};

export default Header;
