import React from "react";
import { useState } from "react";
import { Button } from 'antd';
import { Alert } from 'antd';
import axios from 'axios';
import "./AddVendor.css";

function AddVendor() {
    const [formData, setFormData] = useState({
      full_name: "",
      company_name: "",
      vendor_display_name: "",
      vendor_phone: "",
      vendor_email: "",
      vendor_billing_country: "",
      vendor_billing_line1: "",
      vendor_billing_line2: "",
      vendor_billing_city: "",
      vendor_billing_state: "",
      vendor_billing_phone_number: "",
      vendor_shipping_country: "",
      vendor_shipping_line1: "",
      vendor_shipping_line2: "",
      vendor_shipping_city: "",
      vendor_shipping_state: "",
      vendor_shipping_phone_number: "",
    });

    const [alert, setAlert] = useState(null);

    function handleSubmit(e) {
      e.preventDefault();
      console.table(formData);
      axios.post('http://localhost:8080/createVendor', formData)
        .then(response => {
          console.log(response.data);
          setAlert({type: 'success', message: 'Vendor added successfully!'});
        })
        .catch(error => {
          console.log(error);
          setAlert({type: 'error', message: `Failed to add vendor! ${error}`});
        });
    }

    return (
      <div className="address-group" >
        {alert && <Alert message={alert.message} type={alert.type} closable/>}
        <h3>New Vendor</h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              className="form-control "
              value={formData.full_name}
              onChange={(e) =>
                setFormData({ ...formData, full_name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Company Name:</label>
            <input
              type="text"
              className="form-control"
              value={formData.company_name}
              onChange={(e) =>
                setFormData({ ...formData, company_name: e.target.value })
              }
            />
          </div>
        <div className="form-group">
          <label>Vendor Display Name:</label>
          <input
            type="text"
            className="form-control"
            value={formData.vendor_display_name}
            onChange={(e) =>
              setFormData({ ...formData, vendor_display_name: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Vendor Email:</label>
          <input
            type="email"
            className="form-control"
            value={formData.vendor_email}
            onChange={(e) =>
              setFormData({ ...formData, vendor_email: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <lable>Vendor Phone:</lable>
          <input
            type="text"
            className="form-control"
            onChange={(e) =>
              setFormData({ ...formData, vendor_phone: e.target.value })
            }
            required
          />
        </div>
        <h5 className="mt-3">Address</h5>
        <hr />
        <div className="address-group d-flex justify-content-start">
          <div className="billing-address col-6">
            <h4>Billing Address</h4>
            <div className="form-group">
              <lable>Country/region:</lable>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vendor_billing_country: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <lable>Address</lable>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vendor_billing_line1: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vendor_billing_line2: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <lable>City</lable>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vendor_billing_city: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <lable>State</lable>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vendor_billing_state: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <lable>Phone</lable>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vendor_billing_phone_number: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="shipping-address col-6">
            <h4>Shipping Address</h4>
            <div className="form-group">
              <lable>Country/region:</lable>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vendor_shipping_country: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <lable>Address</lable>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vendor_shipping_line1: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vendor_shipping_line2: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <lable>City</lable>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vendor_shipping_city: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <lable>State</lable>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vendor_shipping_state: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <lable>Phone</lable>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vendor_shipping_phone_number: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        
        <hr />
        <br />
        <br />
        <br />
        <div style={{backgroundColor:"white",padding:"1%",width:"100%",position:"fixed",bottom:"0"}}>
        <Button type="primary" size="large"
        style={{ backgroundColor: "blue", marginLeft: "20px",color:"white" }} htmlType="submit">
          Save
        </Button>
        <Button
          type="primary"
          style={{ backgroundColor: "red", marginLeft: "20px",color:"white" }}
          size="large"
        >
          Cancel
        </Button>
      </div>
        
      </form>
    </div>
  );
}

export default AddVendor;
