require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';

// 获取图片数据
var imagesData = require('_../data/imagesData.json_');

// 图片信息转成图片 url
function generateImgUrl(imgsDataArr) {
  for (var i=0, j = imgsDataArr.length; i < j; i++){
    var singleImg = imgsDataArr[i];
    singleImg.imgUrl = require('../images/' +
        singleImg.fileName);
    imgsDataArr[i] = singleImg;
  }
  return imgsDataArr;
}

imagesData = generateImgUrl(imagesData);

class AppComponent extends React.Component {
  render() {
    return (
        <section className = "stage">
          <section className = "img-sec">
          </section>
          <nav className = "controller-nav">
          </nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
