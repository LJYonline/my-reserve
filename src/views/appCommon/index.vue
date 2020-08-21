<template>
<div id="common">
  <AppTop></AppTop>
  <div class="app-common-enter">
    <img class="img" src="~@assets/img/Artboard 5 Copy.png" >
    <div class="font">您已报名！您预约的活动时间段{{time}}</div>
  </div>
  <button class="button1" @click="goBack">返回</button>
  <!-- <button class="button2">查询活动人员名单</button> -->
  <AppBottom></AppBottom>
</div>
</template>

<script>
// var a = this.$route.query.time;
export default {
  name: 'AppCommon',
  time: '',
  data () {
    return {
    };
   },
  created: function () {
    this.getParams();
  },
  methods: {
    getParams: function (){ // 取到路由带过来的参数
        const routerParams = this.$route.query.time; // 将数据放在当前组件的数据内
    console.log('传来的参数==' + routerParams);
    this.time = routerParams;
    },
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
