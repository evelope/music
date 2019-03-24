<template>
    <div class="music-tab">
        <div v-for="(item,index) in tabList" :key="index">
            <p class="bg">
                <a v-if="index==1">{{time}}</a>
                <span class="iconfont" :class="item.IconClass"></span>
            </p>
            <p>
                {{item.name}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      time: "",
      tabList: [
        {
          name: "私人FM",
          path: "",
          IconClass: "icon-icon--"
        },
        {
          name: "每日推荐",
          path: "",
          IconClass: "icon-rili"
        },
        {
          name: "歌单",
          path: "",
          IconClass: "icon-yinleliebiao"
        },
        {
          name: "排行榜",
          path: "",
          IconClass: "icon-zhuzhuangtu"
        }
      ]
    };
  },
  mounted() {
    this.time = new Date().getDate();
  }
};
</script>
<style lang="less" scoped>
.music-tab {
  display: flex;
  .m-all(40, 0);
  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: filter 0.3s;
    &:active {
      transition: filter 0s;
      filter: brightness(1.8) contrast(110%);
    }
    .bg {
      .w(135);
      .h(135);
      background: linear-gradient(to right, #fb5244, #e14238);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 5px #fb5244;
      position: relative;
      a {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -20%);
        .fs(29);
        color: white;
      }
      span {
        color: white;
        .fs(80);
      }
    }
    .bg + p {
      .fs(35);
      .mt(10);
    }
  }
}
</style>
