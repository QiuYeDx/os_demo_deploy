import React from 'react';
import {Container, H1, MainButton, Gap, Text, Shape, ShapeWrap, Wrap} from "./Styled.js";
import TopBar from "../components/TopBar/TopBar";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.gotoWork = this.gotoWork.bind(this);
    }

    gotoWork(){
        window.location.href="#/work";
    }

    render() {
        return (
            <div>
                <TopBar/>
                <Container>
                    <Wrap>
                        <H1>操作系统实验<br/>
                            实验一演示</H1>
                        <Gap/>
                        <Text>1.设计并实现一个模拟进程状态转换及其 相应PCB组织结构变化的程序;<br/>
                            2.独立设计、编写、调试程序;<br/>
                            3.程序界面应能反映出在模拟条件下，进程之间状态转换及其对应的PCB组织的变化。<br/>
                        </Text>
                        <MainButton onClick={this.gotoWork}>Get Started !</MainButton>
                    </Wrap>
                    <ShapeWrap><Shape/></ShapeWrap>
                </Container>
            </div>
        )
    }
}

