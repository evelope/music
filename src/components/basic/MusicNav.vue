<template>
    <div class="music-nav" ref="musicNav">
        <router-link v-waves tag="div" :to="item.path" v-for="(item,index) in navList" :key="index" @click.native="changeNav(index)">
            <span ref="tab">
                {{item.name}}
            </span>
        </router-link>
        <p class="tab" :style="{left: tabLeft+'px'}" v-if="tabLeft"></p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tabIndex:0,
            tabLeft: 0,
            navList:[
                {
                    path:"/box/music/tuijian",
                    name:"推荐",
                },
                {
                    path:"/box/music/friend",
                    name:"朋友",
                },
                {
                    path:"/box/music/diantai",
                    name:"电台",
                }
            ]
        }
    },
    mounted(){
         setTimeout(()=>{
            this.tabLeft = this.$refs.tab[this.tabIndex].getBoundingClientRect().left-this.$refs.musicNav.getBoundingClientRect().left;
         },300);
         window.addEventListener("resize",()=>{
             this.tabLeft = this.$refs.tab[this.tabIndex].getBoundingClientRect().left-this.$refs.musicNav.getBoundingClientRect().left;
         })
    },
    methods:{
        changeNav(index){
            this.tabIndex=index;
        }
    },
    watch: {
        tabIndex(n){
            this.tabLeft = this.$refs.tab[n].getBoundingClientRect().left-this.$refs.musicNav.getBoundingClientRect().left;
        }
    }
}
</script>

<style lang="less" scoped>
    .music-nav{
        position: relative;
        top:-1px;
        .h(111);
        background: linear-gradient(to bottom,#e2453a,#e8493d);
        display: flex;
        &>div{
            flex: 1;
            color: rgba(255,255,255,0.8);
            .lh(110);
            .fs(38);
            text-align: center;
            &.router-link-active {
                color: #ffffff;
                font-weight: bold;
            }
        }
        .tab {
            .w(72);
            .h(6);
            .br(3);
            position: absolute;
            background: #fff;
            .b(20);
            transition: left 0.2s;
        }
    }
</style>

