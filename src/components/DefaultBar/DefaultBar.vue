<template>
  <div class="defaultBar">
    <div class="defalutBanner">
      <div class="brand">
        <i class="brand-icon"></i>
        <div class="text">
          <p class="txt1">前往App领取1000元新用户现金礼包</p>
          <p class="txt2">网易自营 品质生活</p>
        </div>
      </div>
      <a href="###" class="btn">打开App</a>
      <div class="iconWrap">
        <i></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultBar",
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.defaultBar
  .defalutBanner
    width 100%
    height 104px
    position relative
    box-sizing border-box
    padding 0 20px
    background-color #333333
    display flex
    justify-content space-between
    align-items center
    .iconWrap
      position absolute
      top 0
      left 0
      i
        width 38px
        height 38px
        display block
        background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png')
        background-repeat no-repeat
        background-position 0 -192px
        background-size 172px 420px
    .btn
      color #ffffff
      width 120px
      height 45px
      line-height 45px
      text-align center
      background-color #B4282D
    .text
      color #fff
      .txt1
        margin 10px 0
    .brand
      display flex
      .brand-icon
        display block
        width 72px
        height 72px
        margin 0 10px
        background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png')
        background-repeat no-repeat
        background-position 0 -274px
        background-size 172px 420px
</style>