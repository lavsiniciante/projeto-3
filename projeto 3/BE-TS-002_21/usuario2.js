class Usuario {
    constructor(email, senha) {
      this.email = email
      this.senha = senha
      this.tentativasFalhas = 0
      this.bloqueado = false
    }
  
    login(email, senha) {
      if (this.bloqueado) {
        return "Conta bloqueada, contate o suporte"
      }
  
      if (email === this.email && senha === this.senha) {
        return "Login realizado com sucesso"
      } else {
        this.tentativasFalhas++
        if (this.tentativasFalhas >= 3) {
          this.bloqueado = true
          return "Conta bloqueada, contate o suporte"
        } else {
          return "Falha na autenticação"
        }
      }
    }
  }
  
  const js = new Usuario("j@vascript.com", "123ABC")
  console.log(js.login("j@vascript.com", "123ABC"))
  console.log(js.login("j@vascript.com", "123"))
  console.log(js.login("j@vascript.com", "123"))
  console.log(js.login("j@vascript.com", "123"))
  