import { DeleteOutlined, PlusCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Dropdown, Form, Input, Select, Space, Table } from 'antd';
import { Option } from 'antd/es/mentions';
import React,{ useState } from 'react';
import './AddSales.css';
import TextArea from 'antd/es/input/TextArea';


function AddSales() {
  
  const items=[{key:"1", label:"Save and Draft"},
                {key:"2", label:"Save and Print"}]
  const [data, setTableData] = useState([
    {
      key: '0',
      item: <Input style={{ width: '100%' }} placeholder='Enter Item name or select item from the below' />,
      quantity: <Input style={{textAlign:"center",justifyContent:"center"}}/>,
      price: <Input />,
      discount: (
        <Space>
          <Input type="number" style={{ width: '100%', alignItems:"flex-end"}} />
          <Select  style={{ width: '100%' }}>
            <Option value="%">% </Option>
            <Option value="Rs.">SAR. </Option>
          </Select>
        </Space>
      ),
      amount: 0,
    },
  ]);
  const [adjustmentLabel, setAdjustmentLabel] = useState('');
  const [adjustmentAmount, setAdjustmentAmount] = useState('');

  const columns = [
    {
      title: 'ITEM',
      dataIndex: 'item',
      key: 'item',
      width: '40%',
    },
    {
      title: 'QUANTITY',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (_, record) => (
        <Input
          onChange={(e) => handleAmountChange(record.key, 'quantity', e.target.value)}
        />
      ),
    },
    {
      title: 'PRICE',
      dataIndex: 'price',
      key: 'price',
      render: (_, record) => (
        <Input
          onChange={(e) => handleAmountChange(record.key, 'price', e.target.value)}
        />
      ),
    },
    {
      title: 'DISCOUNT',
      dataIndex: 'discount',
      key: 'discount',
      render: (_, record) => (
        <Space>
          <Input
            type="number"
            style={{ width: '90%' }}
            onChange={(e) => handleAmountChange(record.key, 'discountValue', e.target.value)}
          />
          <Select

            style={{ width: '100%' }}
            onChange={(value) => handleAmountChange(record.key, 'discountType', value)}
          >
            <Option value="%">% </Option>
            <Option value="Rs.">Rs. </Option>
          </Select>
        </Space>
      ),
    },
    {
      title: 'AMOUNT',
      dataIndex: 'amount',
      key: 'amount',
      render: (_, record) => <div>{calculateAmount(record)}</div>,
    },
    {
      title: '',
      key: 'action',
      render: (text, record) => (
        <Button
          icon={<DeleteOutlined />}
          onClick={() => handleDelete(record.key)}
        />
      ),
    },
  ];

  const addRow = () => {
    const newRow = {
      key: `${data.length}`,
      item: <Input style={{ width: '100%' }} placeholder='Enter Item name or select item from the below' />,
      quantity: <Input />,
      price: <Input />,
      discount: (
        <Space>
          <Input type="number" style={{ width: '100%' }} />
          <Select style={{ width: '100%' }}>
            <Option value="%">%</Option>
            <Option value="Rs.">Rs.</Option>
          </Select>
        </Space>
      ),
      amount: 0,
    };

    setTableData([...data, newRow]);
  };

  const handleAmountChange = (key, field, value) => {
    const updatedData = data.map((record) => {
      if (record.key === key) {
        if (field === 'discountValue') {
          record.discountValue = parseFloat(value);
        } else if (field === 'discountType') {
          record.discountType = value;
        } else if (field === 'quantity') {
          record.quantity = parseFloat(value);
        } else if (field === 'price') {
          record.price = parseFloat(value);
        }
      }
      return record;
    });
    setTableData(updatedData);
  };

  const calculateAmount = (record) => {
    let amount = 0;
    if (record.discountType === '%') {
      amount = record.quantity * record.price * (1 - record.discountValue / 100);
    } else if (record.discountType === 'Rs.') {
      amount = record.quantity * record.price - record.discountValue;
    }
    return amount.toFixed(2);
  };

  const handleDelete = (key) => {
    const filteredData = data.filter((item) => item.key !== key);
    setTableData(filteredData);
  };

  const calculateSubtotal = () => {
    return data.reduce((acc, record) => {
      return acc + parseFloat(calculateAmount(record) || 0);
    }, 0);
  };

  const handleAdjustmentLabelChange = (e) => {
    setAdjustmentLabel(e.target.value);
  };

  const handleAdjustmentAmountChange = (e) => {
    setAdjustmentAmount(e.target.value);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    let adjustmentValue = 0;
    if (adjustmentAmount) {
      const sign = adjustmentAmount[0] === '-' ? -1 : 1;
      adjustmentValue = parseFloat(adjustmentAmount.slice(1)) * sign;
    }
    return (subtotal + adjustmentValue).toFixed(2);
  };

  return (
    <div>     
        <h3> <ShoppingCartOutlined />New Sales Order</h3>
        <div>
          <hr />
          <br />
          <Form
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
          >
            <Form.Item
              label="Customer Name"
              name="customername"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Add a customer" style={{border: "1px solid black"}}/>
            </Form.Item>

            <Form.Item
              label="Sales Order#"
              name="sales_order"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input style={{border: "1px solid black"}}/>
            </Form.Item>
            
            <Form.Item label=" Reference#" name="referenceId" >
              <Input style={{border: "1px solid black"}} />
            </Form.Item>
            
            <Form.Item label="Sales Order Date" name="sales_order_date" rules={[{required:true}]}>
              <Input type='Date' style={{border: "1px solid black"}}/>
            </Form.Item>

            <Form.Item label="Expected Shipment Date" name="exp_shipment_date">
              <Input type='Date' style={{border: "1px solid black"}}/>
            </Form.Item>
            
            <Form.Item name="payment_terms" label="Payment Terms">
              <Select  defaultValue={"DueOnReceipt"} style={{border: "1px solid black", borderRadius:"5px"}}>
              <Option value="DueOnReceipt" set>Due on Receipt</Option>
                      <Option value="DueOnNextMonth">Due on Next Month</Option>
                      <Option value="Net15">Net 15</Option>
                      {/* Add more payment terms here as needed */}
                      <Option value="Net30">Net 30</Option>
                      <Option value="Net60">Net 60</Option>
                      <Option value="Custom">Custom</Option>
              </Select>
              </Form.Item>

              <Form.Item name="delivery_method" label="Delivery Method">
              <Input placeholder='Add a delivery method' style={{border: "1px solid black"}}/>
              </Form.Item>

              <Form.Item name="salesPerson" label="Sales Person">
                <Input placeholder='Add a salses person' style={{border: "1px solid black"}}/>
              </Form.Item>
            <br />
          </Form>
      </div>
      <hr />

      <div style={{marginBlockEnd:"100px"}}>
      <Table dataSource={data} columns={columns} pagination={false} bordered />
      <Button onClick={addRow} style={{ marginTop: '10px' }}>
        Add Row <PlusCircleOutlined />
      </Button>
      <br />
      
     
      <div style={{ marginTop: '10px' ,display:"flex"}}>
          <div className="Note">
                <h7>Customer Note</h7><br />
                <TextArea rows={4}  placeholder='Enter any notes to be displayed in your transaction' />
          </div>
       <div className="TotalAmount" > 
          <strong>Sub Total:</strong> 
          <span style={{float:"right"}}>{calculateSubtotal().toFixed(2)}</span>
       
          <div style={{ marginTop: '10px',display:"flex", }}>
            <Input
            placeholder="Adjustment Label (e.g., GST)"
            onChange={handleAdjustmentLabelChange}
            value={adjustmentLabel}
            />
            <Input
            style={{marginLeft:"10px",textAlign:"right"}}
            placeholder="Amount (e.g., +100 or -50)"
            onChange={handleAdjustmentAmountChange}
            value={adjustmentAmount}
            />
          </div>
          <hr />
          <strong>Total:</strong> <span style={{float:"right"}}>{calculateTotal()}</span>
     
        </div>
        </div>
      </div>
      <br />



      <div className="Save-Cancel">
      <Dropdown
      menu={{ items, }}
      placement="topLeft"
      arrow={{
        pointAtCenter: true,
      }}
    >
      <Button type="primary" size="large">Save and Draft</Button>
    </Dropdown>
        <Button
          type="primary"
          style={{ backgroundColor: "red", marginLeft: "20px" }}
          size="large"
        >
          Cancel
        </Button>
      </div>
  
    </div>
  )
}

export default AddSales
