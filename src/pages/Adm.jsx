import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "./context/FormContext"; // Importando os dados do contexto
import "../index.css";
import "./Adm.css";
import iconVoltar from "../img/voltar.png";

function Adm() {
  const { formData } = useForm(); // Pegamos os valores do formulário

  return (
    <div className="container">
      <header className="header">
        <div className="grid-header">
          <div className="logo"><h1>CHEGUEI!</h1></div>
          <div className="perfil"></div>
        </div>
      </header>

      <main>
        <Link className="btn-voltar" to="/">
          <img src={iconVoltar} alt="Ícone" className="icon-voltar" />
        </Link>

        {/* Exibir os dados preenchidos */}
        <div className="dados-form">
          <div className="linha">
            <span>Nome do Aluno: {formData.aluno}</span><br></br>
            <span>Nome do Pai: {formData.pai}</span><br></br>
            <span>Nome da Mãe: {formData.mae}</span><br></br>
            <span>Nome da Escola: {formData.escola}</span><br></br>
            <span>Contato: {formData.contato}</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Adm;
