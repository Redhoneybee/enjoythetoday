import React, { useEffect, useState } from "react";
import { storageService } from "fbase";
import ProblemNameData from "../../datas/game01/game01_name.json";
import MappingData from "../../datas/game01/game01.json";

import GameEnd from "./GameEnd";
import Loading from "../Loading";

const GAME_ROUND = 10;
const TOTAL_ALREADY_PROBLEM = 5;

const BEGINNER_MODE = "beginner";
const EXPERT_MODE = "expert";

const AnimalList = ["cat", "dog", "rabbit", "turtle", "snake"];
// , "lion", "tiger", "giraffe", "elephant", "rhino", "hippo", "crocodile", "penguin", "owl", "bear", "pig", "cow", "chicken", "eagle"
const GameStart = ({ mode }) => {
    const [round, setRound] = useState(1);
    const [problemImage, setProblemImage] = useState("");
    const [items, setItems] = useState([]);
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);
    const [accuracy, setAccuracy] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [startTime, setStartTime] = useState(0);


    // timeout handler
    const [timeoutId, setTimeoutId] = useState(null);

    // problems preload
    const [problems, setProblems] = useState([]);

    // storage
    const storageRef = storageService.ref();


    // 랜덤 문제 출제
    const getRandomProblem = () => Math.floor(Math.random() * TOTAL_ALREADY_PROBLEM);

    const getOtherNumber = (itemsObj) => {
        let count = 0;
        if (mode === BEGINNER_MODE) count = 3;
        else if (mode === EXPERT_MODE) count = 4;

        while (true) {
            const other = getRandomProblem();
            if (itemsObj.indexOf(other) <= -1) itemsObj.push(other);
            if (itemsObj.length === count) return itemsObj;
        }
    }

    const getImageName = (animalEnName) => {
        const imageNumber = Math.floor(Math.random() * (5)).toString();
        const imageName = MappingData[animalEnName][imageNumber];
        return imageName;
    }

    const suffleItems = (_items) => {
        for (let i = _items.length; i; i -= 1) {
            let j = Math.floor(Math.random() * i);

            let tmp = _items[i - 1];
            _items[i - 1] = _items[j];
            _items[j] = tmp;
        }

        setItems(_items);
    }

    // 라운드 로딩 
    const loadRound = (problem) => {
        let itemsObj = [];
        itemsObj.push(problem.number);


        itemsObj = getOtherNumber(itemsObj);

        suffleItems(itemsObj);
    }




    const getGameProblemImage = async () => {
        const problemNumber = getRandomProblem();

        const animalEnName = AnimalList[problemNumber];
        const imageName = getImageName(animalEnName);

        const storagePath = `${animalEnName}/${imageName}`;

        const url = await storageRef.child(storagePath).getDownloadURL();

        const gameObj = {
            number: problemNumber,
            answer: animalEnName,
            imgUrl: url,
        };

        return gameObj;
    }

    useEffect(() => {
        // prelaod code
        async function imagePreload() {
            let temp = [];
            for (let i = 0; i < GAME_ROUND; ++i) {
                const problemObj = await getGameProblemImage();

                // image preload
                const img = new Image();
                img.src = problemObj.imgUrl;

                temp.push(problemObj);
            }

            setProblems(temp);
            // 문제 10문제 선별 완료
            if (temp.length === 10) {
                setLoading(true);
            }
        }
        imagePreload();

    }, []);

    useEffect(() => {
        async function drawRound() {
            if (loading === true && round <= GAME_ROUND) {
                // 로딩이 완료 되었을때만
                if (timeoutId !== null) {
                    clearTimeout(timeoutId);
                    setTimeoutId(null);
                }
                const problem = problems[round - 1];
                document.querySelector('.gameImage').classList.remove('expertMode');

                await setProblemImage(problem.imgUrl);
                await setAnswer(problem.answer);

                loadRound(problem);

                document.querySelector('.gameContainer').classList.add('visible');

                if (mode === BEGINNER_MODE) {
                    setStartTime(new Date());
                } else if (mode === EXPERT_MODE) {
                    setStartTime(new Date());
                    const id = setTimeout(() =>
                        document.querySelector('.gameImage').classList.add('expertMode')
                        , 100);

                    setTimeoutId(id);
                }
            }
        }
        drawRound();
    }, [loading, round]);


    const onClick = (e) => {
        const { target: { name } } = e;

        if (answer === name) {
            setAccuracy(accuracy + 5);
            const endTime = new Date();

            const stopTime = (endTime - startTime) / 1000;

            if (stopTime < 0.5) setSpeed(speed + 5);
            else if (stopTime > 1.5) setSpeed(speed + 1);
            else if (stopTime > 1.25) setSpeed(speed + 2);
            else if (stopTime > 1) setSpeed(speed + 3);
            else if (stopTime >= 0.5) setSpeed(speed + 4);
        }

        setRound(round + 1);
    }

    return (
        <>
            {round < 11 ?
                <>
                    {loading ?
                        <div
                            className="flex gameBoard"
                            style={{
                                marginTop: 50,
                                maxWidth: 320,
                                width: 320,
                                backgroundColor: "#eeebdd",
                                padding: "20px 30px",
                                borderRadius: "20px",
                                border: "5px solid #810000"
                            }}>
                            <h3 style={{ color: "black" }}>ROUND -{round}-</h3>
                            <img className="gameImage" src={problemImage} width="150px" height="150px" />
                            {items &&
                                items.map((item, i) =>
                                    <button key={i} name={AnimalList[item]} onClick={onClick}>{ProblemNameData[AnimalList[item]]}</button>
                                )
                            }
                        </div>
                        :
                        <Loading comment={"문제 구성중..."} />
                    }
                </>
                :
                <GameEnd accuracy={accuracy} speed={speed} mode={mode} />
            }

        </>
    );
}

export default GameStart;