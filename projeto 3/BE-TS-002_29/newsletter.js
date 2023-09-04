class Newsletter {
    #emailList = new Set()
  
    inscrever(email) {
      if (this.#emailList.has(email)) {
        return "E-mail já se encontra cadastrado"
      }
      this.#emailList.add(email)
      return "E-mail cadastrado com sucesso"
    }
  
    cancelar(email) {
      if (this.#emailList.has(email)) {
        this.#emailList.delete(email)
        return "E-mail removido"
      }
      return "E-mail não encontrado"
    }
  }
  
  const js = new Newsletter();
  console.log(js.inscrever("javascripto@js.com"))
  console.log(js.inscrever("javascripto@js.com"))
  console.log(js.cancelar("javascripto@js.com"))
  console.log(js.inscrever("javascripto@js.com"))
  