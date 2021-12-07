//Lógica nivel transaccional va aquí
const faker = require("faker");
const boom = require("@hapi/boom");

class ProductsService {

	constructor(){
		this.products = [];
		this.generate();
	}

	generate(){
		//const limit = size || 100;
		const limit = 100;
		for (let i = 0; i < limit; i++) {
			this.products.push({
				id: faker.datatype.uuid(),
				name: faker.commerce.productName(),
				price: parseInt(faker.commerce.price()),
				image: faker.image.imageUrl(),
				isBlock: faker.datatype.boolean()
			});
		}
	}

	async create(data){
		//Split operation
		const newProduct = {
			id: faker.datatype.uuid(),
			...data
		};
		this.products.push(newProduct);
		return newProduct;
	}

	async find(){
		//Retraso de 5 segundos
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(this.products);
			}, 5000);
		})
	}

	async findOne(id){
		const product = this.products.find(item => item.id === id);
		if(!product){
			throw boom.notFound("Product not found");
		}
		//Restricción por regla de negocio. Si el producto está bloqueado
		if(product.isBlock){
			throw boom.conflict("Product is blocked");
		}
		return product;
	}

	async update(id, changes){
		const index = this.products.findIndex(item => item.id === id);
		if(index === -1){
			throw boom.notFound("Product not found");
		}
		//Ajusta lo anterior y lo nuevo
		const product = this.products[index];
		this.products[index] = {
			...product,
			...changes
		};
		return this.products[index];
	}

	async delete(id){
		const index = this.products.findIndex(item => item.id === id);
		if(index === -1){
			throw boom.notFound("Product not found");
		}
		this.products.splice(index, 1);
		return { id };
	}
}

module.exports = ProductsService;
