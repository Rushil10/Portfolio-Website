import React from 'react';
import GitCard from '../GitCard';
import './projects.css'

function Projects() {

    const projects = [
        {
            title:'Twitter Clone',
            date:'Nov 2020',
            link:'https://github.com/Rushil10/Twitter-Clone-FrontEnd',
            description:'A React Js and firebase project to create a Twitter Clone with all basic and complex functionalities. Redux was used for state management.',
            languages:[
                {
                    name:'javascript',
                },
                {
                    name:'react',
                },
                {
                    name:'firebase'
                },
                {
                    name:'redux'
                }
            ]
        },
        {
            title:'ReadFlix',
            date:'Jan 2021',
            link:'https://github.com/Rushil10/Redss',
            description:'An app where you can post series,book or movie you are currently watching and get reviews of your followers about it.',
            languages:[
                {
                    name:'react-native',
                },
                {
                    name:'mysql'
                },
                {
                    name:'redux',
                },
                {
                    name:'express'
                }
            ]
        },
        {
            title:'News App',
            date:'Aug 2020',
            link:'https://github.com/Rushil10/News-App',
            description:'A News App with different filters, dark mode, search and share functionality.',
            languages:[
                {
                    name:'react-native'
                },
            ]
        },
        {
            title:'Leaderboard UI',
            date:'Feb 2021',
            link:'https://github.com/Rushil10/LeaderBoard-UI',
            description:'Basic and simplistic leaderboard UI.',
            languages:[
                {
                    name:'react-native'
                }
            ]
        },
        {
            title:'Move Recommendation System',
            date:'Mar 2021',
            link:'https://github.com/Rushil10/MovieRecommendation-System-in-Tkinter',
            description:'Recommending movies based on your live emotion from database.',
            languages:[
                {
                    name:'tkinter'
                },
                {
                    name:'mysql'
                },
                {
                    name:'opencv'
                },
                {
                    name:'tensorflow'
                }
            ]
        }
    ]

    let cards = projects.map(project => <GitCard data={project} />)

    return (
        <div className="main2">
            {cards}
        </div>
    )
}

export default Projects;