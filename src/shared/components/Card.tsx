import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dance from "../../assets/img/dance.png";

const useStyles = makeStyles({
    root: {
        color: "black",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        margin: "10px",
        borderRadius: "35px",
    },
  
  });

interface Card {
    name: string;
}

const Card: React.FC<Card> = ({name}: Card) => {
    const classes = useStyles();
  
    return (
      <Grid item={true} xs={12} className={classes.root}>
        <h2>{name}</h2>
        <img src={Dance} alt="dance"/>
      </Grid>
    );
}

export default Card;
  
  