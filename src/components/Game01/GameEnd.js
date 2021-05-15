import React from "react";
import Rating from "../Rating";
import { useSelector } from "react-redux";

import Kakao from "../ShareForKakao";

const GameEnd = ({ accuracy, speed }) => {
    const user = useSelector(state => state.user);

    return (
        <div
            className="flex"
            style={{
                marginTop: 50,
                maxWidth: 320,
                width: 320,
                backgroundColor: "#eeebdd",
                padding: "20px 30px",
                borderRadius: "20px",
                border: "5px solid #810000",
                color: "black",
            }}>
            <div>
                <span>{user}님의 게임 결과</span>
            </div>
            <div>
                <span>정확도 : <Rating rating={accuracy} /></span>
            </div>
            <div>
                <span>속도 : <Rating rating={speed} /></span>
            </div>
            <span>총 점 : {accuracy + speed}</span>
            <Kakao />
        </div>
    );
}

export default GameEnd;