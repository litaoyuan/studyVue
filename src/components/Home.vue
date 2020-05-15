<template>
  <div id="home"></div>
</template>
<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    gotoContent() {
      window.console.log("dddd");
      //跳转页面
      this.$router.push("/news");
    },
    toastMsg() {
      this.$toast({ message: "提示信息", position: "bottom", duration: -1 });
      this.$router.push("/news");
    }
  }
};
</script>
<style lang="scss" scoped>
// scoped 代表局部样式，不加的话，变成了全局样式
h2 {
  color: red;
}
</style>