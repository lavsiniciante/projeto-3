class Newsletter {
    #emailsCadastrados = new Set()
  
    signup(email) {
      if (!this.#emailsCadastrados.has(email)) {
        this.#emailsCadastrados.add(email)
        return "E-mail cadastrado com sucesso"
      } else {
        return "E-mail já se encontra cadastrado"
      }
    }
  }
  
  const js = new Newsletter()
  
  console.log(js.signup("javascripto@js.com"))
  console.log(js.signup("javascripto@js.com"))
  