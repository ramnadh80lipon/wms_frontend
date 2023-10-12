import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';

function Listproduct() {
    const [selectedItem, setSelectedItem] = useState(null);

    const Dimentions = [
        'Box',
        'cm',
        'dz',
        'ft',
        'g',
        'in',
        'kg',
        'lb',
        'm',
        'ml',
        
    ]
    const handleItemClick = (item) => {
        setSelectedItem(item);
      };




  return (
    <>
    <h3>New item</h3>
    <hr></hr>

    <div className="row align-items-center">
  <div className="col-12">
    <div className="d-flex align-items-center">
      <h4 className="mr-3 p-3">Type ?</h4>
      <div className="form-check form-check-inline p-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="Goods"
          name="Goods"
          value="Goods"
        />
        <label className="form-check-label" htmlFor="Goods">
          Goods
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="Services"
          name="Services"
          value="Services"
        />
        <label className="form-check-label" htmlFor="Services">
          Services
        </label>
      </div>
    </div>
  </div>
</div>
<div className=" container">
    <div className='row'>
        <div className='col'>
        <label className="form-label">Product Name:</label>
          <input
            type="text"
            className="form-control"
            name="product_name"
            required
          /> 
        </div>
        <div className='col'>
            <lable className="form-label">SKU ?:</lable>
            <input type="text" className="form-control" placeholder="SKU" aria-label="SKU" />
        </div>
        <div className='col'>
            <lable className="form-label">Unit ?:</lable>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selectedItem || 'Unit'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        Dimentions.map((item,index)=>(
                            <Dropdown.Item key={index} onClick={() => handleItemClick(item)} >{item}</Dropdown.Item>
                        ))
                    }

                </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
</div>
    



    
    </>
  )
}

export default Listproduct