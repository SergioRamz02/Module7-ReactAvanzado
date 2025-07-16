import React from "react";
import { useUser } from "../Context/UserContext";
import ArticulosBlog from "./ArticulosBlog";

export default function ContenidoPrivado(){
    const {user} = useUser(); //Identifica la información a compartir del contexto

      if (!user) return <h1> Debes iniciar sesión, para ver el contenido</h1>;

    return(
        <div>
            <h2>Welcome {user.name}</h2>
            <ArticulosBlog />
        </div>
    );
}