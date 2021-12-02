const express = require("express");
const routerApi = require("./routes");

const app = express();
const port = 3000;

app.get("/", (request, response) => {
	response.send("Hello world from Express!");
});

routerApi(app);

app.listen(port, () => {
	console.log("Running on: " + port);
});
