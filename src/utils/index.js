const setItem = (key,value) => {
    window.localStorage.setItem(key,JSON.stringify(value))
}

const getItem = (key) => {
    if (window.localStorage.getItem(key)){
        return JSON.parse(window.localStorage.getItem(key))
    }
}

// Creamos una función que guardará el user entregado por la función onLogin()
export function setUser(user){
    // Se guardará en LocalStorage el item con la clave 'user' que tendrá como valor el JSON de los datos del usuario convertido en string
    setItem('user',user)
}

// Creamos una funcion que leerá desde el LocalStorage si es que hay datos con la key 'user'
export function getUser(){
    getItem('user')
}