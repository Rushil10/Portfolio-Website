import React from 'react';
import './Toolbar.css'
import {FaHome,FaUser,FaProjectDiagram,FaSuitcase,FaEnvelope} from 'react-icons/fa'

function Toolbar() {
    return(
        <div className="toolbar">
            <div style={{flexDirection:'column'}}>
                <div style={{alignItems:'center',justifyContent:'center',textAlign:'center',marginBottom:25}}>
                    <a href="/"><FaHome style={{color:'#bcdfeb',height:27,width:27}} /></a>
                </div>
                <div style={{alignItems:'center',justifyContent:'center',textAlign:'center',marginBottom:25}}>
                    <a href="/about"><FaUser style={{color:'#1da1f2',height:27,width:27}} /></a>
                </div>
                <div style={{alignItems:'center',justifyContent:'center',textAlign:'center',marginBottom:25}}>
                    <FaProjectDiagram style={{color:'#1da1f2',height:27,width:27}} />
                </div>
                <div style={{alignItems:'center',justifyContent:'center',textAlign:'center',marginBottom:25}}>
                    <FaSuitcase style={{color:'#1da1f2',height:27,width:27}} />
                </div>
                <div style={{alignItems:'center',justifyContent:'center',textAlign:'center',marginBottom:25}}>
                    <FaEnvelope style={{color:'#1da1f2',height:27,width:27}} />
                </div>
            </div>
        </div>
    )
}

export default Toolbar

