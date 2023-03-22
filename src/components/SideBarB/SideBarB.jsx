// export default class SideBarB extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             mem: 0,
//             imgUrl: '',
//             itemsValue: [
//                 {
//                     key: 'key1',
//                     value: ''
//                 },
//                 {
//                     key: 'key2',
//                     value: ''
//                 },
//                 {
//                     key: 'key3',
//                     value: ''
//                 },
//                 {
//                     key: 'key4',
//                     value: ''
//                 },
//                 {
//                     key: 'key5',
//                     value: ''
//                 },
//             ],
//             isSelectedA: -1,
//             isSelectedB: -1,
//         };
//         this.btnRef = React.createRef();
//         this.handleSelectedImg = this.handleSelectedImg.bind(this);
//     }
//
//     pm = new ProcessManager(100);
//
//     handleSelectedImg(){
//         this.btnRef.current.click();
//     }
//
//     render() {
//         return (
//             <div>
//                 <Container>
//                     <H2 inputTop={"160px"} inputLeft={"56px"}>Please click the button below:</H2>
//                     <H3 inputTop={"240px"} inputLeft={"126px"}>New Process's size</H3>
//                     <InputText/>
//                     <MainButton left={"100px"} top={"350px"} onClick={() => {}}>
//                         Create
//                     </MainButton>
//                     <MainButton left={"100px"} top={"450px"} onClick={() => {}}>
//                         Dispatch
//                     </MainButton>
//                     <MainButton left={"100px"} top={"550px"} onClick={() => {}}>
//                         Timeout
//                     </MainButton>
//                     <MainButton left={"100px"} top={"650px"} onClick={() => {}}>
//                         Event Wait
//                     </MainButton>
//                     <MainButton left={"100px"} top={"750px"} onClick={() => {}}>
//                         Event Occur
//                     </MainButton>
//                     <MainButton left={"100px"} top={"850px"} onClick={() => {}}>
//                         Release
//                     </MainButton>
//                     <LabelText left={"600px"} top={"250px"} hasBorder={true}>New</LabelText>
//                     <LabelText left={"600px"} top={"350px"} hasBorder={true}>Ready</LabelText>
//                     <LabelText left={"600px"} top={"450px"} hasBorder={true}>Running</LabelText>
//                     <LabelText left={"600px"} top={"550px"} hasBorder={true}>Block</LabelText>
//
//                     <LabelText left={"1000px"} top={"650px"} hasBorder={false}>Memory:</LabelText>
//                     <LabelText left={"1100px"} top={"650px"} hasBorder={false}>{this.state.mem}</LabelText>
//                     <LabelText left={"1150px"} top={"650px"} hasBorder={false}>/100M</LabelText>
//
//                     <Borderline/>
//                     <ProcessList top={"248px"}>
//                         <ProcessText hasBorder={true}>A</ProcessText>
//                         <ProcessText hasBorder={true}>B</ProcessText>
//                         <ProcessText hasBorder={true}>C</ProcessText>
//                     </ProcessList>
//                     <ProcessList top={"348px"}>
//                         <ProcessText hasBorder={true}>A</ProcessText>
//                         <ProcessText hasBorder={true}>B</ProcessText>
//                         <ProcessText hasBorder={true}>C</ProcessText>
//                     </ProcessList>
//                     <ProcessList top={"448px"}>
//                         <ProcessText hasBorder={true}>A</ProcessText>
//                         <ProcessText hasBorder={true}>B</ProcessText>
//                         <ProcessText hasBorder={true}>C</ProcessText>
//                     </ProcessList>
//                     <ProcessList top={"548px"}>
//                         <ProcessText hasBorder={true}>A</ProcessText>
//                         <ProcessText hasBorder={true}>B</ProcessText>
//                         <ProcessText hasBorder={true}>C</ProcessText>
//                     </ProcessList>
//                 </Container>
//             </div>
//         )
//     }
// }

import React, {useEffect, useRef, useState} from 'react';
import {
    Container, H2, H3, H4, UpLoad, PlusWrap, Plus, UpLoadedImg,
    SelectButton, FuncWrapA, FuncWrapB, MainButton, Circle, Sub,
    PlusWhite, BoxWrap, BoxWrapper, Wrapper, Box, SubCircle, SubWrap,
    SelectInput, SelectOption, GapErect, InputText, LabelText, ProcessText, Borderline, ProcessList
} from "./Styled.js";
import {ProcessManager, Process} from "../../classes/process";

export default function SideBarB() {
    const MAX_MEMORY = 100;
    let [mem, setMem] = useState(0);
    let [newMem, setNewMem] = useState(0);
    let [pm, setPm] = useState(new ProcessManager(MAX_MEMORY));
    let [refresh, setRefresh] = useState(true);

    let dataList;
    let statusLineRef = useRef();
    useEffect(() => {
        const on = function(
            element,
            event,
            handler
        ) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        };

        const off = function(
            element,
            event,
            handler
        ) {
            if (element && event) {
                element.removeEventListener(event, handler, false);
            }
        };

        let targetDrag = {
            isDown: false,
            coord: {
                x: 0,
                y: 0,
            },
        };

        // 实现鼠标拖拽横向滚动
        const scrollMousedown = (event) => {
            targetDrag.isDown = true;
            targetDrag.coord.x = event.pageX;
            targetDrag.coord.y = event.pageY;
        };
        const scrollMouseup = () => {
            targetDrag.isDown = false;
            targetDrag.coord.x = 0;
            targetDrag.coord.y = 0;
        };

        let el = statusLineRef.current;

        const scrollMousemove = (event) => {
            let movX = targetDrag.coord.x - event.pageX;
            targetDrag.coord.x = event.pageX;
            if (targetDrag.isDown) {
                el.scrollLeft = el.scrollLeft + movX;
            }
        };

        if (el) {
            on(el, 'mousedown', scrollMousedown);
            on(document, 'mouseup', scrollMouseup);
            on(el, 'mousemove', scrollMousemove);
        }
        return () => {
            if (el) {
                off(el, 'mousedown', scrollMousedown);
                off(document, 'mouseup', scrollMouseup);
                off(el, 'mousemove', scrollMousemove);
            }
        };
    }, [dataList]);

    // 以下是未调试完美的代码，包含节流函数和平滑滚动，仅供日后继续完善：
    // function throttle(func, wait){
    //     let timer = null;
    //     return function(){
    //         let args = arguments;
    //         if(timer !== null) return;
    //         timer = setTimeout(()=>{
    //             func.apply(this, args);
    //             timer = null;
    //         }, wait);
    //     }
    // }
    //
    // function handle(event){
    //     let el = statusLineRef.current;
    //     if (event.deltaY > 0) {
    //         el.scrollLeft += 4; // 向右滚动
    //     } else {
    //         el.scrollLeft -= 4; // 向左滚动
    //     }
    // }
    //
    // let el = document.getElementById("aaa");
    // el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    //
    // window.addEventListener("wheel", throttle(handle, 200));



    return (
        <div>
            <Container>
                <H2 inputTop={"166px"} inputLeft={"58px"}>Please click the button below:</H2>
                <H3 inputTop={"240px"} inputLeft={"115px"}>New Process's size(M)</H3>
                <InputText value={newMem} maxLength={5} onChange={(e)=>{
                    setNewMem(e.target.value == 0 ? '' : parseInt(e.target.value));
                }}/>
                <MainButton left={"100px"} top={"350px"} onClick={() => {
                    if(newMem === 0){
                        alert("New process's size cannot be zero!");
                        return;
                    }
                    pm.createProcess(newMem);
                    setMem(pm.getMemory());
                    setNewMem(0);
                }}>
                    Create
                </MainButton>
                {/*<MainButton left={"100px"} top={"450px"} onClick={() => {}}>*/}
                {/*    Dispatch*/}
                {/*</MainButton>*/}
                <MainButton left={"100px"} top={"450px"} onClick={() => {
                    if(!pm.timeoutProcess()){
                        alert("There is no need to update!");
                    }
                    setMem(pm.getMemory());
                    setRefresh(!refresh);
                }}>
                    Timeout
                </MainButton>
                <MainButton left={"100px"} top={"550px"} onClick={() => {
                    if(!pm.eventWaitProcess()){
                        alert("There is no need to update!");
                    }
                    setMem(pm.getMemory());
                    setRefresh(!refresh);
                }}>
                    Event Wait
                </MainButton>
                <MainButton left={"100px"} top={"650px"} onClick={() => {
                    if(!pm.eventOccurProcess()){
                        alert("There is no need to update!");
                    }
                    setMem(pm.getMemory());
                    setRefresh(!refresh);
                }}>
                    Event Occur
                </MainButton>
                <MainButton left={"100px"} top={"750px"} onClick={() => {
                    if(!pm.releaseProcess()){
                        alert("There is no need to update!");
                    }
                    setMem(pm.getMemory());
                    setRefresh(!refresh);
                }}>
                    Release
                </MainButton>
                <LabelText left={"500px"} top={"250px"} hasBorder={true}>New</LabelText>
                <LabelText left={"500px"} top={"350px"} hasBorder={true}>Ready</LabelText>
                <LabelText left={"500px"} top={"450px"} hasBorder={true}>Running</LabelText>
                <LabelText left={"500px"} top={"550px"} hasBorder={true}>Block</LabelText>
                <LabelText left={"900px"} top={"650px"} hasBorder={false}>Memory:</LabelText>
                <LabelText left={"1030px"} top={"650px"} hasBorder={false}>{mem}/{MAX_MEMORY}M</LabelText>

                <Borderline/>
                <ProcessList top={"248px"} ref={statusLineRef} id={"aaa"}>
                    {pm.getNewProcess().map((p, i)=>{
                        return <ProcessText hasBorder={true}>
                            {'Process' + p.index}
                            <H4>{p.size}M</H4>
                        </ProcessText>
                    })}
                </ProcessList>
                <ProcessList top={"348px"}>
                    {pm.getReadyProcess().map((p, i)=>{
                        return <ProcessText hasBorder={true}>
                            {'Process' + p.index}
                            <H4>{p.size}M</H4>
                        </ProcessText>
                    })}
                </ProcessList>
                <ProcessList top={"448px"}>
                    {pm.getRunningProcess().map((p, i)=>{
                        return <ProcessText hasBorder={true}>
                            {'Process' + p.index}
                            <H4>{p.size}M</H4>
                        </ProcessText>
                    })}
                </ProcessList>
                <ProcessList top={"548px"}>
                    {pm.getBlockProcess().map((p, i)=>{
                        return <ProcessText hasBorder={true}>
                            {'Process' + p.index}
                            <H4>{p.size}M</H4>
                        </ProcessText>
                    })}
                </ProcessList>
            </Container>
        </div>
    )
}