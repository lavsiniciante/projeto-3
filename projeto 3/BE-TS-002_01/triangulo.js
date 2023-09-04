class Triangulo {
    constructor(lado1, lado2, lado3) {
      this.lado1 = lado1
      this.lado2 = lado2
      this.lado3 = lado3
    }
  
    tipo() {
      if (
        this.lado1 <= 0 ||
        this.lado2 <= 0 ||
        this.lado3 <= 0 ||
        this.lado1 + this.lado2 <= this.lado3 ||
        this.lado1 + this.lado3 <= this.lado2 ||
        this.lado2 + this.lado3 <= this.lado1
      ) {
        return 'invalido';
      } else if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
        return 'equilatero';
      } else if (
        this.lado1 === this.lado2 ||
        this.lado2 === this.lado3 ||
        this.lado1 === this.lado3
      ) {
        return 'isosceles';
      } else {
        return 'escaleno';
      }
    }
  }
  

  const triangulo1 = new Triangulo(1, 2, 3)
  
  console.log("Triangulo1:",triangulo1.tipo()) 
  
  const triangulo2 = new Triangulo(3, 3, 3)
  console.log("Triangulo2:",triangulo2.tipo()) 
  
  const triangulo3 = new Triangulo(3, 4, 4)
  console.log("Triangulo3:",triangulo3.tipo())
  
  const triangulo4 = new Triangulo(5, 12, 13)
  console.log("Triangulo4:",triangulo4.tipo())