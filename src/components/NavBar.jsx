import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <nav>
      <Link to="/" className="brand_logo"><span>com</span>pany</Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <li>
          <Link to="/">
          <i className="fa-brands fa-twitter"></i>
          </Link>
        </li>
        <li>
          <Link to="/">
          <i className="fa-brands fa-facebook"></i>
          </Link>
        </li>
        <li>
          <Link to="/">
          <i className="fa-brands fa-instagram"></i>
          </Link>
        </li>
        <li>
          <Link to="/">
          <i className="fa-brands fa-linkedin"></i>
          </Link>
        </li>
      </div>
    </nav>
  )
}

export default NavBar
