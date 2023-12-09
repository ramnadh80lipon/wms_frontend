import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Input, Button, DatePicker, Form, InputNumber } from "antd";
import "./LogisticEdit.css";

const defaultFormData = {
  shippingVendor: "ARAMEX",
  vehicleNumber: "ABC123",
  vehicleType: "Truck",
  capacity: 5,
  from: "City A",
  to: "City B",
  dateOfShipment: "2023-11-09",
  items: "Electronics",
  product: "Gadgets",
};

const LogisticEdit = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState(defaultFormData);

  useEffect(() => {
    // Fetch data based on the ID or perform any other initialization logic
    // For now, let's set some default values
    setFormData(defaultFormData);
  }, [id]);

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date, dateString) => {
    handleInputChange("dateOfShipment", dateString);
  };

  const handleSave = () => {
    // Implement save logic here
    console.log("Saving data:", formData);
    // Redirect to the main logistic page after saving
  };

  const renderFormItem = (label, name, component) => (
    <Form.Item label={label} name={name}>
      {component}
    </Form.Item>
  );

  return (
    <div className="logistic-edit-container">
      <h2>Edit Logistic Entry - ID: {id}</h2>
      <Form>
        {renderFormItem("Shipping Vendor", "shippingVendor", (
          <Input
            value={formData.shippingVendor}
            onChange={(e) => handleInputChange("shippingVendor", e.target.value)}
          />
        ))}
        {renderFormItem("Vehicle Number", "vehicleNumber", (
          <Input
            value={formData.vehicleNumber}
            onChange={(e) => handleInputChange("vehicleNumber", e.target.value)}
          />
        ))}
        {renderFormItem("Vehicle Type", "vehicleType", (
          <Input
            value={formData.vehicleType}
            onChange={(e) => handleInputChange("vehicleType", e.target.value)}
          />
        ))}
        {renderFormItem("Capacity (tons)", "capacity", (
          <InputNumber
            value={formData.capacity}
            onChange={(value) => handleInputChange("capacity", value)}
          />
        ))}
        {renderFormItem("From", "from", (
          <Input
            value={formData.from}
            onChange={(e) => handleInputChange("from", e.target.value)}
          />
        ))}
        {renderFormItem("To", "to", (
          <Input
            value={formData.to}
            onChange={(e) => handleInputChange("to", e.target.value)}
          />
        ))}
        {renderFormItem("Date of Shipment", "dateOfShipment", (
          <DatePicker
            value={formData.dateOfShipment}
            onChange={handleDateChange}
          />
        ))}
        {renderFormItem("Items", "items", (
          <Input
            value={formData.items}
            onChange={(e) => handleInputChange("items", e.target.value)}
          />
        ))}
        {renderFormItem("Product", "product", (
          <Input
            value={formData.product}
            onChange={(e) => handleInputChange("product", e.target.value)}
          />
        ))}
        <Form.Item>
          <Button type="primary" onClick={handleSave}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LogisticEdit;
