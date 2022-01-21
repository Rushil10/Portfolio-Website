import React from 'react';
import './GitCard.css';
import twitter from '../images/twitter.png'
import directmart from '../images/directmart.png'
import playmate from '../images/playmate.png'
import instagram from '../images/instagram.png'
import fifa from '../images/fifa.png'

function GitCard(props) {
    const logos = [fifa,directmart, playmate, instagram, twitter]
    return (
        <a href={props.data.link} className="linkkk">
            <div className="dummy">

            </div>
            <div class="box">
                <div className="first-row">
                    {
                        props.data.image &&
                        <div>
                            <img alt="Icon" src={logos[props.index]} style={{ height: 35, width: 35, marginRight: 15 }} />
                        </div>
                    }
                    {props.data.title}
                    <div className="max-d">

                    </div>
                    <div className="date">
                        {props.data.date}
                    </div>
                </div>
                <div className="second-row">
                    {props.data.description}
                </div>
                <div className="languages">
                    {
                        props.data.languages.map(language =>
                            <div className={`language ${language.name}`}>
                                {language.name}
                            </div>
                        )
                    }
                </div>
            </div>
        </a>
    )
}

export default GitCard;
