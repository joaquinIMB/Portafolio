import React from 'react';
import SobreMi from "./componentes/SobreMi";
import Header from "./componentes/Header";
import Habilidades from "./componentes/Habilidades";
import Proyectos from "./componentes/Proyectos";
import Fondo from './componentes/Fondo';

const App = () => {

    return ( 
    <>
        <Fondo/>
        <Header />
        <SobreMi />
        <Habilidades/>
         <Proyectos />
    </>
);
}


export default App;