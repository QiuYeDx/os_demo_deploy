import React from 'react';
import TopBar from "../../components/TopBar/TopBar";
// import SideBar from "../../components/SideBar/SideBar";
import SideBarC from "../../components/SideBarC/SideBarC";
// import DisplayContext from "../../components/DisplayContext/DisplayContext";
import {Container} from "./Styled.js";

export default class Demo2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TopBar inputColor={"#fff"}/>
                <Container>
                    {/*<SideBar/>*/}
                    <SideBarC/>
                    {/*<DisplayContext/>*/}
                </Container>
            </div>
        )
    }
}
