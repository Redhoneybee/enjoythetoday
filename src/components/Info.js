import React from "react";

const Info = () => {
    return (
        <div
            className="flex info"
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                height: 80,
                backgroundColor: "white"
            }}>
            <span className="update">업데이트 : version 0.0.4</span>
            <span className="update">"정확하게 빠르게" 게임 결과 UI 수정, 카카오톡 공유 기능 추가</span>
        </div>
    )
}

export default Info;