const express = require("express");
const faker = require("faker");

const app = express();
const port = 3000;

app.get("/", (request, response) => {
	response.send("Hello world from Express!");
});

app.get("/products", (request, response) => {
	const { size } = request.query;
	const limit = size || 100;
	const products = [];
	for (let i = 0; i < limit; i++) {
		products.push({
			name: faker.commerce.productName(),
			price: parseInt(faker.commerce.price()),
			image: faker.image.imageUrl()
		});
	}
	response.json(products);
});

//Todo lo específico (filter) va antes de lo dinámico, para evitar confusiones de routing
app.get("/products/filter", (request, response) => {
	response.send("Filter");
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

//Parámetros desde query
app.get("/users", (request, response) => {
	const { limit, offset } = request.query;
	if(limit && offset){
		response.json({
			limit,
			offset
		});
	}
	else{
		response.send("sin parámetros");
	}
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
