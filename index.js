const { request, response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.get('/', (request, response) => {
	response.send("Hello world from Express!");
});

app.get('/test', (request, response) => {
	response.send("Hola test");
});

app.get('/mi_flaquita', (request, response) => {
	response.json({
		latigo: "Lizeth",
		enculado: "Axel",
		quiereBoda: true,
		quierePerro: true,
		cuantosPerros: 2
	});
});

app.listen(port, () => {
	console.log("Running on: " + port);
});
