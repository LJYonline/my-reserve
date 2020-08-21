<template>
<div id="enter">
  <AppTop></AppTop>
  <div class="app-enter-message">
    <div class="app-enter-logo">
      <img class="app-enter-logo-img" src="~@assets/img/logo_hd.png">
    </div>
    <div class="app-enter-message-number">
      <div class="app-enter-message-id">员工号：123456</div>
      <div class="app-enter-message-tel">手机号：13888602654</div>
    </div>
  </div>
  <div class="app-enter-show">
    <img class="app-enter-show-img" src="~@assets/img/time.png"/>
    <div class="app-enter-show-time">选择时间段</div>
    <div class="app-enter-show-date">2016-2-16</div>
  </div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
       <div class="swiper-slide" v-for="(banner) in bannerList" :key="banner.id">
        <div :class="banner.class">
          <img class="app-enter-data-img" :src="banner.url">
          <div class="app-enter-data-time">{{banner.time}}</div>
        </div>
      </div>
      <!-- <div class="swiper-slide">
        <div class="app-enter-data-select">
          <img class="app-enter-data-img" src="~@assets/img/Artboard_22_Copy1.png">
      <div class="app-enter-data-time">19:30 – 20:30</div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="app-enter-data-right">
          <img class="app-enter-data-img" src="~@assets/img/Artboard_22_Copy2.png">
          <div class="app-enter-data-time">20:30 – 21:30</div>
        </div>
      </div> -->
    </div>
  </div>
  <button class="app-enter-button" @click="submitEnter">报名</button>
  <AppBottom></AppBottom>
</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import appCommon from '../appCommon';
let vm = null;
  export default {
  name: 'AppEnter',
  data () {
    return {
      msg: '',
      vm: '',
      time: '',
      bannerList: [
          {
           id: '1',
           time: '18:30 – 19:30',
           url: require('../../assets/img/Artboard_22_Copy4.png'),
           class: 'app-enter-data-left'
          },
          {
            id: '2',
            time: '19:30 – 20:30',
            url: require('../../assets/img/Artboard_22_Copy1.png'),
            class: 'app-enter-data-select'
          },
          {
            id: '3',
            time: '20:30 – 21:30',
            url: require('../../assets/img/Artboard_22_Copy2.png'),
            class: 'app-enter-data-right'
          }
      ]
    };
  },
  computed: {
      swiper () {
        return this.$refs.mySwiper.swiper;
      }
    },
  created () {
      vm = this;
  },
  methods: {
      handleClickSlide (index) {
          console.log('当前点击索引:', index);
          if (index === 0) {
              vm.time = '18:30 – 19:30';
          } else if (index === 1) {
              vm.time = '19:30 – 20:30';
          } else {
            vm.time = '20:30 – 21:30';
          }
      },
      submitEnter: function (event) {
        console.log(this.time);
        this.$router.push({ path: './appCommon/', query: { time: this.time } });
      },
      dataChange (data){
        this.time = data;
      }
  },
  mounted () {
    const that = this;
    that.mySwiper = new Swiper('.swiper-container', {
    setWrapperSize: true, // 设置flex布局
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    slidesPerView: 2, // 同时显示2个slide
    centeredSlides: true, // slide 居中
    watchSlidesProgress: true,
    paginationClickable: true, // sile切换方式
    spaceBetween: 17, // slide之间的距离
    autoplay: true,
    on: {
    click: function (){
      const realIndex = this.realIndex;
      vm.handleClickSlide(realIndex);
    }
  }

  });
  }
};

</script>
<style>
  #enter {
    width: 100%;
    height: 100%;
    background: #f0f1f5;
  }

  .app-enter-message {
    display: block;
    width: 100%;
    height: 132px;
    margin-top: 70px;
    background: #fff;
  }

  .app-enter-logo {
    display: inline-block;
    width: 79px;
    height: 53px;
    margin-left: 61px;
    margin-top: 28px;
  }

  .app-enter-logo-img {
    width: 79px;
    height: 53px;
  }

  .app-enter-message-number {
    display: inline-block;
    width: 220px;
    height: 30px;
    margin-right: 0;
    position: absolute;
  }

  .app-enter-message-id {
    font-size: 16px;
    color: #3f3c51;
    line-height: 30px;
    text-align: left;
    margin-top: 28px;
    margin-left: 10px;
  }

  .app-enter-message-tel {
    font-size: 16px;
    color: #3f3c51;
    line-height: 30px;
    text-align: left;
    margin-top: 10px;
    margin-left: 10px;
  }

  .app-enter-show {
    display: block;
    height: 30px;
    margin-top: 23px;
  }

  .app-enter-show-img {
    width: 13px;
    height: 14px;
    margin-left: 14px;
  }

  .app-enter-show-time {
    display: inline-block;
    width: 70px;
    height: 30px;
    font-size: 14px;
    color: #3f3c51;
    line-height: 30px;
    text-align: left;
    margin-left: 8px;
  }

  .app-enter-show-date {
    display: inline-block;
    font-size: 14px;
    color: #3f3c51;
    line-height: 30px;
    margin-left: 190px;
  }

  .swiper-container {
    height: 220px;
  }

  /* .swiper-wrapper {
    margin-left: -49px;
    margin-right: -49px;
    margin-top: 20px;
  } */

  .swiper-slide div {
    width: 167px;
  }

  .swiper-slide-prev div {
    margin-top: 28px;
    height: 163px !important;
  }

  .swiper-slide-prev img {
    height: 112px !important;
    width: 106px !important;
    margin-left: 40px !important;
  }

  .swiper-slide-next div {
    margin-top: 28px;
    height: 163px !important;
  }

  .swiper-slide-next img {
    height: 112px !important;
    width: 106px !important;
    margin-left: 20px !important;
  }

  .app-enter-data-select {
    height: 220px;
    background: #ff6a6a;/* width: 167px;height: 220px;margin-left: 32px; */
    border-radius: 10px;
    box-shadow: 0 0 5px 1px #999;
  }

  .app-enter-data-img {
    width: 167px;
  }

  .app-enter-data-left {
    height: 220px;
    background: #ffe400;
    border-radius: 10px;
    box-shadow: 0 0 5px 1px #999;
  }

  .app-enter-data-time {
    height: 81px;
    width: 100%;
    background: #fff;
    margin-top: -5px;
    border-radius: 0 0 10px 10px;
    font-size: 18px;
    color: #3f3c51;
    line-height: 36px;
    line-height: 77px;
    text-align: center;
  }

  .app-enter-data-right {
    height: 220px;
    background: #3994e9;
    border-radius: 10px;
    box-shadow: 0 0 5px 1px #999;
  }

  .app-enter-data-right-img {
    width: 124px;
    height: auto;
  }

  .swiper-slide-prev .app-enter-data-time {
    margin-top: -2px !important;
    width: auto !important;
    height: 50px !important;
    font-size: 13px;
    text-align: center;
  }

  .swiper-slide-next .app-enter-data-time {
    margin-top: -2px !important;
    width: auto !important;
    height: 50px !important;
    font-size: 13px;
    text-align: center;
  }

  .app-enter-button {
    height: 45px;
    width: 345px;
    margin-left: 15px;
    margin-top: 38px;
    background: #00b38a;
    border-radius: 4px;
    font-size: 17px;
    color: #fff;
  }
</style>
