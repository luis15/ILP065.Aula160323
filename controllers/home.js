const fs = require("fs");

class Home {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }
  index() {
    var retorno = {};
    retorno.datetime = new Date();
    if (this.req.params.nome) {
      retorno.value =
        "Olá Mundo! Sou o " + this.req.params.nome + " e fiz uma API REST";
    } else {
      retorno.value = "Olá Mundo! Fiz uma API REST";
    }

    return retorno;
  }
  salvarTexto() {
    var texto = this.req.body.texto;
    var arquivo = "./files/" + this.req.body.arquivo;

    fs.writeFileSync(arquivo, texto);
    var retorno = {};
    retorno.datetime = new Date();
    retorno.value = "Arquivo inserido com sucesso";

    return retorno;
  }

  lerTexto() {
    var arquivo = "./files/" + this.req.params.nomeArquivo;
    var texto = fs.readFileSync(arquivo, { encoding: "utf8", flag: "r" });

    var retorno = {};
    retorno.datetime = new Date();
    retorno.value = texto;

    return retorno;
  }
}

module.exports = Home;
