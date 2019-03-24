import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musiclist:{
      myLike:[
        {
          id:"0",
          name:"不要说话",
          user: "周奕讯",
          path:"http://m10.music.126.net/20190324171118/396347634938d8fdb0c7c96ef1eb9cd8/ymusic/363b/72ef/7661/0b373b6cdfc54e3022ef436c3ad58ec3.mp3",
          img:"http://p1.music.126.net/96L4ojVi9N3tdHk3r3GXjQ==/109951163066640079.jpg",
        },
        {
          id:"1",
          name:"我好像在哪见过你",
          user: "薛之谦",
          path:"http://m10.music.126.net/20190324171420/d862d85196288323631c4b463442f508/ymusic/5464/6d21/dc04/245e4d6a4e5e35ea74340736a103efe3.mp3",
          img:"http://p2.music.126.net/hti_a0LADoFMBHvOBwAtRA==/1369991500930171.jpg",
        },
        {
          id:"2",
          name:"断桥残雪",
          user: "许嵩",
          path:"http://m10.music.126.net/20190324171614/7c4398e2a5fa52d3a02dd57e9c549973/ymusic/996d/5ab1/10cb/464f5610bc65503948628d5f75a8cc41.mp3",
          img:"http://p1.music.126.net/PEQ69_EwVpuaBmmSkAY0SQ==/58274116284456.jpg",
        },
        {
          id:"3",
          name:"演员",
          user: "薛之谦",
          path:"http://m10.music.126.net/20190324171740/92110199339682f14bb9265358e570e8/ymusic/e7c5/84f9/897e/a897fda63f7e9f788eac7abbc0bf8602.mp3",
          img:"http://p1.music.126.net/qpvBqYIqkRhO9Ry2qOCdJQ==/2942293117852634.jpg",
        },
        {
          id:"4",
          name:"丑八怪",
          user: "薛之谦",
          path:"http://m10.music.126.net/20190324171740/6ef630e8c14a44a6fac0dd44634c426f/ymusic/2e06/399f/e96d/8a9b2d9b941a2b4414e857e18bc25522.mp3",
          img:"http://p1.music.126.net/WPHmBisDxnoF4DrBLKwl3Q==/109951163169021112.jpg",
        }

      ]
    }
  },
  mutations: {

  },
  actions: {

  }
})
