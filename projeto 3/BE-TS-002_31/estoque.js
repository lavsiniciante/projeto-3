class Estoque {
    constructor() {
      this.itens = [];
    }
  
    adicionar(nome, quantidade) {
      const itemIndex = this.itens.findIndex((item) => item.nome === nome);
  
      if (itemIndex === -1) {
        this.itens.push({ nome, quantidade });
        return "Produto novo adicionado.";
      } else {
        this.itens[itemIndex].quantidade += quantidade;
        return `${quantidade} item(s) foi adicionado.`;
      }
    }
  
    remover(nome, quantidade) {
      const itemIndex = this.itens.findIndex((item) => item.nome === nome);
  
      if (itemIndex === -1 || this.itens[itemIndex].quantidade === 0) {
        return "Produto não encontrado.";
      } else if (this.itens[itemIndex].quantidade < quantidade) {
        return "Não há quantidade suficiente para remoção.";
      } else {
        this.itens[itemIndex].quantidade -= quantidade;
        return `${quantidade} item(s) removido(s).`;
      }
    }
  
    listar() {
      return this.itens;
    }
  }
  
  const estoque = new Estoque();
  
  console.log(estoque.adicionar("Uva", 1)); // Produto novo adicionado;
  console.log(estoque.adicionar("Uva", 2)); // 2 item(s) foi adicionado;
  console.log(estoque.listar()); // [{ nome: "Uva", quantidade: 3 }]
  console.log(estoque.remover("Uva", 3)); // 3 item(s) removido(s)
  console.log(estoque.listar()); // [{ nome: "Uva", quantidade: 0 }]
  console.log(estoque.remover("Uva", 1)); // Não há quantidade suficiente para remoção
  console.log(estoque.remover("Laranja", 1)); // Produto não encontrado
  