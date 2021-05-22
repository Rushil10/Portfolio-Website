import React from 'react';
import './navbar.css';
import {NavLink} from 'react-router-dom'
import ResponsiveMenu from 'react-responsive-navbar';
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import { useLocation } from 'react-router-dom'


function Navbar() {
    const location = useLocation();
    return (
        <ResponsiveMenu
        menuOpenButton={
            <div>
                <FaBars style={{color:"#1da1f2",height:29,width:29,paddingTop:5}} />
            </div>
        }
        menuCloseButton={<div>
            <FaTimes style={{color:"#1da1f2",height:29,width:29,paddingTop:5}} />
        </div>}
        changeMenuOn="600px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
            <div style={{paddingBottom:15}}>
               <div style={{marginTop:5}}>
                   {
                       location.pathname === "/" ?
                       <a className="a-link" href="/">Home</a>
                       :
                       <a className="not-a-link" href="/">Home</a>
                   }
               </div>
               <div style={{marginTop:5}}>
               {
                       location.pathname === "/about" ?
                       <a className="a-link" href="/about">About</a>
                       :
                       <a className="not-a-link" href="/about">About</a>
                   }
               </div>
               <div style={{marginTop:5}}>
               {
                       location.pathname === "/projects" ?
                       <a className="a-link" href="/projects">Projects</a>
                       :
                       <a className="not-a-link" href="/projects">Projects</a>
                   }
               </div>
               <div style={{marginTop:5}}>
               {
                       location.pathname === "/experience" ?
                       <a className="a-link" href="/experience">Experience</a>
                       :
                       <a className="not-a-link" href="/experience">Experience</a>
                   }
               </div>
               <div style={{marginTop:5,marginBottom:5}}>
               {
                       location.pathname === "/contact" ?
                       <a className="a-link" href="/contact">Contact</a>
                       :
                       <a className="not-a-link" href="/contact">Contact</a>
                   }
               </div>
            </div>
        }
      />
    )
}

export default Navbar;