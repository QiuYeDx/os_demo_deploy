import styled from 'styled-components';

export const Wrap = styled.div`
    width: 100%;
    min-width: 850px;
    height: 130px;
    position: absolute;
    z-index: 1000;
    top: 0;
    background-color: ${props => props.inputColor || "#fdf7f2"};
    border-bottom: solid 0.5px #1F1A14;
`

export const Logo = styled.div`
    position: absolute;
    top: 50px;
    left: 50px;
    margin-right: 50px;
    width: 56px;
    height: 55px;
    background-size: cover;
    background-image: url(./logo.svg);
    cursor: pointer;
`

export const LogoText = styled.div`
    position: absolute;
    top: 60px;
    left: 126px;
    font-size: 28px;
    font-family: "Purple Purse",serif;
    cursor: pointer;
`

export const Avatar = styled.div`
    position: absolute;
    top: 50px;
    right: 50px;
    width: 56px;
    height: 56px;
    background-size: cover;
    background-image: url(./avatar.svg);
`
