import React, { useContext } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';




const SignUp = () => {
  //using context
  const { createUser, handleGoogle, setUser } = useContext(AuthContext);

  const handleSignup = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    // create user with email and password
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
    
    
  };

 

  return (
    <div className="form-container2">
      <h2 className="form-title">SignUp Now</h2>
      <form onSubmit={handleSignup}>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input type="text" name="name" placeholder="Your name" required />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input type="email" name="email" placeholder="Your email" required />
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
        <input className="btn-submit" type="submit" value="SignUp" />
      </form>
      <p>
        Already have an account? <Link to="/login">LogIn</Link>
      </p>
      <hr className="hr-text" data-content="OR" />
      {/* Google login button */}
      <button
        onClick={handleGoogle}
        type="button"
        className="login-with-google-btn"
      >
        SignUp with Google
      </button>
    </div>
  );
};

export default SignUp;