<template>
  <div class="app">
    <div class="mask" v-if="isShow">
      <i class="iconfont icon-error" @click="isShow = false"></i>
      <img src="https://yanxuan.nosdn.127.net/3b71d8316984788388aee5313597b6d4.png?imageView&quality=85&thumbnail=630x804" alt="新用户优惠">
    </div>
    <router-view></router-view>
    <FootGuide v-if="$route.meta.isShowTabBar"/>
  </div>
</template>

<script>
import DefaultBar from './components/DefaultBar/DefaultBar.vue'
import FootGuide from './components/FootGuide/FootGuide.vue'
import Header from './components/Header/Header.vue'
export default {
  name: "App",
  components: {
    DefaultBar,
    FootGuide,
    Header
  },
  data() {
    return {
      isShow:true
    };
  },
};
</script>

<style lang="stylus" scoped>
.app
  height 100%
  position relative
  .mask
    position absolute
    top 0
    left 0
    width 100%
    height 1334px
    z-index 2
    background-color rgba(0,0,0,.4)
    img
      position absolute
      width 630px
      height 804px
      top 0
      bottom 0
      left 0
      right 0
      margin auto
    i 
      position absolute
      top 50px
      right 50px
      font-size 70px
      color rgba(255,255,255,.8)
</style>