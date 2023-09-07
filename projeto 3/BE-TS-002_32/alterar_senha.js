class Usuario {
    #senhas;
  
    constructor(senhaInicial) {
      this.#senhas = [senhaInicial];
    }
  
    alterarSenha(novaSenha) {
      if (this.#senhas.slice(-3).includes(novaSenha)) {
        return "Senha não pode ser igual às três últimas utilizadas.";
      } else {
        this.#senhas.push(novaSenha);
        return "Senha alterada com sucesso.";
      }
    }
  }
  
  const usuario = new Usuario("senha1");
  
  console.log(usuario.alterarSenha("senha2")); // Senha alterada com sucesso
  console.log(usuario.alterarSenha("senha2")); // Senha não pode ser igual às três últimas
  console.log(usuario.alterarSenha("senha3")); // Senha alterada com sucesso
  console.log(usuario.alterarSenha("senha1")); // Senha não pode ser igual às três últimas
  console.log(usuario.alterarSenha("senha4")); // Senha alterada com sucesso
  console.log(usuario.alterarSenha("senha1")); // Senha alterada com sucesso
  