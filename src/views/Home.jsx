import React from 'react';
import {
    Container,
    H1,
    MainButton,
    Gap,
    Text,
    Shape,
    ShapeWrap,
    Wrap,
    NextButton,
    NextButtonSVG,
    LastButtonSVG
} from "./Styled.js";
import TopBar from "../components/TopBar/TopBar";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        // this.gotoWork = this.gotoWork.bind(this);
        this.nextDemo = this.nextDemo.bind(this);
        this.lastDemo = this.lastDemo.bind(this);
        this.state = {
            index: 1,
            MAX_INDEX: 4
        }
    }

    // gotoWork(){
    //     window.location.href="#/demo1";
    // }

    nextDemo(){
        this.setState({index: this.state.index < this.state.MAX_INDEX ? this.state.index + 1 : 1});
    }

    lastDemo(){
        this.setState({index: this.state.index > 1 ? this.state.index - 1 : this.state.MAX_INDEX});
    }

    getInfoText(index){
        switch(index){
            case 1: return <Text>1.设计并实现一个模拟进程状态转换及其相应PCB组织结构变化的程序;<br/>
                                 2.独立设计、编写、调试程序;<br/>
                                 3.程序界面应能反映出在模拟条件下，进程之间状态转换及其对应的PCB组织的变化。<br/>
                           </Text>;
            case 2: return <Text>进程同步和通信:<br/>
                                 生产者和消费者问题模拟<br/>
                                 具体内容和要求请看PPT或报告要求<br/>
                           </Text>;
            case 3: return <Text>
                                 进程的管道通信:<br/>
                                 编程实现进程的管道通信程序<br/>
                                 具体内容和要求请看PPT或报告要求<br/>
                           </Text>;
            case 4: return <Text>
                                 页面置换算法:<br/>
                                 编程实现FIFO和LRU算法<br/>
                                 具体内容和要求请看PPT或报告要求<br/>
                          </Text>;
            case 5: return <Text>
                                 ---[FBI WARNNING]---<br/>
                                 您要找的实验不存在(＾Ｕ＾)ノ~ＹＯ<br/>
                           </Text>;
            default: return <Text>
                                 您是从外星球来的吗？<br/>
                            </Text>;
        }
    }
    render() {
        return (
            <div>
                <TopBar/>
                <Container>
                    <Wrap>
                        <H1>OS Demo in React</H1>
                        <H1 inputTop={"400px"} inputLeft={"365px"}>实验</H1>
                        <H1 inputTop={"404px"} inputLeft={"560px"}>{this.state.index}</H1>
                        <Gap/>
                        {this.getInfoText(this.state.index)}
                        <NextButton onClick={this.nextDemo}>
                            <NextButtonSVG/>
                        </NextButton>
                        <NextButton onClick={this.lastDemo} inputLeft={"120px"}>
                            <LastButtonSVG/>
                        </NextButton>
                        {/*<MainButton onClick={this.gotoWork}>Get Started !</MainButton>*/}
                        <MainButton onClick={()=>{
                            if(this.state.index !== 1){
                                alert("该实验还没完成哦！");
                                return;
                            }
                            window.location.href=`#/demo${this.state.index}`;
                        }}>Get Started !</MainButton>
                    </Wrap>
                    <ShapeWrap><Shape/></ShapeWrap>
                </Container>
            </div>
        )
    }
}

