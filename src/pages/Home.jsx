import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import "./Home.css"; // Importando o CSS Module
import iconCheck from "../img/registro.png";

function Home() {
 
  return (
    <div className="container">
      <header className="header">
      <div className="grid-header">
          <div className="logo">
            <h1>
              CHEGUEI!
            </h1>
          </div>
          <div className="perfil">

          </div>
        </div>
      </header>
      <main>
          <h2>Bem-vindo!<br></br> Acesse seu perfil:</h2>
          <div className="grid-btn">
            <Link className="btn-home btn" to="/responsavel">
              <img src={iconCheck} alt="Ícone" className="icon-check" />
              Responsável
            </Link>
            <Link className="btn-home btn" to="/adm">
              <img src={iconCheck} alt="Ícone" className="icon-check" />
              Administrador
            </Link>
          </div>
      </main>
      <footer className="footer">
        <span>
          cheguei! © / 2025
        </span>
      </footer>
    </div>
  );
}

export default Home;