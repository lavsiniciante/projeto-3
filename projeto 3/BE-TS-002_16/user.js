class EsqueciSenhaUtils {
    static tokens = new Map()
  
    static gerarToken(email) {
      const token = Math.random().toString(36).substring(2, 10)
  
      this.tokens.set(email, token)
  
      return token
    }
  
    static validarToken(email, token) {
      const tokenArmazenado = this.tokens.get(email)
  
      return token === tokenArmazenado
    }
  }
  
  class Usuario {
    usuarios = ["mario@luigi.com", "peach@apple.com"]
  
    constructor(email) {
      this.email = email
    }
  
    esqueciSenha(email) {
      if (this.usuarios.includes(email)) {
        return EsqueciSenhaUtils.gerarToken(email)
      } else {
        return "E-mail não encontrado"
      }
    }
  
    validarToken(email, token) {
      return EsqueciSenhaUtils.validarToken(email, token)
    }
  }
  
  const usuario = new Usuario()
  
  const token = usuario.esqueciSenha("mario@luigi.com")
  console.log(token)
  
  const email = "mario@luigi.com";
  const isValid = usuario.validarToken(email, token)
  console.log(isValid) 
  