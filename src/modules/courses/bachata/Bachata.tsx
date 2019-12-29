import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import Header from "../../../shared/components/Header"

const Bachata: React.FC = () => {
    return (
        <>
            <Header>
                <Link to={"/"}>
                  <IoIosArrowBack/>
                </Link>
                <h1>Bachata</h1>
            </Header>
        </>
    );
  }
  
export default Bachata;