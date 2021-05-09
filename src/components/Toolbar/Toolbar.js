import React from 'react';
import './Toolbar.css'
import {FaHome,FaUser,FaProjectDiagram,FaSuitcase,FaEnvelope} from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

function Toolbar() {
    const location = useLocation();
    console.log(location.pathname);
    return(
        <div className="toolbar">
            <div style={{flexDirection:'column'}}>
                <div style={{alignItems:'center',justifyContent:'center',textAlign:'center',marginBottom:25}}>
                    {
                        location.pathname === "/" ?
                        <a href="/"><FaHome style={{color:'#fc6d6d',height:27,width:27}} /></a>
                        :
                        <a href="/"><FaHome style={{color:'bcdfeb',height:27,width:27}} /></a>
                    }
                </div>
                <div style={{alignItems:'center',justifyContent:'center',textAlign:'center',marginBottom:25}}>
                    {
                        location.pathname === "/about" ?
                        <a href="/about"><FaUser style={{color:'#fc6d6d',height:27,width:27}} /></a>
                        :
                        <a href="/about"><FaUser style={{color:'#bcdfeb',height:27,width:27}} /></a>
                    }
                </div>
                <div style={{alignItems:'center',justifyContent:'center',textAlign:'center',marginBottom:25}}>
                    {
                        location.pathname === "/projects" ?
                        <a href="/projects"><FaProjectDiagram style={{color:'#fc6d6d',height:27,width:27}} /></a>
                        :
                        <a href="/projects"><FaProjectDiagram style={{color:'#bcdfeb',height:27,width:27}} /></a>
                    }
                </div>
                <div style={{alignItems:'center',justifyContent:'center',textAlign:'center',marginBottom:25}}>
                    {
                        location.pathname === "/experience" ?
                        <a href="/experience"><FaSuitcase style={{color:'#fc6d6d',height:27,width:27}} /></a>
                        :
                        <a href="/experience"><FaSuitcase style={{color:'#bcdfeb',height:27,width:27}} /></a>
                    }
                </div>
                <div style={{alignItems:'center',justifyContent:'center',textAlign:'center',marginBottom:25}}>
                    {
                        location.pathname === "/contact" ?
                        <a href="/contact"><FaEnvelope style={{color:'#fc6d6d',height:27,width:27}} /></a>
                        :
                        <a href="/contact"><FaEnvelope style={{color:'#bcdfeb',height:27,width:27}} /></a>
                    }
                </div>
            </div>
        </div>
    )
}

export default Toolbar

