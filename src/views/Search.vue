<template>
  <div class="search">
    <div class="search-box">
      <div class="go-back">
        <p v-waves @click="$router.back()">
          <span class="iconfont icon-fanhui"></span>
        </p>
      </div>
      <div class="search-input">
        <input
          autofocus
          @focus="inputFocus=true"
          @blur="inputBlur"
          type="text"
          placeholder="搜你喜欢~"
          v-model.trim="searchData.s"
          @input="remoteMethod"
        >
        <p v-if="searchData.s">
          <span @click="searchData.s=''" class="iconfont icon-guanbi1"></span>
        </p>
      </div>
    </div>

    <div class="search-result">
      <SearchSelect
        v-if="searchData.s.length && inputFocus"
        :value="searchData.s"
        :dataList="searchDataList"
        @chooseItem="chooseItem"
      />
    </div>

    <box-foot ref="boxFoot"></box-foot>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import BoxFoot from "@/components/basic/BoxFoot.vue";
import SearchSelect from "@/components/basic/SearchSelect.vue";
import { getSearch } from "@/api.js";
import { constants } from "fs";
import { setTimeout } from 'timers';
export default {
  name: "search",
  data() {
    return {
      inputFocus: true,
      searchData: {
        s: "",
        type: "song",
        limit: 10,
        offset: 1
      },
      timeoutId: null,
      timer: 300,
      searchDataList: []
    };
  },
  components: {
    BoxFoot,
    SearchSelect
  },
  mounted() {
    if (!this.musicStatus.play) {
      this.$nextTick(() => {
        this.musicStatus.play = false;
      });
    }
  },
  methods: {
    ...mapMutations(["musicListEdit", "musicEdit"]),
    async getSearch() {
      let res = await getSearch(this.searchData).catch(error => {});
      return res;
    },
    // 失去焦点
    inputBlur() {
      this.timeoutId ? clearTimeout(this.timeoutId) : null;
      this.timeoutId = setTimeout(()=>{
        this.timeoutId = null;
        this.inputFocus = false;
      })
    },
    // 搜索员工
    remoteMethod() {
      // 函数防抖
      this.timeoutId ? clearTimeout(this.timeoutId) : null;
      if (!this.searchData.s.length) return;
      this.timeoutId = setTimeout(async () => {
        // 接口获取 。。。
        this.timeoutId = null;
        let res = await this.getSearch();
        this.searchDataList = res || [];
      }, this.timer);
    },
    // 点击选择
    chooseItem(index) {
      let obj = JSON.parse(JSON.stringify(this.musiclist.myLike));
      obj.songs.splice(this.musicStatus.index+1, 0, this.searchDataList[index]);
      this.musicListEdit(obj);
      this.musicEdit({ index: ++this.musicStatus.index });
      this.$refs.boxFoot.showBe();
    }
  },
  computed: {
    ...mapState(["musicStatus","musiclist"])
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
      input + p {
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
  .search-result {
    position: relative;
  }
}
</style>

