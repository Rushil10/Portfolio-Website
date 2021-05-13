import React from 'react';
import ExpCard from '../ExpCard';
import './experience.css'

function Experience() {

    const exp = [
        {
            name:'MunchIn',
            term:'Feb 2021 - May 2021',
            role:'React Native developer',
            description:'It was a very good experience as an intern.I got to learn many things apart from react-native like coordinating in teams, decision making and problem solving. During these 4 months i worked on every aspect of the app which helped me in increasing my skill and abilities. ',
            plink:'https://play.google.com/store/apps/details?id=com.munchinapp',
            alink:'',
            glink:'',
        },
        {
            name:'Gamers Prestige',
            term:'July 2020 - Sept 2020',
            role:'React Native Developer',
            description:'This was my First Internship in react-native. I made a News App from scratch with search,filter and dark mode features. This helped me in understanding and getting familiar with the framework.',
            alink:'',
            plink:'',
            glink:'https://github.com/Rushil10/News-App'
        }
    ]
    
    let cards = exp.map((item,index) => 
        <ExpCard index={index} item={item} />
    )

    return (

        <div className="main5">
            <div className="title-exp">
                Internships
            </div>
            {cards}
        </div>
    )
}

export default Experience;