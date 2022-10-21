import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css'

const Login = () => {
  // use login context
  const {login, handleGoogle, setUser} = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

      console.log(email, password)
      
      // login with email and password
      login(email, password)
        .then(result => {
          const user = result.user
          setUser(user);
          console.log(user)
        })
        .catch(error => {
          console.error(error)
        })
      
      // // google sign in
      // googleSignIn()
      //   .then(result => {
      //     const user = result.user;
      //     console.log(user)
      //   })
      //   .catch(error => {
      //   console.error(error)
      // })
      
    }

    return (
      <div className="form-container">
        <h2 className="form-title">Login Now</h2>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              required
            />
          </div>
          <input className="btn-submit" type="submit" value="Login" />
        </form>
        <p>
          New to ema john? <Link to="/signup">Create a new account.</Link>
        </p>
        <hr className="hr-text" data-content="OR"></hr>
        {/* Google login button */}
        <button onClick={handleGoogle} type="button" className="login-with-google-btn">
          Login with Google
        </button>
      </div>
    );
};

export default Login;