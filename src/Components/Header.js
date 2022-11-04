import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='Header_div'>
        <div className='Header_left'>
          <NavLink to="/bestmodal" activeClassName="active" className="link">Best Model</NavLink>
           <NavLink to="/comparison" activeClassName="active" className="link">Comparison</NavLink>
           <NavLink to="/Allmodels" activeClassName="active" className="link">All Models</NavLink>
          
        </div>
         <div className='Header_right'>
            <span>View Pipeline</span>
            <span className='download'>Download</span>
         </div>
    </div>
  )
}

export default Header