<template>
  <div id="app">
    <audio v-if="audioShow" autoplay ref="myAudio" @error="audioError()">
      <source :src="musicStatus.music && musicStatus.music.url" type="audio/ogg">你的浏览器不支持audio音频
    </audio>
    <div v-if="begin" class="begin">
      <img src="@/assets/img/begin-bottom.jpg">
    </div>
    <router-view :class="{'view': begin}"/>
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
    ...mapState(["musicStatus", "musiclist", "vue"])
  },
  methods: {
    ...mapMutations(["musicListEdit", "musicEdit", "musicTimeEdit", "editAudio"]),
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
    // 监听audio 函数
    audioWatch() {
      // this.$refs.myAudio.currentTime = 260;
      this.$refs.myAudio.addEventListener("timeupdate", () => {
        // 存储播放时间
        // this.$refs.myAudio.currentTime = this.musicStatus.music.currentTime;
        this.musicTimeEdit(this.$refs.myAudio.currentTime);
        // console.log(
        //   this.$refs.myAudio.duration,
        //   this.$refs.myAudio.currentTime,
        //   "--"
        // );
        if (this.$refs.myAudio.currentTime >= this.$refs.myAudio.duration) {
          if (this.musicStatus.index + 1 >= this.musiclist.myLike.length) {
          } else {
            this.musicEdit({ index: ++this.musicStatus.index });
          }
          this.vue.$refs.mtSwipe.next();
          return;
        }
      });
    },
    // 音乐出错
    audioError() {}
  },
  watch: {
    "musicStatus.play"(n) {
      let v = this.$refs.myAudio.volume;
      clearInterval(this.t);
      if (n) {
        this.$refs.myAudio.play();
        this.t = setInterval(() => {
          v += 0.2;
          if (v <= 1) {
            this.$refs.myAudio.volume = v;
          } else {
            clearInterval(this.t);
          }
        }, 150);
      } else {
        this.t = setInterval(() => {
          v -= 0.2;
          if (v > 0) {
            this.$refs.myAudio.volume = v;
          } else {
            clearInterval(this.t);
            this.$refs.myAudio.pause();
          }
        }, 150);
      }
    },
    "musicStatus.music.url"() {
      this.audioShow = false;
      this.$nextTick(() => {
        this.audioShow = true;
        this.$nextTick(() => {
          this.editAudio(this.$refs.myAudio);
          this.$refs.myAudio.play();
          // 监听video
          this.audioWatch();
        });
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
    background-size: cover;
    animation: opt 2s 1;
    animation-fill-mode: forwards;
    img {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
  .view {
    animation: view-opt 1.5s 1 ease-out;
  }
  @keyframes opt {
    80% {
      opacity: 1;
      .br(0);
      transform: scale(1);
    }
    100% {
      transform: scale(0.4);
      .br(300);
      opacity: 0;
    }
  }
  @keyframes view-opt {
    0% {
      transform: scale(2);
    }
    80% {
      transform: scale(2);
    }
  }
}
</style>
