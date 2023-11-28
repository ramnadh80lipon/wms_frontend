import React, { useState } from "react";
import { Button, Space, Select } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Table } from "antd";
import "./PurchaseReceives.css";

const { Option } = Select;

function PurchaseReceives() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Sort by");

  const purchaseOrderCategories = [ "All","Received","In Transist"];

  const sortOptions = [
    "Sort by",
    "Name",
    "Company Name",
    "Payables",
    "Created Time",
    "Last Modified",
  ];

  const handlePurchaseOrderCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSortCategory = (category) => {
    setSelectedSort(category);
    // Handle sorting logic here
  };

  const columns = [
    {
      title: "DATE",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "PURCHASE RECEIVE#",
      dataIndex: "purchaseReceive",
      key: "purchaseReceive",
    },
    {
      title: "PURCHASE ORDER#",
      dataIndex: "purchaseOrder",
      key: "purchaseOrder",
    },
    {
      title: "VENDOR NAME",
      dataIndex: "vendorName",
      key: "vendorName",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "QUANTITY",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];
  const data = [
    {
      key: "1",
      date: "2023-10-20",
      purchaseReceive: "12345",
      purchaseOrder: "PO123",
      vendorName: "Vendor A",
      status: "Received",
      quantity: 10,
    },
    {
      key: "2",
      date: "2023-10-21",
      purchaseReceive: "12346",
      purchaseOrder: "PO124",
      vendorName: "Vendor B",
      status: "In Progress",
      quantity: 15,
    },
    {
      key: "3",
      date: "2023-10-22",
      purchaseReceive: "12347",
      purchaseOrder: "PO125",
      vendorName: "Vendor C",
      status: "Pending",
      quantity: 5,
    },
  ];

  return (
    <>
      <div className="navigation-bar">
        <div className="left-section">
          <Select
            defaultValue={selectedCategory}
            style={{ width: 200 }}
            onChange={handlePurchaseOrderCategory}
          >
            {purchaseOrderCategories.map((category) => (
              <Option key={category} value={category}>
                {category}
              </Option>
            ))}
          </Select>
        </div>
        <div className="right-section">
          <Link to="/addPurchaseOrder">
            <Button icon={<PlusOutlined />}>New</Button>
          </Link>
          <Select
            value={selectedSort}
            style={{ width: 200 }}
            onChange={handleSortCategory}
          >
            {sortOptions.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false} // Optional: Remove pagination
          />
          {/* Additional content can be added here */}
        </div>
      </div>
    </>
  );
}

export default PurchaseReceives;
