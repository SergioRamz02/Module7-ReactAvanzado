import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(); //Me indica que toda la clase va a ser utilizado como un contexto, para nuestras componentes.

export function UserProvider ({children}){ //Proporciona la información a los hijos y useContext.
    const [user, setUser] = useState(null); //null indica que desconozco el estado inicial pero voy a inyectar información

    const login = (name, password) => setUser({name, password}); //Los parametros los construye en un objeto y los guarda en la variable user mediante la función setUser.

    const logout = () => setUser(null); //Aquí ya no necesitamos información si no eliminarla, por lo que debemos regresarla al estado inicial.

    return( //Esto nos va a retornar accesos y nos va a permirtir compartir información a cualquier elemento.
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser(){ //Esta función integra a los demás para que lo usen como un contexto para las demás componentes.
    return(
        useContext(UserContext)
    );
}