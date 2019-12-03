import React from 'react';
import './App.css';

import logo from './assets/logo.png'

function App() {
  return (
    <div className="container">
      <img src={logo} alt="UFS"/>
      <div className="content">
        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor e-mail"
          />
          <label htmlFor="senha">SENHA *</label>
          <input 
            type="senha" 
            id="senha" 
            placeholder="Digite sua senha"
          />
          <button className="btn" type="submit">Entrar</button>
          <button className="btn" type="submit">Esqueci minha senha</button>
        </form>
      </div>
    </div>
  );
}

export default App;
