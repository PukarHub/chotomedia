import React from 'react'
import choto from '../images/choto.jpg'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
        <div className="navbar-brand">
        <p className="image is-64x64" id="choto">
         <Link to="/">
            <img src={choto} alt="Loading...." />
         </Link>
        </p>
                         
        </div>
          <div className="navbar-menu">
          <div className="navbar-end">
              <input type="search" id="search" placeholder="  Go Choto"/>
          </div>
          </div>
        </div>
    )
}

export default Navbar
