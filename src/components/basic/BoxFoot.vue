<template>
  <div class="box-foot">
    <div class="music-swiper" @click="showCon">
      <mt-swipe
        v-if="!show"
        class="box-foot-swiper"
        ref="mtSwipe"
        :auto="0"
        :show-indicators="false"
        :defaultIndex="musicStatus.index"
        @change="handleChange"
      >
        <mt-swipe-item
          v-for="(v,i) in musiclist.myLike.songs"
          :key="i"
          class="box-foot-swiper-item"
        >
          <dl>
            <dt>
              <img v-lazy.container="v.pic">
            </dt>
            <dd>
              <p class="name">{{v.name}}</p>
              <p class="user">{{v.singer}}</p>
            </dd>
          </dl>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="music-change">
      <p class="bofang" v-waves="{type:'center'}" @click="palyMusic">
        <span class="iconfont" :class="musicStatus.play?'icon-zanting2':'icon-zanting'"></span>
      </p>
      <p class="caidan" v-waves="{type:'center'}">
        <span class="iconfont icon-bofangliebiao"></span>
      </p>
    </div>
    <!-- @changeMusic="changeMusic"-->
    <MusicController ref="musicCon" :show.sync="show"/>
  </div>
</template>

<script>
import MusicController from "@/components/basic/MusicController.vue";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.editVue(this);
  },
  computed: {
    ...mapState(["musiclist", "musicStatus"])
  },
  components: {
    MusicController
  },
  methods: {
    ...mapMutations(["palyMusic", "musicEdit", "editVue"]),
    handleChange(index) {
      this.musicEdit({ index });
      this.palyMusic({ status: true });
    },
    showCon() {
      this.show = true;
      this.editVue(this.$refs.musicCon);
      if (!this.musicStatus.play) {
        this.$nextTick(() => {
          this.musicStatus.play = false;
        });
      }
    },
    showBe() {
      this.show = true;
      this.editVue(this.$refs.musicCon);
    }
    // 切换轮播
    // changeMusic(type) {
    //   if (type == "up") {
    //     this.$refs.mtSwipe.prev();
    //   } else {
    //     this.$refs.mtSwipe.next();
    //   }
    //   console.log("changeMusic")
    // }
  }
};
</script>

<style lang="less" scoped>
.box-foot {
  position: fixed;
  z-index: 300;
  top: calc(100vh - 1.25rem);
  // bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  .h(135);
  border-top: 1px solid #e6e6e6;
  // .px2rem(border-top-width, 1);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.98);

  .music-swiper {
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 20px white inset;
    overflow: hidden;
    flex: 1;
    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 1px;
      box-shadow: 0 0 15px 8px #fff;
      .r(-8);
      top: 0;
      z-index: 10;
    }
    &:before {
      content: "";
      position: absolute;
      height: 100%;
      width: 1px;
      box-shadow: 0 0 15px 8px #fff;
      .l(-3);
      top: 0;
      z-index: 10;
    }
    .box-foot-swiper-item {
      dl {
        display: flex;
        height: 100%;
        width: 100%;
        dt {
          display: flex;
          align-items: center;
          .pl(20);
          .pr(20);
          img {
            .w(110);
          }
          img[lazy="loading"] {
            .w(110);
            .h(110);
            background: #ccc;
          }
        }
        dd {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          p {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p.name {
            .fs(35);
          }
          p.user {
            .fs(30);
            color: #686868;
            .mt(6);
          }
        }
      }
    }
  }
  .music-change {
    .w(240);
    position: relative;
    p {
      .h(180);
      .lh(180);
      text-align: center;
      .w(180);
      position: absolute;
      top: 50%;
      transform: translate(-20%, -50%);
      border-radius: 50%;
      span {
        .fs(80);
      }
    }
    .bofang {
      z-index: 100;
    }
    .caidan {
      right: 0;
      transform: translate(20%, -50%);
    }
  }
}
</style>

