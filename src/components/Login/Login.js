import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();
    axios.get(`http://localhost:3001/users?email=${email}`)
      .then((res) => {
        const user = res.data[0];
        if (user) {
          if (user.senha === senha) {
            localStorage.setItem('userId', user.id);
            navigate('/');
          } else {
            alert("Dados inválidos!");
          }
        } else {
          alert("Usuário não encontrado");
        }
      })
      .catch((error) => {
        console.error("Erro na solicitação:", error);
      });
  }
  return (
    <div class="container">
    <div class="logo"><span class="icon">ᯤ</span> Spotify</div>
    <h2>Faça seu Login</h2>
    <form>
      <div className="form-group">
        <label for="email">Qual o seu e-mail?</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
      </div>
      <div className="form-group">
        <label for="senha">Digite sua senha</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
      </div>
      <div className="form-group">
        <button type="submit" onClick={handleSubmit}>Logar</button>
      </div>
    </form>
  </div>
  )
}