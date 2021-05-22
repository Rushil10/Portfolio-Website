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
        </div>
    )
}

export default Home;