import React from "react";
import ExpCard from "../ExpCard";
import "./experience.css";

function Experience() {
  const exp = [
    {
      name: "Connectwise",
      term: "June 2022 - August 2022",
      role: "Summer SDE Intern",
      description:
        "Worked on elastic stack. Used ealstic search, logstash and Kibana to enhance security of a system. Got to know why elastic is so popular and afast.",
      plink: "",
      alink: "",
      glink: "",
    },
    {
      name: "Coinstorey",
      term: "May 2021 - Nov 2021",
      role: "Lead Mobile App Developer",
      description:
        "Crypto based fantasy gaming platform. Create your portfolio and compete in contests for real money. Crypto prices and news can be tracked in real-time",
      plink: "https://play.google.com/store/apps/details?id=com.coinstorey",
      alink: "",
      glink: "",
    },
    {
      name: "Travokarma",
      term: "Sep 2021 - Nov 2021",
      role: "Mobile App developer",
      description: "Travel Based Application for travel enthusisasts",
      plink: "",
      alink: "",
      glink: "",
    },
    {
      name: "MunchIn",
      term: "Feb 2021 - May 2021",
      role: "React Native developer",
      description:
        "It was a very good experience as an intern.I got to learn many things apart from react-native like coordinating in teams, decision making and problem solving. During these 4 months i worked on every aspect of the app which helped me in increasing my skill and abilities. ",
      plink: "https://play.google.com/store/apps/details?id=com.munchinapp",
      alink: "",
      glink: "",
    },
    {
      name: "Gamers Prestige",
      term: "July 2020 - Sept 2020",
      role: "React Native Developer",
      description:
        "This was my First Internship in react-native. I made a News App from scratch with search,filter and dark mode features. This helped me in understanding and getting familiar with the framework.",
      alink: "",
      plink: "",
      glink: "https://github.com/Rushil10/News-App",
    },
  ];

  let cards = exp.map((item, index) => <ExpCard index={index} item={item} />);

  return (
    <div className="main5">
      <div className="title-exp">Internships</div>
      {cards}
    </div>
  );
}

export default Experience;
