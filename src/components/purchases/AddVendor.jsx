import React from 'react'
import { useState } from 'react'
import { Button, Menu, Typography, Avatar, Dropdown } from "antd";
import { Link } from "react-router-dom";

function AddVendor() {
   const [formData, setFormData] = useState({
        full_name: '',
        company_name: '',
        vendor_display_name: '',
        vendor_phone: '',
        vendor_email: '',
        vendor_address: '',
        vendor_city: '',
        vendor_state: '',
        vendor_billing_country: '',
        vendor_billing_line1: '',
        vendor_billing_line2: '',
        vendor_billing_city: '',
        vendor_billing_state: '',
        vendor_billing_phone_number: '',

        vendor_shipping_country: '',
        vendor_shipping_line1: '',
        vendor_shipping_line2:'',
        vendor_shipping_city:'',
        vendor_shipping_state:'',
        vendor_shipping_phone_number:'',
   });








  return (
    <>
    
    <h3>New Vendor</h3>
    <hr />
    <form>

        <div className="form-group">
            <label >Full Name:</label>
            <input type="text"  className='form-control ' value={formData.full_name} onChange={(e)=>setFormData({...formData,full_name:e.target.value})} />
        </div>
        <div className="form-group">
            <label>Company Name:</label>
            <input type="text" className='form-control' value={formData.company_name} onChange={(e)=>setFormData({...formData,company_name:e.target.value})} />
        </div>
        <div className='form-group'>
            <label>Vendor Display Name:</label>
            <input type="text" className='form-control' value={formData.vendor_display_name} onChange={(e)=>setFormData({...formData,vendor_display_name:e.target.value})}  required/>
        </div>
        <div className='form-group'>
            <label>Vendor Email:</label>
            <input type="email" className='form-control' value={formData.vendor_email} onChange={(e)=>setFormData({...formData,vendor_email:e.target.value})}  required/>
        </div>
        <div className='form-group'>
            <lable>Vendor Phone:</lable>
            <input type="text" className='form-control' onChange={(e)=>setFormData({...formData,vendor_phone:e.target.value})}  required/>
        </div>

        <h5 className='mt-3'>address</h5>

        <hr/>
        <div className='address-group d-flex justify-content-start'>
            <div className='billing-address col-6'>
                <h4>Billing Address</h4>
                <div className="form-group">
                    <lable>Country/region:</lable>
                    <input type="text" className='form-control' onChange={(e)=>setFormData({...formData,vendor_billing_country:e.target.value})} />
                </div>
                <div className="form-group">
                    <lable>Address</lable>
                    <input type="text" className='form-control' onChange={(e)=>setFormData({...formData,vendor_billing_line1:e.target.value})} />
                    <input type="text" className='form-control' onChange={(e)=>setFormData({...formData,vendor_billing_line2:e.target.value})} />
                </div>
                <div className="form-group">
                    <lable>City</lable>
                    <input type="text" className='form-control' onChange={(e)=>setFormData({...formData,vendor_billing_city:e.target.value})} />
                </div>
                <div className="form-group">
                    <lable>State</lable>
                    <input type="text" className='form-control' onChange={(e)=>setFormData({...formData,vendor_billing_state:e.target.value})} />
                </div>
                <div className="form-group">
                    <lable>Phone</lable>
                    <input type="text" className='form-control' onChange={(e)=>setFormData({...formData,vendor_billing_phone_number:e.target.value})} />
                </div> 
            </div>       
            <div className='shipping-address col-6'>
                <h4>Shipping Address</h4>
                <div className="form-group">
                    <lable>Country/region:</lable>
                    <input type="text" className='form-control' onChange={(e)=>setFormData({...formData,vendor_billing_country:e.target.value})} />
                </div>
                <div className="form-group">
                    <lable>Address</lable>
                    <input type="text" className='form-control' onChange={(e)=>setFormData({...formData,vendor_billing_line1:e.target.value})} />
                    <input type="text" className='form-control' onChange={(e)=>setFormData({...formData,vendor_billing_line2:e.target.value})} />
                </div>
                <div className="form-group">
                    <lable>City</lable>
                    <input type="text" className='form-control' onChange={(e)=>setFormData({...formData,vendor_billing_city:e.target.value})} />
                </div>
                <div className="form-group">
                    <lable>State</lable>
                    <input type="text" className='form-control' onChange={(e)=>setFormData({...formData,vendor_billing_state:e.target.value})} />
                </div>
                <div className="form-group">
                    <lable>Phone</lable>
                    <input type="text" className='form-control' onChange={(e)=>setFormData({...formData,vendor_billing_phone_number:e.target.value})} />
                </div>
            </div>
            
        </div>
        <hr/>
        <div className='form-group d-flex justify-content-center fixed-bottom '>
        <div className="form-group me-4">
            <button className='btn btn-primary mr-5'>Save</button>
        </div>
        <div className="form-group ">
            <button className='btn btn-danger mr-5'>Cancel</button>
        </div>
        </div>

    </form>

    



    </>
  )
}

export default AddVendor