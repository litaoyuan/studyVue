<template>
  <div id="news">
    <router-view></router-view>
    <h2>这是一个新闻组建</h2>
    <ul>
      <li v-for="(item,index) in list" :key="index" @click="gotoContent(item)">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是一个组建",
      list: ["111", "222", "333"]
    };
  },
  methods: {
    gotoContent(data) {
      this.$router.push("/content/" + data);
    }
  },
  mounted() {
    window.console.log(this.$route.params);
  },
  watch: {
    msg: function(newVal, old) {
      window.console.log(newVal + "----" + old);
    }
  }
};
</script>