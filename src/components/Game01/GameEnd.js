import React from "react";

const GameEnd = ({ accuracy, speed }) => {
    return (
        <div>
            <div>
                <span>게임 결과</span>
            </div>
            <div>
                <span>정확도 : {accuracy}</span>
            </div>
            <div>
                <span>속도 : {speed}</span>
            </div>
            <span>총 점 : {accuracy + speed}</span>
        </div>
    );
}

export default GameEnd;