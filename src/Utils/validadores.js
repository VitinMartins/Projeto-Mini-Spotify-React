const validarEmail = (email) => {
    return email?.toString().includes('@') && email?.toString().includes('.')
  }
  
  const validarSenha = (senha) => {
    return senha?.toString().length > 6
  }
  
  const validarNome = (nome) => {
    return nome?.toString().length > 2
  }
  
  
  export {
    validarEmail,
    validarSenha,
    validarNome,
  }