import React from "react";
import { NavLink } from "react-router-dom";
function Navbar()
{
    return(
        <>
            <NavLink className="display-1" to="/">Home</NavLink>
            <NavLink className="display-1" to="/about">About Us</NavLink>
            <NavLink className="display-1" to="/contact">Contact Us</NavLink>
        </>
    );
}
export default Navbar;