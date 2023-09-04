class Analisador {
    constructor() {
      this.dados = []
    }
  
    mesclar(names, emails) {
      if (names.length !== emails.length) {
        throw new Error("Os arrays de nomes e emails devem ter o mesmo tamanho")
      }
  
      this.dados = names.map((name, index) => ({ name, email: emails[index] }))
    }
  
    listarMesclados() {
      return this.dados
    }
  }
  
  const names = ["João", "Mário"]
  const emails = ["joao@gmail.com", "mario@msn.com"]
  
  const analisador = new Analisador()
  analisador.mesclar(names, emails)
  console.log(analisador.listarMesclados())

  