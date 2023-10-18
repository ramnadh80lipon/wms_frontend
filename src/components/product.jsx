import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Alert, Dropdown } from "react-bootstrap";
import Add from "./PRODUCT_CRUD/Add";
import axios from "axios";
import { Input } from "antd";
import { SearchOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import ProductCard from "./PRODUCT_CRUD/Update";
import "./product.css";
import amazonpng from "../assets/Icons/amazon.png";
import warehousepng from "../assets/Icons/warehouse.png";
import noonlogo from "../assets/Icons/noonlogo.png";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [showEditForm, setShowEditForm] = useState(false);
  const [handleCloseEditForm, sethandleCloseEditForm] = useState(false);
  // State for Quantity Modal
  const [showQuantityModal, setShowQuantityModal] = useState(false);

  // Quantities for Amazon, Warehouse, and Inventory
  const [quantities, setQuantities] = useState({
    amazon: 100,
    warehouse: 200,
    inventory: 50,
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
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

  const handleEditClick = () => {
    setShowEditForm(true);
    console.log("edit button clicked");
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };
  const handleShowQuantityModal = () => {
    setShowQuantityModal(true);
  };

  // Function to close the Quantity Modal
  const handleCloseQuantityModal = () => {
    setShowQuantityModal(false);
  };
  const [selectedItem, setSelectedItem] = useState("Active Items");

  const handleItemClick = (e) => {
    setSelectedItem(e);
  };

  const searchProductsStyles = {
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    width: "300px",
  };

  const inputStyles = {
    flex: 1,
    marginRight: "10px",
    border: "1px solid #d9d9d9",
    borderRadius: "4px",
    width: "75px",
  };

  return (
    <>
      <h1 className=" text-center">Product Dashboard</h1>

      <div className="row p-3">
        <div className="col-3">
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdownMenuButton"
              className="dropdown-toggle-custom"
            >
              {selectedItem}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ maxHeight: "200px", overflowY: "auto" }}>
              <Dropdown.Item onClick={() => handleItemClick("All Items")}>
                <Link to="/" className="Dropdown-link">
                  All Items
                </Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleItemClick("Active Items")}>
                <Link to="/" className="Dropdown-link">
                  Active Items
                </Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleItemClick("Ungrouped Items")}>
                <Link to="/" className="Dropdown-link">
                  Ungrouped Items
                </Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleItemClick("Low stock Items")}>
                <Link to="/" className="Dropdown-link">
                  Low Stock Items
                </Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleItemClick("Sales")}>
                <Link to="/" className="Dropdown-link">
                  Sales
                </Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleItemClick("Purchases")}>
                <Link to="/" className="Dropdown-link">
                  Purchases
                </Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleItemClick("Inventory Items")}>
                <Link to="/" className="Dropdown-link">
                  Inventory Items
                </Link>
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleItemClick("Non-Inventory Items")}
              >
                <Link to="/" className="Dropdown-link">
                  Non-Inventory Items
                </Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleItemClick("Services")}>
                <Link to="/" className="Dropdown-link">
                  Services
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="col-9 d-flex justify-content-end">
          <Link to="/ListProduct">
            <Button variant="primary">
              <i className="bi bi-plus-circle p-2"></i>New
            </Button>
          </Link>
          <div className="icon-container rounded">
            <i className="bi bi-list icon"></i>
            <i className="bi bi-microsoft icon"></i>
          </div>

          <div className="icon-container rounded-top">
            <i class="bi bi-three-dots"></i>
          </div>
          <div className="icon-container rounded-left">
            <i class="bi bi-question-lg"></i>
          </div>
        </div>
      </div>
      <hr></hr>

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
            <div style={{ marginBottom: "10px" }}>
              <Card
                className="h-100 cursor-pointer"
                style={{ paddingTop: "20px" }}
              >
                <div className="text-center">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ width: "100px", height: "130px" }}
                  />
                </div>
                <Card.Body style={{textAlign:"center"}}>
                  <Card.Title>{item.PRODUCT_NAME}</Card.Title>
                  <Card.Text>INR: {item.price}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button variant="primary" className="text-center">
                    Click for more Info
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          </div>
        ))}
      </div>

      <div style={{position:"sticky",bottom:"0",backgroundColor:"white",padding:"15px",display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
      <Button variant="primary"onClick={handleShowAddModal}>
        Add New Product
      </Button>
      </div>
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
          <Modal.Title
            style={{ textAlign: "center", display: "block", width: "100%" }}
          >
            Product Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {selectedProduct && (
            <>
              <h2>{selectedProduct.PRODUCT_NAME}</h2>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                style={{ width: "100px", margin: "20px" }}
              />
              <p>
                <span>Description:</span> {selectedProduct.description}
              </p>
              <p>
                <span>Price: </span> {selectedProduct.price}/-
              </p>
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                <p onClick={handleShowQuantityModal}>
                  <span>Quantity:</span> 45
                </p>
              </a>

              <Modal
                show={showQuantityModal}
                onHide={handleCloseQuantityModal}
                style={{ height: "100vh" }}
              >
                <Modal.Header closeButton>
                  <Modal.Title
                    style={{
                      textAlign: "center",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    Quantity Details
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <a href="/amazon" style={{ textDecoration: "none" }}>
                      <img
                        src={amazonpng}
                        style={{ height: "100px", margin: "20px" }}
                        alt="Amazon"
                      />
                      <p style={{ textDecoration: "none" }}>
                        Amazon : {quantities.amazon}
                      </p>
                    </a>
                  </div>
                  <div>
                    <a href="/warehouse" style={{ textDecoration: "none" }}>
                      <img
                        src={warehousepng}
                        style={{ height: "100px", margin: "20px" }}
                        alt="Warehouse"
                      />
                      <p style={{ textDecoration: "none" }}>
                        Warehouse : {quantities.warehouse}
                      </p>
                    </a>
                  </div>
                  <div>
                    <a href="/inventory" style={{ textDecoration: "none" }}>
                      <img
                        src={noonlogo}
                        style={{ height: "80px", margin: "20px" }}
                        alt="Inventory"
                      />
                      <p style={{ textDecoration: "none" }}>
                        Noon : {quantities.inventory}
                      </p>
                    </a>
                  </div>
                </Modal.Body>
              </Modal>
              <p>
                <span>Vendor Id :</span> {selectedProduct.VENDOR_ID}
              </p>
              <p>
                <span>Warehouse Id :</span> {selectedProduct.WAREHOUSE_ID}
              </p>
              <p>
                <span>Product Id :</span> {selectedProduct.PRODUCT_ID}
              </p>
              <p>
                <span>product status :</span> {selectedProduct.PRODUCT_STATUS}
              </p>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.PRODUCT_STATUS}
                style={{ width: "100px", height: "100px", margin: "20px" }}
              />

              <div>
                <button className="btn btn-primary" onClick={handleEditClick}>
                  <span style={{ padding: "10px", margin: "20px" }}>Edit</span>
                  <EditOutlined />
                </button>
              </div>
              {showEditForm && (
                <ProductCard
                  selectedProduct={selectedProduct}
                  onClose={handleCloseEditForm}
                />
              )}
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Product;
