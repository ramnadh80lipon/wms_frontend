import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    line1:"",
    line2:"",
    line3:"",
    city:"",
    state:"",
    country:"",
    pincode:"",
    userType: "customer", // Default user type
    password:"",
    confirmPassword:""
  
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  




  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      valid = false;
    }

    if (!formData.contact.trim() || !/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact number is required and should be 10 digits";
      valid = false;
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
      valid = false;
    }

    

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
     
        axios.post('http://localhost/project_backend/api/users.php', formData).then(function(response){
            console.log(response.data);
            navigate('/');
        });

      
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card w-50 " style={{maxHeight:'100vh',overflow:'auto'}}>
        <div className="card-body">
          <h1 className="text-center">Registration</h1>
          {successMessage && (
            <p className="alert alert-success">{successMessage}</p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name:</label>
              <input
                type="text"
                placeholder="Full name"
                className={`form-control ${
                  errors.fullName ? "is-invalid" : ""
                }`}
                name="fullName"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
              {errors.fullName && (
                <div className="invalid-feedback">{errors.fullName}</div>
              )}
            </div>
            
            <div className="mb-3">
              <label className="form-label">Company Name:</label>
              <input
                type="text"
                
                name="companyName"
                placeholder="company name"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
              />
              
            </div>

            <div className="mb-3">
              <label className="form-label">Contact Number:</label>
              <input
                type="text"
                className={`form-control ${errors.contact ? "is-invalid" : ""}`}
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
              />
              {errors.contact && (
                <div className="invalid-feedback">{errors.contact}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="text"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Address:</label>
             
              <input
                type="text"
                className={`form-control ${errors.line1 ? "is-invalid" : ""} mb-2`}
                name="line1"
                placeholder="line1"
                value={formData.line1}
                onChange={(e) =>
                  setFormData({ ...formData, line1: e.target.value })
                }
              />
                 {errors.line1 && (
                <div className="invalid-feedback">{errors.line1}</div>
              )}
              <input
                type="text"
                className={`form-control ${errors.line2 ? "is-invalid" : ""} mb-2`}
                name="line2"
                placeholder="line2"
                value={formData.line2}
                onChange={(e) =>
                  setFormData({ ...formData, line2: e.target.value })
                }
              />
                 {errors.line2 && (
                <div className="invalid-feedback">{errors.line2}</div>
              )}
              <input
                type="text"
                className={`form-control ${errors.line3 ? "is-invalid" : ""} mb-2`}
                name="line3"
                placeholder="line3"
                value={formData.line3}
                onChange={(e) =>
                  setFormData({ ...formData,line3: e.target.value })
                }
              />
                 {errors.line3 && (
                <div className="invalid-feedback">{errors.line3}</div>
              )}
              <input
                type="text"
                className={`form-control ${errors.city ? "is-invalid" : ""} mb-2`}
                name="city"
                placeholder="city"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
                 {errors.city && (
                <div className="invalid-feedback">{errors.city}</div>
              )}
              <input
                type="text"
                className={`form-control ${errors.state ? "is-invalid" : ""} mb-2`}
                name="state"
                placeholder="state"
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
              />
                 {errors.state && (
                <div className="invalid-feedback">{errors.state}</div>
              )}
              <input
                type="text"
                className={`form-control ${errors.country ? "is-invalid" : ""} mb-2`}
                name="country"
                placeholder="country"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
                 {errors.country && (
                <div className="invalid-feedback">{errors.country}</div>
              )}
              <input
                type="text"
                className={`form-control ${errors.pincode ? "is-invalid" : ""} mb-2`}
                name="pincode"
                placeholder="pincode"
                value={formData.pincode}
                onChange={(e) =>
                  setFormData({ ...formData, pincode: e.target.value })
                }
              />
              {errors.pincode && (
                <div className="invalid-feedback">{errors.pincode}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">User Type:</label>
              <select
                className="form-select"
                name="userType"
                
                value={formData.userType}
                onChange={(e) =>
                  setFormData({ ...formData, userType: e.target.value })
                }
              >
                <option value="customer">Customer</option>
                <option value="supervisor">Supervisor</option>
                <option value="admin">Admin</option>
                <option value="superAdmin">Super Admin</option>
                <option value="vendor">vendor</option>
                <option value="logistics">logistics</option>

              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password:</label>
              <input
                type="password"
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">{errors.confirmPassword}</div>
              )}
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary mx-auto">
                Sign up
              </button>
            </div>

            <h4>
              {" "}
              already have an accoutn ?.<Link to="/login">Login</Link>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
