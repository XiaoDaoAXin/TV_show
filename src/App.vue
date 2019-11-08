<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from "./views/Home"

export default {
  name: "app",
  components: {
    // Home
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
html,
body,
#app {
  height: 100%;
  overflow: hidden;
  font-family: PingFangSC-Regular, PingFang SC, Microsoft YaHei, WenQuanYi Micro Hei, MicrosoftSansSerif;
}
</style>
