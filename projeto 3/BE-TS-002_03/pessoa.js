const pessoa = {
    name: "João",
    age: 18,
    sobre: function () {
      return `${this.name} tem ${this.age} anos`
    },
  };
  
console.log("Pessoa:",pessoa.sobre()) 
  