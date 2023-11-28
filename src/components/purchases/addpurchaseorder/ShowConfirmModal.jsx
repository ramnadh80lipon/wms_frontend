import { Button, Modal } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ShowConfirmModal({ vendorEmail, visible, data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  console.log(typeof(visible));

  const showModal = () => {
    setIsModalOpen(visible);
  };
  // const handleCancelModal = () => {
    
  //   setIsModalOpen(!visible);
  //   console.log("here in the handleCancle",isModalOpen);
  // };
  
  

  const { 'items-list': itemsList, ...mainFormData } = data;
  const formattedItems = itemsList.map((item) => ({
    itemName: item.item,
    itemQuantity: item.quantity,
    vendor_email: vendorEmail,
  }));

  console.log('mainFormData', mainFormData);
  console.log('formattedItems', formattedItems);

  const saveToDatabase = async () => {
    try {
      const response = await axios.post("http://localhost:8080/addPurchaseOrderRequest", {
        mainFormData,
        items: formattedItems,
        vendor_email: vendorEmail,
      });
      // Handle the response as needed
      console.log(response.data); // Assuming the backend sends a response message
    } catch (error) {
      console.error('Error:', error);
      // Handle the error
    }
  };

  const handleConfirmSave = async () => {
    try {
      if (formattedItems && formattedItems.length > 0) {
        await saveToDatabase();
        setIsModalOpen(false);
        alert('Purchase Order placed successfully');
      } else {
        alert('No items to confirm. Please check your items list.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error placing purchase order. Please Try again');
    }
  };

  return (
    <>
      <div>
        <Modal title="Confirm Purchase Order" visible={showModal} onCancel={()=>setIsModalOpen(false)}>
          <h5>Are you sure you want to place this purchase order?</h5>
          <p>To: {vendorEmail}</p>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            {formattedItems && formattedItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>{`${item.itemName} - ${item.itemQuantity}`}</li>
            ))}
          </ul>
          <Button type="primary" onClick={handleConfirmSave}>
            Confirm Save
          </Button>
          
          <Button type="primary" style={{marginLeft:"5px"}} onClick={()=>navigate(-1)}>
            Cancel
          </Button>

        </Modal>
      </div>
    </>
  );
}
