<template>
  <div class="music">
    <MusicNav/>
    <router-view></router-view>
  </div>
</template>

<script>
import MusicNav from "@/components/basic/MusicNav"
export default {
  components:{
    MusicNav,
  }
};
</script>


<style lang="less" scoped>
.music {
    word-break: break-all;
    display: flex;
    flex-direction: column;
}
</style>