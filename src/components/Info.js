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
            <span className="update">업데이트 : version 0.0.5</span>
            <span className="update">"정확하게 빠르게" 숙련자 모드 추가, "정확하게 빠르게" 이미지 로딩방식 변경</span>
        </div>
    )
}

export default Info;