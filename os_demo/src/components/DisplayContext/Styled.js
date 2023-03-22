import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  padding-top: 150px;
  box-sizing: border-box;
  left: 480px;
  top: 0;
  height: 100%;
  width: ${props => props.width}px;
  background-color: #f5f5f5;
  z-index: 90;
`

export const Content = styled.div`
  background-color: #d4d4d4;
  position: absolute;
  width: 640px;
  height: 360px;
  top: 180px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border: 0.5px solid #1F1A14;
`

export const ContentImage = styled.div`
  background-image: url(./displayA.png);
  background-size: cover;
  width: 100%;
  height: 100%;
`

export const GridWrap = styled.div`
  position: absolute;
  width: 640px;
  height: 280px;
  top: 620px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: grid;
  grid: 136px / auto auto auto ;
  justify-content: space-between;
`

export const GridCard = styled.div`
  background-color: #d4d4d4;
  width: 204px;
  height: 114.5px;
  border: 0.5px solid #1F1A14;
`

export const GridCardImage = styled.div`
  background-image: url(./displayB.png);
  background-size: cover;
  width: 100%;
  height: 100%;
`

export const FuncWrap = styled.div`
  position: absolute;
  height: 60px;
  width: 640px;
  box-sizing: border-box;
  top: 550px;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 8px 12px 0 0;
`

export const HeartButton = styled.div`
  float: right;
  margin: 6px 12px 0 0;
  background-image: url(${props => props.isLiked === false ? './heart.svg' : './heart-red.svg'});
  height: 27px;
  width: 30px;
  cursor: pointer;
`

export const DownloadButton = styled.div`
  float: right;
  padding: 6px 8px 2px 22px;
  width: 114px;
  height: 30px;
  color: white;
  font-size: 18px;
  font-family: "Lao MN",serif;
  //text-align: center;
  line-height: 30px;
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

export const DownloadSVG = styled.div`
  background-image: url(./download.svg);
  background-size: cover;
  position: relative;
  left: 90px;
  top: -25px;
  height: 16px;
  width: 16px;
`
export const LastButton = styled.div`
  position: absolute;
  top: 160px;
  left: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #1c1914;
  color: white;
  line-height: 36px;
  text-align: center;
  font-size: 30px;
  cursor: pointer;
  user-select: none;
  opacity: 0.7;
  :hover {
    transition: all 0.25s;
    opacity: 1;
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.3);
  }
  :active {
    transition: all 0.08s;
    opacity: 0.8;
    box-shadow: 0.5px 0.5px 4px 0.5px rgba(0, 0, 0, 0.2);
  }
`
export const LastButtonSVG = styled.div`
  background-image: url(./last.svg);
  background-size: contain;
  height: 24px;
  width: 14.5px;
  position: absolute;
  left: 11px;
  top: 8px;
`

export const NextButton = styled.div`
  position: absolute;
  top: 160px;
  left: 620px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #1c1914;
  color: white;
  line-height: 36px;
  text-align: center;
  font-size: 30px;
  cursor: pointer;
  user-select: none;
  opacity: 0.7;
  :hover {
    transition: all 0.25s;
    opacity: 1;
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.3);
  }
  :active {
    transition: all 0.08s;
    opacity: 0.8;
    box-shadow: 0.5px 0.5px 4px 0.5px rgba(0, 0, 0, 0.2);
  }
`
export const NextButtonSVG = styled.div`
  transform: rotate(0.5turn);
  background-image: url(./last.svg);
  background-size: contain;
  height: 24px;
  width: 14.5px;
  position: absolute;
  left: 15px;
  top: 8px;
`