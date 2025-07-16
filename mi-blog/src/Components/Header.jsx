import React from "react";
import { useUser } from "../Context/UserContext";
import "../assets/Styles/Header.css"

export default function Header(){ //Hijo de mi context
    const {user, logout} = useUser();

    return(
        <header>
            {user ? (
              <>
                <p>Hola, {user.name}</p>
                <button onClick={logout}>Cerrar Sesión</button>
              </>
            ) : (
                <>
                  <p>No has iniciado sesión</p>
                </>
            )}
        </header>
    );

}