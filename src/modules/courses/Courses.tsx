import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Card from "../../shared/components/Card";

const useStyles = makeStyles({
    root: {
      background: "#bf2323d9",
      border: 0,
      color: 'white',
      height: 48,
      "& h1": {
        alignSelf: "center",
        margin: "auto",
      }
    },
  });
  

const Courses: React.FC = () => {
    const classes = useStyles();
    
    return (
        <>
            <Grid container={true} className={classes.root}>
                <h1>Learn to Dance</h1>
            </Grid>
            <Grid item={true} container={true} xs={6}>
                <Card name="Salsa" url="/salsa"/>
            </Grid>
            <Grid item={true} container={true} xs={6}>
                <Card name="Bachata" url="/bachata"/>
            </Grid>
            <Grid item={true} container={true} xs={6}>
                <Card name="Hip Hop" url="/hiphop"/>
            </Grid>
        </>
    );
  }
  
export default Courses;