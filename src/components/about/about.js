import React from 'react';
import me from '../../images/me.jpg'
import c from '../../images/c.jpg'
import liverpool2 from '../../images/liverpool2.jpg'
import pl from '../../images/pl.jpg'
import {FaTv} from 'react-icons/fa'
import './about.css'
import liverpool4 from '../../images/liverpool4.svg'
import vr from '../../images/vr.svg'
import clg from '../../images/clg.svg'
import bt from '../../images/bt.svg'

function About() {
    return (
        <div style={{flex:1,marginLeft:55}}>
            <div style={{alignItems:'center',justifyContent:'center',textAlign:'center',marginTop:15}}>
                <img alt="me" src={c} style={{height:275,resize:'cover',borderRadius:15}} />
                <div style={{color:'#101010',fontWeight:500,fontSize:41}}>
                    About Me
                </div>
                <div style={{fontSize:25}}>
                    Hi , My name is Rushil Shah. I like to Code.
                </div>
                <div className="first">
                    <div className="icon">
                    <img src={clg} style={{height:35,width:35}} />
                        <div className="icon-text">
                        I am a second year student at K J Somaiya College Of Engineering.
                        </div>
                    </div>
                </div>
                <div className="first">
                    <div className="icon">
                    <img src={bt} style={{height:35,width:35}} />
                        <div className="icon-text">
                        I enjoy building software to solve problems. I am a frontend and backend developer.
                        </div>
                    </div>
                </div>
                <div className="first">
                    <div className="icon">
                        <img src={liverpool4} style={{height:35,width:35}} />
                        <div className="icon-text">
                        When i am free , I like to watch sports specially football.My favourite club is LiverpoolFC which plays in Premier League.
                        </div>
                    </div>
                </div>
                <div className="first">
                    <div className="icon">
                        <img src={vr} style={{height:35,width:35}} />
                        <div className="icon-text">
                        I also have a great intrest in AR , VR and CGI.
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default About;