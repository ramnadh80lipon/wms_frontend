import { Link } from "react-router-dom";
import aramex from "../../assets/images/aramex.png";
import fastcoo from "../../assets/images/Fastcoo.jpg";

import React, { useState } from "react";
import { Table, Button, Input, InputNumber, DatePicker } from "antd";
import "./Logistic.css";

const Logistic = () => {
  const [data, setData] = useState([
    // Sample data
    {
      key: 1,
      shippingVendor: "ARAMEX",
      vehicleNumber: "ABC123",
      vehicleType: "Truck",
      capacity: 5,
      from: "City A",
      to: "City B",
      dateOfShipment: "2023-11-09",
      items: "Electronics",
      product: "Gadgets",
    },
    // Add more sample data as needed
  ]);

  const handleEdit = (key, dataIndex, value) => {
    const updatedData = data.map((entry) =>
      entry.key === key ? { ...entry, [dataIndex]: value } : entry
    );
    setData(updatedData);
  };

  const handleDelete = (key) => {
    // Implement delete logic here
    const updatedData = data.filter((entry) => entry.key !== key);
    setData(updatedData);
  };

  const columns = [
    {
      title: "S.NO",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Shipping vendor",
      dataIndex: "shippingVendor",
      key: "shippingVendor",
    },
    {
      title: "Vehicle number",
      dataIndex: "vehicleNumber",
      key: "vehicleNumber",
    },
    {
      title: "Vehicle type",
      dataIndex: "vehicleType",
      key: "vehicleType",
    },
    {
      title: "Capacity (tons)",
      dataIndex: "capacity",
      key: "capacity",
    },
    {
      title: "From",
      dataIndex: "from",
      key: "from",
    },
    {
      title: "To",
      dataIndex: "to",
      key: "to",
    },
    {
      title: "Date of shipment",
      dataIndex: "dateOfShipment",
      key: "dateOfShipment",
    },
    {
      title: "Items",
      dataIndex: "items",
      key: "items",
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Edit",
      key: "edit",
      render: (_, record) => (
        <Link to="/logisticedit">
          <Button onClick={() => handleEdit(record.key, "edit", "edit")}>
            Edit
          </Button>
        </Link>
      ),
    },
    {
      title: "Delete",
      key: "delete",
      render: (_, record) => (
        <Button onClick={() => handleDelete(record.key)}>Delete</Button>
      ),
    },
  ];

  const handleAddEntry = () => {
    // Implement add entry logic here (if needed)
    console.log("Add new entry");
  };

  return (
    <>
      <div className="warehouse">
        <Link
          to="https://www.aramex.com/us/en"
          className="card-warehouse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={aramex} alt="" />
          <h3 className="card-title">ARAMEX</h3>
        </Link>

        <Link to="/fastcoo" className="card-warehouse">
          <img src={fastcoo} alt="" />
          <h3 className="card-title">FASTCOO TECH</h3>
        </Link>
        {/* Your existing Links */}
      </div>

      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        bordered
        size="middle"
        rowKey="key"
      />

      <Link to="/logisticadd">
        <Button onClick={handleAddEntry}>Add Entry</Button>
      </Link>
    </>
  );
};

export default Logistic;
