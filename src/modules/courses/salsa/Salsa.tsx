import React from "react";
import {List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaVideo } from "react-icons/fa";

import Header from "../../../shared/components/Header"

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: 0,
    "& div": {
      backgroundColor: "#f5f5f5",
      borderBottom: "1px solid #969696",
    }
  },
  lesson: {
    "& p": {
      marginLeft: "50px",
    }
  }
});
  

const Salsa: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Header>
                  <Link to={"/"}>
                    <IoIosArrowBack/>
                  </Link>
                  <h1>Salsa</h1>
            </Header>
            <List className={classes.root}>
              <ListItem button className={classes.lesson}>
                <FaVideo/>
                <p>Basic Steps</p>
              </ListItem>
              <ListItem button  className={classes.lesson}>
                <FaVideo/>
                <p>Turn Left</p>
              </ListItem>
            </List>
        </>
    );
  }
  
export default Salsa;