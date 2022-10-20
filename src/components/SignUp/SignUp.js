import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSignup = (event) => {
      event.preventDefault();

      const form = event.target;
      const name = form.name.value
      const email = form.email.value;
      const password = form.password.value;

      console.log(name, email, password);
    };

    return (
      <div>
        <div className="form-container">
          <h2 className="form-title">SignUp Now</h2>
          <form onSubmit={handleSignup}>
            <div className="form-control">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input type="text" name="name" placeholder="Your name" />
            </div>
            <div className="form-control">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input type="email" name="email" placeholder="Your email" />
            </div>
            <div className="form-control">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
              />
            </div>
            <input className="btn-submit" type="submit" value="SignUp" />
          </form>
          <p>
           Already have an account? <Link to="/login">LogIn</Link>
          </p>
        </div>
      </div>
    );
};

export default SignUp;