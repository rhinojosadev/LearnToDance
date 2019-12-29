import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      background: "#bf2323d9",
      border: 0,
      color: 'white',
      height: 48,
      "& svg": {
        fontSize: "45px",
        color: "white",
      },
      "& h1": {
        textAlign: "center",
        margin: "auto",
      }
    },
  });
  

const Header: React.FC = ({children}) => {
    const classes = useStyles();

    return (
            <Grid item={true} container={true} xs={12} className={classes.root}>
              {children}
            </Grid>
    );
  }
  
export default Header;