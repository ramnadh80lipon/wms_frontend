import React, { useState } from "react";
import axios from "axios";

function ProductEditForm({ selectedProduct, onClose }) {
  const [updatedProductData, setUpdatedProductData] = useState({
    price: selectedProduct.PRICE,
    product_status: selectedProduct.PRODUCT_STATUS,

  });
  const [products, setProducts] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProductData({
      ...updatedProductData,
      [name]: value,
    });
  };

  const handleSaveClick = async () => {
    try {
      console.log("Save button clicked");
      const jsonData = JSON.stringify(updatedProductData);
      console.log(jsonData);
  
      
      setShowEditModal(true);

      
      const url = `http://localhost/project_backend/api/update.php?id=${selectedProduct.PRODUCT_ID}`;
      console.log(url);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });

      console.log(response);
  
    
      if (response.status === 200) {
        
        const data = await response.json();
        console.log("Product updated successfully");
        console.log(data);
  
        if (Array.isArray(data)) {
          
          console.log(data);
        } else {
          setTimeout(() => {
            setError("Invalid data format received from the server.");
          }, 100000);
        }
  
        
        setShowEditModal(false);
  
        
        
      } else {
        
        console.error(`Server responded with status code: ${response.status}`);
        
        setShowEditModal(false);
        throw new Error(`Server responded with status code: ${response.status}`);
      }
    } catch (error) {
      
      setError(error.message);
      console.error("Error updating product: ", error);
  
      
      setShowEditModal(false);
    
    }
  };
  

  return (
    <div>
      <h2>Edit Product: {selectedProduct.PRODUCT_NAME}</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={updatedProductData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Status:</label>
          <select
            className="form-select"
            name="product_status"
            value={updatedProductData.product_status}
            onChange={handleInputChange}
            required
          >
            <option value="normal">Normal</option>
            <option value="damaged">Damaged</option>
            <option value="returned">Returned</option>
            <option value="safe">Safe</option>
          </select>
        </div>
        {/* Add other fields for editing */}
        <button className="btn btn-primary" onClick={handleSaveClick}>
          Save
        </button>
      </form>
    </div>
  );
}

export default ProductEditForm;
