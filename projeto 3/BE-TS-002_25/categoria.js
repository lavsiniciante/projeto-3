class Categoria {
    constructor(nome) {
      this.nome = nome
    }
  }
  
  class Artigo {
    constructor(titulo) {
      this.titulo = titulo
      this.categoria = null
    }
  
    setCategoria(categoria) {
      if (categoria instanceof Categoria) {
        this.categoria = categoria
      } else {
        throw new Error("O parâmetro deve ser uma instância da classe Categoria")
      }
    }
  }
  
  const categoria = new Categoria("Javascript")
  const artigo = new Artigo("Orientação a Objetos")
  
  artigo.setCategoria(categoria)
  console.log(categoria.nome)
  console.log(artigo.categoria.nome)
  console.log(artigo.titulo)