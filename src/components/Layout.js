import React from 'react';

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Layout = (props) => (
    // Colocar la etiqueta React.Fragment nos permitará ocultar todos los div vacios al navegador
    <React.Fragment>
        <div className="flex flex-col h-screen justify-between">
        <Navbar/>
        {/* El layout recibe como props a sus children y los renderiza, estos son todas las etiquetas que están dentro de Layout en App.js */}
        {props.children}
        <Footer/>
        </div>
    </React.Fragment>
)