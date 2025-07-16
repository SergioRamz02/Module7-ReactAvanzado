import { useForm } from "react-hook-form";
import { useUser } from "../Context/UserContext";
import "../assets/Styles/Login.css"

export default function Login(){

    const {user, login} = useUser();

    const {register, handleSubmit, formState: {errors}} = useForm();

    if (user) return null;

    //Ejecución del componente
    const onSubmit = (data) => {
        login(data.nombre, data.password); //Se guardan los valores
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} aria-label="Formulario-Login">
            <input 
               type="text"
               placeholder="Nombre"
               {...register("nombre", {required: true})}
               className={errors.nombre ? "input-error" : ""}
                />
               {errors.nombre && <p>El nombre es obligatorio</p>}
            <input 
               type="password"
               placeholder="Contraseña"
               {...register("password", {required: true})}
               className={errors.password ? "input-error" : ""}
                />
               {errors.password && <p>La contraseña es obligatoria</p>}
            
            <button className="login" type="submit">Iniciar Sesión</button>

        </form>
    );
}