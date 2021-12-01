const express = require("express");
const app = express();
const port = 3000;

app.get('/', (request, response) => {
	response.send("Hello world from Express!");
});

app.listen(port, () => {
	console.log("Running on: " + port);
});
