import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex justify-between px-4 h-16 items-center'>
        <div className='logo font-bold text-lg flex items-center justify-center gap-1'>
           <span><img src="chai.gif" width={44}></img></span> GetMeAChai!
        </div>
        <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul>
      
    </nav>
  )
}

export default Navbar
