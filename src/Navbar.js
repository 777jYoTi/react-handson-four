import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* <Link clas to></Link> */}
        <Link clas to='/' className='text'> HOME</Link>
        <Link to='/Student' className='text'> STUDENT</Link>
        <Link to='/Contact' className='text'> CONTACT</Link>
    </div>
  )
}

export default Navbar