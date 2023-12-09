import React from 'react'
import { Link } from 'react-router-dom'
function VirtualWarehouse() {
  return (
    <>
    <>
      <div className="warehouse">
        <Link to="/amazonwarehouse" className="card-warehouse">
          <img
            className="card-img"
            src="https://source.unsplash.com/400x400?amazon"
            alt=""
          />
          <h3 className="card-title">Amazon</h3>
        </Link>
        
        <Link to="/noonwarehouse" className="card-warehouse">
          <img
            className="card-img"
            src="https://source.unsplash.com/400x400?noon"
            alt=""
          />
          <h3 className="card-title">Noon</h3>
        </Link>
      </div>
    </>
    </>
  )
}

export default VirtualWarehouse
