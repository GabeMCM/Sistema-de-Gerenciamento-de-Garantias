const express = require("express");
const path = require("path");
const userRoute = require("./src/routes/user.routes");
const connectDatabse = require("./src/database/db");

const app = express();
const port = 3000;

//INFORMA AO EXPRESS QUE VOU USAR JSON
app.use(express.json());

//CONECTANDO COM DATABASE
connectDatabse();

//INFORMA QUE A ENGINE USADE É A EJS(PODE USAR HANDLEBARS, PUG, ETC...)
app.set("view engine", "ejs");

//
app.use(express.urlencoded());

//USA OS ARQUIVOS DA PASTAS PUBLIC
app.use(express.static(path.join(__dirname, "public")));

//USA AS ROTAS
app.use("/", userRoute);

//INICIA EM LOCALHOST UM SERVIDOR QUE RODA O PROGRAMA
app.listen(port, () =>
	console.log(`Servidor rodando em http://localhost:${port}`)
);
