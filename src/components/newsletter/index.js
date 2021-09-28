import React, { useState } from "react";
import { saveNewsLetter } from '../../services/newsletter';
import './style.css';

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    saveNewsLetter(name, email).then((
      e => alert('Cadastro realizado com sucesso!')
    )).catch((err) => {
      console.log(err);
      alert('Falha ao registrar')
    })
  }

  return (
    <div className="Newsletter">
      <div className="Form">
        <h1>Participe de nossas com promoções e novidades!</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Digite o seu nome" />
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Digite o seu e-mail" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;