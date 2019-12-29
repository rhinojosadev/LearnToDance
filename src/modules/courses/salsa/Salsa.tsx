import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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
  

const Salsa: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Grid item={true} xs={12}  className={classes.root}>
                Back
            </Grid>
        </>
    );
  }
  
export default Salsa;