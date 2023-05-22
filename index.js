const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectToDb = require("./database/db");

const app = express();
const port = 3000;

//CONECTANDO COM BANCO DE DADOS
connectToDb();

//INFORMA QUE A ENGINE USADE É A EJS(PODE USAR HANDLEBARS, PUG, ETC...)
app.set("view engine", "ejs");

//USA OS ARQUIVOS DA PASTAS PUBLIC
app.use(express.static(path.join(__dirname, "public")));

//USA AS ROTAS
app.use(routes);

//INICIA EM LOCALHOST UM SERVIDOR QUE RODA O PROGRAMA
app.listen(port, () =>
	console.log(`Servidor rodando em http://localhost:${port}`)
);
