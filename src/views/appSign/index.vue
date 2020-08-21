<template>
  <div id="sign">
    <AppTop></AppTop>
      <div class="app-content">
        <img class="app-content-board" src="~@assets/img/Artboard_221.png"/>
        <div class="app-content-face">
          <img class="face-liwb-img" src="~@assets/img/face_liwb.png">
          <div class="face-liwb-font-center">
            <font class="face-liwb-font">编程：李文</font>
          </div>
        </div>
        <div class="app-content-facetwo">
          <img class="face-liwb-imgtwo" src="~@assets/img/face_zhxp.png">
          <div class="face-liwb-font-center">
            <font class="face-liwb-font">设计：郑小萍</font>
          </div>
        </div>
      </div>
    <AppBottom></AppBottom>
  </div>
</template>

<script>
export default {
  name: 'AppSign',
  data () {
    return {
      msg: ''
    };
  }
};
</script>

<style>
  #sign {
    display: block;
  }

  .app-content {
    margin-top: 65px;
    top: 65px;
    height: 555px;
    width: 375px;
  }

  .app-content-face {
    position: relative;
    bottom: 224px;
  }

  .app-content-facetwo {
    position: relative;
    bottom: 195px;
  }

  .app-content-board {
    display: block;
    width: 100%;
  }

  .face-liwb-img {
    height: 50px;
    width: 50px;
    margin-left: 125px;
    vertical-align: middle;
  }

  .face-liwb-imgtwo {
    height: 50px;
    width: 50px;
    margin-left: 79px;
    vertical-align: middle;
  }

  .face-liwb-font {
    display: inline;
    margin-right: 79px;
    font-size: 18px;
    color: #474458;
    line-height: 30px;
    text-align: left;
  }

  .face-liwb-font-center {
    display: inline;
    position: relative;
    margin-left: 10px;
    vertical-align: middle;
  }
</style>
