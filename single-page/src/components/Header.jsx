import React from 'react'
import img from "../assets/Combined Shape.png"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
          <div className="header-left">
              <img src={img} alt="" />
              <h3>creative</h3>
          </div>
          <div className="header-right">
              <ul className="header-list">
                  <li> <Link to='/'>About</Link></li>
                  <li><Link to='/service'>Service</Link></li>
                  <li><Link to='/projects'>Projects</Link></li>

              </ul>
              <button className='header_button'>Scedule a Call</button>
          </div>
    </div>
  )
}

export default Header
