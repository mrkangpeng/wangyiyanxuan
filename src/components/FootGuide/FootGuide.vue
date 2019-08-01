<template>
  <div class="footGuide">
    <a href="javascript:;" :class="{active:'/home' === $route.path}" @click="goto('/home')">
      <i class="iconfont icon-home"></i>
      <span class="txt">首页</span>
    </a>
    <a href="javascript:;" :class="{active:'/category' === $route.path}" @click="goto('/category')">
      <i class="iconfont icon-liebiaofenlei"></i>
      <span class="txt">分类</span>
    </a>
    <a href="javascript:;" :class="{active:'/identify' === $route.path}" @click="goto('/identify')">
      <i class="iconfont icon-shiwu"></i>
      <span class="txt">识物</span>
    </a>
    <a href="javascript:;" :class="{active:'/cart' === $route.path}" @click="goto('/cart')">
      <i class="iconfont icon-cart"></i>
      <span class="txt">购物车</span>
    </a>
    <a href="javascript:;" :class="{active:'/profile' === $route.path}" @click="goto('/profile')">
      <i class="iconfont icon-geren"></i>
      <span class="txt">个人</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'FootGuide',
  data() { 
    return {

    }
  },
  methods: {
    goto(path){
      this.$router.replace(path)
    }
  }
 }
</script>

<style lang="stylus" scoped>
.footGuide
  border-top 1PX solid #cccccc
  display flex
  justify-content space-around
  width 100%
  height 98px
  position fixed
  left 0
  bottom 0
  background-color #ffffff
  a
    color #666
    display flex
    flex-direction column
    justify-content center
    text-align center
    .iconfont
      font-size 40px
    .txt
      display block
      font-size 24px
      margin-top 14px
    &.active
      color #b4282d
</style>