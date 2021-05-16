import React from "react";

const Loading = ({ comment }) => {
    return (
        <>
            <div
                style={{
                    position: "fixed",
                    top: 15,
                    right: 10,
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#f21170"
                }}>{comment}</div>
            <div className="flex">
                <div className="loading loading-active"></div>
            </div>
        </>
    )
}

export default Loading;