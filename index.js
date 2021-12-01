const { request, response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
	response.send("Hello world from Express!");
});

app.get("/products", (request, response) => {
	response.json([
		{
			name: "Calzón",
			price: 100
		},
		{
			name: "Tanga",
			price: 20
		},
		{
			name: "Cruz católica",
			price: 200
		}
	]);
});

app.get("/products/:id", (request, response) => {
	const { id } = request.params;
	response.json({
			id,
			name: "Calzón",
			price: 100
		});
});

app.get("/categories/:categoryId/products/:productId", (request, response) => {
	const { categoryId, productId } = request.params;
	response.json({
		categoryId,
		productId
	});
});

app.get("/mi_flaquita", (request, response) => {
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
