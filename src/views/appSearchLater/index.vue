<template>
<div id="common">
  <AppTop></AppTop>
  <div class="app-common-enter">
    <img class="img" src="~@assets/img/appSearchLater.png" >
    <div class="cancel-font">{{ resData.return_msg }}</div>
  </div>
  <van-button
    class="button2"
    type="primary"
    :value="value"
    @click="showPicker = true"
  >查询活动人员名单
  </van-button>
  <van-popup v-model="showPicker" position="bottom" >
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
  name: 'AppSearchLater',
  Id: '',
  data () {
    return {
      show: false,
      resData: '',
      index: '',
      value: '',
      showPicker: false,
      columns: ['1号场馆', '2号场馆', '3号场馆', '4号场馆']
    };
   },
  created () {
    this.getData();
  },
  methods: {
    getData () {
      const data = {};
      this.$services
      .searchSignUp({
        method: 'get',
        data
      }).then((res) => {
        console.log('接口请求成功：' + JSON.stringify(res, null, 2));
        this.resData = res;
      }).catch((err) => {
        console.log('接口请求异常：' + err);
      });
    },
    onConfirm (value, index) {
      console.log(value); // 选中场馆的值
      console.log(index); // 选中场馆的索引
      this.$router.push({ path: '../appSearchUser/', query: { index: index } });
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

  .cancel-font {
    font-size: 16px;
    color: #3f3c51;
    line-height: 30px;
    text-align: center;
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
