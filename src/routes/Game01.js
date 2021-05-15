import React, { useEffect, useState } from "react";
import { storageService } from "fbase";

const Game01 = () => {
    const [url, setUrl] = useState("");
    const storageRef = storageService.ref();

    useEffect(async () => {
        const url = await storageRef.child('cat/cat-01.jpg').getDownloadURL();

        setUrl(url);
    }, []);
    return (
        <>
            <div>
                <div>
                    <span>게임 명 : 정확하고 빠르게</span>
                </div>
                <div>
                    <span>게임규칙</span>
                    <div>
                        <span>
                            <img src={url} width="150px" height="150px" />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game01;