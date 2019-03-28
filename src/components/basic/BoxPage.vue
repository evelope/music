<template>
  <div class="box-page" v-show="show" :class="{'show-class': showClass}"  @click.self="isShow">
    <div v-swipeleft="isShow" class="messge" :class="{'show-class': showClass}">
      <div class="bg">
        <dl>
          <dt>
            <img src="@/assets/img/vip.jpg">
          </dt>
          <dd>您是尊贵的vip用户哦~</dd>
        </dl>
      </div>

      <div class="content">
        <Watch/>
      </div>

      <div class="btm">
        <ul>
          <li></li>
          <li></li>
          <li v-waves @click="isShow"><span class="iconfont icon-guanbi"></span>关闭</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Watch from "@/components/basic/watch/Watch.vue";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      showClass: false
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Watch
  },
  methods: {
    isShow() {
      this.showClass = true;
      setTimeout(() => {
        this.showClass = false;
        this.$emit("update:show", false);
      }, 300);
    }
  }
};
</script>

<style lang="less" scoped>
.box-page {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  animation: op 0.3s 1;
  .messge {
    position: absolute;
    top: 0;
    left: 0;
    width: 85%;
    height: 100%;
    background: #fff;
    animation: leftop 0.3s 1;
    .bg {
      .h(475);
      background: #fff url("~@/assets/img/bg.jpg") center center;
      background-size: cover;
      dl {
        .ml(25);
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        dt {
          .w(175);
          .h(175);
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        dd {
          color: #fff;
          .fs(45);
          .mt(40);
        }
      }
    }

    .content {
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btm {
      position: absolute;
      width: 100%;
      .h(126);
      bottom: 0;
      left: 0;
      border-top: 10px solid rgb(243, 243, 243);
      display: flex;
      ul {
        width: 100%;
        display: flex;
        li {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          .fs(42);
          span {
            .mr(20);
            .fs(40);
          }
        }
      }
    }
  }
  .messge.show-class {
    animation: leftop-r 0.3s 1;
  }
}
.box-page.show-class {
  animation: op-r 0.3s 1;
}

@keyframes leftop {
  0% {
    transform: translateX(-100%);
  }
}
@keyframes op {
  0% {
    background: rgba(0, 0, 0, 0);
  }
  100% {
    background: rgba(0, 0, 0, 0.5);
  }
}

@keyframes leftop-r {
  100% {
    transform: translateX(-100%);
  }
}
@keyframes op-r {
  100% {
    background: rgba(0, 0, 0, 0);
  }
}
</style>

