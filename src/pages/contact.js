import React, {  useEffect, } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { saveNewsLetter } from "../services/newsletter";



const contactPage =  () => {



    return (
        <div>
            <h1>Participe de nossas news com promoções e novidades!</h1>
            <form>
            <input type="text" name="name" placeholder="Digite o seu nome" />
            <input type="email" name="email" placeholder="Digite o seu e-mail" />        
            <button type="submit">Enviar</button>
            </form>
        </div>
    )
};



export default contactPage;
