import React, { useState } from "react";
import { Input, Card, Form, Row, Col, Button, Select } from "antd";
import "./AddProduct.css";

const { Option } = Select;

const AddProduct = () => {
  return (
    <>
      <div className="product-details-parent">
        <div className="product-details-container">
          <h2>New Product</h2>
        </div>
        <div className="main-container">
          <div className="product-form-container">
            <Card title="Product Information">
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item label="Product Name">
                    <Input placeholder="Product Name" />
                  </Form.Item>
                  <Form.Item label="Description">
                    <Input placeholder="Description" />
                  </Form.Item>
                  <Form.Item label="Quantity">
                    <Input placeholder="Quantity" />
                  </Form.Item>
                  <Form.Item label="In Warehouse">
                    <Input placeholder="In Warehouse" />
                  </Form.Item>
                  <Form.Item label="BIN Number">
                    <Input placeholder="BIN Number" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Mode">
                    <Input placeholder="Mode" />
                  </Form.Item>
                  <Form.Item label="Brand">
                    <Input placeholder="Brand" />
                  </Form.Item>
                  <Form.Item label="Cost">
                    <Input placeholder="Cost" />
                  </Form.Item>
                  <Form.Item label="Discount Display Price">
                    <Input placeholder="Discount Display Price" />
                  </Form.Item>
                  <Form.Item label="Color">
                    <Input placeholder="Color" />
                  </Form.Item>
                  <Form.Item label="Product Image URL">
                    <Input placeholder="Product Image URL" />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <Card title="Product Details">
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item label="Height">
                    <Input placeholder="Height" />
                  </Form.Item>
                  <Form.Item label="Width">
                    <Input placeholder="Width" />
                  </Form.Item>
                  <Form.Item label="Length">
                    <Input placeholder="Length" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Material">
                    <Input placeholder="Material" />
                  </Form.Item>
                  <Form.Item label="Product Type">
                    <Select placeholder="Select Product Type">
                      <Option value="type1">Type 1</Option>
                      <Option value="type2">Type 2</Option>
                      <Option value="type3">Type 3</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <Card title="Location">
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item label="Location">
                    <Input placeholder="Location" />
                  </Form.Item>
                  <Form.Item label="Warehouse Address">
                    <Input placeholder="Warehouse Address" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Warehouse Name">
                    <Input placeholder="Warehouse Name" />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <Card title="Exact Location">
              <Row gutter={[16, 16]}>
                <Col span={3}>
                  <Form.Item label="Rack">
                    <Input placeholder="Rack" />
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item label="Zone">
                    <Input placeholder="Zone" />
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item label="Position">
                    <Input placeholder="Position" />
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item label="Shelf">
                    <Input placeholder="Shelf" />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <Card title="If Product Listed in Amazon">
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item label="ASIN">
                    <Input placeholder="ASIN" />
                  </Form.Item>
                  <Form.Item label="URL">
                    <Input placeholder="URL" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Quantity">
                    <Input placeholder="Quantity" />
                  </Form.Item>
                  <Form.Item label="Added Date">
                    <Input placeholder="Added Date" />
                  </Form.Item>
                </Col>
              </Row>
            </Card>

            <Card
              title="If Product Listed in Noon"
              style={{ marginBottom: "100px" }}
            >
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Form.Item label="Noon ID">
                    <Input placeholder="Noon ID" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="URL">
                    <Input placeholder="URL" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Saudi Cliq">
                    <Input placeholder="Saudi Cliq" />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <hr />
          </div>
        </div>
      </div>
      <div
        className="Save-Cancel"
        style={{
          backgroundColor: "white",
          display: "block",
          padding: "1%",
          width: "100%",
          position: "fixed",
          bottom: "0",
          margin: "auto",
          boxShadow: "10px 5px 5px 5px",
        }}
      >
        <Button type="primary" size="large">
          Save
        </Button>
        <Button
          type="primary"
          style={{ backgroundColor: "red", marginLeft: "20px" }}
          size="large"
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

export default AddProduct;
