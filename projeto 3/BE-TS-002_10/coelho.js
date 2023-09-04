class Animal {
    constructor(nome) {
      this.nome = nome
      this.velocidade = 0
    }
  
    corre(velocidade) {
      this.velocidade = velocidade * 2 
    }
  
    pare() {
      this.velocidade = 0
    }
  
    status() {
      if (this.velocidade > 0) {
        return `${this.nome} corre com velocidade ${this.velocidade}`
      } else {
        return `${this.nome} está parado`
      }
    }
  }
  
  class Coelho extends Animal {
    constructor() {
      super("Coelho")
    }
  }
  
  
  const coelho = new Coelho()
  
  coelho.corre(5)
  console.log(coelho.status()) 
  
  coelho.pare()
  console.log(coelho.status()) 
  