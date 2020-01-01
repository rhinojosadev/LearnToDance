import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import Header from "../../../shared/components/Header";
import Lesson from "../../../shared/components/Lesson";
import {LessonList} from "./LessonsList";

const Salsa: React.FC = () => {

    return (
        <>
            <Header>
                  <Link to={"/"}>
                    <IoIosArrowBack/>
                  </Link>
                  <h1>Salsa</h1>
            </Header>
            {LessonList.map((lesson)=>  
              <Lesson 
                stars={lesson.stars}
                title={lesson.title}
                videoId={lesson.videoId}
              />
            )}
        </>
    );
  }
  
export default Salsa;