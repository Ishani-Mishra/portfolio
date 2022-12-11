import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
    return (
        <>
          <div className="navbar">
            <div className="home nav-item"><Link className="Link" to={'/'}>HOME</Link></div>
            <div className="projects nav-item"><Link className="Link" to={'/projects'}>PROJECTS</Link></div>
            <div className="getintouch nav-item"><Link className="Link" to={'/get-in-touch'}>GET IN TOUCH</Link></div>
            <div className="publication nav-item"><Link className="Link" to={'/publication'}>PUBLICATION</Link></div>
            <div className="blogs nav-item"><Link className="Link" to={'/blogs'}>BLOGS</Link></div>
          </div>  
        </>
    )
}
export default Navbar

