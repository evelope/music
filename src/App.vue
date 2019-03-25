<template>
  <div id="app">
    <audio v-if="audioShow" autoplay ref="myAudio" @error="audioError()">
      <source :src="musicStatus.music && musicStatus.music.url" type="audio/ogg">你的浏览器不支持audio音频
    </audio>
    <div v-if="begin" class="begin">
      <img src="@/assets/img/begin-bottom.jpg">
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      begin: false,
      // 控制切换
      audioShow: true
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
    this.musicEdit({ index: 0 });
  },
  computed: {
    ...mapState(["musicStatus"])
  },
  methods: {
    ...mapMutations(["musicListEdit", "musicEdit"]),
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
    },
    // 音乐出错
    audioError() {
      console.log("9999");
      volume
    }
  },
  watch: {
    "musicStatus.play"(n) {
      if (n) {
        this.$refs.myAudio.play();
      } else {
        this.$refs.myAudio.pause();
      }
    },
    "musicStatus.music.url"() {
      this.audioShow = false;
      this.$nextTick(() => {
        this.audioShow = true;
        this.$nextTick(()=>{
          this.$refs.myAudio.play();
        })
      });
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
