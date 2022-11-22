import React from 'react'

function Navbar() {
  return (
    <nav className='navbarWrapper'>
      <ul className='navbarMenuList'>
        <li><a href='#about' className='navbarMenu'>About</a></li>
        <li><a href='#journey' className='navbarMenu'>Journey</a></li>
        <li><a href='/' className='navbarMenu'>Coures</a></li>
        <li><a href='#project' className='navbarMenu'>Project</a></li>
        <li><a href='/' className='navbarMenu'>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar