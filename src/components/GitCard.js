import React from 'react';
import './GitCard.css';

function GitCard(props) {
    return (
        <a href={props.data.link} className="linkkk">
            <div class="box">
            <div className="first-row">
                {props.data.title}
                <div className="max-d">

                </div>
                <div>
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
{/*
<button style={{backgroundColor:'transparent',padding:5,fontWeight:'0',borderRadius:9,borderWidth:0.5,borderColor:'#fff300',color:'#fff300',fontSize:11.5}}>JavaScript</button>
*/}