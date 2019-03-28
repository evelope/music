<template>
  <div class="search">
    <div class="search-box">
      <div class="go-back">
        <p v-waves @click="$router.back()">
          <span class="iconfont icon-fanhui"></span>
        </p>
      </div>
      <div class="search-input">
        <input autofocus type="text" placeholder="搜你喜欢~" v-model.trim="inputVal">
        <p v-if="inputVal">
          <span @click="inputVal=''" class="iconfont icon-guanbi1"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      inputVal: ""
    }
  }
};
</script>

<style lang="less" scoped>
.search {
  .search-box {
    .h(140);
    background: linear-gradient(to bottom, #d83d34, #e3453a);
    display: flex;
    align-items: center;
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
    .search-input {
      position: relative;
      flex: 1;
      box-sizing: border-box;
      .mr(20);
      .h(92);
      border-bottom: 1px solid #f3b4b0;
      .px2rem(border-width, 3px);
      input {
        height: 100%;
        width: 100%;
        background: transparent;
        box-sizing: border-box;
        border: none;
        color: #f5c5c3;
        .fs(44);
        outline: none;
        .pr(110);
      }
      input::-webkit-input-placeholder {
        color: #e87a73;
      }
      input:-moz-placeholder {
        color: #e87a73;
      }
      input::-moz-placeholder {
        color: #e87a73;
      }
      input:-ms-input-placeholder {
        color: #e87a73;
      }
      input+p {
        .w(110);
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          color: #fff;
          .fs(50);
        }
      }
    }
  }
}
</style>

