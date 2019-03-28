<template>
  <div v-if="show" class="music-controller">
    <div class="bg" :style="{background: `#333 url(${musicBg}) center center no-repeat`}"></div>
    <div class="title">
      <div class="go-back">
        <p v-waves @click="goback">
          <span class="iconfont icon-fanhui"></span>
        </p>
      </div>
      <div class="message">
        <p class="name">{{musicStatus.music.name}}</p>
        <p class="singer">{{musicStatus.music.singer}}</p>
      </div>
      <div class="fenxiang">
        <p v-waves>
          <span class="iconfont icon-fenxiang"></span>
        </p>
      </div>
    </div>
    <div class="music">
      <img class="music-c" :class="{'begin': musicStatus.play}" src="@/assets/img/music-c.png">
      <div class="t-top">
        <div>
          <div></div>
        </div>
      </div>
      
      <div class="music-arc music-arc2">

      </div>
      
      <mt-swipe
        ref="mtSwipe"
        class="music-swiper"
        :auto="0"
        :show-indicators="false"
        :defaultIndex="musicStatus.index"
        @change="handleChange"
      >
        <mt-swipe-item
          ref="mtItem"
          v-for="(v,i) in musiclist.myLike.songs"
          :key="i"
          class="music-swiper-item"
        >
          <div class="music-arc">
            <div :class="{'stop-arc': stopPlay}">
              <div>
                <img v-lazy.container="v.pic">
              </div>
            </div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="controller">
      <div class="tab">
        <span class="iconfont icon-buoumaotubiao16"></span>
      </div>
      <div class="controller-box">
        <span>{{currentTime}}</span>
        <div
          @mousedown.prevent.stop="mousedown"
          @touchstart.prevent.stop="mousedown"
          @mouseup="mouseup"
          @touchend="mouseup"
          ref="ctp"
        >
          <p :style="{width:(musicStatus.music.currentTime/musicStatus.music.time*100+'%')}"></p>
          <div
            @mousedown.prevent.stop="mousedown"
            @touchstart.prevent.stop="mousedown"
            @mouseup="mouseup"
            @touchend="mouseup"
            :style="{left:(musicStatus.music.currentTime/musicStatus.music.time*100+'%')}"
          ></div>
        </div>
        <span>{{musicStatus.music.time | formatFilter}}</span>
      </div>
      <div class="controller-bottom">
        <p>
          <span class="iconfont icon-duoxunhuan"></span>
        </p>
        <p class="controller-begin">
          <span @click="changeMusic('up')" class="iconfont icon-zuobofang"></span>
          <span
            @click="palyMusic"
            class="iconfont"
            :class="musicStatus.play?'icon-zanting2':'icon-zanting'"
          ></span>
          <span @click="changeMusic('down')" class="iconfont icon-zuobofang"></span>
        </p>
        <p>
          <span class="iconfont icon-bofangliebiao"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { formatSeconds, bRedir, getLeft } from "@/utils/base.js";
import { clearTimeout, setTimeout } from "timers";
import { constants } from "fs";
export default {
  data() {
    return {
      stopPlay: false,
      currentTime: "00:00:00",
      t: null,
      device: ""
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.device = bRedir() == "pc" ? "onmousemove" : "ontouchmove";
    setInterval(() => {
      this.currentTime =
        formatSeconds(this.musicStatus.music.currentTime) || "00:00:00";
    }, 1000);
  },
  computed: {
    ...mapState(["musiclist", "musicStatus", "audio"]),
    musicBg() {
      return this.musicStatus.music.pic;
    }
  },
  methods: {
    ...mapMutations(["palyMusic", "musicEdit", "musicTimeEdit", "editVue"]),
    handleChange(index) {
      this.musicEdit({ index });
      this.palyMusic({ status: true });
    },
    // 返回
    goback() {
      this.$emit("update:show", false);
      this.editVue(this.$parent);
      if (!this.musicStatus.play) {
        this.$nextTick(() => {
          this.musicStatus.play = false;
        });
      }
    },
    // 上下切换曲子
    changeMusic(type) {
      // this.$emit("changeMusic", type);
      if (type == "up") {
        this.$refs.mtSwipe.prev();
      } else {
        this.$refs.mtSwipe.next();
      }
    },
    // 切换到指定
    switchCar(index) {
      if (index == this.musicStatus.index) {
        console.log("break off");
        return;
      }

      var callback = () => {
        if (index !== undefined) {
          var newPage = this.$refs.mtItem[index].$el;
          // removeClass(curPage.$el, "is-active");
          // addClass(newPage, "is-active");

          this.$refs.mtSwipe.index = index;
        }
        if (this.$refs.mtSwipe.isDone) {
          this.$refs.mtSwipe.end();
        }

        if (prevPage) {
          prevPage.$el.style.display = "";
        }

        if (nextPage) {
          nextPage.$el.style.display = "";
        }
      };

      if (index > this.musicStatus.index) {
        var curPage = this.$refs.mtItem[this.musicStatus.index];
        var nextPage = this.$refs.mtItem[index];
        var pageWidth = this.$refs.mtItem[0].$el.clientWidth;
        if (nextPage) {
          nextPage.$el.style.display = "block";
          this.$refs.mtSwipe.translate(nextPage.$el, pageWidth);
        }
        this.$refs.mtSwipe.isDone = true;
        this.$refs.mtSwipe.before(curPage.$el);

        this.$refs.mtSwipe.translate(curPage.$el, -pageWidth, 300, callback);
        if (nextPage) {
          var self = this;
          var timer = setTimeout(function() {
            self.$refs.mtSwipe.translate(nextPage.$el, 0, 300);
            clearTimeout(timer);
          }, 50);
        }
      } else if (index < this.musicStatus.index) {
        var curPage = this.$refs.mtItem[this.musicStatus.index];
        var prevPage = this.$refs.mtItem[index];
        var pageWidth = this.$refs.mtItem[0].$el.clientWidth;

        if (prevPage) {
          prevPage.$el.style.display = "block";
          this.$refs.mtSwipe.translate(prevPage.$el, -pageWidth);
        }

        this.$refs.mtSwipe.isDone = true;
        this.$refs.mtSwipe.before(curPage.$el);
        this.$refs.mtSwipe.translate(curPage.$el, pageWidth, 300, callback);
        if (prevPage) {
          this.$refs.mtSwipe.translate(prevPage.$el, 0, 300);
        }
      }
    },
    // 拖动事件
    mousedown(e) {
      let ofl = getLeft(this.$refs.ctp, "music-controller");
      let ofw = this.$refs.ctp.offsetWidth;
      let scrollX =
        document.documentElement.scrollLeft || document.body.scrollLeft; //分别兼容ie和chrome

      e = e || window.event;
      e = this.device == "onmousemove" ? e : e.touches ? e.touches[0] : e;

      let x = e.pageX || e.clientX + scrollX; //兼容火狐和其他浏览器
      let px = e.offsetX;
      let width = (x - ofl) / ofw;
      let timer = width * this.musicStatus.music.time;
      this.audio.currentTime = timer;
      document[this.device] = e => {
        e = e || window.event;
        e = this.device == "onmousemove" ? e : e.touches ? e.touches[0] : e;

        let x = e.pageX || e.clientX + scrollX; //兼容火狐和其他浏览器
        let px = e.offsetX;
        let width = (x - ofl) / ofw;
        if (width <= 1 && width >= 0) {
          width = width;
        } else if (width > 1) {
          width = 1;
        } else {
          width = 0;
        }
        let timer = width * this.musicStatus.music.time;
        // this.musicTimeEdit(100);
        // console.log(getLeft(this.$refs.tab[this.tabIndex], "music-controller"));

        this.audio.currentTime = timer;
        let upmethod =
          this.device == "onmousemove" ? "onmouseup" : "ontouchend";
        document[upmethod] = e => {
          document[this.device] = null;
          document[upmethod] = null;
        };
      };
    },
    mouseup() {
      let upmethod = this.device == "onmousemove" ? "onmouseup" : "ontouchend";
      document[upmethod] = e => {
        document[this.device] = null;
        document[upmethod] = null;
      };
    }
  },
  filters: {
    formatFilter(value) {
      return formatSeconds(value);
    }
  },
  watch: {
    "musicStatus.play"(n) {
      if (this.t) clearTimeout(this.t);
      if (n) {
        this.stopPlay = false;
      } else {
        this.t = setTimeout(() => {
          this.stopPlay = true;
        }, 1000);
      }
    }
  }
};
</script>

<style scoped lang="less">
@delaytimer: 0.7s;
.music-controller {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0vw;
  left: 0;
  overflow: hidden;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  animation: opt-top 0.3s 1;
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transition: background 0.5s;
    filter: blur(50px) brightness(0.6);
    z-index: -1;
    box-shadow: 0 0 500px #333 inset;
    transform: scale(2);
  }
  & > div {
    // border: 1px solid #fff;
    box-sizing: border-box;
  }
  .title {
    .h(150);
    display: flex;
    justify-content: space-between;
    .go-back {
      .w(154);
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        .w(100);
        .h(100);
        .br(50);
      }
      span {
        color: #fff;
        .fs(100);
      }
    }
    .message {
      flex: 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      color: #fff;
      .name {
        .fs(40);
        font-weight: bold;
      }
      .singer {
        .fs(30);
        transform-origin: 0 50%;
        transform: scale(0.9);
        color: rgba(255, 255, 255, 0.7);
      }
    }
    .fenxiang {
      .w(126);
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        .w(100);
        .h(100);
        .br(50);
      }
      span {
        color: #fff;
        .fs(70);
      }
    }
  }
  .music {
    flex: 1;
    position: relative;
    overflow: hidden;
    &::before {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      top: 0;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
    }
    & > .music-c {
      position: absolute;
      transform-origin: 0 0;
      transition: transform 0.3s @delaytimer;
      z-index: 100;
      .w(430);
      left: 50%;
    }
    & > .music-c.begin {
      transition: transform 0.3s;
      transform: rotate(26deg);
    }
    .t-top {
      position: absolute;
      z-index: 200;
      .w(100);
      .h(100);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      left: 50%;
      top: 0;
      transform: translateX(-50%) translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      & > div {
        width: 70%;
        height: 70%;
        background: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        & > div {
          width: 40%;
          height: 40%;
          border-radius: 50%;
          background: rgb(229, 229, 229);
        }
      }
    }
    .music-arc2 {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(255, 255, 255, 0.05);
    }
    .music-arc {
      margin: 0 auto;
      .w(815);
      .h(815);
      .mt(305);
      overflow: hidden;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      & > div {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 96%;
        height: 96%;
        overflow: hidden;
        border-radius: 50%;
        animation: rotate360 25s infinite linear;
        animation-play-state: running;
        background: radial-gradient(
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417,
          #0f0f12,
          #141417
        );
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          .h(300);
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(255, 255, 255, 0.15),
            transparent
          );
          width: 100%;
        }
        & > div {
          width: 70%;
          height: 70%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 50%;
          img {
            width: 100%;
            height: 100%;
          }
          img[lazy="loading"] {
            .w(110);
            .h(110);
          }
        }
      }
      div.stop-arc {
        animation-play-state: paused;
      }
    }
  }
  .controller {
    .h(500);
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    .pl(55);
    .pr(55);
    .tab {
      .h(200);
      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        .fs(60);
        color: #ff3938;
        animation: bounceIn 0.5s 0.75s;
      }
    }
    .controller-box {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .fs(30);
      color: rgba(255, 255, 255, 0.3);
      & > div {
        position: relative;
        flex: 1;
        .h(7);
        .br(4);
        .ml(30);
        .mr(30);
        background: rgba(255, 255, 255, 0.1);
        & > p {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          background: #ff3938;
          .br(4);
        }
        & > div {
          position: absolute;
          .w(40);
          .h(40);
          top: 50%;
          transform: translateY(-50%) translateX(-50%);
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 2px #fff;
          left: 0;
          &::before {
            content: "";
            position: absolute;
            .w(10);
            .h(10);
            background: #ff3938;
            border-radius: 50%;
            left: 50%;
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
          }
        }
      }
    }
    .controller-bottom {
      .pl(30);
      .pr(30);
      .h(255);
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        .fs(60);
        &:active {
          color: #fff;
          filter: drop-shadow(0 0 1px #fff);
        }
      }
      .controller-begin {
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          .fs(70);
          .m(50);
        }
        span:nth-child(2) {
          .fs(100);
        }
        span:nth-child(3) {
          transform: rotateZ(180deg);
        }
      }
    }
  }
}
</style>
 