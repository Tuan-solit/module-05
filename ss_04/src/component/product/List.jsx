import { useState } from "react";
import ProductService from "../../service/ProductService";
import Delete from "./Delete";
import { Table } from "react-bootstrap";
import { useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setProducts([...ProductService.getAll()]);
  }, [isLoading]);

  const handleShowModal = (product) => {
    setShowModal(true);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const confirmDelete = (id) => {
    const productList = ProductService.deleteById(id);
    setProducts([...productList]);
    setShowModal(false);
    setSelectedProduct(null);
  };
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
          {products.map((product, i) => (
            <tr key={product.id}>
              <td>{i + 1}</td>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price.toLocaleString()} VND</td>
              <td>
                <button onClick={() => handleShowModal(product)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Delete
        showModal={showModal}
        closeModal={handleCloseModal}
        item={selectedProduct}
        setIsLoading={setIsLoading}
      />
    </>
  );
}
export default ProductList;
