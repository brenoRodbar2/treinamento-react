import React from 'react'
import Cliente from './Cliente'

const NavLinks = () => {
  return (
    <div className='ml-4 flex gap-12'>
      <ul className='flex gap-4'>
        <li>Home</li>
        <li>Blog</li>
        <li>About</li>
      </ul>

      <Cliente />
    </div>
  )
}

export default NavLinks