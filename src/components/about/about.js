import React from "react";
import me from "../../images/me.jpg";
import c from "../../images/c.jpg";
import liverpool2 from "../../images/liverpool2.jpg";
import pl from "../../images/pl.jpg";
import { FaTv } from "react-icons/fa";
import "./about.css";
import liverpool4 from "../../images/liverpool4.svg";
import vr from "../../images/vr.svg";
import clg from "../../images/clg.svg";
import bt from "../../images/bt.svg";
import react from "../../images/react.svg";
import reactnative from "../../images/react-native.svg";
import redux from "../../images/redux.svg";
import flutter from "../../images/flutter.svg";
import firebase from "../../images/firebase.svg";
import node from "../../images/node-js.svg";
import mysql from "../../images/mysql.svg";
import solidity from "../../images/solidity.svg";
import mongo from "../../images/mongo.png";
import pytorch from "../../images/pytorch.png";
import kotlin from "../../images/kotlin.png";
import elastic from "../../images/elastic.png";
import { Grid } from "@mui/material";

function About() {
  return (
    <div className="above">
      <div className="mainl">
        <div style={{ alignItems: "center" }}>
          <img
            alt="me"
            src={me}
            style={{ height: 275, resize: "cover", borderRadius: 15 }}
          />
        </div>
        <div style={{ color: "#101010", fontWeight: 500, fontSize: 41 }}>
          About Me
        </div>
        <div style={{ fontSize: 25, paddingLeft: 9, paddingRight: 9 }}>
          Hi , My name is Rushil Shah. I like to Code.
        </div>
        <div className="first">
          <div className="icon">
            <img src={clg} style={{ height: 35, width: 35 }} />
            <div className="icon-text">
              I am a last year Commputer Science student at K J Somaiya College
              Of Engineering.
            </div>
          </div>
        </div>
        <div className="first">
          <div className="icon">
            <img src={bt} style={{ height: 35, width: 35 }} />
            <div className="icon-text">
              I enjoy building software to solve problems. I am a full stack
              developer.
            </div>
          </div>
        </div>
        <div className="first">
          <div className="icon">
            <img src={liverpool4} style={{ height: 35, minWidth: 35 }} />
            <div className="icon-text">
              When i am free, I like to watch sports specially football. My
              favourite club is LiverpoolFC which plays in Premier League.
            </div>
          </div>
        </div>
        <div className="first">
          <div className="icon">
            <img src={vr} style={{ height: 35, width: 35 }} />
            <div className="icon-text">
              I also have a great intrest in AR , VR and CGI.
            </div>
          </div>
        </div>
      </div>
      <div className="technical_main">
        <div className="technical_skill_header">Technical Skills</div>
        {/* <div className="first">
          <div className="technical_icon">
            <img src={react} style={{ height: 29, width: 29 }} />
            <div className="technical_text">React</div>
          </div>
        </div>
        <div className="first">
          <div className="technical_icon">
            <img src={reactnative} style={{ height: 29, width: 29 }} />
            <div className="technical_text">React Native</div>
          </div>
        </div>
        <div className="first">
          <div className="technical_icon">
            <img src={flutter} style={{ height: 29, width: 29 }} />
            <div className="technical_text">Flutter</div>
          </div>
        </div>
        <div className="first">
          <div className="technical_icon">
            <img src={node} style={{ height: 29, width: 29 }} />
            <div className="technical_text">Node JS / Express</div>
          </div>
        </div>
        <div className="first">
          <div className="technical_icon">
            <img src={redux} style={{ height: 29, width: 29 }} />
            <div className="technical_text">Redux</div>
          </div>
        </div>
        <div className="first">
          <div className="technical_icon">
            <img src={solidity} style={{ height: 29, width: 29 }} />
            <div className="technical_text">Solidity</div>
          </div>
        </div>
        <div className="first">
          <div className="technical_icon">
            <img src={mongo} style={{ height: 29, width: 29 }} />
            <div className="technical_text">MongoDB</div>
          </div>
        </div>
        <div className="first">
          <div className="technical_icon">
            <img src={mysql} style={{ height: 29, width: 29 }} />
            <div className="technical_text">MySQL</div>
          </div>
        </div>
        <div className="first">
          <div className="technical_icon">
            <img src={firebase} style={{ height: 29, width: 29 }} />
            <div className="technical_text">Firebase</div>
          </div>
        </div> */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="technical_icon">
              <img src={react} style={{ height: 29, width: 29 }} />
              <div className="technical_text">React</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="technical_icon">
              <img src={reactnative} style={{ height: 29, width: 29 }} />
              <div className="technical_text">React Native</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="technical_icon">
              <img src={flutter} style={{ height: 29, width: 29 }} />
              <div className="technical_text">Flutter</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="technical_icon">
              <img src={kotlin} style={{ height: 29, width: 29 }} />
              <div className="technical_text">Android Dev</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="technical_icon">
              <img src={node} style={{ height: 29, width: 29 }} />
              <div className="technical_text">Node JS / Express</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="technical_icon">
              <img src={solidity} style={{ height: 29, width: 29 }} />
              <div className="technical_text">Solidity</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="technical_icon">
              <img src={elastic} style={{ height: 29, width: 29 }} />
              <div className="technical_text">Elastic Stack</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="technical_icon">
              <img src={redux} style={{ height: 29, width: 29 }} />
              <div className="technical_text">Redux</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="technical_icon">
              <img src={mongo} style={{ height: 29, width: 29 }} />
              <div className="technical_text">MongoDB</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="technical_icon">
              <img src={mysql} style={{ height: 29, width: 29 }} />
              <div className="technical_text">MySQL</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="technical_icon">
              <img src={firebase} style={{ height: 29, width: 29 }} />
              <div className="technical_text">Firebase</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="technical_icon">
              <img src={pytorch} style={{ height: 29, width: 29 }} />
              <div className="technical_text">Pytorch</div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <a href="/contact">
              <button
                onClick
                style={{
                  height: 35,
                  backgroundColor: "black",
                  borderWidth: 1,
                  borderColor: "black",
                  borderRadius: 5,
                  paddingLeft: 9,
                  paddingRight: 9,
                  color: "white",
                  marginLeft: 15,
                  marginTop: 25,
                }}
              >
                Contact Me
              </button>
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;
