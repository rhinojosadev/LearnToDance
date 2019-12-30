import React from "react";
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails  } from '@material-ui/core';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { FaVideo, FaAngleDown } from "react-icons/fa";
import YouTube from "react-yt";

import Header from "../../../shared/components/Header"

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: 0,
    "& div": {
      backgroundColor: "#f5f5f5",
    },
    "& .MuiExpansionPanelSummary-content": {
      "& p": {
        margin: 0,
        marginLeft: "50px",
      }
    }
  },
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
            <div className={classes.root}>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<FaAngleDown />} >
                  <FaVideo/>
                  <p>Basic Steps</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <YouTube
                    videoId={'wV8cDpJa2f4'}
                    autoplay={0}
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel >
                <ExpansionPanelSummary expandIcon={<FaAngleDown />} >
                  <FaVideo/>
                  <p>Turn Right</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <YouTube
                    videoId={'p7Ns9DY7U70'}
                    autoplay={0}
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel >
                <ExpansionPanelSummary expandIcon={<FaAngleDown />} >
                  <FaVideo/>
                  <p>Turn Left</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </p>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
        </>
    );
  }
  
export default Salsa;