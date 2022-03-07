import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul className="flex-Header" type="none">
            <li> <Link to='/home' style={{textDecoration:"none"}} className='link' >Home </Link> </li>
            <li> <Link to='/student' style={{textDecoration:"none"}} className='link' >Students </Link> </li>
            <li> <Link to='/contact' style={{textDecoration:"none"}} className='link' >Contact Us </Link> </li>

        </ul>
    </div>
  )
}

export default Header