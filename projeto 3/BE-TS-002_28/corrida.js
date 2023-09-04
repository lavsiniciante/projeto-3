class Animal {
    constructor(nome, velocidade) {
      this.nome = nome
      this.velocidade = velocidade
    }
  }
  
  class Corrida {
    constructor(animais) {
      this.animais = animais
    }
  
    resultado() {
      const animaisOrdenados = [...this.animais]
      animaisOrdenados.sort((a, b) => b.velocidade - a.velocidade)
      const tresPrimeiros = animaisOrdenados.slice(0, 3)
      return tresPrimeiros.map(animal => animal.nome)
    }
  }
  
  const coelho = new Animal("Coelho", 5)
  const cavalo = new Animal("Cavalo", 15)
  const cheetah = new Animal("Cheetah", 25)
  const onca = new Animal("Onça", 12);
  const cachorro = new Animal("Cachorro", 9)
  
  const corrida = new Corrida([coelho, cheetah, cavalo, onca, cachorro])
  
  console.log(corrida.resultado())
  