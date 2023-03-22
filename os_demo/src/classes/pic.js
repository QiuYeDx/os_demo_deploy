// let ExifImage = require('exif').ExifImage; //node.js使用
import EXIF from 'exif-js';

export class PicManager{
    constructor(array = []) {
        this._picArray = array;
        this._infoList = [];
        this.test = "I'm a pic manager.";
    }
    addPic(pic){
        this._picArray.push(pic);
    }
    addInfo(info){
        this._infoList.push(info);
    }
    getNumOfPic(){
        return this._picArray.length;
    }
    getAllPic(){
        return this._picArray;
    }
    getAllInfo(){
        return this._infoList;
    }
    re0(){
        this._picArray = [];
        this._infoList = [];
    }
}

export class Pic{
    constructor(dataUrl){
        this.dataUrl = dataUrl;
        this.tags={};
    }
    initTags(){
        // console.log("initTags():")
        let image = new Image();
        let self = this;
        image.onload = function(){
            // console.log('image loaded');
            EXIF.getData(image, function(){ // image is a must.
                self.tags = EXIF.getAllTags(this);
                // console.log(EXIF.pretty(this));
            });

            // node.js使用
            // try {
            //     new ExifImage({image}, function (error, exifData) {
            //         if (error)
            //             console.log('Error: '+error.message);
            //         else{
            //             console.log(exifData); // Do something with your data!
            //             self.tags = exifData;
            //         }
            //     });
            // } catch (error) {
            //     console.log('Error: ' + error.message);
            // }
        };
        image.src = this.dataUrl;
    }
    getTags(){ // get AllTags json
        return this.tags;
    }
    getDataUrl(){
        return this.dataUrl;
    }
}

// export var picManager = new PicManager();