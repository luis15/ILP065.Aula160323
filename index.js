const express = require("express");
var home = require("./controllers/home");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/arquivo", (req, res) => {
  let homeController = new home(req, res);
  res.status(200).send(homeController.salvarTexto());
});
app.get("/arquivo/:nomeArquivo", (req, res) => {
  let homeController = new home(req, res);
  res.status(200).send(homeController.lerTexto());
});

app.get("/:nome", (req, res) => {
  let homeController = new home(req, res);
  res.status(200).send(homeController.index());
});

app.get("/", (req, res) => {
  let homeController = new home(req, res);
  res.status(200).send(homeController.index());
});

app.listen(port, () => {
  console.log("Iniciei na porta " + port);
});
