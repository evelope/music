<template>
  <div class="box-nav">
    <div class="caidan" v-waves="{color:'rgba(0, 0, 0, 0.2)'}">
      <span class="iconfont icon-caidan"></span>
    </div>

    <div class="nav">
      <router-link tag="div" class="route" :to="item.path" v-for="(item,index) in navList" :key="index" v-waves="{color:'rgba(0, 0, 0, 0.2)',type:'center'}">
        <span class="iconfont" :class="item.iconClass"></span>
      </router-link>
    </div>

    <div class="sousuo" v-waves="{color:'rgba(0, 0, 0, 0.2)'}">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          iconClass: "icon-yinle1",
          path:"/box/home"
        },
        {
          iconClass: "icon-yinle",
           path:"/box/music"
        },
        {
          iconClass: "icon-ico-presetvideo-IJuv",
           path:"/box/video"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.box-nav {
  background: linear-gradient(to bottom, #d83d34, #e2453a);
  .h(145);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .p-all(0, 20);
  span {
    .fs(80);
    color: #ffffff;
    position: relative;
    z-index: 10;
  }
  .caidan {
    .w(120);
    .h(120);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .sousuo{
    .w(120);
    .h(120);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  
  .nav {
    display: flex;
    justify-content: space-between;
    & > div {
      .m(20);
      .w(130);
      .h(130);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      span {
        color: rgba(255, 255, 255, 0.3);
        .fs(75);
        transition: color ease-out 0.2s;

      }
      &.router-link-active span{ 
          color:white;
      }
      
    }
  }
}
</style>
