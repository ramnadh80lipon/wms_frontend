import React from "react";
import {
  Input,
  Card,
  Select,
  Checkbox,
  Switch,
  Row,
  Col,
  Table,
  Button,
} from "antd";
import "./ProductDetails.css";
import axios from 'axios';
import { Link,useParams } from "react-router-dom";
import { useEffect,useState } from "react";

function ProductDetails() {
  const {product_uuid} = useParams();

  console.log("param is ",product_uuid)

  const [productDetails,setProductDetails] = useState({});

  useEffect(()=>{
    axios.get(`http://localhost:8080/warehouse_product/${product_uuid}`).then(
      (res)=>{
        console.log(res.data[0]);
        setProductDetails(res.data[0]);
        },
      (err)=>console.error(err)
    )
  },[product_uuid]);

  if(Object.keys(productDetails).length===0){
    return <div>Loading</div>;
  }
  
  







  // const productDetails = {
  //   uuid: 1,
  //   productName: "Sample Product",
  //   price: 100,
  //   discountPrice: 90,
  //   sku: "123456",
  //   weight: 500,
  //   weightUnit: "gm",
  //   cost: 50,
  //   location: "inventory",
  //   quantity: 100,
  //   isUnlimited: true,
  //   minOrderQuantity: 1,
  //   maxOrderQuantity: 10,
  //   dischargeVAT: true,
  //   availability: true,
  //   requiresShipping: true,
  //   availabilityAmazon: 50,
  //   availabilityNoon: 30,
  //   availabilityInventory: 20,
  //   productDescription: "This is a sample product description.",
  //   
  // };
  console.log(productDetails);


 const details= [
        {
          key: "1",
          attribute: "Brand",
          value: productDetails?.brand,
        },
        {
          key: "2",
          attribute: "Product Id",
          value: productDetails?.productId,
        },
        {
          key: "3",
          attribute: "Color",
          value: productDetails?.color,
        },
        {
          key: "4",
          attribute: "Product dimensions",
          value: productDetails?.dimension,
        },
        {
          key: "5",
          attribute: "Product Type",
          value: productDetails.product_type,
        },
        {
          key: "6",
          attribute: "BIN Number",
          value: productDetails.bin_number,
        },
      ]
      const
      columns= [
        {
          title: "Attribute",
          dataIndex: "attribute",
          key: "attribute",
        },
        {
          title: "Value",
          dataIndex: "value",
          key: "value",
        },
      ]
      // console.log(productDetails[0]?.brand)
      // console.log(productDetails[0].brand) 

  return (
    <>
      <div className="product-details-parent">
        <div className="product-details-container" style={{marginBottom:"10px"}}>
          <h2>Product Details</h2>
          <Link to={`/editproductdetails/${productDetails.product_uuid}`}>
            <Button type="primary" size="large">
              Edit
            </Button>
          </Link>
        </div>

        <div className="main-container" >
          <div className="language-container" >
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1, marginRight: 10, marginBottom:"10px",borderRadius:"10px"}}>
                <label>Product Name</label>
                <Input
                  size="large"
                  value={productDetails.productName}
                  readOnly
                  style={{marginBottom:"10px"}}
                />
              </div>
            </div>
          </div>

          <div className="price-discount-container" >
            <Card title="Price and Discount" style={{  borderRadius: "10px",marginBottom:"10px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap", // Allow content to wrap to the next line if needed
                }}
              >
                <div style={{ flex: 1, marginRight: 10 }}>
                  <label>Barcode:</label>
                  <img 
                    src={productDetails.qrcode_image_url}
                    alt="barcode"
                    style={{width:"200px",height:"75px"}}
                    />
                  
                </div>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <label>Price</label>
                  <Input value={productDetails.price} readOnly />
                </div>
                
                <div style={{ flex: 1 }}>
                  <img
                    src={productDetails.image_url}
                    alt=""
                    style={{ width: "200px" }}
                  />
                </div>
              </div>
            </Card>
          </div>

          <div className="product-form-container">
            <Card title="Product Specifications" style={{  borderRadius: "10px",marginBottom:"10px" }}>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <label>SKU</label>
                
                  <Input value={productDetails.sku} readOnly />
                </div>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <label>Weight</label>
                  <Input
                    value={`${productDetails.weight}`}
                    readOnly
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Cost</label>
                  <Input value={productDetails?.price} readOnly />
                </div>
              </div>
            </Card>
          </div>

          <div className="stock-quantities-container">
            <Card title="Stock Quantities" style={{  borderRadius: "10px",marginBottom:"10px" }}>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <label style={{ paddingRight: "10px" }}>Location: </label>
                  <Select value={productDetails.location} disabled>
                    <Select.Option value="inventory">Inventory</Select.Option>
                    <Select.Option value="amazon">Amazon</Select.Option>
                    <Select.Option value="noon">Noon</Select.Option>
                  </Select>
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    marginRight: 10,
                  }}
                >
                  <label style={{ paddingRight: "10px" }}>Quantity: </label>
                  <Input value={productDetails.quantity} readOnly />
                </div>

                <div style={{ flex: 1 }}>
                  <label style={{ paddingRight: "10px" }}>Unlimited:</label>
                  <Checkbox checked={productDetails?.isUnlimited} disabled />
                </div>
              </div>
            </Card>
          </div>

          <div className="order-quantities-container">
            <Card title="Product location" style={{  borderRadius: "10px",marginBottom:"10px" }}>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <label>Exact Location</label>
                  <Input value={productDetails?.more_info} readOnly />
                </div>
                <div style={{ flex: 1 }}>
                  <label>warehouse Name</label>
                  <Input value={productDetails?.warehouse_name} readOnly />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Zone</label>
                  <Input value={productDetails?.zone} readOnly />
                </div>
              </div>
            </Card>
          </div>

          <div className="cards-container">
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Card title="Discharge VAT" style={{borderRadius: "10px",marginBottom:"10px" }}>
                  <Switch
                    defaultChecked={productDetails.dischargeVAT}
                    disabled
                  />
                  <span>Discharge VAT</span>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Availability" style={{  borderRadius: "10px",marginBottom:"10px" }}>
                  <Switch
                    defaultChecked={productDetails?.availability}
                    disabled
                  />
                  <span>Availability</span>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Requires Shipping" style={{ borderRadius: "10px",marginBottom:"10px" }}>
                  <Switch
                    defaultChecked={productDetails?.requiresShipping}
                    disabled
                  />
                  <span>Requires Shipping</span>
                </Card>
              </Col>
            </Row>
          </div>

          <div className="product-availability-container">
            <Card title="Product Availability" style={{  borderRadius: "10px",marginBottom:"10px" }}>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <Button type="primary">Amazon</Button>
                  <Input
                    placeholder="Amazon"
                    value={productDetails?.availabilityAmazon}
                    readOnly
                  />
                </div>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <Button type="primary">Noon</Button>
                  <Input
                    placeholder="Noon"
                    value={productDetails?.availabilityNoon}
                    readOnly
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <Button type="primary">Inventory</Button>
                  <Input
                    placeholder="Inventory"
                    value={productDetails?.quantity}
                    readOnly
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Product Description Section */}
          <div className="product-description-container">
            <Card title="Product Description" style={{  borderRadius: "10px",marginBottom:"10px" }}>
              {productDetails.description}
            </Card>
          </div>

          <div className="product-details">
            <Card title="Product Details" style={{  borderRadius: "10px",marginBottom:"10px" }}>
              <Table
                dataSource={details}
                columns={columns}
                pagination={false}
                size="small"
                bordered
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
