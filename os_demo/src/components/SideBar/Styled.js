import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  padding-top: 150px;
  box-sizing: border-box;
  left: 0;
  top: 0;
  height: 100%;
  width: 480px;
  background-color: #fff;
  z-index: 100;
`

export const H2 = styled.div`
    line-height: 28px;
    font-size: 20px;
    font-weight: 400;
    font-family: "Lao MN",serif;
    white-space: nowrap;
    position: absolute;
    width: 360px;
    top: ${props => props.inputTop || "150px"};
    left: 48px;
`

export const H3 = styled.div`
    line-height: 14px;
    color: #6C6C6C;
    font-size: 12px;
    font-weight: 300;
    font-family: "Lao MN",serif;
    white-space: nowrap;
    position: absolute;
    width: 360px;
    top: ${props => props.inputTop || "150px"};
    left: 48px;
`

export const UpLoad = styled.div`
  position: absolute;
  top: 220px;
  left: 56px;
  background-color: #f6f6f6;
  width: 100px;
  height: 100px;
  border: 1px solid #1F1A14;
  border-radius: 14px;
  cursor: pointer;
`

export const UpLoadedImg = styled.img`
  position: absolute;
  top: 220px;
  left: 186px;
  min-width: 100px;
  height: 100px;
`

export const PlusWrap = styled.div`
  position: absolute;
  width: 19px;
  height: 20px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`

export const Plus = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(./plus.svg);    
`

export const PlusWhite = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(./plus_white.svg);    
`

export const SelectButton = styled.div`
  width: 120px;
  height: 33px;
  border: 1px solid #1F1A14;
  border-radius: 10px;
  padding-top: 2px;
  font-size: 12px;
  font-family: "Lao MN", serif;
  text-align: center;
  line-height: 34px;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  color: ${props => props.isSelected ? '#f6f6f6' : 'currentColor'};
  background-color: ${props => props.isSelected ? '#1F1A14' : '#f6f6f6'};
  transition: all 0.3s ease;
  :hover {
    transform: translateY(-2px);
    box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
  }
  :active {
    box-shadow: 0.5px 0.5px 4px 0.5px rgba(0, 0, 0, 0.1);
  }
`

export const FuncWrapA = styled.div`
  position: absolute;
  width: 400px;
  height: 152px;
  padding: 5px 50px;
  left: 0;
  top: 360px;
  display: grid;
  grid: 50px / auto auto auto;
`

export const FuncWrapB = styled.div`
  position: absolute;
  width: 400px;
  height: 60px;
  padding: 5px 50px;
  left: 0;
  top: 540px;
  display: grid;
  grid: 50px / 134px auto auto;
`

export const Circle = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #1a1814;
  cursor: pointer;
  left: ${props => props.left || '400px'};
  top: ${props => props.top || '596px'};
  :hover {
    transition: all 0.15s;
    opacity: 0.6;
    box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.3);
  }
  :active {
    transition: all 0.08s;
    opacity: 0.8;
    box-shadow: 0.5px 0.5px 4px 0.5px rgba(0, 0, 0, 0.2);
  }
`

export const MainButton = styled.div`
    padding: 6px 8px 4px 8px;
    margin-bottom: 40px;
    position: absolute;
    top: 862px;
    left: 140px;
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

export const Wrapper = styled.div`
  position: absolute;
  top: 640px;
  left: 50px;
  height: 210px;
  width: 390px;
  overflow-x: visible;
  overflow-y: auto;
`

export const BoxWrapper = styled.div`
  padding-top: 2px;
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`

export const BoxWrap = styled.div`
  line-height: 32px;
  margin: 0 0 8px 0;
  height: 34px;
  width: 380px;
`

export const Box = styled.div`
  border: solid 1px #1a1814;
  border-radius: 8px;
  margin: 0;
  padding-left: 4px;
  float: left;
  background-color: #f6f6f6;
  width: 320px;
  height: 32px;
`

export const Sub = styled.div`
  position: relative;
  left: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  background-size: contain;
  background-image: url(./sub.svg);    
`

export const SubWrap = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 30px;
  height: 30px;
  background-color: #1a1814;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    transition: all 0.15s;
    opacity: 0.6;
    box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.3);
  }
  :active {
    transition: all 0.08s;
    opacity: 0.8;
    box-shadow: 0.5px 0.5px 4px 0.5px rgba(0, 0, 0, 0.2);
  }
`

export const SubCircle = styled.div`
  position: relative;
  left: 345px;
  top: -30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const SelectInput = styled.select`
  position: relative;
  top: -2px;
  border: solid 1px #1a1814;
  border-radius: 16px;
  margin-right: 4px;
  width: 88px;
  height: 24px;
`

export const SelectOption = styled.option`
  line-height: 24px;
  font-size: 14px;
  font-family: "Lao MN", serif;
`

export const GapErect = styled.div`
  position: relative;
  left: 98px;
  top: 4px;
  width: 0;
  height: 26px;
  border: 0.5px solid #1F1A14;
`

export const InputText = styled.input`
  position: relative;
  margin-left: 4px;
  width: 208px;
  height: 16px;
  font-size: 16px;
  font-family: "Lao MN", serif;
  background-color: #f5f5f5;
  border: none;
`
