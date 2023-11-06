import React from "react";
import { useState } from "react";
import {
  Input,
  Button,
  Card,
  Select,
  Form,
  Checkbox,
  Switch,
  Row,
  Col,
  Table,
} from "antd";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
function ProductDetails() {
  const { id } = useParams();
  console.log(id);

  const [isArabicInput, setIsArabicInput] = useState(false);
  const [dischargeVAT, setDischargeVAT] = useState(false);
  const [availability, setAvailability] = useState(false);
  const [requiresShipping, setRequiresShipping] = useState(false);

  const { Option } = Select;

  const toggleLanguage = () => {
    setIsArabicInput((prev) => !prev);
  };
  const [data, setData] = useState([
    {
      key: "1",
      attribute: "Brand",
      value: "",
    },
    {
      key: "2",
      attribute: "Product Id",
      value: "",
    },
    {
      key: "3",
      attribute: "Color",
      value: "",
    },
    {
      key: "4",
      attribute: "Product dimensions",
      value: "",
    },
    {
      key: "5",
      attribute: "Special Features",
      value: "",
    },
    {
      key: "6",
      attribute: "BIN Number",
      value: "",
    },
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
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) => handleValueChange(e, record.key)}
        />
      ),
    },
  ];

  const handleValueChange = (e, key) => {
    const updatedData = data.map((item) =>
      item.key === key ? { ...item, value: e.target.value } : item
    );
    setData(updatedData);
  };

  return (
    <>
      <div className="product-details-parent">
        <div className="product-details-container">
          <h2>Edit Product {id}</h2>
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

        <div className="main-container">
          <div className="language-container">
            <Button onClick={toggleLanguage}>
              {isArabicInput ? "Switch to English" : "Switch to Arabic"}
            </Button>
            <Input
              placeholder={`Enter ${
                isArabicInput ? "اسم المنتج" : "Product Name"
              }`}
              size="large"
            />
          </div>
          <div className="price-discount-container">
            <Card title="Price and Discount">
              <Form layout="inline">
                <Form.Item label="Price" name="price">
                  <Input placeholder="Price in SAR" />
                </Form.Item>
                <Form.Item label="Discount Price" name="discountprice">
                  <Input placeholder="Discount in SAR" />
                </Form.Item>
                <Form.Item label="ProductQR" name="price">
                  <img
                    src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </Form.Item>
              </Form>
            </Card>
          </div>

          <div className="product-form-container">
            <Card title="Product Specifications">
              <Form layout="inline">
                <Form.Item label="SKU" name="sku">
                  <Input placeholder="SKU" />
                </Form.Item>
                <Form.Item label="Weight" name="weight">
                  <Input style={{ width: 100 }} placeholder="Weight" />
                  <Select style={{ width: 100 }}>
                    <Option value="mg">mg</Option>
                    <Option value="gm">gm</Option>
                    <Option value="kg">kg</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Cost" name="productCost">
                  <Input style={{ width: 150 }} placeholder="Cost in SAR" />
                </Form.Item>
              </Form>
            </Card>
          </div>

          <div className="stock-quantities-container">
            <Card title="Stock Quantities">
              <Form layout="inline">
                <Form.Item label="Location" name="location">
                  <Select placeholder="Select location" style={{ width: 200 }}>
                    <Option value="inventory">Inventory</Option>
                    <Option value="amazon">Amazon</Option>
                    <Option value="noon">Noon</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Quantity" name="quantity">
                  <Input placeholder="Enter stock quantity" />
                </Form.Item>
                <Form.Item name="unlimited" valuePropName="checked">
                  <Checkbox>Unlimited</Checkbox>
                </Form.Item>
              </Form>
            </Card>
          </div>
          <div className="order-quantities-container">
            <Card title="Order">
              <Form layout="inline">
                <Form.Item label="Minimum Order Quantity" name="minquantity">
                  <Input placeholder="Minimum Order Quantity" />
                </Form.Item>
                <Form.Item label="Maximum Order Quantity" name="maxquantity">
                  <Input placeholder="Maximum Order Quantity" />
                </Form.Item>
              </Form>
            </Card>
          </div>
          <div className="cards-container">
            {" "}
            {/* Add your class name here */}
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Card title="Discharge VAT">
                  <Switch
                    defaultChecked={dischargeVAT}
                    onChange={setDischargeVAT}
                  />
                  <span>Discharge VAT</span>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Availability">
                  <Switch
                    defaultChecked={availability}
                    onChange={setAvailability}
                  />
                  <span>Availability</span>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Requires Shipping">
                  <Switch
                    defaultChecked={requiresShipping}
                    onChange={setRequiresShipping}
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
                  <Input placeholder="Amazon" />
                </div>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <Button type="primary">Noon</Button>
                  <Input placeholder="Noon" />
                </div>
                <div style={{ flex: 1 }}>
                  <Button type="primary">Inventory</Button>
                  <Input placeholder="Inventory" />
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card title="Product Description">
              <Input.TextArea
                placeholder="Product Description"
                autoSize={{ minRows: 3, maxRows: 6 }}
              />
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
      </div>
    </>
  );
}

export default ProductDetails;
