import React, { useEffect, useState } from "react";
import { storageService } from "fbase";
import ProblemNameData from "../../datas/game01/game01_name.json";
import MappingData from "../../datas/game01/game01.json";

import GameEnd from "./GameEnd";
import Loading from "../Loading";

const GameStart = () => {
    const [round, setRound] = useState(1);
    const [problemImage, setProblemImage] = useState("");
    const [items, setItems] = useState([]);
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);
    const [accuracy, setAccuracy] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [startTime, setStartTime] = useState(0);

    const storageRef = storageService.ref();

    const AnimalList = ["cat", "dog", "rabbit", "turtle", "snake"];
    // 문제 종류 수 
    const max = AnimalList.length;

    const getOtherChocie = (itemsObj) => {
        while (true) {
            const other = Math.floor(Math.random() * (max - 1)) + 1;
            if (itemsObj.indexOf(other) <= -1) itemsObj.push(other);
            if (itemsObj.length === 3) return itemsObj;
        }
    }

    const getImageName = (animalEnName) => {
        const imageNumber = Math.floor(Math.random() * (5)).toString();
        const imageName = MappingData[animalEnName][imageNumber];
        return imageName;
    }

    const suffleItems = (items) => {
        const l = items.length;
        let itemsObj;
        for (let i = 0; i < l; ++i) {
            let j = Math.floor(Math.random() * (i + 1));
            itemsObj = Array.from(items);
            const x = itemsObj[i];
            itemsObj[i] = itemsObj[j];
            itemsObj[j] = x;
        }

        setItems(itemsObj);
    }

    const loadProblem = async () => {
        // 서로 다른 번호 두개 추출
        const choose = Math.floor(Math.random() * (max - 1)) + 1;
        let itemsObj = [choose];
        itemsObj = getOtherChocie(itemsObj);

        setItems(itemsObj);
        suffleItems(itemsObj);

        const animalEnName = AnimalList[choose];
        setAnswer(animalEnName);

        const imageName = getImageName(animalEnName);

        const url = await storageRef.child(`${animalEnName}/${imageName}`).getDownloadURL();

        setProblemImage(url);
        return url;
    }

    useEffect(async () => {
        setLoading(false);
        const url = await loadProblem();

        // image preload
        const img = new Image();
        img.src = url;
        img.onload = () => {
            setLoading(true);
            document.querySelector('.gameContainer').classList.add('visible');
            setStartTime(new Date());

        }
    }, [round]);


    const onClick = (e) => {
        const { target: { name } } = e;

        if (answer === name) setAccuracy(accuracy + 5);

        const endTime = new Date();

        const stopTime = (endTime - startTime) / 1000;

        if (stopTime < 0.3) setSpeed(speed + 5);
        else if (stopTime > 1.5) setSpeed(speed + 1);
        else if (stopTime > 1) setSpeed(speed + 2);
        else if (stopTime > 0.7) setSpeed(speed + 3);
        else if (stopTime >= 0.3) setSpeed(speed + 4);
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
                            <img src={problemImage} width="150px" height="150px" />
                            {items &&
                                items.map(item =>
                                    <button name={AnimalList[item]} onClick={onClick}>{ProblemNameData[AnimalList[item]]}</button>
                                )
                            }
                        </div>
                        :
                        <Loading />
                    }
                </>
                :
                <GameEnd accuracy={accuracy} speed={speed} />
            }

        </>
    );
}

export default GameStart;