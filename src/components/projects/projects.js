import React from 'react';
import GitCard from '../GitCard';
import './projects.css'

function Projects() {

    const projects = [
        {
            title: 'Player Stats 22',
            date: 'Jan 2022',
            image: 'exists',
            link: 'https://play.google.com/store/apps/details?id=com.fistat.fifa_stats',
            description: 'FIFA 22 Stats Viewer',
            languages: [
                {
                    name: 'flutter',
                },
                {
                    name: 'sq-lite',
                },
            ]
        },
        {
            title: 'Directmart',
            date: 'May 2021',
            image: 'exists',
            link: 'https://play.google.com/store/apps/details?id=com.localApp',
            description: 'An app to help small home business to increase reach. Add your products on our app ans share your shop on different platforms.\nConsumers near the sellers will be able to place order and receive delivery from sellers.\nIt is available on playstore.',
            languages: [
                {
                    name: 'react-native',
                },
                {
                    name: 'mysql',
                },
                {
                    name: 'firebase'
                },
                {
                    name: 'express',
                },
            ]
        },
        {
            title: 'Playmate',
            date: 'Sep 2021',
            image: 'exists',
            link: 'https://playmate.vercel.app/',
            description: 'It is difficult to find sports group for playing a sport. This website solves this problem where yo can join sports events organised by people near you. Play and Enjoy',
            languages: [
                {
                    name: 'react',
                },
                {
                    name: 'mongodb',
                },
                {
                    name: 'firebase'
                },
                {
                    name: 'redux',
                },
                {
                    name: 'express',
                },
            ]
        },
        {
            title: 'Decentagram',
            date: 'Nov 2021',
            image: 'exists',
            link: 'https://github.com/Rushil10/decentragram',
            description: 'Blockchain based instagram website. Features like add image, post, tip image owner. Solidity used for smart contract and React for frontEnd.',
            languages: [
                {
                    name: 'solidity',
                },
                {
                    name: 'react',
                },
                {
                    name: 'ganache'
                }
            ]
        },
        {
            title: 'Twitter Clone',
            date: 'Nov 2020',
            image: 'exists',
            link: 'https://github.com/Rushil10/Twitter-Clone-FrontEnd',
            description: 'A React Js and firebase project to create a Twitter Clone with all basic and complex functionalities. Redux was used for state management.',
            languages: [
                {
                    name: 'javascript',
                },
                {
                    name: 'react',
                },
                {
                    name: 'firebase'
                },
                {
                    name: 'redux'
                }
            ]
        },
        {
            title: 'ReadFlix',
            date: 'Jan 2021',
            link: 'https://github.com/Rushil10/Redss',
            description: 'An app where you can post series,book or movie you are currently watching and get reviews of your followers about it.',
            languages: [
                {
                    name: 'react-native',
                },
                {
                    name: 'mysql'
                },
                {
                    name: 'redux',
                },
                {
                    name: 'express'
                }
            ]
        },
        {
            title: 'News App',
            date: 'Aug 2020',
            link: 'https://github.com/Rushil10/News-App',
            description: 'A News App with different filters, dark mode, search and share functionality.',
            languages: [
                {
                    name: 'react-native'
                },
            ]
        },
        {
            title: 'Leaderboard UI',
            date: 'Feb 2021',
            link: 'https://github.com/Rushil10/LeaderBoard-UI',
            description: 'Basic and simplistic leaderboard UI.',
            languages: [
                {
                    name: 'react-native'
                }
            ]
        },
        {
            title: 'Move Recommendation System',
            date: 'Mar 2021',
            link: 'https://github.com/Rushil10/MovieRecommendation-System-in-Tkinter',
            description: 'Recommending movies based on your live emotion from database.',
            languages: [
                {
                    name: 'tkinter'
                },
                {
                    name: 'mysql'
                },
                {
                    name: 'opencv'
                },
                {
                    name: 'tensorflow'
                }
            ]
        }
    ]

    let cards = projects.map((project, index) => <GitCard data={project} index={index} />)

    return (
        <div className="main2">
            {cards}
        </div>
    )
}

export default Projects;