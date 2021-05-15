import React from "react";
import Rating from "../Rating";
import { useSelector } from "react-redux";

import kakaoImage from "../../images/enjoythetoday.png";
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
            <div style={{ marginTop: 20 }}>
                <span><span className="strong">{user}</span> 님의 게임 결과</span>
            </div>
            <div style={{ marginTop: 15 }}>
                <span>정확도 : <Rating rating={accuracy / 10} /></span>
            </div>
            <div style={{ marginTop: 15 }}>
                <span>속도 : <Rating rating={speed / 10} /></span>
            </div>
            <span style={{ margin: "25px 0" }}>총 점 : <span className="strong">{accuracy + speed}</span></span>
            <Kakao kakaoImage={kakaoImage} />
        </div>
    );
}

export default GameEnd;