<template>
  <div class="search-select">
    <ul>
      <li class="li">搜索“{{value}}”</li>
      <li @click="chooseItem(index)" v-for="(item,index) in dataList" :key="index">
        <span class="iconfont icon-sousuo"></span>
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    dataList: {
      type: Array,
      default: []
    }
  },
  methods: {
    chooseItem(index) {
      this.$emit('chooseItem', index);
    }
  }
};
</script>

<style lang="less" scoped>
.search-select {
  width: 93%;
  position: absolute;
  .l(50);
  .t(0);
  background: #fff;
  box-shadow: 0 0.1rem 1rem rgba(0,0,0,0.2);
  animation:opshow 0.1s 1;
  transform-origin: 50% 0;
  ul {
    li {
      .h(130);
      border-top: 1px solid rgb(219, 219, 219);
      display: flex;
      align-items: center;
      color: #7a7a7a;
      span {
        color: #bbbdbf;
        .ml(36);
        .mr(30);
        .fs(40);
      }
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .fs(40);
      }
    }
    .li {
      .pl(40);
      .fs(40);
      color: #507daf;
    }
  }
}
@keyframes opshow {
  0% {
    opacity: 0.3;
    transform: scale(0.9);
  }
}
</style>

