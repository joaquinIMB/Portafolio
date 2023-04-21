import React from "react";
import Titulos from "./../elementos/SobreMi/Titulos";
import Banner from "./../elementos/SobreMi/Banner";
import Contenedor from "./../elementos/SobreMi/Contenedor";
import Iconos from "./../elementos/SobreMi/Iconos";
import Texto from "./../elementos/SobreMi/Texto";

const SobreMi = () => {
  return (
    <Contenedor>
      <Titulos>Desarrollador Web</Titulos>
      <Titulos segundoTitulo>Front End</Titulos>
      <Banner>
        <Iconos>
          <img src="img/Icons/react.png" width={"260px"} alt="React" />
        </Iconos>
        <Texto>
          Desde pequeño estuve familiarizado con la IT. Un día gracias a mi
          primo, que me ayudó a orientarme e incentivarme, decidí iniciar mis
          estudios. Me especializo en el área de Front End desde el comienzo.
        </Texto>
        <Iconos iconoComputadora>
          <img
            src="img/Icons/computadora.png"
            width={"260px"}
            alt="Computer3D"
          />
        </Iconos>
      </Banner>
    </Contenedor>
  );
};

export default SobreMi;
