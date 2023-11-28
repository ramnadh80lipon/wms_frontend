import { Input, Typography } from 'antd';
import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';

import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const { Text } = Typography;

function Reports() {
  // Dummy data for tables
  const productData = [
    { product: 'Product 1', price: 10, quantity: 20, status: 'In Stock' },
    { product: 'Product 2', price: 15, quantity: 15, status: 'Out of Stock' },
    // Add more data as needed
  ];

  const orderData = [
    { orderId: '123', customer: 'John Doe', date: '2023-11-11', amount: 100 },
    { orderId: '124', customer: 'Jane Doe', date: '2023-11-12', amount: 150 },
    // Add more data as needed
  ];

  // Your existing data for Pie Chart and Bar Graph
  const data = [
    { name: 'Category A', value: 30 },
    { name: 'Category B', value: 25 },
    { name: 'Category C', value: 20 },
    { name: 'Category D', value: 15 },
    { name: 'Category E', value: 10 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <Container fluid>
      <div>  
        
        <Row>
        <h4>Inventory Activity</h4>
          <Col md={2}>
            <Card>
              <Card.Body>
                <Card.Title>Stock available</Card.Title>
                <Card.Text>1231</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card style={{height:"100%"}}>
              <Card.Body>
                <Card.Title>Required   </Card.Title>
                <Card.Text style={{marginTop:"30px"}}>456</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card>
              <Card.Body>
                <Card.Title>Damaged items</Card.Title>
                <Card.Text>389</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card>
              <Card.Body>
                <Card.Title>Items replaced</Card.Title>
                <Card.Text>711</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          {/* <Col  style={{  height: '120%',width:"1px",border:"1px solid #ddd" }} /> */}
         <col style={{borderLeft:"1px solid #ddd", height:"150px",width:"1px"}}/>
          <Col md={3}>
            <h4 style={{marginTop:"-35px", }}>Shipping Activity</h4>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: '8px' }}>
                      <Input value="Items shipped" style={{ width: "200px" }} readOnly />
                      <Text style={{ marginLeft: '8px', fontWeight: 'bold' }}>563</Text>
                  </div>
                  <div style={{ marginBottom: '8px' }}>
                      <Input value="Items to be shipped" style={{ width: "200px" }} readOnly />
                      <Text style={{ marginLeft: '8px', fontWeight: 'bold' }}>421</Text>
                  </div>
                  <div style={{ marginBottom: '8px' }}>
                      <Input value="Items delivered" style={{ width: "200px" }} readOnly />
                      <Text style={{ marginLeft: '8px', fontWeight: 'bold' }}>635</Text>
                  </div>
                  <div>
                      <Input value="Items received" style={{ width: "200px" }} readOnly />
                      <Text style={{ marginLeft: '8px', fontWeight: 'bold' }}>548</Text>
                  </div>
              </div>
          </Col>
        </Row>
        </div>
      <br />
      <hr />

      <Row>
        <Col md={6}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((item, index) => (
                <tr key={index}>
                  <td>{item.product}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={6} >
          <PieChart width={400} height={300}>
            {/* Your Pie Chart content */}
            <Pie
              data={data}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((item, index) => (
                <tr key={index}>
                  <td>{item.orderId}</td>
                  <td>{item.customer}</td>
                  <td>{item.date}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={6}>
          <BarChart
            width={400}
            height={300}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            {/* Your Bar Chart content */}
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </Col>
      </Row>
    </Container>
  );
}

export default Reports;