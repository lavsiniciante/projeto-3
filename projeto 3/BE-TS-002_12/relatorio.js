class Relatorio {
    static mediaSalarial(listaDeEmpregados) {
      if (listaDeEmpregados.length === 0) {
        return 0
      }
  
      const totalSalarios = listaDeEmpregados.reduce((acumulador, empregado) => {
        return acumulador + empregado.salario
      }, 0)
  
      return totalSalarios / listaDeEmpregados.length
    }
  
    static menorSalario(listaDeEmpregados) {
      if (listaDeEmpregados.length === 0) {
        return null
      }
  
      let menorSalario = listaDeEmpregados[0]
  
      for (let i = 1; i < listaDeEmpregados.length; i++) {
        if (listaDeEmpregados[i].salario < menorSalario.salario) {
          menorSalario = listaDeEmpregados[i]
        }
      }
  
      return menorSalario
    }
  
    static maiorSalario(listaDeEmpregados) {
      if (listaDeEmpregados.length === 0) {
        return null
      }
  
      let maiorSalario = listaDeEmpregados[0]
  
      for (let i = 1; i < listaDeEmpregados.length; i++) {
        if (listaDeEmpregados[i].salario > maiorSalario.salario) {
          maiorSalario = listaDeEmpregados[i]
        }
      }
  
      return maiorSalario
    }
  }
  
  class Empresa {
    listaDeEmpregados = [
      {
        nome: "João Silva",
        salario: 1500,
      },
      {
        nome: "Maria José",
        salario: 2500,
      },
      {
        nome: "Simplício Simplório",
        salario: 2400,
      },
      {
        nome: "Mario João",
        salario: 2100,
      },
    ];
  
    mediaSalarial() {
      return Relatorio.mediaSalarial(this.listaDeEmpregados)
    }
  
    menorSalario() {
      return Relatorio.menorSalario(this.listaDeEmpregados)
    }
    maiorSalario() {
      return Relatorio.maiorSalario(this.listaDeEmpregados)
    }
  }
  
  const empresa = new Empresa();
  
  console.log(empresa.mediaSalarial())
  console.log(empresa.menorSalario())
  console.log(empresa.maiorSalario())
  