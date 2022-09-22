import { Grid, Typography } from "@mui/material";
import React from "react";

function ProjectCard(props) {
  return (
    <Grid container alignItems="center" justifyContent={"center"}>
      <Grid item xs={12}>
        <img
          alt="Landscape"
          src={props.data.image}
          style={{
            width: "100%",
            maxHeight: 195,
            backgroundSize: "cover",
          }}
        />
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <img
            alt="Icon"
            src={props.data.icon}
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
      <Grid item xs={12}>
        <Typography color={"#c0c0c0"} variant="body1" component="h2">
          {props.data.description}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ProjectCard;
