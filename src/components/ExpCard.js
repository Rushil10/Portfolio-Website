import React from 'react';
import'./ExpCard.css';
import mn from '../images/mn.png'
import ps from '../images/ps.svg' 
import apst from '../images/apst.svg'
import n from '../images/n.png'
import g from '../images/github.svg'

function ExpCard(props) {

    const logos = [mn,n]

    return(
        <div className="container">
            <div className="dummy">

        </div>
            <div className="box">
                <div className="first-row">
                    <div className="image">
                        <img src={logos[props.index]} style={{height:41,width:41}} />
                    </div>
                    <div className="cname">
                        {props.item.name}
                    </div>
                </div>
                <div className="position">
                    {props.item.role}
                </div>
                <div className="term">
                    {props.item.term}
                </div>
                <div className="description">
                    {props.item.description}
                </div>
                <div className="links">
                    {
                        props.item.plink!=='' &&
                        <a href={props.item.plink}><img src={ps} style={{height:35,width:35,marginRight:5}} /></a>
                    } {
                        props.item.alink!=='' &&
                        <a href=""><img src={apst} style={{height:35,width:35}} /></a>  
                    }
                    {
                        props.item.glink!=='' &&
                        <a href={props.item.glink}><img src={g} style={{height:29,width:29}} /></a>
                    }
                </div>
            </div>
        </div>
    )
}

export default ExpCard;