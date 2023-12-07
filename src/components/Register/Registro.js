import React from 'react'
import './Registro.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Registro= () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const [errors, setErrors] = useState({})
  const [valid, SetValid] = useState(true)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    let isValid = true;
    let validationErrors = {}
    if(formData.username === "" || formData.username === null) {
      isValid = false;
      validationErrors.username = "Usuario requerido!"
      alert("Usuario requerido!")
    } 
    if(formData.password === "" || formData.password === null) {
      isValid = false;
      validationErrors.password = "Senha requirida"
      alert("Senha requirida")
    } else if(formData.password.length < 6) {
      isValid = false;
      validationErrors = "Senha precisa ser maior que 6 caracteres!"
      alert("Senha precisa ser maior que 6 caracteres!")
    }
    setErrors(validationErrors)
    SetValid(isValid)

    if(Object.keys(validationErrors).length === 0) {
      axios.post('http://127.0.0.1:8000/api/users/', formData)
      .then(res => {
        alert("Registro feito com sucesso!")
        navigate('/login')
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <div class="container">
    <div class="logo"><span class="icon">ᯤ</span> Spotify</div>
    <h2>Inscreva-se grátis e comece a curtir.</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="email">Qual o nome do seu usuario?</label>
        <input type="text" id="email" name="email" placeholder='Digite seu email' onChange={(e) => setFormData({...formData, username: e.target.value})}></input>
      </div>
      <div className="form-group">
        <label for="senha">Crie uma senha</label>
        <input type="password" id="senha" name="senha" placeholder='Crie sua senha' onChange={(e) => setFormData({...formData, password: e.target.value})}></input>
      </div>
      <div className="form-group">
        <button type="submit">Inscrever-se</button>
      </div>
    </form>
  </div>
  )
}

export default Registro
