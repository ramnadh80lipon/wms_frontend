import React, { useState } from "react";
import { Radio } from "antd";
import { Select, Space } from "antd";
import { Link } from "react-router-dom";
import { Button } from "antd";
// Import 'Select' and 'Space' from Ant Design

const { Option } = Select; // Destructure the 'Option' component from 'Select'

function AddNewCustomer() {
  const [formData, setFormData] = useState({
    customertype: "",
    salutation: "",
    firstname: "",
    lastname: "",
    companyname: "",
    customerdisplayname: "",
    email: "",
    workphone: "",
    mobile: "",
    pan: "",
    currency: "",
    paymentterms: "",
    billingaddressregion: "",
    billingaddressstreet: "",
    billingaddresscity: "",
    billingaddressstate: "",
    billingaddresszip: "",
    billingaddressphone: "",
    billingaddressfax: "",
    shippingaddressregion: "",
    shippingaddressstreet: "",
    shippingaddresscity: "",
    shippingaddressstate: "",
    shippingaddresszip: "",
    shippingaddressphone: "",
    shippingaddressfax: "",
  });
  return (
    <div>
      <h4>Add New Customer</h4>
      <div>
        <label htmlFor="" style={{ paddingRight: "25px" }}>
          Customer Type
        </label>
        <Radio.Group
          value={formData.customertype}
          onChange={(e) =>
            setFormData({ ...formData, customertype: e.target.value })
          }
        >
          <Radio value="Bussiness">Bussiness</Radio>
          <Radio value="Individual">Individual</Radio>
        </Radio.Group>
      </div>
      <div>
        <label htmlFor="">Customer Name:</label>
        <Space wrap>
          <Select
            placeholder="Salutation"
            style={{ margin: "10px", width: 120 }}
            onChange={(value) =>
              setFormData({ ...formData, salutation: value })
            }
            options={[
              { value: "Mr. ", label: "Mr." },
              { value: "Mrs. ", label: "Mrs. " },
              { value: "Ms. ", label: "Ms. " },
              { value: "Miss. ", label: "Miss. " },
              { value: "Dr. ", label: "Dr. " },
            ]}
          />
        </Space>

        <input
          type="text"
          placeholder="First Name"
          className="form-control"
          style={{ width: "25vw", display: "inline-block", margin: "1%" }}
          value={formData.firstname}
          onChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          className="form-control"
          style={{ width: "25vw", margin: "1%", display: "inline-block" }}
          value={formData.lastname}
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="">Company Name:</label>
        <input
          type="text"
          placeholder="Company Name"
          className="form-control"
          style={{ width: "65vw", margin: "1%", display: "inline-block" }}
          value={formData.companyname}
          onChange={(e) =>
            setFormData({ ...formData, companyname: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="">Customer Display Name:</label>
        <Space wrap>
          <Select
            placeholder="Salutation"
            style={{ margin: "10px", width: 120 }}
            onChange={(value) =>
              setFormData({ ...formData, customerdisplayname: value })
            }
            options={[
              { value: "Mr. ", label: "Mr." },
              { value: "Mrs. ", label: "Mrs. " },
              { value: "Ms. ", label: "Ms. " },
              { value: "Miss. ", label: "Miss. " },
              { value: "Dr. ", label: "Dr. " },
            ]}
          />
        </Space>
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input
          type="text"
          placeholder="Email"
          className="form-control"
          style={{ width: "25vw", margin: "1%", display: "inline-block" }}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="">Customer Phone:</label>
        <input
          type="text"
          placeholder="Workphone"
          className="form-control"
          style={{ width: "25vw", margin: "1%", display: "inline-block" }}
          value={formData.workphone}
          onChange={(e) =>
            setFormData({ ...formData, workphone: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Phone"
          className="form-control"
          style={{ width: "25vw", margin: "1%", display: "inline-block" }}
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        />
      </div>
      <div style={{ color: "black" }}>
        <ol
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            color: "black",
          }}
        >
          <li
            style={{
              listStyleType: "none",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            <a style={{ textDecoration: "none" }} href="#other">
              Other
            </a>
          </li>
          <li
            style={{
              listStyleType: "none",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            <a style={{ textDecoration: "none" }} href="#address">
              Address
            </a>{" "}
          </li>
          <li
            style={{
              listStyleType: "none",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            <a style={{ textDecoration: "none" }} href="/">
              Contact Person
            </a>{" "}
          </li>
          <li
            style={{
              listStyleType: "none",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            <a style={{ textDecoration: "none" }} href="/">
              Custom Fields
            </a>{" "}
          </li>
          <li
            style={{
              listStyleType: "none",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            <a style={{ textDecoration: "none" }} href="/">
              Reporting Tags
            </a>{" "}
          </li>
          <li
            style={{
              listStyleType: "none",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            <a style={{ textDecoration: "none" }} href="/">
              Remarks
            </a>{" "}
          </li>
        </ol>
      </div>
      <div id="other">
        <h5>Other:</h5>
        <hr />
        <label htmlFor="">PAN:</label>
        <input
          type="text"
          placeholder="Pan"
          className="form-control"
          style={{ width: "70vw", display: "inline-block", margin: "1%" }}
          value={formData.pan}
          onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
        />
        <label htmlFor="">Currency:</label>
        <Space wrap>
          <Select
            placeholder="Currency"
            style={{ margin: "10px", width: "30vw" }}
            onChange={(value) => setFormData({ ...formData, currency: value })}
            options={[
              { value: "USD", label: "United States Dollar (USD)" },
              { value: "EUR", label: "Euro (EUR)" },
              { value: "JPY", label: "Japanese Yen (JPY)" },
              { value: "GBP", label: "British Pound Sterling (GBP)" },
              { value: "AUD", label: "Australian Dollar (AUD)" },
              { value: "CAD", label: "Canadian Dollar (CAD)" },
              { value: "CHF", label: "Swiss Franc (CHF)" },
              { value: "CNY", label: "Chinese Yuan (CNY)" },
              { value: "INR", label: "Indian Rupee (INR)" },
              { value: "SGD", label: "Singapore Dollar (SGD)" },
              { value: "NZD", label: "New Zealand Dollar (NZD)" },
              { value: "HKD", label: "Hong Kong Dollar (HKD)" },
              { value: "SEK", label: "Swedish Krona (SEK)" },
              { value: "KRW", label: "South Korean Won (KRW)" },
              { value: "MXN", label: "Mexican Peso (MXN)" },
              { value: "BRL", label: "Brazilian Real (BRL)" },
              { value: "ZAR", label: "South African Rand (ZAR)" },
              { value: "AED", label: "United Arab Emirates Dirham (AED)" },
              { value: "SAR", label: "Saudi Riyal (SAR)" },
              { value: "RUB", label: "Russian Ruble (RUB)" },
              { value: "HKD", label: "Hong Kong Dollar (HKD)" },
              { value: "SEK", label: "Swedish Krona (SEK)" },
              // Add more currencies here
            ]}
          />
        </Space>
        <Space wrap>
          <label htmlFor="">Payment Terms:</label>
          <Select
            placeholder="Payment Terms"
            style={{ margin: "10px", width: "40vw" }}
            onChange={(value) =>
              setFormData({ ...formData, paymentterms: value })
            }
          >
            <Option value="DueOnReceipt">Due on Receipt</Option>
            <Option value="DueOnNextMonth">Due on Next Month</Option>
            <Option value="Net15">Net 15</Option>
            {/* Add more payment terms here as needed */}
            <Option value="Net30">Net 30</Option>
            <Option value="Net60">Net 60</Option>
            <Option value="Custom">Custom</Option>
          </Select>
        </Space>
        <hr />
      </div>

      <div id="address" style={{ position: "relative" }}>
        <h5>Address:</h5>

        <hr />
        <div
          style={{
            position: "relative",
            display: "inline-block",
            width: "35vw",
            margin: "1%",
          }}
        >
          <h6>Billing Address:</h6>
          <div>
            <label htmlFor="">Region/Country:</label>
            <input
              type="text"
              placeholder="Region/Country"
              className="form-control"
              style={{ width: "60%", display: "inline-block", margin: "1%" }}
              value={formData.billingaddressregion}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  billingaddressregion: e.target.value,
                })
              }
            />
          </div>
         <div>
         <label htmlFor="">Address:</label>
          <input
            type="text"
            placeholder="Street"
            className="form-control"
            style={{ width: "60%", display: "inline-block", margin: "1%" }}
            value={formData.billingaddressstreet}
            onChange={(e) =>
              setFormData({ ...formData, billingaddressstreet: e.target.value })
            }
          />
         </div>

          
          
         <div>
         <label htmlFor="">City</label>
          <input
            type="text"
            placeholder="City"
            className="form-control"
            style={{ width: "60%", display: "inline-block", margin: "1%" }}
            value={formData.billingaddresscity}
            onChange={(e) =>
              setFormData({ ...formData, billingaddresscity: e.target.value })
            }
          />
         </div>
         <div>
         <label htmlFor="">State:</label>
          <input
            type="text"
            placeholder="State"
            className="form-control"
            style={{ width: "60%", display: "inline-block", margin: "1%" }}
            value={formData.billingaddressstate}
            onChange={(e) =>
              setFormData({ ...formData, billingaddressstate: e.target.value })
            }
          />
         </div>

          <div>
          <label htmlFor="">Zip:</label>
          <input
            type="text"
            placeholder="Zip"
            className="form-control"
            style={{ width: "60%", display: "inline-block", margin: "1%" }}
            value={formData.billingaddresszip}
            onChange={(e) =>
              setFormData({ ...formData, billingaddresszip: e.target.value })
            }
          />
          </div>
          
          <div>
          <label htmlFor="">Phone:</label>
          <input
            type="text"
            placeholder="Phone"
            className="form-control"
            style={{ width: "60%", display: "inline-block", margin: "1%" }}
            value={formData.billingaddressphone}
            onChange={(e) =>
              setFormData({ ...formData, billingaddressphone: e.target.value })
            }
          />
          </div>
          <div>
          <label htmlFor="">Fax:</label>
          <input
            type="text"
            placeholder="Fax"
            className="form-control"
            style={{ width: "60%", display: "inline-block", margin: "1%" }}
            value={formData.billingaddressfax}
            onChange={(e) =>
              setFormData({ ...formData, billingaddressfax: e.target.value })
            }
          />

          </div>
          
        </div>
        <div
          style={{
            display: "inline-block",
            width: "35vw",
            margin: "1%",
          }}
        >
          <h6>Shipping Address</h6>
          <div>
            <label htmlFor="">Region/Country:</label>

            <input
              type="text"
              placeholder="Region/Country"
              className="form-control"
              style={{ width: "60%", display: "inline-block", margin: "1%" }}
              value={formData.shippingaddressregion}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  shippingaddressregion: e.target.value,
                })
              }
            />
          </div>
          <label htmlFor="">Address:</label>
          <input
            type="text"
            placeholder="Street"
            className="form-control"
            style={{ width: "60%", display: "inline-block", margin: "1%" }}
            value={formData.shippingaddressstreet}
            onChange={(e) =>
              setFormData({
                ...formData,
                shippingaddressstreet: e.target.value,
              })
            }
          />
          <br />

          <label htmlFor="">City</label>
          <input
            type="text"
            placeholder="City"
            className="form-control"
            style={{ width: "60%", display: "inline-block", margin: "1%" }}
            value={formData.shippingaddresscity}
            onChange={(e) =>
              setFormData({ ...formData, shippingaddresscity: e.target.value })
            }
          />
          <br />
          <label htmlFor="">State:</label>
          <input
            type="text"
            placeholder="State"
            className="form-control"
            style={{ width: "60%", display: "inline-block", margin: "1%" }}
            value={formData.shippingaddressstate}
            onChange={(e) =>
              setFormData({ ...formData, shippingaddressstate: e.target.value })
            }
          />
          <br />
          <label htmlFor="">Zip:</label>
          <input
            type="text"
            placeholder="Zip"
            className="form-control"
            style={{ width: "60%", display: "inline-block", margin: "1%" }}
            value={formData.shippingaddresszip}
            onChange={(e) =>
              setFormData({ ...formData, shippingaddresszip: e.target.value })
            }
          />
          <br />
          <label htmlFor="">Phone:</label>
          <input
            type="text"
            placeholder="Phone"
            className="form-control"
            style={{ width: "60%", display: "inline-block", margin: "1%" }}
            value={formData.shippingaddressphone}
            onChange={(e) =>
              setFormData({ ...formData, shippingaddressphone: e.target.value })
            }
          />
          <br />
          <label htmlFor="">Fax:</label>
          <input
            type="text"
            placeholder="Fax"
            className="form-control"
            style={{ width: "60%", display: "inline-block", margin: "1%" }}
            value={formData.shippingaddressfax}
            onChange={(e) =>
              setFormData({ ...formData, shippingaddressfax: e.target.value })
            }
          />
        </div>

        <br />
        <hr />
      </div>

      <br />
      <div>
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
      <br />
      <br />
    </div>
  );
}

export default AddNewCustomer;
