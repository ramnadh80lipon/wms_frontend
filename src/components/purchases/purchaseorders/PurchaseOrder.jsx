import React, { useState } from "react";
import { Button, Space, Select } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import "./PurchaseOrder.css";

const { Option } = Select;

function PurchaseOrder() {
  const [selectedCategory, setSelectedCategory] = useState(
    "All Purchase Orders"
  );
  const [selectedSort, setSelectedSort] = useState("Sort by");

  const purchaseOrderCategories = [
    "All Purchase Orders",
    "Draft",
    "Pending Approval",
    "Approved",
    "Issued",
    "Billed",
    "Partially Billed",
  ];

  const sortOptions = ["Sort by",  "Name","Company Name","Payables","Created Time","Last Modified"];

  const handlePurchaseOrderCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSortCategory = (category) => {
    setSelectedSort(category);
    // Handle sorting logic here
  };

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
      <div className="main-content">
        <div>
          <h4>Start Managing Your Purchase Activities!</h4>
          <p>
            Create, customize, and send professional Purchase Orders to your
            vendors.
          </p>
          <Link to="/addpurchaseorder">
            <Button type="primary" size="large">
              Create New Purchase Order
            </Button>
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default PurchaseOrder;
