import React, { useState } from "react";
import {
  DeleteOutlined,
  PlusOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, List, Modal, Radio, Select, Table } from "antd";
import { Option } from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";

function AddPurchaseBills() {
  const [delivervalue, setdeliverValue] = useState("organization");
  const [discountValue, setDiscountValue] = useState(0);
  const [discountType, setDiscountType] = useState("%");
  const [adjustmentLabel, setAdjustmentLabel] = useState("");
  const [adjustmentAmount, setAdjustmentAmount] = useState(0);

  const onChange = (e) => {
    console.log("radio checked", e.target.delivervalue);
    setdeliverValue(e.target.value);
  };

  const [data, setData] = useState([
    {
      key: "0",
      item: (
        <Input
          style={{ width: "100%" }}
          placeholder="Enter Item name or select item from below"
        />
      ),
      account: <Input />,
      quantity: 1,
      rate: 0,
      tax: <Input />,
      amount: 0,
    },
  ]);

  const [count, setCount] = useState(1);

  const [addresses, setAddresses] = useState([]);
  const [visible, setVisible] = useState(false);
  const [newAddress, setNewAddress] = useState({});
  const [selectedAddress, setSelectedAddress] = useState(null);

  const addNewAddress = () => {
    if (newAddress && Object.values(newAddress).every((val) => val)) {
      setAddresses([...addresses, newAddress]);
      setNewAddress({});
    }
    setVisible(false);
  };

  const columns = [
    {
      title: "ITEM",
      dataIndex: "item",
      key: "item",
      width: "30%",
    },
    {
      title: "Account",
      dataIndex: "account",
      key: "account",
    },
    {
      title: "QUANTITY",
      dataIndex: "quantity",
      key: "quantity",
      render: (_, record) => (
        <Input
          type="number"
          value={record.quantity}
          onChange={(e) =>
            handleInputChange(record.key, "quantity", e.target.value)
          }
        />
      ),
    },
    {
      title: "RATE",
      dataIndex: "rate",
      key: "rate",
      render: (_, record) => (
        <Input
          type="number"
          value={record.rate}
          onChange={(e) =>
            handleInputChange(record.key, "rate", e.target.value)
          }
        />
      ),
    },
    {
      title: "TAX",
      dataIndex: "tax",
      key: "tax",
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
      key: "amount",
      render: (_, record) => <div>{calculateAmount(record)}</div>,
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <Button
          icon={<DeleteOutlined />}
          onClick={() => handleDelete(record.key)}
        />
      ),
    },
  ];

  const calculateAmount = (record) => {
    return (record.quantity * record.rate).toFixed(2);
  };

  const handleInputChange = (key, field, value) => {
    const newData = data.map((item) => {
      if (item.key === key) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setData(newData);
  };

  const addRow = () => {
    const newRow = {
      key: `${count}`,
      item: (
        <Input
          style={{ width: "100%" }}
          placeholder="Enter Item name or select item from below"
        />
      ),
      account: <Input />,
      quantity: 1,
      rate: 0,
      tax: <Input />,
      amount: 0,
    };
    setCount(count + 1);
    setData([...data, newRow]);
  };

  const handleDelete = (key) => {
    const filteredData = data.filter((item) => item.key !== key);
    setData(filteredData);
  };

  const calculateSubtotal = () => {
    return data.reduce(
      (sum, record) => sum + parseFloat(calculateAmount(record) || 0),
      0
    );
  };

  const calculateTotal = () => {
    let total = calculateSubtotal();
    let discount = 0;

    if (discountType === "%") {
      discount = (total * discountValue) / 100;
      total -= discount;
    } else {
      discount = discountValue;
      total -= discount;
    }

    if (adjustmentLabel && adjustmentAmount) {
      // Adjust the total based on the adjustment label and amount
      if (adjustmentAmount.startsWith("+")) {
        total += parseFloat(adjustmentAmount.substring(1));
      } else if (adjustmentAmount.startsWith("-")) {
        total -= parseFloat(adjustmentAmount.substring(1));
      }
    }

    return total.toFixed(2);
  };

  const onDiscountValueChange = (value) => {
    setDiscountValue(value);
  };

  const onDiscountTypeChange = (value) => {
    setDiscountType(value);
  };

  const handleAdjustmentLabelChange = (e) => {
    setAdjustmentLabel(e.target.value);
  };

  const handleAdjustmentAmountChange = (e) => {
    setAdjustmentAmount(e.target.value);
  };

  return (
    <div>
      <h4>
        <ShoppingOutlined /> New Purchase Bill
      </h4>
      <hr />
      <div>
        <Form
          className="FormData"
          labelCol={{
            flex: "200px",
          }}
          labelAlign="left"
          name="wrap"
          labelWrap
          wrapperCol={{
            flex: 1,
          }}
          colon={false}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            label="Vendor Name"
            name="vendorname"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              placeholder="Select a vendor"
              style={{ border: "1px solid black" }}
            />
          </Form.Item>

          <Form.Item
            label="Bill#"
            name="Bill"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input style={{ border: "1px solid black" }} />
          </Form.Item>

          <Form.Item label="Ordernumber" name="ordernumber">
            <Input style={{ border: "1px solid black" }} />
          </Form.Item>

          <Form.Item label="Bill Date" name="billdate">
            <Input type="Date" style={{ border: "1px solid black" }} />
          </Form.Item>

          <Form.Item label="Due Date" name="duedate">
            <Input type="Date" style={{ border: "1px solid black" }} />
          </Form.Item>

          <Form.Item name="payment_terms" label="Payment Terms">
            <Select
              defaultValue={"DueOnReceipt"}
              style={{ border: "1px solid black", borderRadius: "5px" }}
            >
              <Option value="DueOnReceipt" set>
                Due on Receipt
              </Option>
              <Option value="DueOnNextMonth">Due on Next Month</Option>
              <Option value="Net15">Net 15</Option>
              {/* Add more payment terms here as needed */}
              <Option value="Net30">Net 30</Option>
              <Option value="Net60">Net 60</Option>
              <Option value="Custom">Custom</Option>
            </Select>
          </Form.Item>
        </Form>
      </div>
      <hr />

      <div style={{ marginBottom: "100px" }}>
        <div>
          <Table
            dataSource={data}
            columns={columns}
            pagination={false}
            bordered
          />
          <Button onClick={addRow} icon={<PlusOutlined />}>
            Add Row
          </Button>
        </div>
        <div style={{ marginTop: "10px", display: "flex" }}>
          <div className="Note" style={{ float: "left", width: "35%" }}>
            <h7>Customer Note</h7>
            <br />
            <TextArea
              rows={4}
              placeholder="Will be displayed on the purchase order."
            />
          </div>
          <div
            className="TotalAmount"
            style={{ width: "35%", padding: "10px" }}
          >
            Sub Total:
            <span style={{ float: "right" }}>
              {calculateSubtotal().toFixed(2)}
            </span>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Form.Item label="Discount" name="discount">
                <Input.Group compact>
                  <Input
                    style={{ width: "40%" }}
                    type="number"
                    placeholder="Discount"
                    value={discountValue}
                    onChange={(e) => onDiscountValueChange(e.target.value)}
                  />
                  <Select
                    style={{ width: "30%" }}
                    value={discountType}
                    onChange={(value) => onDiscountTypeChange(value)}
                  >
                    <Select.Option value="%">%</Select.Option>
                    <Select.Option value="Rs.">Rs.</Select.Option>
                  </Select>
                </Input.Group>
              </Form.Item>
              <span>
                {discountType === "%"
                  ? ((calculateSubtotal() * discountValue) / 100).toFixed(2)
                  : discountValue}
              </span>
            </div>
            <div style={{ marginTop: "10px", display: "flex" }}>
              <Input
                placeholder="Adjustment Label (e.g., GST)"
                onChange={handleAdjustmentLabelChange}
                value={adjustmentLabel}
              />
              <Input
                style={{ marginLeft: "10px", textAlign: "right" }}
                placeholder="Amount (e.g., +100 or -50)"
                onChange={handleAdjustmentAmountChange}
                value={adjustmentAmount}
              />
            </div>
            <hr />
            <strong>Total:</strong>
            <span style={{ float: "right" }}>{calculateTotal()}</span>
          </div>
        </div>
        <div>
          Terms & Conditions
          <TextArea
            rows={4}
            placeholder="Enter the terms and conditions to be displayed in your transaction"
          />
        </div>
      </div>

      <br />
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
    </div>
  );
}
export default AddPurchaseBills;
