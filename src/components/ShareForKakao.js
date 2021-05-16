import React, { useEffect } from "react";

import kakaoshareImg from "../images/kakaoshare.png";

const Kakao = ({ kakaoImage }) => {
    const createKakaoButton = () => {
        if (window.Kakao) {
            const kakao = window.Kakao;

            if (!kakao.isInitialized()) {
                kakao.init('15b03ecebc09e677b701f616c5217391');
            }

            kakao.Link.createDefaultButton({
                // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
                container: '#kakao-link-btn',
                objectType: 'feed',
                content: {
                    title: 'EnjoyTheCode',
                    description: '#MadForCode #EnjoyTheToday #kakao #정확하게빠르게',
                    imageUrl: kakaoImage, // i.e. process.env.FETCH_URL + '/logo.png'
                    link: {
                        mobileWebUrl: 'https://redhoneybee.github.io/enjoythetoday',
                        webUrl: 'https://redhoneybee.github.io/enjoythetoday',
                    },
                },
                social: {
                    likeCount: 77,
                    commentCount: 0,
                    sharedCount: 333,
                },
                buttons: [
                    {
                        title: '웹으로 보기',
                        link: {
                            mobileWebUrl: 'https://redhoneybee.github.io/enjoythetoday',
                            webUrl: 'https://redhoneybee.github.io/enjoythetoday',
                        },
                    },
                    {
                        title: '앱으로 보기',
                        link: {
                            mobileWebUrl: 'https://redhoneybee.github.io/enjoythetoday',
                            webUrl: 'https://redhoneybee.github.io/enjoythetoday',
                        },
                    },
                ],
            })
        }
    }

    useEffect(() => {
        createKakaoButton();
    }, []);
    const onClickKakao = () => {
        window.open('https://sharer.kakao.com/talk/friends/picker/link')
    }
    return (
        <>
            <img
                id="kakao-link-btn"
                onClick={onClickKakao}
                src={kakaoshareImg}
                style={{
                    borderRadius: 10,
                    marginTop: 20,
                    cursor: "pointer"
                }} />
        </>
    );
}

export default Kakao;