import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Alert } from "react-bootstrap";
import Add from "./PRODUCT_CRUD/Add";
import axios from "axios";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";



const Product = () => {
  const [products, setProducts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState(null);
  const [searchItem, setSearchItem] = useState("");


  useEffect(() => {
    axios
      .get("http://localhost/project_backend/api/products.php")
      .then((response) => {
        console.log(response);
        const data = response.data;
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setError("Invalid data format received from the server.");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const handleShowAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);


  };
  const searchProductsStyles = {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    width: '300px',
  
  };

  const inputStyles = {
    flex: 1,
    marginRight: '10px',
    border: '1px solid #d9d9d9',
    borderRadius: '4px',
    width: '75px'
  };

  return (
    <>
    
      <h1 className=" text-center">Product Dashboard</h1>
      <div className="search-products" style={searchProductsStyles}>
      <Input
        placeholder="Search Products by name"
        onChange={(e) => setSearchItem(e.target.value.toLowerCase())}
        prefix={<SearchOutlined />}
        style={inputStyles}
      />
    
    </div>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="row">
        {products.map((item) => (
          <div
            className="col-md-3"
            key={item.PRODUCT_ID}
            onClick={() => handleCardClick(item)}
          >
            <Card className="h-100 cursor-pointer">
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={item.productImagePath} 
                  style={{ width: "100px", height: "130px" }}
                />
              </div>
              <Card.Body>
                <Card.Title>{item.PRODUCT_NAME}</Card.Title>
                <Card.Text>INR: {item.PRICE}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button variant="primary" className="text-center">
                  Click for more Info
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>

      <Button variant="primary" onClick={handleShowAddModal}>
        Add Product
      </Button>
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Add />
        </Modal.Body>
      </Modal>

      <Modal show={selectedProduct !== null} onHide={handleCloseProductModal}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <>
              <h2>{selectedProduct.PRODUCT_NAME}</h2>
              <img
                src={selectedProduct.productImagePath}
                alt={selectedProduct.PRODUCT_NAME}
                style={{ width: "100px", height: "130px" }}
              />
              <p>Description: {selectedProduct.DESCRIPTION}</p>
              <p>Price: INR {selectedProduct.PRICE}</p>
              <p>Quantity: 45</p>
              <p>Vendor Id : {selectedProduct.VENDOR_ID}</p>
              <p>Warehouse Id : {selectedProduct.WAREHOUSE_ID}</p>
              <p>Product Id : {selectedProduct.PRODUCT_ID}</p>
              <p>product status : {selectedProduct.PRODUCT_STATUS}</p>
              <img
                src={selectedProduct.qrCodeImagePath}
                alt={selectedProduct.PRODUCT_STATUS}
                style={{ width: "100px", height: "130px" }}
              />
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Product;
