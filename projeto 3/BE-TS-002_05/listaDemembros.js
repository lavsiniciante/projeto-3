class ListaDeMembros {
    constructor() {
      this.membros = []
    }
  
    adicionar(nome) {
      this.membros.push(nome)
    }
  
    contar() {
      return this.membros.length
    }
  }
  
 const lista = new ListaDeMembros()
  
  lista.adicionar("João")
  lista.adicionar("Maria")
  lista.adicionar("Carlos")
  
  console.log(lista.contar())
  