import React from 'react';
import "./Proyectos.css";

const AgregaProyecto = ({imagen, logosHover, titulo, descripcion, enlace}) => {
    return ( 
      <div className="contenedor-proyectos__misProyectos">
        <div className="contenedor-imagen__misProyectos">
          <img src={imagen} alt={imagen.name} className="imagen-proyecto__misProyectos"/>
            <div className="contenedor-hover-imagen__misProyectos">
            <a href={enlace} target='_blank'>
              <span className="contenedor-icon-hover__misProyectos">
                   {logosHover.length > 0 ? logosHover.map((icono) => <img className='icon-hover-imagen__misProyectos' alt='icono' src={[icono]}/>) : console.log("")}
              </span>
            </a>
            </div>
        </div>
            <div className="contenedor-descripcion__misProyectos">
                    <h2 className="titulo-descripcion__misProyectos">{titulo}
                    </h2>
                    <p className='texto-descripcion__misProyectos'>{descripcion}</p>
            </div>
      </div>
     );
}
 
export default AgregaProyecto;