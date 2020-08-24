
//报名enter
//签到sign
//查询search
//其他other
<template>
  <div id="bottom">
    <div @click="goToAppEnter">
      <img class="bottom-img" v-if="!enter" src="~@assets/img/baoming.png" />
      <img class="bottom-img" v-else src="~@assets/img/baoming2.png" />
      <div  class="bottom-font">报名</div>
    </div>
    <div @click="goToAppSign">
      <img class="bottom-img" v-if="!sign" src="~@assets/img/qiandao.png" />
      <img class="bottom-img" v-else src="~@assets/img/qiandao2.png" />
      <div class="bottom-font">签到</div>
    </div>
    <div @click="goToAppSearch">
      <img class="bottom-img" v-if="!search" src="~@assets/img/chaxun.png" />
      <img class="bottom-img" v-else src="~@assets/img/chaxun2.png" />
      <div class="bottom-font">查询</div>
    </div>
    <div >
      <img class="bottom-img" v-if="!other" src="~@assets/img/qita.png" />
      <img class="bottom-img" v-else src="~@assets/img/qita2.png" />
      <div class="bottom-font">其他</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBottom',
  data (){
    return {
      enter: false,
      sign: false,
      search: false,
      other: false
    };
  },
  methods: {
    goToAppEnter () {
      this.enter = true;
      this.sign = false;
      this.search = false;
      this.other = false;
      console.log('appEnter');
      this.$router.push({ path: '/appEnter' }).catch(() => {});
    },
    goToAppSign () {
      this.enter = false;
      this.sign = true;
      this.search = false;
      this.other = false;
      this.qinado = '~@assets/img/qiandao.png';
      console.log('appSign');
      this.$router.push({ path: '/appSign' }).catch(() => {});
    },
    goToAppSearch () {
      this.enter = false;
      this.sign = false;
      this.search = true;
      this.other = false;
      // 获取后端的数据 若有突发情况
      // this.$router.push({ path: '/appSearchOver'} )
      // 判断是否为 16点以后访问
      // this.$router.push({ path: '/appSearchLater')
      console.log('appSearch');
      this.$router.push({ path: '/appSearch' }).catch(() => {});
    }
  }
};
</script>

<style>
#bottom {
  display: flex;
  justify-content: space-around;
  height: 49px;
  width: 100%;
  background: #f9f9f9;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.bottom-img {
  margin-top: 5px;
  height: 24px;
  width: 24px;
}

.bottom-font {
  display: block;
  font-size: 10px;
  color: #808692;
}
</style>
