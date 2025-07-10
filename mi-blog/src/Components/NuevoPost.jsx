import React, {useState} from "react";
import { useForm } from "react-hook-form";
import "../assets/Styles/NuevoPost.css"

export default function NuevoPost(){
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const [message, setMessage] = useState("");

    const onSubmit = (data) =>{
        console.log("Datos del post:", data);
        setMessage("¡Publicación enviada correctamente!");
        reset();
    }

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <label htmlFor="titulo" >Título</label>
            <input 
                id="titulo"
                className={errors.titulo ? "input-error": ""} 
                type="text" 
                placeholder="Título" 
                {...register("titulo", {required: true, minLength: 5})} />
            {errors.titulo && <p>El título debe tener al menos 5 caracteres.</p>}

            <label htmlFor="contenido">Contenido</label>
            <textarea 
                id="contenido"
                className={errors.contenido ? "input-error": ""} 
                type="text" 
                placeholder="Contenido" 
                {...register("contenido", {required: true, minLength: 20})} />
            {errors.contenido && <p>El contenido debe tener al menos 20 caracteres.</p>}

            <label htmlFor="email" >Correo electrónico</label>
            <input 
                id="email"
                className={errors.email ? 'input-error' : ''}
                type="email" 
                placeholder="Correo electrónico" 
                {...register("email", {pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}/>
            {errors.email?.type === 'pattern' && <p>Introduce un correo electrónico válido.</p>}

            <button type="submit">Publicar</button>
            {message && <p className="success-message">{message}</p>}


        </form>
        </>
    )

}