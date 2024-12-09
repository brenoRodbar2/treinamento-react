import React, { useState, createContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

const Navbar = () => {
  const [isTrue, setIsTrue] = useState('Hello World');
  return (
    <NavbarContext.Provider value={isTrue}>
      <div className="flex items-center justify-around">
        ContextAPI
        <NavLinks />
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
