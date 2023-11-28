import React, { useEffect, useState } from "react";
import { Button, Select, Table, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { PlusOutlined,DeleteTwoTone } from "@ant-design/icons";
import axios from "axios";
import "./Vendor.css";

const { Option } = Select;

function Vendor() {
  const [selectedCategory, setSelectedCategory] = useState("All Vendors");
  const [vendorData,setVendorData] = useState([]);
  const [selectedSort, setSelectedSort] = useState("Sort by");
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const navigate = useNavigate();

  const vendorCategories = ["All Vendors", "Active Vendors", "Inactive Vendors"];
  const sortOptions = ["Sort by", "Name", "Company Name", "Payables", "Created Time", "Last Modified"];


  const handlePurchaseOrder = (email,vendorName) => {

    // console.log(email);
    navigate("/addPurchaseOrder", { state: { email: email,vendorName : vendorName } });
    
    
  }

  


  useEffect(()=>{
    axios.get("http://localhost:8080/getAllVendors").then((res)=>{
      console.log(res.data);
      setVendorData(res.data);  
      })
  },[])

  
  const handleDelete = (vendorEmail) => {
    
    axios.delete(`http://localhost:8080/deleteVendor/${vendorEmail}`)
      .then(response => {
        console.log(response.data);
        console.log("deleted ");

        axios.get("http://localhost:8080/getAllVendors").then((res) => {
          console.log(res.data);
          setVendorData(res.data);
        });
      })
      .catch(error => {
        console.log("errrrrr")
        console.error(error);
        // Handle error, show an error message, etc.
      })
      .finally(() => {
        setPopupVisible(false);
        setSelectedRow(null);
      });
  };

  const handleVendorCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSortCategory = (category) => {
    setSelectedSort(category);
    // Handle sorting logic here
  };

  const handleRowClick = (record) => {
    const selectedVendor = getVendorDetails(record.vendor_id);
    setSelectedRow(selectedVendor);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedRow(null);
  };

  const getVendorDetails = (vendorId) => {
    return vendorData.find((vendor) => vendor.vendor_id === vendorId);
  };

  // Define the columns for the table
  const columns = [
    {
      title: "Vendor ID",
      dataIndex: "vendor_id",
      key: "vendor_id",
    },
    {
      title: "Vendor Name",
      dataIndex: "vendor_name",
      key: "vendor_name",
    },
    {
      title: "Vendor Display Name",
      dataIndex: "vendor_display_name",
      key: "vendor_display_name",
    },
    {
      title: "Vendor Email",
      dataIndex: "vendor_email",
      key: "vendor_email",
    },
    {
      title: "Vendor Work Phone",
      dataIndex: "vendor_work_phone",
      key: "vendor_work_phone",
    },
    {
      title: "Company Name",
      dataIndex: "vendor_company_name",
      key: "vendor_company_name",
    },
    {
      tile:"Delete",
      dataIndex:"vendor_email",
      key:"action",
      render:(text,record)=>(
        <div>
          <Button type="Dashed" onClick={()=>handleDelete(record.vendor_email)}><DeleteTwoTone /></Button>
        </div>
      )
    

    }
  ];

  return (
    <>
      <div className="navigation-bar">
        <div className="left-section">
          <Select
            defaultValue={selectedCategory}
            style={{ width: 200 }}
            onChange={handleVendorCategory}
          >
            {vendorCategories.map((category) => (
              <Option key={category} value={category}>
                {category}
              </Option>
            ))}
          </Select>
        </div>
        <div className="right-section">
            <Link to="/addVendor">
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
        <Table
          dataSource={vendorData}
          columns={columns}
          onRow={(record) => ({ onClick: () => handleRowClick(record) })}
          pagination={false}
        />
      </div>
      <div className="main-content">
        <div>
          <h4>Business is no fun without people.</h4>
          <p>Create and manage your contacts, all in one place.</p>
          <Link to="/addVendor">
            <Button type="primary" size="large">
              Create New Vendor
            </Button>
          </Link>
        </div>
      </div>
      <Modal

        title={
          <div style={{ display: "flex", justifyContent: "space-between",alignItems:"center"}}>
            <span>Vendor Details</span>
            <Button type="primary" danger onClick={()=>handlePurchaseOrder(selectedRow.vendor_email,selectedRow.vendor_display_name)}>New Purchase Order</Button>

          
          </div>
        }
       open={isPopupVisible}
        onOk={handleClosePopup}
        onCancel={handleClosePopup}

        footer={[
          <Button key="close" onClick={handleClosePopup}>
            Close
          </Button>
        ]}
      >
        {selectedRow && (
          <div className="modal-content">
            <Table 
            dataSource={[
              { key: <span>Vendor ID:</span>, value: selectedRow.vendor_id },
              { key: <span>Vendor Name:</span>, value: selectedRow.vendor_name },
              { key: <span>Vendor Display Name:</span>, value: selectedRow.vendor_display_name },
              { key: <span>Vendor Email:</span>, value: selectedRow.vendor_email },
              { key: <span>Vendor Work Phone:</span>, value: selectedRow.vendor_work_phone },
              { key: <span>Vendor Company Name:</span>, value: selectedRow.vendor_company_name },
            ]}
            columns={[
              {
                dataIndex: "key",
                key: "key",
                width: "50%",
                align: "left", // Align the keys to the left
                render: (text) => <span>{text}</span>,
              },
              {
                dataIndex: "value",
                key: "value",
                width: "50%",
              },
            ]}
            showHeader={false}
            pagination={false}
            />           
            <div className="address-table">
              <h6>Billing Address:</h6>
              <Table
                dataSource={[
                  {
                    key: <span>Country</span>,
                    value: selectedRow.Billing_address.country,
                  },
                  {
                    key: <span>Address Line 1</span>,
                    value: selectedRow.Billing_address.address_line1,
                  },
                  {
                    key: <span>Address Line 2</span>,
                    value: selectedRow.Billing_address.address_line2,
                  },
                  {
                    key: <span>City</span>,
                    value: selectedRow.Billing_address.city,
                  },
                  {
                    key: <span>State</span>,
                    value: selectedRow.Billing_address.state,
                  },
                  {
                    key: <span>Phone</span>,
                    value: selectedRow.Billing_address.phone,
                  },
                  {
                    key: <span>Address Type</span>,
                    value: selectedRow.Billing_address.address_type,
                  },
                  {
                    key: <span>Vendor ID</span>,
                    value: selectedRow.Billing_address.vendor_id,
                  },
                ]}
                columns={[
                  {
                    dataIndex: "key",
                    key: "key",
                    width: "50%",
                    align: "left", // Align the keys to the left
                    render: (text) => <span>{text}</span>,
                  },
                  {
                    dataIndex: "value",
                    key: "value",
                    width: "50%",
                  },
                ]}
                showHeader={false}
                pagination={false}
              />
            </div>
            <div className="address-table">
              <h6>Shipping Address:</h6>
              <Table
                dataSource={[
                  {
                    key: <span>Country</span>,
                    value: selectedRow.Shipping_address.country,
                  },
                  {
                    key: <span>Address Line 1</span>,
                    value: selectedRow.Shipping_address.address_line1,
                  },
                  {
                    key: <span>Address Line 2</span>,
                    value: selectedRow.Shipping_address.address_line2,
                  },
                  {
                    key: <span>City</span>,
                    value: selectedRow.Shipping_address.city,
                  },
                  {
                    key: <span>State</span>,
                    value: selectedRow.Shipping_address.state,
                  },
                  {
                    key: <span>Phone</span>,
                    value: selectedRow.Shipping_address.phone,
                  },
                  {
                    key: <span>Address Type</span>,
                    value: selectedRow.Shipping_address.address_type,
                  },
                  {
                    key: <span>Vendor ID</span>,
                    value: selectedRow.Shipping_address.vendor_id,
                  },
                ]}
                columns={[
                  {
                    dataIndex: "key",
                    key: "key",
                    width: "50%",
                    align: "left", // Align the keys to the left
                    render: (text) => <span>{text}</span>,
                  },
                  {
                    dataIndex: "value",
                    key: "value",
                    width: "50%",
                  },
                ]}
                showHeader={false}
                pagination={false}
              />
            </div>
              
          </div>
        )}
      </Modal>
    </>
  );
}

export default Vendor;
