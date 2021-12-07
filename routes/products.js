const express = require("express");
const ProductsService = require("../services/products");

const router = express.Router();
const service = new ProductsService();

router.get("/", async (request, response) => {
	//?size=100
	//const { size } = request.query;
	const products = await service.find();
	response.status(200).json(products);
});

//Todos los parámetros enviados o por query se reciben por string
router.get("/:id", async (request, response, next) => {
	try {
		const { id } = request.params;
		const product = await service.findOne(id);
		response.json(product);
	} catch (error) {
		next(error);
	}
});

/*Funcionamiento de un middleware (similar a un pipe)

La salida de uno, es la entrada de otro
function(request, result, next){
	if (something){
		response.send('end');
	}
	else{
		next();
	}
	if (error){
		response.status(500).json({error});
	}
	else{
		next();
	}
}*/

router.post("/", async (request, response) => {
	const body = request.body;
	const newProduct = await service.create(body);
	response.status(201).json({
		message: "Created",
		data: newProduct
	});
});

router.put("/:id", async (request, response, next) => {
	try {
		const { id } = request.params;
		const body = request.body;
		const product = await service.update(id, body);
		response.json(product);
	} catch (error) {
		next(error);
	}
});

router.patch("/:id", async (request, response, next) => {
	try {
		const { id } = request.params;
		const body = request.body;
		const product = await service.update(id, body);
		response.json(product);
	} catch (error) {
		next(error);
	}
});

router.delete("/:id", async (request, response) => {
	const { id } = request.params;
	const result = await service.delete(id);
	response.json(result);
});

//Todo lo específico (filter) va antes de lo dinámico, para evitar confusiones de routing
//router.get("/filter", (request, response) => {
//	response.send("Filter");
//});

//Exporta el módulo de router
module.exports = router;
