const express = require("express");
const ProductsService = require("../services/products");

const router = express.Router();
const service = new ProductsService();

router.get("/", (request, response) => {
	//?size=100
	//const { size } = request.query;
	const products = service.find();
	response.status(200).json(products);
});

//Todos los parámetros enviados o por query se reciben por string
router.get("/:id", (request, response) => {
	const { id } = request.params;
	const product = service.findOne(id);
	if(product){
		response.status(200).json(product);
	}
	else{
		response.status(404).json({
			message: "Not found"
		});
	}
});

router.post("/", (request, response) => {
	const body = request.body;
	response.status(201).json({
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

//Exporta el módulo de router
module.exports = router;
