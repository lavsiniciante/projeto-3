class Analisador {
    constructor() {
      this.dados = { name: "", email: "" };
    }
  
    adicionar(name, email) {
      this.dados.name = name
      this.dados.email = email
    }
  
    converterParaObjeto() {
      return { email: this.dados.email, name: this.dados.name }
    }
  }
  
  const analisador = new Analisador()
  analisador.adicionar("João", "joao@email.com")
  console.log(analisador.converterParaObjeto())
  