<template>
  <div id="sign">
    <AppTop></AppTop>
    <div class="app-search-div1">
      <img class="app-search-img" src="~@assets/img/Artboard_5 _Copy_6.png"/>
    </div>
    <div class="app-search-div2">
      <div class="app-search-date">17:30-18:30</div>
      <div class="app-search-site">1号馆</div>
    </div>
    <div >
      <div class="app-search-data">
        <div class="app-search-data-item">
          <div class="app-search-data-name"><span>骆双群</span></div>
          <div class="app-search-data-result"><span>签到</span></div>
        </div>
        <div class="app-search-data-item">
          <div class="app-search-data-name"><span>骆双群</span></div>
          <div class="app-search-data-result"><span>签到</span></div>
        </div>
        <div class="app-search-data-item">
          <div class="app-search-data-name"><span>骆双群</span></div>
          <div class="app-search-data-result"><span>签到</span></div>
        </div>
      </div>
    </div>
    <button class="app-search-button">返回</button>
    <AppBottom></AppBottom>
  </div>
</template>

<script>
export default {
  name: 'AppSearch',
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

  .app-search-div1 {
    margin-top: 65px;
  }

  .app-search-img {
    position: relative;
    margin-left: 46px;
    margin-right: 51px;
    width: 277px;
  }

  .app-search-div2 {
    display: block;
    margin-top: 0;
  }

  .app-search-date {
    display: inline-block;
    width: 92px;
    height: 30px;
    font-size: 14px;
    color: #474458;
    line-height: 30px;
    text-align: left;
    margin-left: 13px;
  }

  .app-search-site {
    display: inline-block;
    width: 36px;
    height: 30px;
    font-size: 14px;
    color: #474458;
    line-height: 30px;
    text-align: left;
    margin-left: 213px;
  }

  .app-search-data {
    height: 197px;
    margin-left: 14px;
    margin-right: 14px;
  }

  .app-search-data-item {
    background: #ff5e45;
    border: 1px solid  #ff5e45;
    border-radius: 9px;
    width: 345px;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .app-search-data-name {
    display: inline-block;
    background: #fff;
    width: 215px;
    height: 47px;
    border-radius: 9px 0 0 9px;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    color: #474458;
  }

  .app-search-data-result {
    display: inline-block;
    width: 128px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    color: #474458;
  }

  .app-search-button {
    display: block;
    position: relative;
    height: 45px;
    width: 345px;
    margin-left: 14px;
    margin-right: 14px;
    bottom: 0;
    background: #00b38a;
    border-radius: 4px;
    font-size: 17px;
    color: #fff;
  }
</style>
