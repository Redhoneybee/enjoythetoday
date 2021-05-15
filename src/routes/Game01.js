import React, { useEffect, useState } from "react";
import { storageService } from "fbase";

import Rules from "../components/Game01/Rules";
import GameStart from "../components/Game01/GameStart";
import { useHistory } from "react-router";

const Game01 = ({ userObj }) => {
    const [mode, setMode] = useState("");
    const history = useHistory();
    const checkedPage = () => {
        if (!userObj) return false;
        return true;
    }
    useEffect(() => {
        if (!checkedPage()) {
            history.push("/");
        }
    }, []);

    const onModeClick = (e) => {
        const { target: { name } } = e;
        setMode(name);
    }
    console.log(userObj);
    return (
        <>
            {mode ?
                <GameStart />
                :
                <>
                    <Rules />
                    <button
                        id="beginner"
                        name="beginner"
                        onClick={onModeClick}
                        className="btn"
                    >초보자 모드</button>
                    <button
                        id="expert"
                        name="expert"
                        onClick={onModeClick}
                        className="btn"
                    >숙련자 모드</button>
                </>
            }

        </>
    )
}

export default Game01;