const categoriesRouter = require("./categories");
const productsRouter = require("./products");
const usersRouter = require("./users");

function routerApi(app){
	app.use("/categories", categoriesRouter);
	app.use("/products", productsRouter);
	app.use("/users", usersRouter);
}

module.exports = routerApi;
