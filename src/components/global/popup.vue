<template>
<div>
  <van-picker
    title="标题"
    show-toolbar
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  />
  <van-popup v-model='showPicker' round position='bottom'>
    <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
  </van-popup>
</div>

</template>

<script>
import Vue from 'vue';
import 'vant/lib/index.css';
import { List, Cell, Popup, Picker } from 'vant';
Vue.use(Cell);
Vue.use(List);
Vue.use(Popup);
Vue.use(Picker);
export default {
  name: 'Popup',
  props: ['arr'], // 父组件传来的值
  data (){
    return {
      myshow: true, // popup的显示，在组件中，默认是显示，不用父组件传值
      dataarr: this.arr
    };
  },
  methods: {
    close (){
        this.$emit('closeTip', false);// 把关闭信息传递给父组件
      }
  }
};
</script>
