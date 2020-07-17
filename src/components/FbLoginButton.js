import React from 'react';

export const FbLoginButton = ({onLogin}) => {

    const facebookLogin = () => {
        // Accedemos a la dependencia cargada desde el <script> que otorga FB y se coloca en index.html
        // Esto lo hacemos con window.{nombre_dependencia} , en este caso se llama FB
        //Vemos si se encuentra cargado el SDK por medio de la URL em la etiqueta script
        if(!window.FB) return;
        
        // hacer login
        // En caso de que el SDK esté cargado, veremos el status del login del
        // Invocamos getLoginStatus, recibimos el response y si el estado de este es igual a "cconnected" se leeran los datos del usuario
        window.FB.getLoginStatus( response => {
            if (response.status === "connected"){
                    //En caso de que el LoginStatus sea de connected leeremos los datos, de esto se encargará la función facebookLoginHandler
                facebookLoginHandler(response)
            }else{
                    // En caso de que el Login Status sea distinto de connected se
                    // El parametro scopes tiene que ver con los permisos que queremos que el usuario nos proporcione
                    window.FB.login(facebookLoginHandler, {scope:'public_profile,email'});
            }
        });
    };

    const facebookLoginHandler = (response) => {
        console.log(response);

        if (response.status === "connected"){
            // LLamamos a la API e invocamos un EndPoint donde se obtendrá el id, name,email y picture dle usuario
            // Finalmente guardamos esos datos en userData y los imprimos
            window.FB.api('/me?fields=id,name,email,picture',userData =>{
                console.log(userData);
             // almacenar la sesión del usuario en nuestra aplicación
             // Ahora que ya hemos hecho el llogin 
            const user = {
                 ...userData,
                 accessToken : response.authResponse.accessToken
             };
             // Los datos del usuario guardados en la variable user, se le pasan a la función onLogin
             // La función onLogin vendrá del componente padre y será pasada como un props, esta funcino se encargará de 
             onLogin(user);
            });
    }};

    return(
    <button onClick={facebookLogin} type="button" className="mx-auto my-auto items-center flex flex-row text-blue-500 hover:text-blue-700  focus:outline-none ">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
        </svg>
        <span className="px-2 font-semibold bg-blue-500 text-gray-200 hover:bg-blue-700 ">Continuar con Facebook</span>
    </button>
)
}