<template>
<div id="common">
  <AppTop></AppTop>
  <div class="app-common-enter">
    <img class="img" src="~@assets/img/appSearchOVer.png" >
    <div class="font">非常抱歉，由于突发原因，今天的活动时间取消了，请您关注下次活动时间。</div>
  </div>
  <button class="button1" @click="goBack">返回</button>
  <AppBottom></AppBottom>
</div>
</template>

<script>
// var a = this.$route.query.time;
export default {
  name: 'AppSearchOver',
  data () {
    return {
    };
   },
  created: function () {
  },
  methods: {
    goBack: function () {
      this.$router.go(-1);
    }
}
};
</script>
<style>
  .app-common-enter {
    width: 270px;
    height: 100%;
    margin-top: 161px;
    margin-left: 52px;
    margin-right: 52px;
  }

  .img {
    width: 270px;
    height: auto;
  }

  .font {
    font-size: 16px;
    color: #3f3c51;
    line-height: 30px;
    margin-left: 30px;
  }

  .button1 {
    height: 45px;
    width: 345px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 38px;
    background: #00b38a;
    border-radius: 4px;
    font-size: 17px;
    color: #fff;
  }

  .button2 {
    height: 45px;
    width: 345px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 30px;
    background: #1e90ff;
    border-radius: 4px;
    font-size: 17px;
    color: #fff;
  }

</style>
