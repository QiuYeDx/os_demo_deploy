import React from 'react';
import {
    Container, H2, H3, UpLoad, PlusWrap, Plus, UpLoadedImg,
    SelectButton, FuncWrapA, FuncWrapB, MainButton, Circle, Sub,
    PlusWhite, BoxWrap, BoxWrapper, Wrapper, Box, SubCircle, SubWrap,
    SelectInput, SelectOption, GapErect, InputText
} from "./Styled.js";
// import {picManager, Pic, PicManager} from "../../classes/pic";
import {Pic, PicManager} from "../../classes/pic";

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: '',
            itemsValue: [
                {
                    key: 'key1',
                    value: ''
                },
                {
                    key: 'key2',
                    value: ''
                },
                {
                    key: 'key3',
                    value: ''
                },
                {
                    key: 'key4',
                    value: ''
                },
                {
                    key: 'key5',
                    value: ''
                },
            ],
            isSelectedA: -1,
            isSelectedB: -1,
        };
        this.btnRef = React.createRef();
        this.handleSelectedImg = this.handleSelectedImg.bind(this);
        this.submitUpload = this.submitUpload.bind(this);
        this.addItemOfInput = this.addItemOfInput.bind(this);
    }
    picManager = new PicManager();
    dataURLtoBlob(dataurl) {
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type:mime});
    }

    handleSelectedImg(){
        this.btnRef.current.click();
    }

    submitUpload(e){
        const imgs = e.target.files;
        const rawImg = imgs[0];
        if(!rawImg) return;
        this.setState({imgUrl: URL.createObjectURL(rawImg)});

        this.picManager.re0();
        for(let i=0; i<e.target.files.length; i++){
            const fileReader = new FileReader();
            let self = this;
            fileReader.onload = function(res) {
                const dataUrl = res.currentTarget.result;
                const newPic = new Pic(dataUrl);
                newPic.initTags();
                self.picManager.addPic(newPic);
            }
            const file = e.target.files[i];
            if (!file) continue;
            this.picManager.addInfo(file.name);
            fileReader.readAsDataURL(file);
        }
    }

    // Button list
    nameOfButtonA = ['Accessories & Bags', 'Appliances', 'Beauty & Toiletries',
        'Food & Fresh', 'Clothing & Shoes', 'Digital', 'Activity', 'Others'];
    nameOfButtonB = ['2160 * 1214', '1214 * 2160'];
    nameOfInput = ['[mainhead]', '[subhead]', '[buttor]',
        '[others]', '[logo]', '[house]', '[sofa]'];
    listItemOfInputOption = this.nameOfInput.map((name) =>
        <SelectOption>{name}</SelectOption>
    );
    dex = 6;
    addItemOfInput(){
        const tmp = this.state.itemsValue;
        tmp.push({
            key: 'key' + (this.dex++).toString(),
            value: ''
        },);
        this.setState({itemsValue: tmp});
    }

    render() {
        return (
            <div>
                <Container>
                    <H2 inputTop={"150px"}>Please upload the main product image: </H2>
                    <H3 inputTop={"180px"}>Please upload images in PNG format, please combine multiple<br/>
                        product main images into one image.</H3>
                    <UpLoad onClick={this.handleSelectedImg}>
                        <input
                            ref={this.btnRef}
                            className={"img-upload-input"}
                            type={"file"}
                            accept={".jpg"}
                            onChange={this.submitUpload}
                            style={{visibility: 'hidden'}}
                            multiple
                        />
                        <PlusWrap>
                            <Plus/>
                        </PlusWrap>
                    </UpLoad>
                    <UpLoadedImg
                        src={this.state.imgUrl}
                    />

                    <H2 inputTop={"336px"}>Please select a category tab: </H2>
                    <FuncWrapA>
                        {this.nameOfButtonA.map((name, index) =>
                            <SelectButton
                                isSelected={this.state.isSelectedA === index}
                                onClick={(e, dex= index) => {
                                    this.setState({isSelectedA: dex});
                                }}
                            >
                                {name}
                            </SelectButton>
                        )}
                    </FuncWrapA>

                    <H2 inputTop={"514px"}>Please select a size: </H2>
                    <FuncWrapB>
                        {this.nameOfButtonB.map((name, index) =>
                            <SelectButton
                                isSelected={this.state.isSelectedB === index}
                                onClick={(e, dex= index) => {
                                    this.setState({isSelectedB: dex});
                                }}
                            >
                                {name}
                            </SelectButton>
                        )}
                    </FuncWrapB>

                    <H2 inputTop={"600px"}>Please enter text: </H2>
                    <Circle left={'400px'} top={'596px'} onClick={this.addItemOfInput}>
                        <PlusWrap>
                            <PlusWhite/>
                        </PlusWrap>
                    </Circle>
                    <Wrapper>
                        <BoxWrapper>
                            {this.state.itemsValue.map((t, index) =>
                                <BoxWrap>
                                    <Box key={t.key}>
                                        <SelectInput>
                                            {this.listItemOfInputOption}
                                        </SelectInput>
                                        <InputText
                                            placeholder={'Please enter text here...'}
                                            value={t.value}
                                            index={index}
                                            onChange={(e, dex = index) => {
                                                const tmp = this.state.itemsValue;
                                                tmp[dex].value = e.target.value;
                                                this.setState({itemsValue: tmp});
                                            }}
                                        />
                                    </Box>
                                    <GapErect/>
                                    <SubCircle>
                                        <SubWrap index={index} onClick={(e, dex = index) => {
                                            const index = dex;
                                            const lists = this.state.itemsValue;
                                            lists.splice(index, 1);
                                            this.setState({itemsValue: lists});
                                        }}>
                                            <Sub/>
                                        </SubWrap>
                                    </SubCircle>
                                </BoxWrap>
                            )}
                        </BoxWrapper>
                    </Wrapper>
                    <MainButton onClick={() => {
                        console.log(this.picManager);
                        for(let i=0; i<this.picManager.getAllPic().length; i++) {
                            console.log(this.picManager.getAllPic()[i].getTags());
                            // console.log(picManager.getAllPic()[i].getDataUrl());
                        }
                    }}>Generate !</MainButton>
                </Container>
            </div>
        )
    }
}
