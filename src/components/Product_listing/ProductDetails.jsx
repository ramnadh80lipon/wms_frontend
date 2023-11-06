import React, { useState, useEffect } from "react";
import { Card, Switch, Row, Col, Table, Select, Button} from "antd";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";
import barcode from "../../assets/Icons/barcode.png";
// import amazonpng from "../../assets/Icons/amazon.png"

function ProductDetails() {
  const { uuid } = useParams();

  console.log(uuid);

  const [isArabicInput, setIsArabicInput] = useState(false);
  const [dischargeVAT, setDischargeVAT] = useState(false);
  const [availability, setAvailability] = useState(false);
  const [requiresShipping, setRequiresShipping] = useState(false);
  const [specificProduct, setSpecificProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { Option } = Select;

  const imageULR = "images/barcode_images/1.23457E+12.png";

  useEffect(() => {
    axios.get(`http://localhost:8080/product_listing/${uuid}`).then((res) => {
      console.log(res);
      setSpecificProduct(res.data); 
      setLoading(false);
    });
  }, [uuid]);



  


console.log(specificProduct[0]?.BRAND);
  const [data, setData] = useState([
    {
      key: "1",
      attribute: "Brand",
      value: specificProduct[0]?.BRAND,
    },
    {
      key: "2",
      attribute: "Product Dimensions",
      value: specificProduct[0]?.DIMENSION,
    },
    {
      key: "3",
      attribute: "Product Weight",
      value: specificProduct[0]?.WEIGHT,

    },
    {
      key: "4",
      attribute: "Product Color",
      value: specificProduct[0]?.COLOR,
    }
  ]);

  const columns = [
    {
      title: "Attribute",
      dataIndex: "attribute",
      key: "attribute",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
  ];
  console.log(specificProduct[0]?.PRODUCT_NAME);

  const toggleLanguage = () => {
    setIsArabicInput((prev) => !prev);
  };

  return (
    <>
      <div className="product-details-parent">
        <div className="product-details-container">
          <h2>Product Details</h2>
          <div className="button-container">
            <Button className="button-save button" type="primary" size="large">
              Save
            </Button>
            <Button className="button-view button" type="primary" size="large">
              Edit
            </Button>
            <Button
              className="button-delete button"
              type="primary"
              size="large"
            >
              Delete Product
            </Button>
          </div>
        </div>
        </div>
     
      <div className="product-details-parent">
        <div className="product-details-container">
          <h2>Product Details</h2>
        </div>
        {loading ? (
        <div>Loading...</div>
        ) :
        (
        specificProduct.map((item,index)=>(
        <div className="main-container" key={index}>
          <div className="language-container">
            <Button onClick={toggleLanguage}>
              {isArabicInput ? "Switch to English" : "Switch to Arabic"}
            </Button>
            <div className="product-details-text">
              <span style={{display:"flex",alignItems:"center"}}>
                {isArabicInput ? "اسم المنتج" : <h2 style={{color:"blue"}}>Product Name</h2>}:
              <h1><span style={{marginLeft:"10px"}}>{item?.PRODUCT_NAME}</span></h1>
              </span>
            </div>
          </div>
          <div className="price-discount-container">
            <Card title="Price and Discount">
              <div className="product-details-text">
                <h3>
                
                <span>Price in SAR:</span>
                <span>{item?.PRICE}</span>
                </h3>
              </div>
              <div className="product-details-text">
                <span>Discount in SAR:</span>
                <span>{item?.PRICE}</span>
              </div>
              <div className="product-details-text">
                <span>Product Barcode:</span>
                <img
                  // src={`http://localhost:8080/${imageULR}`}
                  src={barcode}
                  // src={item?.BARCODE_IMAGE}
                  alt="Barcode"
                  style={{ width: "400px", height: "100px" }}
                />
              </div>
            </Card>
          </div>

          <div className="product-form-container">
            <Card title="Product Specifications">
              <div className="product-details-text">
                <span>SKU:</span>
                <span>{item.SKU}</span>
              </div>
              <div className="product-details-text">
                <span>Weight:</span>
                <span>
                  {item.WEIGHT} {item.UNITS}
                </span>
              </div>
              <div className="product-details-text">
                <span>Cost in SAR:</span>
                <span>{/* Add cost value here */}</span>
              </div>
            </Card>
          </div>

          <div className="stock-quantities-container">
            <Card title="Stock Quantities">
              <div className="product-details-text">
                <span>Location:</span>
                <span>{item?.LOCATION}</span>
              </div>
              <div className="product-details-text">
                <span>Quantity:</span>
                <span>{item.QUANTITY}</span>
              </div>
              <div className="product-details-text">
                <span>Unlimited:</span>
                <span>{/* Add unlimited value here */}</span>
              </div>
            </Card>
          </div>
          <div className="order-quantities-container">
            <Card title="Order">
              <div className="product-details-text">
                <span>Minimum Order Quantity:</span>
                <span>{/* Add minimum order quantity value here */}</span>
              </div>
              <div className="product-details-text">
                <span>Maximum Order Quantity:</span>
                <span>{/* Add maximum order quantity value here */}</span>
              </div>
            </Card>
          </div>
          <div className="cards-container">
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Card title="Discharge VAT">
                  <Switch
                    checked={dischargeVAT}
                    onChange={(checked) => setDischargeVAT(checked)}
                  />
                  <span>Discharge VAT</span>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Availability">
                  <Switch
                    checked={availability}
                    onChange={(checked) => setAvailability(checked)}
                  />
                  <span>Availability</span>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Requires Shipping">
                  <Switch
                    checked={requiresShipping}
                    onChange={(checked) => setRequiresShipping(checked)}
                  />
                  <span>Requires Shipping</span>
                </Card>
              </Col>
            </Row>
          </div>
          <div>
            <Card title="Product Availability">
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <Button type="primary">Amazon</Button>
                  <span>{item?.AMAZON_QTY}</span>
                </div>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <Button type="primary">Noon</Button>
                  <span>{item?.NOON_QTY}</span>
                  <Link to={item?.NOON_PRODUCT_URL}>Noon Product URL</Link>
                  
                </div>
                <div style={{ flex: 1 }}>
                  <Button type="primary">Inventory</Button>
                  <span>{item?.QUANTITY}</span>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card title="Product Description">
              <span>{specificProduct[0].DESCRIPTION}</span>
            </Card>
          </div>
          <div className="product-details">
            <Card title="Product Details">
              <Table
                dataSource={data}
                columns={columns}
                pagination={false}
                size="small"
                bordered
              />
            </Card>
          </div>
        </div>
        ))
        )}
        
        
      </div>
      
      
        
      
      
    </>
  );
}

export default ProductDetails;
