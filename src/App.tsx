import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Courses from "./modules/courses/Courses";

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

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container={true} className={classes.root}>
        <h1>Learn to Dance</h1>
      </Grid>
      <Grid container={true}>
        <Courses/>
      </Grid>
    </>
  );
}

export default App;
