import React, {useEffect, useState} from 'react';
import {
    Container, Content, GridWrap, GridCard, ContentImage,
    GridCardImage, FuncWrap, HeartButton, DownloadButton,
    DownloadSVG, LastButton, LastButtonSVG, NextButtonSVG, NextButton
} from "./Styled.js";

const DisplayContext = () => {
    const [width, setWidth] = useState(0);
    const [isLiked,setIsLiked] = useState(false);
    const resizeUpdate = (e) => {
        let w = e.target.innerWidth;
        setWidth(w);
    };
    useEffect(() => {
        // 页面刚加载完成后获取浏览器窗口的大小
        let h = window.innerWidth;
        setWidth(h);
        // 页面变化时获取浏览器窗口的大小
        window.addEventListener('resize', resizeUpdate);
        return () => {
            // 组件销毁时移除监听事件
            window.removeEventListener('resize', resizeUpdate);
        }
    }, []);

    return (
        <div>
            <Container width={width - 480}>
                <Content>
                    <LastButton>
                        <LastButtonSVG/>
                    </LastButton>
                    <ContentImage/>
                    <NextButton>
                        <NextButtonSVG/>
                    </NextButton>
                </Content>
                <FuncWrap>
                    <DownloadButton>
                        download
                        <DownloadSVG/>
                    </DownloadButton>
                    <HeartButton isLiked={isLiked} onClick={() => {
                        setIsLiked(!isLiked);
                    }}/>
                </FuncWrap>
                <GridWrap>
                    <GridCard>
                        <GridCardImage/>
                    </GridCard>
                    <GridCard>
                        <GridCardImage/>
                    </GridCard>
                    <GridCard>
                        <GridCardImage/>
                    </GridCard>
                    <GridCard>
                        <GridCardImage/>
                    </GridCard>
                    <GridCard>
                        <GridCardImage/>
                    </GridCard>
                    <GridCard>
                        <GridCardImage/>
                    </GridCard>
                </GridWrap>
            </Container>
        </div>
    );
}

export default DisplayContext;