import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import truck from "../../icons/Truck.png";
import file from "./final2.csv";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Catalog() {
  const [showImportModal, setShowImportModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const file = "project.jpg";
  const fileUrl = "final2.csv";

  const handleCardClick = () => {
    setShowImportModal(true);
  };

  const handleCloseImportModal = () => {
    setShowImportModal(false);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("csv_file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:8080/warehouse_products_entry",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("File uploaded successfully.");
      } else {
        alert("File upload failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div
        className="navbar"
        style={{
          backgroundColor: "#3fc584",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        <div className="left">
          <h3
            className="display-3"
            style={{ fontFamily: "Arial, sans-serif", fontSize: "2rem" }}
          >
            Catalogue
          </h3>
        </div>
        <div className="right">
          <Button
            className="m-3"
            size=""
            variant="primary"
            style={{ border: "none" }}
          >
            <i className="bi bi-upload p-2" style={{ color: "#fff" }}></i>Export
            all
          </Button>
          <Button
            className="m-3"
            size=""
            variant="primary"
            style={{ border: "none" }}
            onClick={handleCardClick}
          >
            Import all
          </Button>
          <Link to="/addproduct"><Button
            className="display-3"
            size=""
            variant="primary"
            style={{ border: "none" }}
          >
            <i className="bi bi-plus-circle p-2" style={{ color: "#fff" }}></i>
            Add Product
          </Button></Link>
        </div>
      </div>
      <div className="second-headings mt-3">
        <Button className="m-3 " variant="light">
          <i className="bi bi-plus-circle p-2"></i>SKU
        </Button>
        <Button className="m-3 " variant="light">
          <i className="bi bi-plus-circle p-2"></i>Product ID
        </Button>
      </div>
      <hr></hr>
      <div className="second-headings mt-3">
        <img
          src={truck}
          style={{ width: "15%" }}
          alt="truck"
          className="rounded mx-auto d-block"
        />
        <p
          className="display-6"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          Your Catalog is empty
        </p>
        <p
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          Start adding products to see them listed here
        </p>
        <Link to="/addproduct"><Button
          className="display-3"
          size=""
          variant="primary"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          <i className="bi bi-plus-circle p-2"></i>Add Product
        </Button></Link>
        <a
          href=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            textDecoration: "none",
          }}
        >
          Learn more
        </a>
      </div>

      <Modal show={showImportModal} onHide={handleCloseImportModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: 'center' ,display:"block",width:"100%"}}>Import products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ textAlign: 'center' }}>
            Download a{" "}
            <span>
              <a href={fileUrl} download="sample.csv" style={{textDecoration:"none"}}>
                sample CSV template
              </a>
            </span>{" "}
            to see the expected format
          </p>
          <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           <p style={{ textAlign: 'center' }}> Drop your files here </p>
            
            <label htmlFor="file-upload" className="custom-file-upload">
              <form onSubmit={handleSubmit} >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center",marginLeft:"110px" }}>
                <input
                  type="file"
                  id="file-upload"
                  
                  onChange={handleFileChange}
                />
                </div>
                <div style={{margin:"auto",display:"block",width:"100%",textAlign:"center",marginTop:"20px",marginBottom:"10px"}}>
                <button type="submit" className="btn btn-primary" >
                  Upload
                </button>
                </div>
              </form>
            </label>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Catalog;
