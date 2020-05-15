<template>
  <div id="app" class="app">
    <transition>
      <router-view></router-view>
    </transition>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/homePage">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/msgPage">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="mui-tab-item" to="/carPage">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </router-link>
      <router-link class="mui-tab-item" to="/myPage">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
    <!-- <h2>这是一个首页</h2>
    <button @click="gotoContent()">跳到新闻页面</button>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  // methods: {
  //   gotoContent() {
  //     window.console.log("dddd");
  //     //跳转页面
  //     this.$router.push("/news");
  //   },
  //   toastMsg() {
  //     this.$toast({ message: "提示信息", position: "bottom", duration: -1 });
  //     this.$router.push("/news");
  //   },
  //   gotoHomePage() {
  //     this.$router.push("/homePage");
  //   }
  // },
  computed() {},
  mounted() {
    this.$router.push("/homePage");
  }
};
</script>
<style lang="scss" scoped>
// scoped 代表局部样式，不加的话，变成了全局样式
.app {
  width: 100%;
  overflow: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  position: absolute;
  opacity: 0;
  transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.1s ease;
}
</style>