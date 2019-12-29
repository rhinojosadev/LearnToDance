import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Dance from "../../assets/img/dance.png";

const useStyles = makeStyles({
    root: {
        color: "black",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        margin: "10px",
        borderRadius: "35px",
        "& a" : {
          textDecoration: "none",
        }
    },
  
  });

interface Card {
    name: string;
    url: string;
}

const Card: React.FC<Card> = ({name, url}: Card) => {
    const classes = useStyles();
  
    return (
      <Grid item={true} xs={12} className={classes.root}>
        <Link to={url}>
          <h2>{name}</h2>
          <img src={Dance} alt="dance"/>
        </Link>
      </Grid>
    );
}

export default Card;
  
  