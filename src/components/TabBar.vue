<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <div class="page-title">Tabbar</div>
      <div>
        <mt-cell class="page-part" title="当前选中" :value="selected" />
      </div>

      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="第一">
          <mt-cell v-for="n in 10" :title="'第一 ' + n" :key="n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="第二">
          <mt-cell v-for="n in 5" :title="'第二 ' + n" :key="n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="第三">
          <mt-cell v-for="n in 7" :title="'第三 ' + n" :key="n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="第四">
          <div class="page-part">
            <mt-cell v-for="n in 12" :title="'第四 ' + n" :key="n" />
          </div>
          <router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="第一">
        <img slot="icon" src="../assets/logo.png" />
        第一
      </mt-tab-item>
      <mt-tab-item id="第二">
        <img slot="icon" src="../assets/logo.png" />
        第二
      </mt-tab-item>
      <mt-tab-item id="第三">
        <img slot="icon" src="../assets/logo.png" />
        第三
      </mt-tab-item>
      <mt-tab-item id="第四">
        <img slot="icon" src="../assets/logo.png" />
        第四
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "page-tabbar",
  data() {
    return {
      selected: "第一"
    };
  }
};
</script>

<style>
.page-tabbar {
  overflow: hidden;
  height: 100vh;
}
.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}
</style>