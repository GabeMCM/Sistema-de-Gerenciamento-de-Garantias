require("dotenv").config();
const express = require("express");
const path = require("path");
const userRoute = require("./src/routes/user.routes");
const connectDatabse = require("./src/database/db");

const app = express();
const port = process.env.PORT;

/*INFORMANDO QUE O MECANISMO DE VISUALIZAÇÃO(A ENGINE USADA) 
SERÁ O EJS (PODE USAR HANDLEBARS, PUG, ETC...) 
E CONFIGURANDO A PASTA DE VISUALIZAÇÃO CORRETA.*/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//USA OS ARQUIVOS DA PASTAS PUBLIC
app.use(express.static(path.join(__dirname, "public")));

//INFORMA AO EXPRESS QUE VOU USAR JSON
app.use(express.json());

//CONECTANDO COM DATABASE
connectDatabse();

//
app.use(express.urlencoded());

//USA AS ROTAS
app.use("/", userRoute);

//INICIA EM LOCALHOST UM SERVIDOR QUE RODA O PROGRAMA
app.listen(port, () =>
	console.log(`Servidor rodando em http://localhost:${port}/`)
);
