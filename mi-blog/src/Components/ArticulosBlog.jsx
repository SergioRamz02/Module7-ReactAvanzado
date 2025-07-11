import React, {useState, useEffect} from "react";
import "../assets/Styles/ArticulosBlog.css"

export default function ArticulosBlog(){
    const [cartas, setCartas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        .then(res =>{
            if (!res.ok) throw new Error("Error al obtener las cartas de YU-GI-OH");
            return res.json();
        })
        .then(data => setCartas(data.data))
        .catch(err => setError(err))
        .finally(()=> setIsLoading(false));
    }, []);

    if (isLoading) return <h1>Cargando artículos...</h1>;
    if (error) return <h1>Error: {error}</h1>;

    return (
        <div className="articulos">
            <h2>Cartas de YU-GI-OH!</h2>
            {cartas.map(carta => (
                <div className="card" key={carta.id}>
                    <h3>{carta.name}</h3>
                    <p>{carta.type}</p>
                    <p>{carta.race}</p>
                    <p>{carta.desc}</p>
                    <img src={carta.card_images[0].image_url_small} alt={carta.name} />
                
                </div>
            ))}
        </div>
    )
}