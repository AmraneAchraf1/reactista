import React from "react";
import { Link, NavLink } from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi";

import {BiUser, BiLogOut} from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/auth";
import { actions as modal } from "../../store/modalSlice";


const AppBar = () => {
  const isLogin = useSelector((state)=>state.auth.login)
  const dispatch = useDispatch()
  const {logout} = actions;
  const {openModal } = modal;


  const handleLogin = ()=>{
    dispatch(openModal())
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container">
      <div className="container">
        <Link className="navbar-brand  " to="/">
          Shopping 
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" end aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="post">
                Post
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" href="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          
          <button className="btn btn-outline-dark "><FiShoppingCart className="mx-1"/> Cart  <span className=" mx-1">0</span></button>

          <div>
          {isLogin ?<button className="btn btn-outline-dark mx-4" onClick={() => dispatch(logout())} ><BiLogOut/> Logout</button> :<button className="btn btn-outline-dark mx-4" onClick={ handleLogin} ><BiUser/> Login</button>}
          
          </div>
          

        </div>
      </div>

    </nav>
  );
};

export default AppBar;
