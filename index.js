const express = require("express");
const routerApi = require("./routes");

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

//Middleware para recibir infomación de tipo json por POST
app.use(express.json());

app.get("/", (request, response) => {
	response.send("Hello world from Express!");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
	console.log("Running on: " + port);
});
