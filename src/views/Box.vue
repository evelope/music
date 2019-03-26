<template>
  <div class="box">
    <BoxNav/>
    <transition :name="transitionName">
      <router-view class="box-content"/>
    </transition>

    <box-foot></box-foot>
    
  </div>
</template>

<script>
import BoxNav from "@/components/basic/BoxNav.vue";
import BoxFoot from "@/components/basic/BoxFoot.vue";
export default {
  data() {
    return {
      transitionName: "slide-right" // 默认动态路由变化为slide-right
    };
  },
  components: {
    //es6
    BoxNav,
    BoxFoot,
    //es5
    //BoxNav:BoxNav || box-nav:BoxNav
  },
  watch: {
    $route(to, from) {
        if(to.path=="/box/home"){
            this.transitionName = "slide-right";
        }else if(to.path=="/box/video"){
             this.transitionName = "slide-left";
        }else{
            if(from.path=="/box/home"){
                 this.transitionName = "slide-left";
            }else{
                this.transitionName = "slide-right";
            }
        }
    }
  }
};
</script>
<style lang="less" scoped>
.box {
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
.box-content {
  position: absolute;
  z-index: 200;
  overflow-x: hidden;
  max-width: 540px;
  width: 100%;
  height: 100vh;
  .pt(144);
  // .pb(145);
  box-sizing: border-box;
  transition: all 0.2s ease;
}
.slide-left-enter,
 .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(80%, 0);
  transform: translate(80%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-80%, 0);
  transform: translate(-80% 0);
}
</style>
