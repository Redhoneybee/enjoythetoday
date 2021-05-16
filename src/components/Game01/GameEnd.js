import React, { useEffect, useState } from "react";
import Rating from "../Rating";
import { useSelector } from "react-redux";

import endDatas from "../../datas/game01/game01_result.json";

import kakaoImage from "../../images/enjoythetoday.png";
import Kakao from "../ShareForKakao";


const ACCURACY = "accuracy";
const SPEED = "speed";

const GameEnd = ({ accuracy, speed, mode }) => {
    const [commentAccuracy, setCommentAccuracy] = useState(endDatas[mode][ACCURACY]);
    const [commentSpeed, setCommentSpeed] = useState(endDatas[mode][SPEED]);

    const user = useSelector(state => state.user);

    const accuracyRating = Math.floor(accuracy === 0 ? 0 : accuracy / 10);
    const speedRating = Math.floor(speed === 0 ? 0 : speed / 10);

    return (
        <>
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
                    <span>정확도 : <Rating rating={accuracyRating} /></span>
                    <div>
                        {commentAccuracy[accuracyRating]}
                    </div>
                </div>
                <div style={{ marginTop: 15 }}>
                    <span>속도 : <Rating rating={speedRating} /></span>
                    <div>
                        {commentSpeed[speedRating]}
                    </div>
                </div>
                <span style={{ margin: "25px 0" }}>총 점 : <span className="strong">{accuracy + speed}</span></span>
            </div>
            <Kakao kakaoImage={kakaoImage} />
        </>
    );
}

export default GameEnd;