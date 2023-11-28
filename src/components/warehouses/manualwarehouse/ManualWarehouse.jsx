import React from 'react'
import './ManualWarehouse.css'
import { Link } from 'react-router-dom'
function ManualWarehouse() {
  return (
    <>
      <div className="warehouse">
        <Link to="/warehousea" className="card-warehouse">
          <img
            className="card-img"
            src="https://source.unsplash.com/400x400?warehouse"
            alt=""
          />
          <h3 className="card-title">Warehouse A</h3>
        </Link>
        <Link to="/warehouseb" className="card-warehouse">
          <img
            className="card-img"
            src="https://source.unsplash.com/400x400?amazon"
            alt=""
          />
          <h3 className="card-title">Warehouse B</h3>
        </Link>
        <Link to="/warehousec" className="card-warehouse">
          <img
            className="card-img"
            src="https://source.unsplash.com/400x400?amazon"
            alt=""
          />
          <h3 className="card-title">Warehouse C</h3>
        </Link>
      </div>
    </>
  )
}

export default ManualWarehouse
