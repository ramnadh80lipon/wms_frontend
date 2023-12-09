import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Alert, Dropdown, Table } from "react-bootstrap";
import axios from "axios";
import { Input, Switch, Space } from "antd";
import { SearchOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
const WarehouseA = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [filteredProducts,setfilteredProducts] = useState("");
  const [showEditForm, setShowEditForm] = useState(false);
  const [handleCloseEditForm, sethandleCloseEditForm] = useState(false);
  // State for Quantity Modal
  const [showQuantityModal, setShowQuantityModal] = useState(false);

  // Quantities for Amazon, Warehouse, and Inventory
  
  const navigate = useNavigate();
  const warehouseName = "WAREHOUSE 1";

  
const url = `http://localhost:8080/warehouse_products/?warehouseName=${encodeURIComponent(warehouseName)}`;
  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouse_products/?warehouseName=${encodeURIComponent(warehouseName)}`)
      
      .then((response) => {
        console.log(response.data);
        const data = response.data;
        if (Array.isArray(data)) {
          setProducts(data);
          console.log("the data is:", products);
        } else {
          setError("Invalid data format received from the server.");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  useEffect(()=>{
    const fileteredData = products.filter((item)=>{
    const lowerProductName = item?.productName?.toLowerCase();
    const lowerProductId = item?.productId?.toLowerCase();
    const lowerSearchItem = searchItem.toLowerCase();
     
    
    return lowerProductName.includes(lowerSearchItem) || lowerProductId.includes(lowerSearchItem);
    
    });

     
    setfilteredProducts(fileteredData);
  },[products,searchItem])
  console.log("the searching item is:",searchItem);

  

  

  
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




  const [viewType, setViewType] = useState('table'); // Default view is 'table'

  const toggleView = (newView) => {
    setViewType(newView);

  };

  return (
    <>
      <h1 className=" text-center">Warehouse 1 Product Dashboard</h1>

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
          {/* <div>
          <Link to="/ListProduct">
            <Button variant="primary">
              <i className="bi bi-plus-circle p-2"></i>New
            </Button>
          </Link>
          </div> */}
          <div className="toggle-button center">
            <Space >
              <Switch style={{backgroundColor:"#0D6EFD"}}
              checkedChildren={<i className="bi bi-grid-3x3-gap-fill icon"></i> }
              unCheckedChildren={<i className="bi bi-list icon"></i> }
              onChange={(checked) => toggleView(checked ? 'table' : 'card')}
              checked={viewType === 'table'}
              />
            </Space>
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

        {searchItem === '' ? (

      
        products.map((item) => (
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
                    src={item.image_url}
                    style={{ width: "100px", height: "130px" }}
                  />
                </div>
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title>{item.productName}</Card.Title>
                  <Card.Text>Description: {item.description}</Card.Text>
                  <Card.Text>ProductId : {item.productId}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Link to={`/product/${item.product_uuid}`}>
                    <Button variant="primary" className="text-center">
                      Click for more Info
                    </Button>
                  </Link>
                  </Card.Footer>
              </Card>
              </div>
            
              </div>
              ))
        ) : (
          filteredProducts.map((item) => (
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
                      src={item.image_url}
                      style={{ width: "100px", height: "130px" }}
                    />
                  </div>
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title>{item.productName}</Card.Title>
                    <Card.Text>Description: {item.description}</Card.Text>
                    <Card.Text>ProductId : {item.productId}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Link to={`/product/${item.product_uuid}`}>
                      <Button variant="primary" className="text-center">
                        Click for more Info
                      </Button>
                    </Link>
                    </Card.Footer>
                </Card>
                </div>
              
                </div>
                ))

        )
          }
          
                
            
      
       


      <div
        style={{
          position: "sticky",
          bottom: "0",
          backgroundColor: "white",
          padding: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
       <Link to="/addproduct"> <Button variant="primary">
          Add New Product
        </Button></Link>
      </div>
     

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
              <h2>{selectedProduct?.PRODUCT_NAME}</h2>
              <img
                src={selectedProduct.image_url}
                alt={selectedProduct.productName}
                style={{ width: "100px", margin: "20px" }}
              />
              <p>
                <span>Description:</span> {selectedProduct?.description}
              </p>
              <p>
                <span>Price: </span> {selectedProduct.price}/-
              </p>
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                {/* <p onClick={handleShowQuantityModal}> */}
                  <span>Quantity:</span> {selectedProduct?.quantity}
                {/* </p> */}
              </a>

                  
              <p>
                <span>Vendor Id :</span> {selectedProduct?.VENDOR_ID}
              </p>
              <p>
                <span>Warehouse Name :</span> {selectedProduct.warehouse_name}
              </p>
              <p>
                <span>Product Id :</span> {selectedProduct.productId}
              </p>
              <p>
                <span>product status :</span> {selectedProduct?.PRODUCT_STATUS}
              </p>
              <img
                src={selectedProduct.barcode_image_url}
                alt={selectedProduct.PRODUCT_STATUS}
                style={{ width: "100px", height: "100px", margin: "20px" }}
              />

              <div>
                <button className="btn btn-primary" onClick={handleEditClick}>
                  <span style={{ padding: "10px", margin: "20px" }}>Edit</span>
                  <EditOutlined />
                </button>
              </div>
              {/* {showEditForm && (
                <ProductCard
                  selectedProduct={selectedProduct}
                  onClose={handleCloseEditForm}
                />
              )} */}
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>

    </>
  )}

  export default WarehouseA;



