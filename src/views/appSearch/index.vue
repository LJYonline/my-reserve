<template>
<div id="common">
  <AppTop></AppTop>
  <div class="app-common-enter">
    <img class="img" src="~@assets/img/appEnterSuccess.png" >
    <div class="font">您的报名已提交，请在16点后查询报告结果。</div>
  </div>
  <button class="button1" @click="goToAppSearchCancel">取消报名</button>
  <van-button
    class="button2"
    type="primary"
    :value="value"
    @click="showPicker = true"
  >查询活动人员名单
  </van-button>
  <van-popup v-model="showPicker" position="bottom" >
  <!-- <van-popup v-model="showPicker" round position="bottom" >  round是圆角的 -->
    <van-picker
      title="请选择查询场地"
      show-toolbar
      :columns="columns"
      @cancel="showPicker = false"
      @confirm="onConfirm"
    />
</van-popup>
  <AppBottom></AppBottom>
</div>
</template>

<script>
import Vue from 'vue';
import 'vant/lib/index.css';
import { Field, Button, Popup, Picker } from 'vant';
Vue.use(Field);
Vue.use(Button);
Vue.use(Popup);
Vue.use(Picker);
export default {
  name: 'AppEnterSuccess',
  time: '',
  data () {
    return {
      show: false,
      msg: '',
      value: '',
      index: '',
      showPicker: false,
      columns: ['1号场馆', '2号场馆', '3号场馆', '4号场馆']
    };
   },
  created () {
    this.getParams();
  },
  methods: {
    getParams (){ // 取到路由带过来的参数
      const routerParams = this.$route.query.time; // 将数据放在当前组件的数据内
      console.log('传来的参数==' + routerParams);
      this.time = routerParams;
    },
    goBack () {
      this.$router.go(-1);
    },
     goToAppSearchCancel () {
      this.$router.push({ path: './appSearchCancel/', query: { id: this.id } });
    },
    onConfirm (value, index) {
      console.log(value); // 选中场馆的值
      console.log(index); // 选中场馆的索引
      this.$router.push({ path: './appSearchUser/', query: { index: index } });
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
