import React from 'react';
import { Link } from 'react-router-dom';
import login_background from './login_background.jpg';

function Login() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${login_background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      
      
      <div
        className="text-center"
        style={{
            color: 'white',
            fontSize: '200px',
          padding: '50px',
          fontFamily: 'roboto slab',
          marginBottom: '20px',
          
           
        }}
      >
        <h4 className="card-title">Welcome to</h4>
        <h2 className="card-subtitle mb-2">WMS</h2>
      </div>

      {/* Login Card */}
      <div className="card w-25">
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <h4>don't have an account ?.<Link to = "/registration">Register</Link></h4>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
