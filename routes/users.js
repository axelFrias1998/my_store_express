const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
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

router.get("/mi_flaquita", (request, response) => {
	response.json({
		latigo: "Lizeth",
		enculado: "Axel",
		quiereBoda: true,
		quierePerro: true,
		cuantosPerros: 2
	});
});

module.exports = router
