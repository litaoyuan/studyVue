<template>
  <div>
    {{msg}}
    <div class="home_swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in luobolist" :key="item.img">
          <img :src="item.img" @click="gotoBanner(item.img)" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">Home</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-email">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">Email</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">Chat</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">location</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">Search</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">Phone</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-gear"></span>
            <div class="mui-media-body">Setting</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-info"></span>
            <div class="mui-media-body">about</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-more"></span>
            <div class="mui-media-body">more</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是主页面",
      luobolist: [
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575021432341&di=42970c69ce42645d46477bce5c6005ed&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fphotoblog%2F8%2F1%2F9%2F6%2F8196944%2F20093%2F25%2F1237995645132_mthumb.jpg"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575021432563&di=8204894d5c0093981d5864ab12f41c17&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1402%2F19%2Fc1%2F31380964_1392793941183_mthumb.jpg"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575021432562&di=83a5379da38a84d96e5a56a05fac3b0c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201306%2F08%2F20130608215616_hdNsr.thumb.700_0.jpeg"
        }
      ]
    };
  },
  methods: {
    getSwipedata() {
      var api = "http://vue.studyit.io/api/getlunbo";
      this.$http.get(api).then(
        response => {
          // get body data
          this.someData = response.body;
        },
        erorr => {
          // error callback
          window.console.log(erorr.toString);
        }
      );
    },
    gotoBanner(dataUrl) {
      window.android.jumpTo("我是vue项目传递过来的数据");
      // this.$toast({ message: "我是vue项目传递过来的数据", position: "bottom", duration: 1000 });
    }
  },
  created() {
    this.getSwipedata();
  }
};
</script>
<style lang="scss" scoped>
.home_swipe {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>