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

        document.querySelector('.gameContainer').classList.add('visible');
    }, []);

    const onModeClick = (e) => {
        const { target: { name } } = e;
        setMode(name);
    }
    return (
        <div className="flex gameContainer" style={{ maxWidth: 310, marginTop: 70 }}>
            {mode ?
                <GameStart mode={mode} />
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

        </div>
    )
}

export default Game01;