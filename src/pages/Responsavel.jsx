import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "./context/FormContext"; // Importando o contexto
import "../index.css";
import "./Responsavel.css";
import iconVoltar from "../img/voltar.png";
import iconSave from "../img/save.png";

function Responsavel() {
  const { formData, setFormData } = useForm(); // Pegamos os valores do contexto
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const maxWidth = 40;
  const maxHeight = 40;

  // Atualiza os inputs no estado global
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manipula a escolha da imagem
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        if (img.width > maxWidth || img.height > maxHeight) {
          setError(`A imagem deve ter no máximo ${maxWidth}px ${maxHeight}px.`);
          setImage(null);
        } else {
          setImage(img.src);
          setError(""); // Limpa o erro
        }
      };
    }
  };

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
          <img src={iconVoltar} alt="Voltar" className="icon-voltar" />
        </Link>

        <div className="inputs-cadastro">
          <div className="input-responsavel">
            <span>Nome do Aluno:</span>
            <input type="text" name="aluno" value={formData.aluno} onChange={handleChange} placeholder="Aluno..." />
          </div>
          <div className="input-responsavel">
            <span>Nome do Pai:</span>
            <input type="text" name="pai" value={formData.pai} onChange={handleChange} placeholder="Pai..." />
          </div>
          <div className="input-responsavel">
            <span>Nome da Mãe:</span>
            <input type="text" name="mae" value={formData.mae} onChange={handleChange} placeholder="Mãe..." />
          </div>
          <div className="input-responsavel">
            <span>Nome da Escola:</span>
            <input type="text" name="escola" value={formData.escola} onChange={handleChange} placeholder="Escola..." />
          </div>
          <div className="input-responsavel">
            <span>Contato:</span>
            <input type="text" name="contato" value={formData.contato} onChange={handleChange} placeholder="Número..." />
          </div>
        </div>

        <div className="menu-responsavel">
          <Link className="btn-salvar" to="/adm"> 
            <img src={iconSave} alt="Salvar" className="icon-save" />
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Responsavel;