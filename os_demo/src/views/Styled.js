import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 150px;
    box-sizing: border-box;
    background-color: #fdf6f0;
    width: 100%;
    height: 100%;
    min-width: 850px;
    min-height: 920px;
    position: absolute;
    z-index: 1;
    overflow-x: hidden;
`

export const Wrap = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  min-width: 850px;
  //max-width: 1030px;
  z-index: 99;
  transition: all 0.8s ease;
  @media screen and (max-width: 1000px) {
      background-color: rgba(#fcf6f1, 0);
      backdrop-filter: blur(8px);
      //box-shadow: 0 0 40px 1px rgba(119, 119, 119, 0.48);
  }
`

export const H1 = styled.div`
    line-height: 120px;
    font-size: 88px;
    font-weight: 600;
    font-family: "Lao MN",serif;
    white-space: nowrap;
    position: absolute;
    width: 580px;
    top: 250px;
    left: 100px;
    z-index: 100;
`

export const Text = styled.div`
    line-height: 30px;
    font-size: 24px;
    font-weight: 300;
    font-family: "Lao MN",serif;
    white-space: nowrap;
    position: absolute;
    width: 580px;
    top: 600px;
    left: 100px;
    z-index: 100;
`

export const Gap = styled.div`
    position: absolute;
    width: 120px;
    height: 8px;
    left: 100px;
    top: 540px;
    background: #1F1A14;
    z-index: 100;
`

export const Shape = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    right: -14px;
    background-size: contain;
    background-image: url(./shape.svg);
    transition: all 0.8s ease;
    @media screen and (max-width: 1450px) {
        right: -80px;
    }
    @media screen and (max-width: 1350px) {
      right: -160px;
    }
    @media screen and (max-width: 1250px) {
      right: -200px;
    }
    @media screen and (max-width: 1000px) {
      right: 0;
    }
`

export const ShapeWrap = styled.div`
    position: absolute;
    top: 260px;
    right: 0;
    height: 560px;
    width: 614px;
    z-index: 10;
    overflow: hidden;
    transition: all 0.8s ease;
    @media screen and (max-width: 1000px) {
      scale: 1.1;
    }
`

export const MainButton = styled.div`
    padding: 6px 8px 4px 8px;
    margin-bottom: 40px;
    position: absolute;
    top: 760px;
    left: 100px;
    width: 180px;
    height: 50px;
    color: white;
    font-size: 20px;
    font-family: "Lao MN",serif;
    text-align: center;
    line-height: 50px;
    border-radius: 40px;
    background: #1c1914;
    user-select: none;
    cursor: pointer;
    transition: all 0.15s;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
    opacity: 1;
    :hover {
        transition: all 0.25s;
        opacity: 0.6;
        box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.3);
    }
    :active {
        transition: all 0.08s;
        opacity: 0.8;
        box-shadow: 0.5px 0.5px 4px 0.5px rgba(0, 0, 0, 0.2);
    }
`