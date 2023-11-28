import React, { useState, useEffect, useContext } from 'react';
import { DeleteOutlined, MinusCircleFilled, PlusOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Button, Form, Input, List, Modal, Radio, Select, Table, Space } from 'antd';
import { Option } from 'antd/es/mentions';
import TextArea from 'antd/es/input/TextArea';

import { useNavigate, useLocation } from 'react-router-dom';
import VendorContext from '../vendor/VendorContext';
import ShowConfirmModal from './ShowConfirmModal.jsx';
// import { sendEmail } from './HandleEmail';

function AddPurchaseOrders() {
  
  const [showConfirmModalState, setShowConfirmModalState] = useState(false);
  const [handleCloseModal,setHandleCloseModal] = useState(true);
  const [CloseModal,setCloseModal] = useState(true);
  const [EmailSent,setEmailSent] = useState(false);
  const [delivervalue, setdeliverValue] = useState("organization");
  
  const [formData, setFormData] = useState(new FormData());

  const [data,setdata] =useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [form] = Form.useForm();

 


  const [vendorNames, setVendorNames] = useState([]);
  
  
  

  const vendorEmail = location.state?.email;
  const vendorName = location.state?.vendorName;

  const vendors = useContext(VendorContext);
  const vendor = vendors.vendors;

  
  const handleChange = (changeValues) => {
   


  }



  const handleSave = async (e) => {
    console.log("Entered here");
    alert("Button clicked");
    e.preventDefault();
  
    try {
      const values = await form.validateFields();
      console.table(values);
      setdata(values);
  
      const { 'items-list': itemsList, ...mainFormData } = values;
     
  
      console.log("here are the items list",itemsList);
      console.log("storing in state:",typeof(itemsList));
     
    

      console.log("here are the main form data",mainFormData);
      setShowConfirmModalState(true);
      console.log("showConfirmModalState",showConfirmModalState);
      
      // navigate(-1);
    } catch (error) {
      console.error("Failed:", error);
    }
  };
  useEffect(() => {
    console.log("showConfirmModalState",showConfirmModalState);
      
    },[showConfirmModalState])

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setdeliverValue(e.target.value);
  };



 
  return (
    <div>
      <h4>
        <ShoppingOutlined /> New Purchase Orders
      </h4>
      <hr />
      <div>
        {showConfirmModalState && (
        <ShowConfirmModal
        vendorEmail={vendorEmail}
        visible={showConfirmModalState}
        data={data}
      
    
        
        />
      )}

        <Form
          form={form}
          className="FormData"
          labelCol={{
            flex: '200px',
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

          onValuesChange={handleChange}
          onFinish={handleSave}
        >
          <Form.Item
            label="Vendor Name"
            name="vendorname"
            rules={[
              {
                required: true,
                message: "Please input vendor's name!",
              },

            ]}
            initialValue={vendorName}
          >
            <Input placeholder="Select a vendor" style={{ border: "1px solid black" }} />
          </Form.Item>

          <Form.Item
            label="Deliver to"
            name="deliverto"
            rules={[
              {
                required: true,
              }
            ]}>
            <Radio.Group onChange={onChange} value={delivervalue}>
              <Radio value={"Warehouse 1"} >Warehouse 1</Radio>
              <Radio value={"Warehouse 2"} >Warehouse 2</Radio>
              <Radio value={"Warehouse 3"} >Warehouse 3</Radio>
            </Radio.Group>





          </Form.Item>
          

          <Form.Item label=" Reference#" name="referenceId" >
            <Input style={{ border: "1px solid black" }} />
          </Form.Item>

          <Form.Item label="Purchase Order Date" name="date" >
            <Input type='Date' style={{ border: "1px solid black" }} />
          </Form.Item>

          <Form.Item label="Expected Delivery Date" name="exp_delivery_date">
            <Input type='Date' style={{ border: "1px solid black" }} />
          </Form.Item>

          <Form.Item name="payment_terms" label="Payment Terms">
            <Select defaultValue={"DueOnReceipt"} style={{ border: "1px solid black", borderRadius: "5px" }}>
              <Option value="DueOnReceipt" set>Due on Receipt</Option>
              <Option value="DueOnNextMonth">Due on Next Month</Option>
              <Option value="Net15">Net 15</Option>
              {/* Add more payment terms here as needed */}
              <Option value="Net30">Net 30</Option>
              <Option value="Net60">Net 60</Option>
              <Option value="Custom">Custom</Option>
            </Select>
          </Form.Item>

          <Form.Item name="shipment_preference" label="Shipment Preference">
            <Input placeholder='Add your shipment preference' style={{ border: "1px solid black" }} />
          </Form.Item>
          <Form.List name="items-list">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                    <Form.Item
                      label={
                        <span style={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}>
                          ITEM
                        </span>

                      }
                      {...restField}
                      name={[name, 'item']}

                      rules={[{ required: true, message: 'Please Input Item!' }]}
                      style={{ flex: 1, marginRight: 8 }}
                    >
                      <Input placeholder="Add your Item name" style={{ border: '1px solid black' }} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      label={
                        <span style={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}>
                          QUANTITY
                        </span>

                      }
                      name={[name, 'quantity']}

                      rules={[{ required: true, message: 'Please input quantity!' }]}
                      style={{ flex: 1, marginRight: 8 }}
                    >
                      <Input placeholder="Number of items" style={{ border: '1px solid black' }} />
                    </Form.Item>
                    <Form.Item style={{ flex: 1, marginRight: 8 }}>
                      <MinusCircleFilled onClick={() => remove(name)} />
                    </Form.Item>
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                    style={{ width: '100%', marginTop: '8px' }}
                  >
                    Add new Item
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>


        </Form>

      </div>
      <hr />

      <div style={{ marginBottom: "100px" }}>
       
        <div style={{ marginTop: "10px", display: "flex" }}>
          <div className="Note" style={{ float: "left", width: "35%" }}>
            <h7>Customer Note</h7><br />
            <TextArea rows={4} placeholder='Will be displayed on the purchase order.' />
          </div>
          
        </div>


      </div>


      <br />

      <div className="Save-Cancel" style={{
        backgroundColor: "white",
        display: "block",
        padding: "1%",
        width: "100%",
        position: "fixed",
        bottom: "0",
        margin: "auto",
        boxShadow: "10px 5px 5px 5px",
      }}>
        <Button type="primary" size="large" onClick={handleSave}>Save</Button>


        <Button
          type="primary"
          style={{ backgroundColor: "red", marginLeft: "20px" }}
          size="large"
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
    
}
export default AddPurchaseOrders;