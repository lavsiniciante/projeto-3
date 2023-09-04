class Post {
    constructor(titulo, dataPublicacao) {
      this.titulo = titulo
      this.dataPublicacao = dataPublicacao
    }
  }
  
  class Blog {
    constructor() {
      this.posts = []
    }
  
    publicar(post) {
      if (post instanceof Post) {
        this.posts.push(post)
      } else {
        throw new Error("O parâmetro deve ser uma instância da classe Post")
      }
    }
  
    antigos() {
      const postsOrdenados = [...this.posts]
      postsOrdenados.sort((a, b) => a.dataPublicacao - b.dataPublicacao)
      return postsOrdenados.map(post => post.titulo)
    }
  
    novos() {
      const postsOrdenados = [...this.posts]
      postsOrdenados.sort((a, b) => b.dataPublicacao - a.dataPublicacao)
      return postsOrdenados.map(post => post.titulo)
    }
  }
  
  const post1 = new Post("Como aprender mais rápido!", new Date(1988, 11, 24))
  const post2 = new Post("Como desaprender mais rápido!", new Date(2006, 1, 4))
  const blog = new Blog()
  
  blog.publicar(post1)
  blog.publicar(post2)
  
  console.log(blog.antigos())

  console.log(blog.novos())
