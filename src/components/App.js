import React from 'react';

// Importamos las funcionalidades de React-router
import { BrowserRouter, Switch , Route} from 'react-router-dom';

// Importamos las paginas creadas
import {Home } from '../pages/Home';
import {Layout } from './Layout';
import {NotFound } from './NotFound';

// Creamos la función (En caso de no tener estados, o que hayan mas funciones)

export const App = (props) => (
        // asdasd
        <BrowserRouter>
            {/* Siempre se incluirá el Navbar y luego la pagina ya que todo está encerrado en el Layout */}
            <Layout>
            {/* Funciona de manera parecida que el switch */}
            <Switch>
                {/* Especificamos las rutas que mostrarán las paginas */}
                <Route exact path="/home" component={Home}/>
                <Route component={NotFound} />
            </Switch>
            </Layout>
        </BrowserRouter>
    );
