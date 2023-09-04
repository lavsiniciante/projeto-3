class Escola {
    constructor() {
      this.alunos = []
    }
  
    adicionar(nome, nota) {
      this.alunos.push({ nome, nota })
    }
  
    media() {
      if (this.alunos.length === 0) {
        return 0
      }
  
      const somaNotas = this.alunos.reduce((soma, aluno) => soma + aluno.nota, 0)
      return somaNotas / this.alunos.length
    }
  
    ranking() {
      return this.alunos.slice().sort((a, b) => b.nota - a.nota)
    }
  }
  
  const escola = new Escola()
  escola.adicionar("João", 10)
  escola.adicionar("Maria", 5)
  escola.adicionar("Maurício", 7)
  escola.adicionar("Alice", 7)
  console.log(escola.media())
  console.log(escola.ranking())
 

  