import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import github from "../../images/github.svg";
import twitter from "../../images/twitter2.png";
import instagram from "../../images/instagram.png";
import mail from "../../images/mail.png";
import phone from "../../images/phone.png";
import linkedin from "../../images/linkedin.png";

function Home() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Rushil's resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Rushil's resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="rest">
      <div
        style={{
          fontSize: 55,
          marginLeft: 45,
          color: "white",
          fontWeight: 500,
        }}
      >
        Hi
      </div>
      <div
        style={{
          fontSize: 55,
          marginLeft: 45,
          color: "white",
          fontWeight: 500,
        }}
      >
        I'm Rushil,
      </div>
      <div className="typing">
        <div>I am a</div>
        <div style={{ color: "#fc6d6d", marginLeft: 15 }}>
          <Typewriter
            options={{
              strings: ["Student", "Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <button
        onClick={onButtonClick}
        style={{
          height: 35,
          width: 155,
          marginLeft: 45,
          backgroundColor: "#fc6d6d",
          borderRadius: 5,
          paddingLeft: 9,
          paddingRight: 9,
          color: "black",
        }}
      >
        Download Resume
      </button>
      <div style={{ fontSize: 55, marginLeft: 45, flexDirection: "row" }}>
        <a href={"https://github.com/Rushil10"} className="linkkk">
          <img src={github} style={{ height: 35, width: 35 }} />
        </a>
        <a
          href={"https://www.linkedin.com/in/rushil-shah-614b541a6/"}
          className="linkkk"
        >
          <img src={linkedin} style={{ height: 35, width: 35 }} />
        </a>
        <a href={"https://twitter.com/RushilS43311479"} className="linkkk">
          <img src={twitter} style={{ height: 35, width: 35 }} />
        </a>
        <a href={"https://www.instagram.com/rushil.10/"} className="linkkk">
          <img src={instagram} style={{ height: 35, width: 35 }} />
        </a>
        <a href="mailto: rushil.10.shah@gmail.com" className="linkkk">
          <img src={mail} style={{ height: 35, width: 35 }} />
        </a>
        <a href="tel:816-984-6575" className="linkkk">
          <img src={phone} style={{ height: 35, width: 35 }} />
        </a>
      </div>
    </div>
  );
}

export default Home;
