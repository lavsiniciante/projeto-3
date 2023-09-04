class Pessoa {
    constructor(nome, sobrenome) {
      this.nome = nome
      this.sobrenome = sobrenome
    }
  
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    }
  }
  
  const pessoa1 = new Pessoa("João", "Ninguém")
  console.log("Nome completo:",pessoa1.nomeCompleto()) 
  