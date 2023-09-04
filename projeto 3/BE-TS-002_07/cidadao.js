class Pessoa {
    constructor(nome, idade) {
      this.nome = nome
      this.idade = idade
    }
  }
  
  class Cidadao extends Pessoa {
    constructor(nome, idade, cpf, rg) {
      super(nome, idade)
      this.cpf = cpf
      this.rg = rg
    }
  }
  
  const pessoa1 = new Pessoa("João Neto", 18)
  console.log("Pessoa 1:",pessoa1) 
  
  const cidadao1 = new Cidadao("João Neto", 18, "12345678900", "1234567")
  console.log("Pessoa 2:", cidadao1) 