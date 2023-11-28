import React, { useState } from "react";
import { Button, Space, Select } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import "./PurchaseBills.css";

const { Option } = Select;

function PurchaseBills() {
  const [selectedCategory, setSelectedCategory] = useState(
    "All Bills"
  );
  const [selectedSort, setSelectedSort] = useState("Sort by");

  const purchaseOrderCategories = [
    "All Bills",
    "Draft",
    "Pending Approval",
    "Open",
    "Overdue",
    "Unpaid",
    "Paid",
    "Received"
  ];

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
          <Link to="/addpurchasebills">
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
          <h4>Owe money? It's good to pay bills on time!</h4>
          <p>
            If you've purchased something for your business, and you don't have
            to repay it immediately, then you can record it as a bill.
          </p>
          <Link to="/addpurchasebills">
            <Button type="primary" size="large">
              Create A Bill
            </Button>
          </Link>
          {/* Additional content can be added here */}
        </div>
      </div>
    </>
  );
}

export default PurchaseBills;
