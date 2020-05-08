<template>
  <div id="app">
    <div class="header">
      <router-link to="home">首页</router-link>

      <router-link to="news">新闻</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "my-project"
};
</script>

<style lang='scss'>
.header {
  height: 44px;

  line-height: 44px;

  text-align: center;

  background: #000;
  a {
    color: #fff;
  }
}
</style>
