<template>
  <div id="content">
    <router-view></router-view>我是详情页面
    <router-link to="/home">home</router-link>
    <router-link to="/news">news</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "数据"
    };
  },
  mounted() {
    window.console.log(this.$route.params);
  }
};
</script>