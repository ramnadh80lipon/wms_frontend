// LogisticAdd.jsx

import React, { useState } from "react";
import { Input, Button, DatePicker, Form, InputNumber } from "antd";
import "./LogisticAdd.css";

const LogisticAdd = () => {
  const [formData, setFormData] = useState({
    shippingVendor: "",
    vehicleNumber: "",
    vehicleType: "",
    capacity: null,
    from: "",
    to: "",
    dateOfShipment: null,
    items: "",
    product: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date, dateString) => {
    setFormData((prevData) => ({
      ...prevData,
      dateOfShipment: dateString,
    }));
  };

  const handleSave = () => {
    // Implement save logic here
    console.log("Saving data:", formData);
    // Redirect or perform other actions after saving
  };

  return (
    <div className="logistic-add-container">
      <h2>Add Logistic Entry</h2>
      <Form>
        <Form.Item label="Shipping Vendor" name="shippingVendor">
          <Input
            name="shippingVendor"
            value={formData.shippingVendor}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item label="Vehicle Number" name="vehicleNumber">
          <Input
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Vehicle Type" name="vehicleType">
          <Input
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item label="Capacity (tons)" name="capacity">
          <InputNumber
            name="capacity"
            value={formData.capacity}
            onChange={(value) =>
              setFormData((prevData) => ({ ...prevData, capacity: value }))
            }
          />
        </Form.Item>

        <Form.Item label="From" name="from">
          <Input
            name="from"
            value={formData.from}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item label="To" name="to">
          <Input name="to" value={formData.to} onChange={handleInputChange} />
        </Form.Item>

        <Form.Item label="Date of Shipment" name="dateOfShipment">
          <DatePicker
            value={formData.dateOfShipment}
            onChange={handleDateChange}
          />
        </Form.Item>

        <Form.Item label="Items" name="items">
          <Input
            name="items"
            value={formData.items}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item label="Product" name="product">
          <Input
            name="product"
            value={formData.product}
            onChange={handleInputChange}
          />
        </Form.Item>

        

        {/* Similar Form items for other attributes */}
        
        <Form.Item>
          <Button type="primary" onClick={handleSave}>
            Save
          </Button>
        </Form.Item>

      </Form>
    </div>
  );
};

export default LogisticAdd;
