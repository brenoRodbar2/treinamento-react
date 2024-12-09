import React, { useContext } from 'react'
import { NavbarContext } from './Navbar'

const Cliente = () => {
 const value =  useContext(NavbarContext)
  return (
    <div>{value}</div>
  )
}

export default Cliente