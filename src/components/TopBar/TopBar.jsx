import React from 'react';
import {Wrap, Logo, LogoText, Avatar} from "./Styled.js";

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.gotoHome = this.gotoHome.bind(this);
    }

    gotoHome(){
        window.location.href = "#/";
    }

    render() {
        return (
            <Wrap inputColor={this.props.inputColor}>
                <Logo onClick={this.gotoHome} />
                <LogoText onClick={this.gotoHome}>OS Demo</LogoText>
                <Avatar/>
            </Wrap>
        )
    }
}

