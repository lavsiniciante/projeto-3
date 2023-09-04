class Escola {
    constructor() {
      this.alunos = []
    }
  
    adicionar(nome, nota) {
      this.alunos.push({ nome, nota })
    }
  
    notasBaixas() {
      return this.alunos.filter(aluno => aluno.nota <= 5)
    }
  }
  
  const escola = new Escola()
  escola.adicionar("João", 10)
  escola.adicionar("Maria", 5)
  console.log(escola.notasBaixas())
  