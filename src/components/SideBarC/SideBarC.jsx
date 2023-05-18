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
import {ProcessManager, Process} from "../../classes/process2";

export default function SideBarC() {
    const MAX_Size = 8;
    let [num, setNum] = useState(0);
    let [pm, setPm] = useState(new ProcessManager(MAX_Size));
    let [refresh, setRefresh] = useState(true);
    // let [btnListen, setBtnListen] = useState(false);

    let statusLineRef0 = useRef();
    let statusLineRef1 = useRef();
    let statusLineRef2 = useRef();
    let statusLineRef3 = useRef();
    let btnRef = useRef();
    let inputRef = useRef();

    function debounce(func, wait, immediate) {
        let timer;

        return function () {
            let context = this;
            let args = arguments;

            if (timer) clearTimeout(timer);
            if (immediate) {
                var callNow = !timer;
                timer = setTimeout(() => {
                    timer = null;
                }, wait)
                if (callNow) func.apply(context, args)
            } else {
                timer = setTimeout(function () {
                    func.apply(context, args)
                }, wait);
            }
        }
    }

    // 实现鼠标拖拽横向滚动
    useEffect(() => {
        console.log("Effect!");
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

        function dragHandler(el){
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
        }

        let els = [statusLineRef0.current, statusLineRef1.current, statusLineRef2.current, statusLineRef3.current];
        els.forEach((e)=>{
            dragHandler(e);
        });

        // 监听Enter
        document.addEventListener("keyup", handle);
        console.log("add!");
        function handle(e){
            if(e.key === "Enter" && e.target === inputRef.current)
                btnRef.current.click();
        }

        return () => {
            document.removeEventListener("keyup", handle);
            console.log("remove!");
        }

    }, []);

    return (
        <div>
            <Container>
                <H2 inputTop={"166px"} inputLeft={"58px"}>Please click the button below:</H2>

                <MainButton left={"100px"} top={"350px"} ref={btnRef} onClick={() => {
                    pm.produce();
                    setNum(pm.getNum());
                    setRefresh(!refresh);
                }}>
                    Produce
                </MainButton>
                <MainButton left={"100px"} top={"450px"} onClick={() => {
                    pm.consume();
                    setNum(pm.getNum());
                    setRefresh(!refresh);
                }}>
                    Consume
                </MainButton>

                <LabelText left={"500px"} top={"250px"} hasBorder={true}>Buffer</LabelText>
                <LabelText left={"500px"} top={"350px"} hasBorder={true}>Full</LabelText>
                <LabelText left={"500px"} top={"450px"} hasBorder={true}>Empty</LabelText>
                <LabelText left={"980px"} top={"550px"} hasBorder={false}>Buffer:</LabelText>
                <LabelText left={"1040px"} top={"550px"} hasBorder={false}>{num}/{MAX_Size}</LabelText>

                <Borderline/>
                <ProcessList top={"248px"} ref={statusLineRef0} id={"aaa"}>
                    {pm.getBufferQueue().map((p, i)=>{
                        return <ProcessText hasBorder={true}>
                            {p.index}
                        </ProcessText>
                    })}
                </ProcessList>
                <ProcessList top={"348px"} ref={statusLineRef1}>
                    {pm.getFullQueue().map((p, i)=>{
                        return <ProcessText hasBorder={true}>
                            {p.index}
                            <H4>Producer</H4>
                        </ProcessText>
                    })}
                </ProcessList>
                <ProcessList top={"448px"} ref={statusLineRef2}>
                    {pm.getEmptyQueue().map((p, i)=>{
                        return <ProcessText hasBorder={true}>
                            {p.index}
                            <H4>Consumer</H4>
                        </ProcessText>
                    })}
                </ProcessList>
            </Container>
        </div>
    )
}