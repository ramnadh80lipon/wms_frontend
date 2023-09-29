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
    address: "",
    userType: "customer", // Default user type
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

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Send the registration data to your PHP API for database insertion
      // try {
        // const response = await axios.post(
        //   "http://localhost/project_backend/registration.php",
        //   formData, // Data to send in the request body
        //   {
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   }
        // );
        axios.post('http://localhost/project_backend/api/users.php', formData).then(function(response){
            console.log(response.data);
            navigate('/');
        });

      //   if (response.status === 200) {
      //     setSuccessMessage("Registration successful");
      //     console.log("Registration successful");
      //   } else {
      //     console.error("Registration failed");
      //   }
      // } catch (error) {
      //   console.error("Registration failed", error);
      // }
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
              <label className="form-label">Contact Number:</label>
              <input
                type="text"
                className={`form-control ${errors.contact ? "is-invalid" : ""}`}
                name="contact"
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
                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                name="address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
              {errors.address && (
                <div className="invalid-feedback">{errors.address}</div>
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
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
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
              <button type="submit"   className="btn btn-primary mx-auto">
                Sing up
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
