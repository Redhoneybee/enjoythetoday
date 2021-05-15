import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/Users";

import PlayList from "../components/PlayList";

const Home = ({ userObj }) => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(setUser(""));

    return (
        <>
            <div className="namePlace">
                <span><span className="strong">{userObj}</span>님 어서오세요.</span>
            </div>
            <span id="edit" className="btn" onClick={onClick}>수정하기</span>
            <div class="listPlace">
                <Link to="game01">
                    <PlayList />
                </Link>
            </div>
        </>
    );
}

export default Home;