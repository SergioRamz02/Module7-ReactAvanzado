import React, {useState, useEffect} from "react";
import "../assets/Styles/ArticulosBlog.css"

export default function ArticulosBlog(){
    const [articulos, setArticulos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res =>{
            if (!res.ok) throw new Error("Error al obtener los articulos");
            return res.json();
        })
        .then(data => setArticulos(data))
        .catch(err => setError(err))
        .finally(()=> setIsLoading(false));
    }, []);

    if (isLoading) return <h1>Cargando artículos...</h1>;
    if (error) return <h1>Error: {error}</h1>;

    return (
        <div className="articulos">
            <h2>Articulos de mi blog</h2>
            {articulos.map(articulo => (
                <div className="card" key={articulo.id}>
                    <h3>{articulo.title}</h3>
                    <p>{articulo.body}</p>
                </div>
            ))}
        </div>
    )
}