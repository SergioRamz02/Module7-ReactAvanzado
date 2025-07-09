import React from "react";
import { useForm } from "react-hook-form";
import "../Components/Form.css"

export default function Form(){

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        console.log(`${data.nombre} es un gran alumno y un buen maestro, tiene ${data.edad}`);
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nombre" {...register("nombre", {required: true, minLength: 5})} />
            {errors.nombre?.type === "required" && <p>El nombre es requerido, por favor escribe tu nombre</p>}
            {errors.nombre?.type === "minLength" && <p>Tú nombre debe tener al menos 5 letras, por favor</p>}
            
            <input type="text" placeholder="Correo" {...register("correo")} />
            <input type="text" placeholder="Edad" {...register("edad")} />
            <input type="text" placeholder="Teléfono" {...register("phone")} />
            
            <input className={errors.direccion ? "input-error": ""} type="text" placeholder="Dirección" 
            {...register("direccion", {required: true, minLength: 10})} />
            {errors.direccion && (
                <span className="error-message">
                    {errors.direccion.type === "required" ? "Campo obligatorio" : "Debe tener al menos 10 caracteres"}
                    </span>) }
            
            <input type="text" placeholder="Escuela" {...register("escuela")} />

            <button type="submit">Enviar</button>
        </form>
    );
}