import React from 'react';
import'./ExpCard.css';
import mn from '../images/mn.png'
import ps from '../images/ps.svg' 
import apst from '../images/apst.svg'

function ExpCard() {
    return(
        <div className="container">
            <div className="box">
                <div className="first-row">
                    <div className="image">
                        <img src={mn} style={{height:41,width:41}} />
                    </div>
                    <div className="cname">
                        MunchIn
                    </div>
                </div>
                <div className="position">
                    Lead React Native Developer
                </div>
                <div className="term">
                    Feb 2021 - May 2021
                </div>
                <div className="description">
                    It was a very good experience as an intern.I got to learn many things apart from react-native like coordinating in teams, decision making and problem solving. During these 4 months i worked on every aspect of the app which helped me in increasing my skill and abilities. 
                </div>
                <div className="links">
                    <a href="https://play.google.com/store/apps/details?id=com.munchinapp"><img src={ps} style={{height:35,width:35,marginRight:5}} /></a>
                    <a href=""><img src={apst} style={{height:35,width:35}} /></a>
                </div>
            </div>
        </div>
    )
}

export default ExpCard;