import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import Header from "../../../shared/components/Header"

const HipHop: React.FC = () => {
    return (
        <>
            <Header>
                <Link to={"/"}>
                  <IoIosArrowBack/>
                </Link>
                <h1>Hip Hop</h1>
            </Header>
        </>
    );
  }
  
export default HipHop;