import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import truck from "../../icons/Truck.png";
import file from "./final2.csv";
import { useState } from 'react';
import axios from 'axios';



function Catalog() {
  const [showImportModal, setShowImportModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const file = "project.jpg";
  const fileUrl = "final2.csv";




  const handleCardClick = () => {
    setShowImportModal(true);
  }

  const handleCloseImportModal = () => {  
    setShowImportModal(false);
  }


  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost/project_backend/api/import_file.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('File uploaded successfully.');
      } else {
        alert('File upload failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  


  return (
    <>
    <div className="navbar" style={{ backgroundColor:"#3fc584", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px" }}>
    <div className="left">
        <h3 className='display-3' style={{ fontFamily: 'Arial, sans-serif', fontSize: '2rem' }}>Catalogue</h3>
        
    </div>
    <div className="right">
    <Button className='m-3' size='' variant="primary" style={{  border: "none" }}>
      <i className="bi bi-upload p-2" style={{ color: "#fff" }}></i>Export all
    </Button>
    <Button className='m-3' size='' variant="primary" style={{  border: "none" }} onClick={handleCardClick}>
      Import all
    </Button>
    <Button className='display-3' size='' variant="primary" style={{ border: "none" }}>
      <i className='bi bi-plus-circle p-2' style={{ color: "#fff" }}></i>Add Product
    </Button>
  </div>
</div>
<div className="second-headings mt-3">
<Button className='m-3 '  variant="light"><i className="bi bi-plus-circle p-2"></i>SKU</Button>
<Button className='m-3 '  variant="light"><i className="bi bi-plus-circle p-2"></i>Product ID</Button>
</div>
<hr></hr>
<div className="second-headings mt-3">
    
<img src={truck} style={{width:"15%"}} alt="truck" className="rounded mx-auto d-block" />
<p className='display-6'style={{display:"flex",justifyContent:'center',alignItems:"center",margin:'auto'}}>Your Catalog is empty</p>
<p className='' style={{display:"flex",justifyContent:'center',alignItems:"center",margin:'auto'}}>Start adding products to see them listed here</p>
<Button className="display-3" size='' variant="primary" style={{display:"flex",justifyContent:'center',alignItems:"center",margin:'auto',marginTop:"20px",marginBottom:"10px"}}><i className='bi bi-plus-circle p-2'></i>Add Product</Button>
<a href="" style={{display:"flex",justifyContent:'center',alignItems:"center",margin:'auto',textDecoration:"none"}}>Learn more</a>

</div>

<Modal show={showImportModal} onHide={handleCloseImportModal}>
    <Modal.Header closeButton>
      <Modal.Title>Import products</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Download a <span><a href={fileUrl} download="sample.csv">sample CSV template</a></span> to see the expected format</p>
      <div className='d-flex justify-content-center'>

        Drop your files here or 
        <label htmlFor="file-upload" className="custom-file-upload">
           <form onSubmit={handleSubmit}> 
            <input type="file"  id="file-upload" onChange={handleFileChange} />
            <button type="submit"  className="btn btn-primary">Upload</button>
            </form>
        </label>
        
        </div>
    </Modal.Body>



</Modal>







    
    
    
    </>
  )
}

export default Catalog