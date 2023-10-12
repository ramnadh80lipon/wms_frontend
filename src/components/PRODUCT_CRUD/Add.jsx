import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

function ProductForm() {
  const [formData, setFormData] = useState({
    product_name: '',
    description: '',
    price: '',
    warehouse_id: '',
    vendor_id: '',
    product_status: 'normal',
  });

  const [productImage, setProductImage] = useState(null);
  const [qrCodeImage, setQRCodeImage] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); 


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProductImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProductImage(imageFile);
  };

  const handleQRCodeImageChange = (e) => {
    const imageFile = e.target.files[0];
    setQRCodeImage(imageFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append('product_name', formData.product_name);
    productData.append('description', formData.description);
    productData.append('price', formData.price);
    productData.append('warehouse_id', formData.warehouse_id);
    productData.append('vendor_id', formData.vendor_id);
    productData.append('product_status', formData.product_status);
    productData.append('product_image', productImage);
    productData.append('qr_code', qrCodeImage);

    try {
      const response = await axios.post(
        'http://localhost/project_backend/api/products.php',
        productData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        console.log('Product added successfully.');
        setShowSuccessAlert(true);
      
      } else {
        console.error('Product addition failed.');
      }
    } catch (error) {
      console.error('Product addition failed', error);
    }
  };

  return (
    <div className="container">
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name:</label>
          <input
            type="text"
            className="form-control"
            name="product_name"
            value={formData.product_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Warehouse ID:</label>
          <input
            type="text"
            className="form-control"
            name="warehouse_id"
            value={formData.warehouse_id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Vendor ID:</label>
          <input
            type="text"
            className="form-control"
            name="vendor_id"
            value={formData.vendor_id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Status:</label>
          <select
            className="form-select"
            name="product_status"
            value={formData.product_status}
            onChange={handleInputChange}
            required
          >
            <option value="normal">Normal</option>
            <option value="damaged">damaged</option>
            <option value="retured">returned</option>
            <option value="safe">safe</option>
            
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Product Image:</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            name="product_image"
            onChange={handleProductImageChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">QR Code Image:</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            name="qr_code"
            onChange={handleQRCodeImageChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
      {showSuccessAlert && (
        <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
          Product added successfully.
        </Alert>
      )}
    </div>
  );
}

export default ProductForm;
