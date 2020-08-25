<template>
  <div id="sign">
    <AppTop></AppTop>
    <div class="app-search-div1">
      <img class="app-search-img" src="~@assets/img/Artboard_5 _Copy_6.png"/>
    </div>
    <div class="app-search-div2">
      <div class="app-search-date" v-if="resData">{{resData.data.time}}</div>
      <div class="app-search-site">{{data}}</div>
    </div>
    <div >
      <!-- <div class="app-search-data" v-if="resData.data" v-for="data in resData.data" :key="data.index"> -->
      <div class="app-search-data" v-if="resData">
        <!-- <div  class="app-search-data-item"  v-if ="data.signFlag" :class="{'active':.active}"> -->
          <div   v-for="data in resData.data.list" :key="data.index" :class='{ "app-search-data-item":true, "active":data.signFlag === 0}' >
            <div class="app-search-data-name" ><span>{{data.userName}}</span></div>
            <div :class='{"app-search-data-result": true, "app-search-data-result2":data.signFlag === 1}'><span>{{data.signIn}}</span></div>
        </div>
        <!-- <div v-else class="app-search-data-item2">
          <div class="app-search-data-name"><span>{{data.userName}}</span></div>
          <div class="app-search-data-result2"><span>{{data.signIn}}</span></div>
       </div> -->
      </div>
    </div>
    <button class="app-search-button" @click="goBack">返回</button>
    <AppBottom></AppBottom>
  </div>
</template>

<script>
export default {
  name: 'AppSearchUser',
  data () {
    return {
      msg: '',
      data: '',
      index: '',
      resData: ''
    };
  },
  created () {
    this.getParams();
    this.getData();
  },
  methods: {
    getParams (){ // 取到路由带过来的参数
      const routerParams = this.$route.query; // 将数据放在当前组件的数据内
      console.log('传来的场馆参数==' + routerParams.index);
      this.index = routerParams.index;
      if (this.index === 0){
        this.data = '1号馆';
      } else if (this.index === 1){
        this.data = '2号馆';
      } else if (this.index === 2){
        this.data = '3号馆';
      } else {
        this.data = '4号馆';
      }
    },
    getData () {
      this.$services
        .getActivitieUsers({
          method: 'get',
          params: this.index
        })
        .then((res) => {
          this.resData = res;
          console.log(res.data.signFlag);
          console.log('接口请求成功：' + JSON.stringify(res, null, 2));
          })
        .catch((err) => {
          console.log('接口请求异常：' + err);
        });
    },
    goBack () {
      this.$router.go(-1);
    }
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

  .app-search-data-item.active {
    background: #dcdcdc;
    border: 1px solid  #dcdcdc;
  }

  /* .app-search-data-item2 {
    background: #dcdcdc;
    border: 1px solid  #dcdcdc;
    border-radius: 9px;
    width: 345px;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
  } */

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
    font-size: 18px;
    color: #fff;
  }

  .app-search-data-result2 {
    display: inline-block;
    width: 128px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    color: #474458;
    font-size: 18px;
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
