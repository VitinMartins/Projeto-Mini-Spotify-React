import React from 'react'
import './Registro.css'
import { validarEmail,validarSenha } from '../../Utils/validadores'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Registro= () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate= useNavigate();

  const handleEmail = (e) =>{
    localStorage.setItem('localStorageEmail',e.target.value);
    setEmail(e.target.value);
  }
  const handleSenha = (e) =>{
    localStorage.setItem('localStorageSenha',e.target.value)
    setSenha(e.target.value);
  }
  const handleNome = (e) =>{
    localStorage.setItem('localStorageNome',e.target.value)
    setNome(e.target.value);
  }
  const handleSubmit= () => {
    if(!validarEmail(email) || !validarSenha(senha)){
      alert("Preencha os campos corretamente")
  }else{
    alert(`Olá ${nome}, Seu email é ${email} e sua senha é ${senha}` )
    navigate('/')
  }
}
  return (
    <div class="container">
    <div class="logo"><span class="icon">ᯤ</span> Spotify</div>
    <h2>Inscreva-se grátis e comece a curtir.</h2>
    <form>
      <div className="form-group">
        <label for="email">Qual o seu e-mail?</label>
        <input type="text" id="email" name="email" value={email} onChange={handleEmail}></input>
      </div>
      <div className="form-group">
        <label for="senha">Crie uma senha</label>
        <input type="password" id="senha" name="senha" value={senha} onChange={handleSenha}></input>
      </div>
      <div className="form-group">
        <label for="nome">Como devemos chamar você?</label>
        <input type="text" id="nome" name="nome" value={nome} onChange={handleNome}></input>
      </div>
      <div className="form-group">
        <button type="submit" onClick={handleSubmit}>Inscrever-se</button>
      </div>
    </form>
  </div>
  )
}

export default Registro
