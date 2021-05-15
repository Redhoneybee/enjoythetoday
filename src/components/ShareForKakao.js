import React, { useEffect } from "react";

const Kakao = () => {
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
                    title: '타이틀',
                    description: '#리액트 #카카오 #공유버튼',
                    imageUrl: 'IMAGE_URL', // i.e. process.env.FETCH_URL + '/logo.png'
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
                social: {
                    likeCount: 77,
                    commentCount: 55,
                    sharedCount: 333,
                },
                buttons: [
                    {
                        title: '웹으로 보기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    },
                    {
                        title: '앱으로 보기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    },
                ],
            })
        }
    }

    useEffect(() => {
        createKakaoButton();
    }, []);
    return (
        <>
            <button id="kakao-link-btn">
                공유하기
            </button>
        </>
    );
}

export default Kakao;