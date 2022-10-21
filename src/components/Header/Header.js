import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log('from header', logOut)

    let active = {
        color: "orange",
    }

    return (
      <nav className="header">
        <img src={logo} alt="" />
        <div className="nav-container">
          <NavLink
            className={({ isActive }) => (isActive ? active : undefined)}
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/inventory">Inventory</NavLink>
          <NavLink to="/about">About</NavLink>
          {user?.email ? (
            <>
              <NavLink className="user-container">
                {user?.email && <span>{user.email}</span>}
                {user?.photoURL && (
                  <span>
                    <img className="user-img" src={user.photoURL} alt="img" />
                  </span>
                )}
                <input
                  onClick={logOut}
                  className="btn-logout"
                  type="button"
                  value="LogOut"
                />
              </NavLink>
            </>
          ) : (
            <NavLink to="/login">
              <input className="btn-login" type="button" value="Login" />
            </NavLink>
          )}
          {/* <NavLink to="/signup">Register</NavLink>
          <NavLink to="/login">Login</NavLink> */}
        </div>
      </nav>
    );
};

export default Header;