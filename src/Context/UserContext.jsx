import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(); //Me indica que toda la clase va a ser utilizado como un contexto, para nuestras componentes.

export function UserProvider ({children}){ //Proporciona la información a los hijos y useContext.
    const [user, setUser] = useState(null); //null indica que desconozco el estado inicial pero voy a inyectar información

    useEffect(()=>{
        const stored = localStorage.getItem('user');
        if(stored) setUser(JSON.parse(stored));
    }, []);
    
    const login = (userData) =>{
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () =>{
        localStorage.removeItem('user');
        setUser(null);
    };

    return( //Esto nos va a retornar accesos y nos va a permirtir compartir información a cualquier elemento.
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);