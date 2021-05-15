import React, { useState } from "react";
import { Link } from "react-router-dom";

import PlayList from "../components/PlayList"
const Home = ({ userObj }) => {
    console.log(userObj);
    return (
        <>
            <div>
                <span>{userObj}</span>
                <span>EDIT</span>
            </div>
            <div>
                <Link to="game01">
                    <PlayList />
                </Link>
            </div>
        </>
    );
}

export default Home;