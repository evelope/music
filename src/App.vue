<template>
  <div id="app">
    <div v-if="begin" class="begin">
      <img src="@/assets/img/begin-bottom.jpg">
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      begin: false
    };
  },
  async mounted() {
    this.beginEdit();

    let res = await this.getMusicList({
      id: 3778678,
      limit: 10,
      offset: 0
    });
    this.musicListEdit(res);

  },
  methods: {
    ...mapMutations(["musicListEdit"]),
    // 引入：获取热门歌曲|
    ...mapActions(["getMusicList"]),
    // 首次加载 大屏处理
    beginEdit() {
      let s = window.sessionStorage.getItem("begin");
      if (!s) {
        window.sessionStorage.setItem("begin", "true");
        this.begin = true;
        let timer = setTimeout(() => {
          this.begin = false;
          clearTimeout(timer);
        }, 2000);
      } else {
        this.begin = false;
      }
    }
  }
};
</script>


<style lang="less" scoped>
#app {
  overflow-y: hidden;
  height: 100%;
  max-width: 540px;
  margin: 0 auto;
  .begin {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #d03835 url("~@/assets/img/begin-top.jpg") top center no-repeat;
    background-size: contain;
    animation: opt 2s 1;
    animation-fill-mode: forwards;
    img {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
  @keyframes opt {
    70% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
}
</style>
