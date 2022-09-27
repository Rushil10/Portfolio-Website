import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import IosShareIcon from "@mui/icons-material/IosShare";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <Grid
      container
      borderBottom={"1px solid gray"}
      bgcolor={"rgba(39,39,39)"}
      borderRadius="15px"
      alignItems="center"
      justifyContent={"center"}
    >
      <Grid item xs={12}>
        <img
          alt="Landscape"
          src={require(`./projectImages/${props.data.image}`).default}
          style={{
            width: "100%",
            maxHeight: 195,
            backgroundSize: "cover",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        />
      </Grid>
      <Grid container margin="9px">
        <Grid item xs={2}>
          <img
            alt="Icon"
            src={require(`./projectImages/${props.data.icon}`).default}
            style={{ height: 48, width: 48, marginTop: 5 }}
          />
        </Grid>
        <Grid item xs={9} alignItems="center" justifyContent={"center"}>
          <Typography color={"whitesmoke"} variant="h6" component="h2">
            {props.data.title}
          </Typography>
          <Typography color={"#dcdcdc"} variant="subtitle2" component="h2">
            {props.data.date}
          </Typography>
        </Grid>
      </Grid>
      {props.data.achievements && (
        <Grid container marginLeft={"4px"} spacing={1}>
          {props.data.achievements.map((achievement) => (
            <Grid item>
              <Typography color={"#ffd700"} variant="body2">
                {achievement}
              </Typography>
            </Grid>
          ))}
        </Grid>
      )}
      <Grid margin={"9px"} item xs={12}>
        <Typography color={"#c0c0c0"} variant="body1" component="h2">
          {props.data.description}
        </Typography>
      </Grid>
      <Grid
        spacing={1}
        container
        marginLeft="9px"
        marginRight="5px"
        marginBottom={"9px"}
      >
        {props.data.link && (
          <Grid item>
            <a href={props.data.link}>
              <IosShareIcon style={{ color: "white" }} />
            </a>
          </Grid>
        )}
        <Grid item>
          <a href={props.data.gitLink}>
            <GitHubIcon style={{ color: "white" }} />
          </a>
        </Grid>
      </Grid>
      <Grid
        container
        marginLeft="5px"
        marginRight="5px"
        marginBottom={"9px"}
        spacing={1}
      >
        {props.data.languages.map((language) => (
          <Grid item>
            <div className={`language ${language.name}`}>{language.name}</div>
          </Grid>
        ))}
      </Grid>
      {/* <Grid
        marginBottom={"15px"}
        paddingTop={"6px"}
        paddingLeft={"7px"}
        paddingRight={"7px"}
        container
        spacing={2}
      >
        <Grid item xs={6} sm={4}>
          <Button variant="outlined" startIcon={<ImageIcon />}>
            Demo
          </Button>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Button
            style={{
              color: "purple",
              borderColor: "purple",
              background: "#101010",
            }}
            variant="outlined"
            startIcon={<GitHubIcon />}
          >
            Github
          </Button>
        </Grid>
        <Grid textAlign={"end"} item xs={6} sm={4}>
          <Button
            style={{
              color: "#11806a",
              borderColor: "#11806a",
              background: "#101010",
            }}
            variant="outlined"
            startIcon={<AndroidIcon />}
          >
            Playstore
          </Button>
        </Grid>
      </Grid> */}
    </Grid>
  );
}

export default ProjectCard;
