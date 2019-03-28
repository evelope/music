import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { getSongList } from "@/api.js"
export default new Vuex.Store({
  state: {
    // 暂用vue 实例
    vue:{},
    audio: {},
    // 音乐状态
    musicStatus: {
      play: true,
      index: 0,
      music: {
        id: "",
        name: "",
        singer: "",
        pic: "",
        lrc: "",
        url: "",
        time: 0,
        currentTime: 0
      }
    },
    // 音乐存储列表
    musiclist: {
      // 正在播放的歌单
      myLike: {
        songs: [
          // {
          //   id: "0",
          //   name: "不要说话",
          //   singer: "周奕讯",
          //   pic: "http://p1.music.126.net/96L4ojVi9N3tdHk3r3GXjQ==/109951163066640079.jpg",
          //   lrc: "",
          //   url: "http://m10.music.126.net/20190324171118/396347634938d8fdb0c7c96ef1eb9cd8/ymusic/363b/72ef/7661/0b373b6cdfc54e3022ef436c3ad58ec3.mp3",
          //   time: 0
          // },
          // {
          //   id: "1",
          //   name: "我好像在哪见过你",
          //   singer: "薛之谦",
          //   url: "http://m10.music.126.net/20190324171420/d862d85196288323631c4b463442f508/ymusic/5464/6d21/dc04/245e4d6a4e5e35ea74340736a103efe3.mp3",
          //   pic: "http://p2.music.126.net/hti_a0LADoFMBHvOBwAtRA==/1369991500930171.jpg",
          // }
        ]
      },
      // 正在页面展示的列表
      showList: {

      }
    }
  },
  mutations: {
    // 设置 vue
    editVue(state, vue) {
      state.vue = vue;
    },
    // 设置 audo
    editAudio(state, audio) {
      state.audio = audio;
    },
    // 播放/暂停 音乐
    palyMusic(state, {status}) {
      if (!!status) {
        state.musicStatus.play = status;
      } else {
        state.musicStatus.play = !state.musicStatus.play;
      }
    },
    // 设置正在播放的音乐
    musicEdit(state, params) {
      state.musicStatus = {
        ...state.musicStatus,
        index: params.index,
        music: state.musiclist.myLike.songs[params.index]
      };
    },
    // 设置正在播放的音乐列表
    musicListEdit(state, params) {
      state.musiclist.myLike = params;
    },
    // 设置展示的音乐列表
    showListEdit(state, params) {
      state.musiclist.showList = params;
    },
    // 设置音乐播放时长
    musicTimeEdit(state, params) {
      state.musicStatus.music = {
        ...state.musicStatus.music,
        currentTime: params
      };
    }
  },
  actions: {
    // 获取音乐列表
    async getMusicList(context, params) {
      let res = await getSongList(params);
      context.commit("showListEdit", res);
      return res;
    }
  }
})
