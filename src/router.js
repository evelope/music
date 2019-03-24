import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:()=>import('./App.vue'),
      redirect:"/box",
      children: [
        {
          path:"/box",
          redirect:"/box/music",
          component:()=>import('./views/Box.vue'),
          children:[
            {
              path:"/box/home",
              component:()=>import('./views/box/Home.vue'),
            },
            {
              path:"/box/music",
              component:()=>import("./views/box/Music.vue"),
              redirect:"/box/music/tuijian",
              children:[
                {
                  path:"/box/music/tuijian",
                  component:()=>import("./views/box/music/TuiJian.vue"),
                },
                {
                  path:"/box/music/friend",
                  component:()=>import("./views/box/music/Friend.vue"),
                },
                {
                  path:"/box/music/diantai",
                  component:()=>import("./views/box/music/DianTai.vue"),
                }
              ]
            },
            {
              path:"/box/video",
              component:()=>import("./views/box/Video.vue")
            }
          ]
        }
      ]
    }
  ]
})
