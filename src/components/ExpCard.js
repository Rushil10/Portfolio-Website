import React from 'react';
import './ExpCard.css';
import mn from '../images/mn.png'
import ps from '../images/ps.svg'
import apst from '../images/apst.svg'
import n from '../images/n.png'
import g from '../images/github.svg'
import coinstorey from '../images/coinstorey.png'
import travo from '../images/travo.png'

function ExpCard(props) {

    const logos = [coinstorey, travo, mn, n]

    return (
        <div className="exp_container">
            {/*
                
                <div className="exp_dummy">

        </div>
             */
            }
            <div className="exp_box">
                <div className="exp_first-row">
                    <div className="exp_image">
                        <img src={logos[props.index]} style={{ height: 41, width: 41 }} />
                    </div>
                    <div className="exp_cname">
                        {props.item.name}
                    </div>
                </div>
                <div className="exp_position">
                    {props.item.role}
                </div>
                <div className="exp_term">
                    {props.item.term}
                </div>
                <div className="exp_description">
                    {props.item.description}
                </div>
                <div className="exp_links">
                    {
                        props.item.plink !== '' &&
                        <a href={props.item.plink}><img src={ps} style={{ height: 35, width: 35, marginRight: 5 }} /></a>
                    } {
                        props.item.alink !== '' &&
                        <a href=""><img src={apst} style={{ height: 35, width: 35 }} /></a>
                    }
                    {
                        props.item.glink !== '' &&
                        <a href={props.item.glink}><img src={g} style={{ height: 29, width: 29 }} /></a>
                    }
                </div>
            </div>
        </div>
    )
}

export default ExpCard;