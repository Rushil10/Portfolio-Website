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
            <div style={{fontSize: 29,marginLeft: 45,color:'white',flexDirection:'row',width:79}}>
                I'm a
                <div style={{position:'relative',left:69,top:-38.4,color:'#fc6d6d'}}>
                <Typewriter
                    options={{
                    strings: ['Student', 'Developer'],
                    autoStart: true,
                    loop: true,
                }}
                />
                </div>
            </div>
            <div>
                <button style={{height:35,backgroundColor:'transparent',borderWidth:1,borderColor:'#fc6d6d',paddingLeft:9,paddingRight:9,color:'#fc6d6d',marginLeft:45}}>Contact Me</button>
            </div>
        </div>
    )
}

export default Home;