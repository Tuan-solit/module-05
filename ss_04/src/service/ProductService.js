class ProductService {
  constructor() {
    this.products = [
      {
        id: 1,
        name: "iphone 15",
        price: 20000000,
      },
      {
        id: 2,
        name: "iphone 14",
        price: 17000000,
      },
      {
        id: 3,
        name: "iphone 13",
        price: 14000000,
      },
      {
        id: 4,
        name: "iphone 12",
        price: 10000000,
      },
    ];
  }

  getAll() {
    return [...this.products];
  }

  deleteById(id) {
    return (this.products = this.products.filter((item) => item.id != id));
  }
}
export default new ProductService();
