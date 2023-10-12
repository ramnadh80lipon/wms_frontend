import React from "react";

function AddNewCustomer() {
  return (
    <div>
      <h1>Add New Customer</h1>
      <div className="form-group">
        <label>Full Name:</label>

        <input type="text" className="form-control " />
      </div>
    </div>
  );
}

export default AddNewCustomer;
