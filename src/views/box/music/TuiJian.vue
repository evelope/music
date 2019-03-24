<template>
  <div class="tuijian">
    <div class="bg"></div>
    <!-- 在页面显示swiper-->
    <mt-swipe class="tuijian-swiper" :auto="5000">
      <mt-swipe-item v-for="(v,i) in swiperList" :key="i" class="tuijian-swiper-item">
        <img v-lazy.container="v.src">
        <!-- <img :src="v.src"> -->
      </mt-swipe-item>
    </mt-swipe>
    <!-- 在页面显示musictab-->
    <MusicTab v-for="(v,i) in 20" :key="i"/>

  </div>
</template>

<script>
import MusicTab from "@/components/basic/MusicTab.vue"


export default {
  components: {
    MusicTab,
  },
  data() {
    return {
      swiperList: [
        {
          src: require("@/assets/img/s1.jpg")
        },
        {
          src: require("@/assets/img/s2.jpg")
        },
        {
          src: require("@/assets/img/s3.jpg")
        },
        {
          src: require("@/assets/img/s4.jpg")
        },
        {
          src: require("@/assets/img/s5.jpg")
        },
        {
          src: require("@/assets/img/s6.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.tuijian {
  position: relative;
  overflow-y: scroll;
  flex: 1;
  .t(-5);
  .bg {
    .h(300);
    background: linear-gradient(to bottom, #e8493d, #ff594a);
    position: absolute;
    width: 100%;
    .t(-5);
  }
  .tuijian-swiper {
    .h(470);
    .tuijian-swiper-item {
      // position: relative;
      .p(20);
      box-sizing: border-box;
      img {
          width: 100%;
          height: 100%;
          .br(20);
      }
      img[lazy=loading] {
        position: absolute;
        .w(80);
        .h(80);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>

