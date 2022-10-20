import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault()
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
    }

    return (
      <div className="form-container">
        <h2 className="form-title">Login Now</h2>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input type="email" name="email" placeholder='Your email'  />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input type="password" name="password" placeholder='Your password' />
          </div>
          <input className='btn-submit' type="submit" value="Login" />
            </form>
         <p>New to ema john? <Link to='/signup'>Create a new account.</Link></p>
      </div>
    );
};

export default Login;