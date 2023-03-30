const db = require("../utils/database");

class ArquivoModel {
  constructor(nome, arquivo) {
    this.nome = nome;
    this.arquivo = arquivo;
  }

  static async obterTodos() {
    const rows = await db.executar("SELECT * FROM arquivos");
    return rows;
  }
}
