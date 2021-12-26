import React from 'react';
import './home.css';
import Typewriter from 'typewriter-effect';
import github from '../../images/github.svg'
import twitter from '../../images/twitter2.png'
import instagram from '../../images/instagram.png'
import mail from '../../images/mail.png'
import phone from '../../images/phone.png'

function Home() {
    return (
        <div className="rest">
            <div style={{ fontSize: 55, marginLeft: 45, color: 'white', fontWeight: 500 }}>
                Hi
            </div>
            <div style={{ fontSize: 55, marginLeft: 45, color: 'white', fontWeight: 500 }}>
                I'm Rushil,
            </div>
            <div className="typing">
                <div>
                    I am a
                </div>
                <div style={{ color: '#fc6d6d', marginLeft: 15 }}>
                    <Typewriter
                        options={{
                            strings: ['Student', 'Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div style={{ fontSize: 55, marginLeft: 45, flexDirection: 'row' }}>
                <a href={'https://github.com/Rushil10'} className="linkkk">
                    <img src={github} style={{ height: 35, width: 35 }} />
                </a>
                <a href={'https://twitter.com/RushilS43311479'} className="linkkk">
                    <img src={twitter} style={{ height: 35, width: 35 }} />
                </a>
                <a href={'https://www.instagram.com/rushil.10/'} className="linkkk">
                    <img src={instagram} style={{ height: 35, width: 35 }} />
                </a>
                <a href="mailto: rushil.10.shah@gmail.com" className="linkkk">
                    <img src={mail} style={{ height: 35, width: 35 }} />
                </a>
                <a href="tel:816-984-6575" className="linkkk">
                    <img src={phone} style={{ height: 35, width: 35 }} />
                </a>
            </div>
        </div >
    )
}

export default Home;