import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProductService from "../../service/ProductService";

function Delete({ showModal, closeModal, item, setIsLoading }) {
  const confirmDelete = (id) => {
    ProductService.deleteById(id);
    closeModal();
    setIsLoading((pre) => !pre);
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>Do you want to delete the product</span>
        <span color="red">{item?.name}?</span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            confirmDelete(item.id);
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default React.memo(Delete);
