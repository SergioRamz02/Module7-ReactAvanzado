import { useForm } from "react-hook-form";
import client from "../api/client";
import "../assets/Styles/Login.css"

export default function Login(){
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async (data) =>{
        try {
            const res = await client.post('/user/login', data);
            localStorage.setItem('_id', res.data._id);
            alert('Login exitoso');
        } catch (err) {
            alert('Errorr en Login');
        }

    };

    return(
        <form onSubmit={handleSubmit(onSubmit)} >
            <input 
               {...register("email", {required: true})}
               className={errors.email ? "input-error" : ""}
               placeholder="Email"
               />
               
            <input 
               {...register("password", {required: true})}
               className={errors.password ? "input-error" : ""}
                placeholder="Password"/>
             
            
            <button className="login" type="submit">Iniciar Sesión</button>

        </form>
    )
    
}