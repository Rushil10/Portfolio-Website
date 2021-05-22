import React from 'react';
import './home.css';
import Typewriter from 'typewriter-effect';

function Home() {
    return (
        <div className="rest">
            <div style={{fontSize: 55,marginLeft: 45,color:'white',fontWeight:500}}>
                Hi
            </div>
            <div style={{fontSize: 55,marginLeft: 45,color:'white',fontWeight:500}}>
                I'm Rushil,
            </div>
            <div className="typing">
                <div>
                    I am a 
                </div>
                <div style={{color:'#fc6d6d',marginLeft:15}}>
                <Typewriter
                    options={{
                    strings: ['Student', 'Developer'],
                    autoStart: true,
                    loop: true,
                }}
                />
                </div>
            </div>
            <a href="/contact">
                <button style={{fontSize:19,paddingTop:9,paddingBottom:9,borderRadius:5.5,backgroundColor:'transparent',borderWidth:0.5,borderColor:'#fc6d6d',paddingLeft:9,paddingRight:9,color:'#fc6d6d',marginLeft:45}}>Contact Me</button>
            </a>
        </div>
    )
}

export default Home;