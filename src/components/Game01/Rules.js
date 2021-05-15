import React from "react";

const Rules = () => {
    return (
        <>
            <div className="gameTitle">
                <span>정확하고 빠르게</span>
            </div>
            <div style={{
                backgroundColor: "white",
                borderRadius: 20,
                color: "#f21170",
                maxWidth: 280,
                marginTop: 30
            }}>
                <div style={{
                    padding: "10px 15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <span style={{ marginBottom: 0, fontWeight: "bold" }}>게임규칙</span>
                    <div className="gameRules">
                        <h5>1. 사진을 보고 정답을 빠르게 클릭 해 주세요.</h5>
                        <h5>2. 빠르게 누를수록 높은 점수를 얻습니다.</h5>
                        <h5>3. 빠르게 눌러도 정답이 아닐 경우 0점 처리됩니다.</h5>
                        <h5>4. 게임은 총 10 라운드 진행합니다.</h5>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Rules;