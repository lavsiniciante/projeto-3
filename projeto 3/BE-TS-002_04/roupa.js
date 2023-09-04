class Roupa {
    constructor(tamanho, cor = "sem cor") {
      this.tamanho = tamanho
      this.cor = cor
    }
  
    sobre() {
      return `Camisa tamanho ${this.tamanho} tem a cor ${this.cor}`
    }
  }
  
  const roupa1 = new Roupa("M", "azul")
  console.log("Roupa 1:",roupa1.sobre()) 
  
  const roupa2 = new Roupa("G")
  console.log("Roupa 2:",roupa2.sobre())