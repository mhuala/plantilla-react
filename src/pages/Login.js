import React, { useState, useEffect, useRef} from 'react';
import {FbLoginButton} from '../components/FbLoginButton'
import * as storage from '../utils/index';

export const Login = (props) => {
    const [user,setUser] =useState(null);

    const onLogin = (user) => {
        // Guardamos el usuario en el localStorage
        storage.setUser(user);
        // Cambiamos el estado del usuario REACTHOOK
        setUser(user);
    }

    useEffect(()=>{
        // Checkeamos si hay un usuario guardado en el localStorage
        const checkSession = () => {
            const user = storage.getUser();
            // Si es que hay un usuario, cambiaremos el estado al valor de ese usuario guardaod en el localStorage
            if (user){
                setUser(user);
            }
        };
        checkSession();
    // Solo se ejecutará cuando cargue el componente principal por eso el []
    },[]);

    return(
            <div className="container mx-auto my-auto px-4 py-4">
                {/* Solo se mostrará el boton en caso de que no haya user, el botón obtendrá el parametro  */}
                {!user && <FbLoginButton onLogin={onLogin}/>}
            </div>
        )
}