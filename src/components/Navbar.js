import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate()
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (!token) {
      setLoginStatus(false)
    } else {
      setLoginStatus(true)
    }
  }, [loginStatus])
  const onLogOutHandler = () => {
    localStorage.clear()
    loginStatus(false)
    navigate('/login')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">GroceryApp</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          {loginStatus ? (<Link className="btn btn-danger my-2 my-sm-0" onClick={onLogOutHandler}>Log Out</Link>
          ) : (<Link className="btn btn-primary my-2 my-sm-0" to={'/login'}>Log In</Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
