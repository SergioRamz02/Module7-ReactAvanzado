import React from "react";
import { useForm } from "react-hook-form";
import "../assets/Styles/NuevoPost.css"

export default function NuevoPost(){
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }

    return(
        <>
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Título</label>
            <input className={errors.titulo ? "titulo-error": ""} 
                type="text" 
                placeholder="Título" 
                {...register("titulo", {required: true, minLength: 5})} />
            
            {errors.titulo && (
                <span className="error-titulo">
                    {errors.titulo.type === "required" ? "Campo obligatorio" : "Debe tener al menos 5 caracteres"}
                    </span>) }

            <label htmlFor="">Contenido</label>
            <input className={errors.contenido ? "contenido-error": ""} 
                type="text" 
                placeholder="Contenido" 
                {...register("contenido", {required: true, minLength: 20})} />
            {errors.contenido && (
                <span className="error-contenido">
                    {errors.contenido.type === "required" ? "Campo obligatorio" : "Debe tener al menos 20 caracteres"}
                    </span>) }

            <label htmlFor="">Correo electrónico</label>
            <input type="email" placeholder="Correo electrónico" {...register("email")}/>

            <button type="submit">Publicar</button>


        </form>
        </>
    )

}