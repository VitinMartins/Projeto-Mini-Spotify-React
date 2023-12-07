import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({setAuthenticated}) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const [valid, SetValid] = useState(true);


  
  function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {}
    if(formData.username === "" || formData.password === null) {
      isValid = false;
      validationErrors.username = "usuario requerido!"
      alert("Usuario requerido!")
    }
    if(formData.password === "" || formData.password === null) {
      isValid = false;
      validationErrors.password = "Senha requirida"
      alert("Senha requirida")
    } else if(formData.password.length < 6) {
      isValid = false;
      validationErrors.password = "Senha precisa ser maior que 6 caracteres!"
      alert("Senha precisa ser maior que 6 caracteres!")
    }
    

    axios.get('http://127.0.0.1:8000/api/login', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'ERA PRA SER O TOKEN AQUI NE',
        },
    }) 
    .then(res => {
      res.data.map(user => {
        if(user.username === formData.username) {
          if(user.password === formData.password) {
            alert("Login feito com sucesso!")
            localStorage.setItem('userId', res.data.userId);
            navigate('/')
            setAuthenticated(true);
          } else {
            isValid = false;
            validationErrors = "Senha errada!"
            alert("Senha errada!")
          }
        }
      })
      setErrors(validationErrors)
      SetValid(isValid)
    })
     .catch(err => console.log(err))
    
  }
  return (
    <div class="container">
    <div class="logo"><span class="icon">ᯤ</span> Spotify</div>
    <h2>Faça seu Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="email">Qual o nome do seu Usuário?</label>
        <input type="text" placeholder='Digite seu usuario' onChange={(e) => setFormData({...formData, username: e.target.value})} ></input>
      </div>
      <div className="form-group">
        <label for="senha">Digite sua senha</label>
        <input type="password" placeholder='Digite sua senha' onChange={(e) => setFormData({...formData, password: e.target.value})}></input>
      </div> 
      <div className="form-group">
        <button type="submit">Logar</button>
      </div>
    </form>
  </div>
  )
}