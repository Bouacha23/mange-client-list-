import React from 'react'
import {Link} from "react-router-dom"
import { MdDashboard } from "react-icons/md";
const Navbar = ()=>{
    return (
        <div className="navbar">
           <div className="container">
            <div className="logo">
            <MdDashboard/>
            </div>
            <ul className='nav'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/New"><li>New </li></Link>
                <Link to="/About"><li>About us</li></Link>
            </ul>

           </div>
        </div>
    )
}

export default Navbar ;