import { Grid } from "@mui/material";
import React from "react";
import GitCard from "../GitCard";
import ProjectCard from "../ProjectCard";
import "./projects.css";

function Projects() {
  /* const projects = [
    {
      title: "Player Stats 22",
      date: "Jan 2022",
      image: "exists",
      link: "https://play.google.com/store/apps/details?id=com.fistat.fifa_stats",
      description: "FIFA 22 Stats Viewer",
      languages: [
        {
          name: "flutter",
        },
        {
          name: "sq-lite",
        },
      ],
    },
    {
      title: "Directmart",
      date: "May 2021",
      image: "exists",
      link: "https://play.google.com/store/apps/details?id=com.localApp",
      description:
        "An app to help small home business to increase reach. Add your products on our app ans share your shop on different platforms.\nConsumers near the sellers will be able to place order and receive delivery from sellers.\nIt is available on playstore.",
      languages: [
        {
          name: "react-native",
        },
        {
          name: "mysql",
        },
        {
          name: "firebase",
        },
        {
          name: "express",
        },
      ],
    },
    {
      title: "Playmate",
      date: "Sep 2021",
      image: "exists",
      link: "https://playmate.vercel.app/",
      description:
        "It is difficult to find sports group for playing a sport. This website solves this problem where yo can join sports events organised by people near you. Play and Enjoy",
      languages: [
        {
          name: "react",
        },
        {
          name: "mongodb",
        },
        {
          name: "firebase",
        },
        {
          name: "redux",
        },
        {
          name: "express",
        },
      ],
    },
    {
      title: "Decentagram",
      date: "Nov 2021",
      image: "exists",
      link: "https://github.com/Rushil10/decentragram",
      description:
        "Blockchain based instagram website. Features like add image, post, tip image owner. Solidity used for smart contract and React for frontEnd.",
      languages: [
        {
          name: "solidity",
        },
        {
          name: "react",
        },
        {
          name: "ganache",
        },
      ],
    },
    {
      title: "Twitter Clone",
      date: "Nov 2020",
      image: "exists",
      link: "https://github.com/Rushil10/Twitter-Clone-FrontEnd",
      description:
        "A React Js and firebase project to create a Twitter Clone with all basic and complex functionalities. Redux was used for state management.",
      languages: [
        {
          name: "javascript",
        },
        {
          name: "react",
        },
        {
          name: "firebase",
        },
        {
          name: "redux",
        },
      ],
    },
    {
      title: "ReadFlix",
      date: "Jan 2021",
      link: "https://github.com/Rushil10/Redss",
      description:
        "An app where you can post series,book or movie you are currently watching and get reviews of your followers about it.",
      languages: [
        {
          name: "react-native",
        },
        {
          name: "mysql",
        },
        {
          name: "redux",
        },
        {
          name: "express",
        },
      ],
    },
    {
      title: "News App",
      date: "Aug 2020",
      link: "https://github.com/Rushil10/News-App",
      description:
        "A News App with different filters, dark mode, search and share functionality.",
      languages: [
        {
          name: "react-native",
        },
      ],
    },
    {
      title: "Leaderboard UI",
      date: "Feb 2021",
      link: "https://github.com/Rushil10/LeaderBoard-UI",
      description: "Basic and simplistic leaderboard UI.",
      languages: [
        {
          name: "react-native",
        },
      ],
    },
    {
      title: "Move Recommendation System",
      date: "Mar 2021",
      link: "https://github.com/Rushil10/MovieRecommendation-System-in-Tkinter",
      description:
        "Recommending movies based on your live emotion from database.",
      languages: [
        {
          name: "tkinter",
        },
        {
          name: "mysql",
        },
        {
          name: "opencv",
        },
        {
          name: "tensorflow",
        },
      ],
    },
  ];
 */
  const projects2 = [
    {
      title: "Player Stats 22",
      date: "Jan 2022",
      achievements: ["3K+ Downloads"],
      image: "fifaImage.jpg",
      icon: "fifaIcon.jpg",
      link: "https://play.google.com/store/apps/details?id=com.fistat.fifa_stats",
      gitLink: "https://github.com/Rushil10/Flutter-Fifa-Stats-22",
      description:
        "This apps has FIFA 22 Stats of around 20000 Players. Player Data like rating, overall, age, photo etc is present. You can also add favourites, view emerging players through this. It is also available offline. It makes looking into player stats really easy.",
      languages: [
        {
          name: "flutter",
        },
        {
          name: "sq-lite",
        },
      ],
    },
    {
      title: "Playmate",
      date: "Sep 2021",
      image: "exists",
      link: "https://playmate.vercel.app/",
      image: "playmateImage.jpg",
      icon: "playmateIcon.png",
      gitLink: "https://github.com/Rushil10/playmate-frontend-test",
      description:
        "Main problem why people stop playing is their failure in finding groups. The key difficulty of small groups is not having enough players. We bridge this gap by providing a platform to create, find or join sports events near you.",
      languages: [
        {
          name: "react",
        },
        {
          name: "mongodb",
        },
        {
          name: "firebase",
        },
        {
          name: "redux",
        },
        {
          name: "express",
        },
      ],
    },
    {
      title: "Directmart",
      date: "May 2021",
      icon: "directmartIcon.jpg",
      image: "directmartImage.png",
      link: "https://play.google.com/store/apps/details?id=com.localApp",
      gitLink: "https://github.com/Rushil10/DirectMart",
      description:
        "An app to help small home business to increase reach. Add your products on our app ans share your shop on different platforms.\nConsumers near the sellers will be able to place order and receive delivery from sellers.\nIt is available on playstore.",
      languages: [
        {
          name: "react-native",
        },
        {
          name: "mysql",
        },
        {
          name: "firebase",
        },
        {
          name: "express",
        },
      ],
    },
    {
      title: "Masters Application Tracker",
      date: "Apr 2022",
      gitLink: "https://github.com/Rushil10/Masters-Application-Tracker",
      link: "https://play.google.com/store/apps/details?id=com.universitytracker",
      image: "trackerImage.webp",
      icon: "trackerIcon.webp",
      description:
        "Many students pursue higher studies which involves various problems like tracking cost, tracking application status. Also we want to look at other people data to know where we stand. This app helps you in keeping track of your cost and application status.",
      languages: [
        {
          name: "react-native",
        },
        {
          name: "redux",
        },
        {
          name: "mongodb",
        },
        {
          name: "express",
        },
        {
          name: "firebase",
        },
      ],
    },
    {
      title: "Animated Sports Deck",
      date: "September 2022",
      gitLink:
        "https://github.com/Rushil10/Playing-Cards-Animations-React-Native",
      image: "deckImage.png",
      icon: "deckIcon.webp",
      description:
        "Falling Cards animation in beginning. Swiping left and right of cards like tinder 😂🙂. Also cards coming to their intial place once the deck goes empty. Deck contains cards of sports icons like Messi, Lebron , MJ.",
      languages: [
        {
          name: "tkinter",
        },
        {
          name: "mysql",
        },
        {
          name: "opencv",
        },
        {
          name: "tensorflow",
        },
      ],
    },
    {
      title: "Move Recommendation System",
      date: "Mar 2021",
      gitLink:
        "https://github.com/Rushil10/MovieRecommendation-System-in-Tkinter",
      image: "movieImage.jpg",
      icon: "movieIcon.jpg",
      description:
        "Creating a wonderful UI using Tkinter displaying different movies segregated base on genres. On top of that adding a mood detection feature to recommend you movies based on your mood.",
      languages: [
        {
          name: "tkinter",
        },
        {
          name: "mysql",
        },
        {
          name: "opencv",
        },
        {
          name: "tensorflow",
        },
      ],
    },
  ];

  /*   let cards = projects.map((project, index) => (
    <GitCard data={project} index={index} />
  )); */

  let cards2 = projects2.map((project, index) => (
    <Grid item xs={12} md={6} lg={4}>
      <ProjectCard data={project} index={index} />
    </Grid>
  ));

  //return <div className="main2">{cards}</div>;
  return (
    <div className="main2">
      <Grid container spacing={2}>
        {cards2}
      </Grid>
    </div>
  );
}

export default Projects;
