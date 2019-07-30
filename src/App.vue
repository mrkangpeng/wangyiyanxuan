<template>
  <div class="app">
    <DefaultBar />
    <div class="line">
      <a href="###" class="logo"><i></i></a>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <span>搜索商品,共21600款好物</span>
      </div>
      <div class="loginBtn">登录</div>
    </div>
    <div class="mask" v-if="isShow">
      <i class="iconfont icon-error" @click="isShow = false"></i>
      <img src="https://yanxuan.nosdn.127.net/3b71d8316984788388aee5313597b6d4.png?imageView&quality=85&thumbnail=630x804" alt="新用户优惠">
    </div>
  </div>
</template>

<script>
import DefaultBar from './components/DefaultBar/DefaultBar.vue'
export default {
  name: "App",
  components: {
    DefaultBar
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
  position relative
  .line
    display flex
    justify-content space-between
    align-items center
    height 88px
    width 100%
    padding 16px 30px
    box-sizing border-box
    .logo 
      width: 140px
      height: 37px
      display block
      margin-right 20px
      background-image url('../public/images/logo.png')
      background-repeat no-repeat 
      background-size 138px 40px
    .search
      width 426px
      height 56px
      line-height 56px
      text-align center
      font-size 28px
      color #666666
      box-sizing border-box
      padding 0 20px
      margin-right 10px
      border-radius 10px
      background-color #EDEDED
      .icon-search
        font-size 28px
        margin-right 10px
    .loginBtn
      border 1PX solid #B4282D
      padding 7px 10px
      border-radius 10px
      color #B4282D
  .mask
    position absolute
    top 0
    left 0
    width 100%
    height 1334px
    background-color rgba(0,0,0,.4)
    img
      position absolute
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