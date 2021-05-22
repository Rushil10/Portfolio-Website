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
            <div className="nav-row">
                <div className="nav-title">
                    
                </div>
                {
                    (location.pathname==="/" || location.pathname==="/experience" || location.pathname==="/projects" ) ?
                    <FaBars style={{color:"#fc6d6d",height:35,width:29,paddingTop:9,paddingBottom:9,alignSelf:'flex-end',paddingRight:25}} />
                    :
                    <FaBars style={{color:"#1da1f6",height:35,width:29,paddingTop:9,paddingBottom:9,alignSelf:'flex-end',paddingRight:25}} />
                }
            </div>
        }
        menuCloseButton={<div className="nav-row">
            <div className="nav-title">
            
            </div>
            {
                    (location.pathname==="/" || location.pathname==="/experience" || location.pathname==="/projects" ) ?
                    <FaTimes style={{color:"#fc6d6d",height:35,width:29,paddingTop:9,paddingBottom:9,paddingRight:25}} />                    :
                    <FaTimes style={{color:"#1da1f6",height:35,width:29,paddingTop:9,paddingBottom:9,paddingRight:25}} />            }
        </div>}
        changeMenuOn="600px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
            <div style={{paddingBottom:15}}>
               <div style={{marginTop:15}}>
                   {
                       location.pathname === "/" ?
                       <a className="a-link" href="/">Home</a>
                       :
                       <a className="not-a-link" href="/">Home</a>
                   }
               </div>
               <div style={{marginTop:15}}>
               {
                       location.pathname === "/about" ?
                       <a className="a-linkb" href="/about">About</a>
                       :
                       <a className="not-a-link" href="/about">About</a>
                   }
               </div>
               <div style={{marginTop:15}}>
               {
                       location.pathname === "/projects" ?
                       <a className="a-link" href="/projects">Projects</a>
                       :
                       <a className="not-a-link" href="/projects">Projects</a>
                   }
               </div>
               <div style={{marginTop:15}}>
               {
                       location.pathname === "/experience" ?
                       <a className="a-link" href="/experience">Experience</a>
                       :
                       <a className="not-a-link" href="/experience">Experience</a>
                   }
               </div>
               <div style={{marginTop:15,marginBottom:15}}>
               {
                       location.pathname === "/contact" ?
                       <a className="a-linkb" href="/contact">Contact</a>
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