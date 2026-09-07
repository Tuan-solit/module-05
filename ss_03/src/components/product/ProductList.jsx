import { Component } from "react";
import { Table } from "react-bootstrap";
import ProductService from "../../service/product/ProductService";
import Delete from "../Delete";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ProductService.getAll(),
      showModal: false,
      selectedProduct: null,
    };
  }

  handleShowModal = (product) => {
    this.setState({
      showModal: true,
      selectedProduct: product,
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  confirmDelete = (id)=>{
    const productList = ProductService.deleteById(id);
    this.setState({
      products: [...productList],
      showModal: false,
      selectedProduct: null,
    });
  }
  render() {
    return (
      <>
        <h2>Product List</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product, i) => (
              <tr key={product.id}>
                <td>{i + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price.toLocaleString()} VND</td>
                <td>
                  <button onClick={() => this.handleShowModal(product)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Delete showModal = {this.state.showModal}
                closeModal = {this.handleCloseModal}
                item = {this.state.selectedProduct}
                confirmDelete = {this.confirmDelete}
        ></Delete>
      </>
    );
  }
}
export default ProductList;
