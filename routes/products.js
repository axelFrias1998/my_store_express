const express = require("express");
const faker = require("faker");

const router = express.Router();

router.get("/", (request, response) => {
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

router.post("/", (request, response) => {
	const body = request.body;
	response.json({
		message: "Created",
		data: body
	});
});

router.put("/:id", (request, response) => {
	const { id } = request.params;
	const body = request.body;
	response.json({
		message: "Update",
		data: body,
		id
	});
});

router.patch("/:id", (request, response) => {
	const { id } = request.params;
	const body = request.body;
	response.json({
		message: "Update partial",
		data: body,
		id
	});
});

router.delete("/:id", (request, response) => {
	const { id } = request.params;
	response.json({
		message: "Delete",
		id
	});
});

//Todo lo específico (filter) va antes de lo dinámico, para evitar confusiones de routing
//router.get("/filter", (request, response) => {
//	response.send("Filter");
//});

router.get("/:id", (request, response) => {
	const { id } = request.params;
	response.json({
			id,
			name: "Calzón",
			price: 100
		});
});

//Exporta el módulo de router
module.exports = router;
