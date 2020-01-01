import React from "react";
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails  } from '@material-ui/core';
import { FaVideo, FaAngleDown, FaStar } from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import YouTube from "react-yt";

const useStyles = makeStyles({
    wrapperLessons: {
      width: "100%",
      padding: 0,
      "& div": {
        backgroundColor: "#f5f5f5",
      },
      "& .MuiExpansionPanelSummary-content": {
        "& p": {
          margin: 0,
          marginLeft: "50px",
          minWidth: "120px",
          maxWidth: "120px",
        }
      }
    }
  });
  
interface Lesson  {
    title: string;
    videoId: string;
    stars: number;
}

const Lesson: React.FC<Lesson> = ({title, videoId, stars}: Lesson) => {
    const classes = useStyles();

    return (
        <ExpansionPanel className={classes.wrapperLessons}>
            <ExpansionPanelSummary expandIcon={<FaAngleDown />} >
                <FaVideo/>
                <p>{title}</p>
                { Array(stars).fill(1).map((el, i) => <FaStar/> )}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <YouTube
                    videoId={videoId}
                    autoplay={0}
                />
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default Lesson;