<template>
  <div id="app">
    <div class="pages">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>
