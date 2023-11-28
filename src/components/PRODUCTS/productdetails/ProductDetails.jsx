import React from "react";
import {
  Input,
  Card,
  Select,
  Checkbox,
  Switch,
  Row,
  Col,
  Table,
  Button,
} from "antd";
import "./ProductDetails.css";
import { Link } from "react-router-dom";

function ProductDetails() {
  const productDetails = {
    uuid: 1,
    productName: "Sample Product",
    price: 100,
    discountPrice: 90,
    sku: "123456",
    weight: 500,
    weightUnit: "gm",
    cost: 50,
    location: "inventory",
    quantity: 100,
    isUnlimited: true,
    minOrderQuantity: 1,
    maxOrderQuantity: 10,
    dischargeVAT: true,
    availability: true,
    requiresShipping: true,
    availabilityAmazon: 50,
    availabilityNoon: 30,
    availabilityInventory: 20,
    productDescription: "This is a sample product description.",
    details: [
      {
        key: "1",
        attribute: "Brand",
        value: "Sample Brand",
      },
      {
        key: "2",
        attribute: "Product Id",
        value: "12345",
      },
      {
        key: "3",
        attribute: "Color",
        value: "Red",
      },
      {
        key: "4",
        attribute: "Product dimensions",
        value: "20x10x5 cm",
      },
      {
        key: "5",
        attribute: "Special Features",
        value: "Waterproof",
      },
      {
        key: "6",
        attribute: "BIN Number",
        value: "BIN123456",
      },
    ],
    columns: [
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
    ],
  };
  console.log(productDetails);

  return (
    <>
      <div className="product-details-parent">
        <div className="product-details-container" style={{marginBottom:"10px"}}>
          <h2>Product Details</h2>
          <Link to={`/editproductdetails/${productDetails.uuid}`}>
            <Button type="primary" size="large">
              Edit
            </Button>
          </Link>
        </div>

        <div className="main-container" >
          <div className="language-container" >
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1, marginRight: 10, marginBottom:"10px",borderRadius:"10px"}}>
                <label>Product Name</label>
                <Input
                  size="large"
                  value={productDetails.productName}
                  readOnly
                  style={{marginBottom:"10px"}}
                />
              </div>
            </div>
          </div>

          <div className="price-discount-container" >
            <Card title="Price and Discount" style={{  borderRadius: "10px",marginBottom:"10px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap", // Allow content to wrap to the next line if needed
                }}
              >
                <div style={{ flex: 1, marginRight: 10 }}>
                  <label>Price</label>
                  <Input value={productDetails.price} readOnly />
                </div>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <label>Discount Price</label>
                  <Input value={productDetails.discountPrice} readOnly />
                </div>
                <div style={{ flex: 1 }}>
                  <img
                    src="https://media.istockphoto.com/id/173843432/photo/a-simple-image-of-a-striped-barcode.jpg?s=1024x1024&w=is&k=20&c=nKbDADrvWJNwP2nenbL44vxta-yDfAapUhpjtUHOLIA="
                    alt=""
                    style={{ width: "200px" }}
                  />
                </div>
              </div>
            </Card>
          </div>

          <div className="product-form-container">
            <Card title="Product Specifications" style={{  borderRadius: "10px",marginBottom:"10px" }}>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <label>SKU</label>
                  <Input value={productDetails.sku} readOnly />
                </div>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <label>Weight</label>
                  <Input
                    value={`${productDetails.weight} ${productDetails.weightUnit}`}
                    readOnly
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Cost</label>
                  <Input value={productDetails.cost} readOnly />
                </div>
              </div>
            </Card>
          </div>

          <div className="stock-quantities-container">
            <Card title="Stock Quantities" style={{  borderRadius: "10px",marginBottom:"10px" }}>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <label style={{ paddingRight: "10px" }}>Location: </label>
                  <Select value={productDetails.location} disabled>
                    <Select.Option value="inventory">Inventory</Select.Option>
                    <Select.Option value="amazon">Amazon</Select.Option>
                    <Select.Option value="noon">Noon</Select.Option>
                  </Select>
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    marginRight: 10,
                  }}
                >
                  <label style={{ paddingRight: "10px" }}>Quantity: </label>
                  <Input value={productDetails.quantity} readOnly />
                </div>

                <div style={{ flex: 1 }}>
                  <label style={{ paddingRight: "10px" }}>Unlimited:</label>
                  <Checkbox checked={productDetails.isUnlimited} disabled />
                </div>
              </div>
            </Card>
          </div>

          <div className="order-quantities-container">
            <Card title="Order" style={{  borderRadius: "10px",marginBottom:"10px" }}>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <label>Minimum Order Quantity</label>
                  <Input value={productDetails.minOrderQuantity} readOnly />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Maximum Order Quantity</label>
                  <Input value={productDetails.maxOrderQuantity} readOnly />
                </div>
              </div>
            </Card>
          </div>

          <div className="cards-container">
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Card title="Discharge VAT" style={{borderRadius: "10px",marginBottom:"10px" }}>
                  <Switch
                    defaultChecked={productDetails.dischargeVAT}
                    disabled
                  />
                  <span>Discharge VAT</span>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Availability" style={{  borderRadius: "10px",marginBottom:"10px" }}>
                  <Switch
                    defaultChecked={productDetails.availability}
                    disabled
                  />
                  <span>Availability</span>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Requires Shipping" style={{ borderRadius: "10px",marginBottom:"10px" }}>
                  <Switch
                    defaultChecked={productDetails.requiresShipping}
                    disabled
                  />
                  <span>Requires Shipping</span>
                </Card>
              </Col>
            </Row>
          </div>

          <div className="product-availability-container">
            <Card title="Product Availability" style={{  borderRadius: "10px",marginBottom:"10px" }}>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <Button type="primary">Amazon</Button>
                  <Input
                    placeholder="Amazon"
                    value={productDetails.availabilityAmazon}
                    readOnly
                  />
                </div>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <Button type="primary">Noon</Button>
                  <Input
                    placeholder="Noon"
                    value={productDetails.availabilityNoon}
                    readOnly
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <Button type="primary">Inventory</Button>
                  <Input
                    placeholder="Inventory"
                    value={productDetails.availabilityInventory}
                    readOnly
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Product Description Section */}
          <div className="product-description-container">
            <Card title="Product Description" style={{  borderRadius: "10px",marginBottom:"10px" }}>
              {productDetails.productDescription}
            </Card>
          </div>

          <div className="product-details">
            <Card title="Product Details" style={{  borderRadius: "10px",marginBottom:"10px" }}>
              <Table
                dataSource={productDetails.details}
                columns={productDetails.columns}
                pagination={false}
                size="small"
                bordered
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
