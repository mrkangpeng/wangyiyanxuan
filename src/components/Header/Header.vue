<template>
  <div class="header">
    <slot name="logo"></slot>
    <slot name="search"></slot>
    <slot name="login"></slot>
    <slot name="txt"></slot>
    <slot name="coupon"></slot>
    <slot name="toHome_1"></slot>
    <slot name="toHome_2"></slot>
    <slot name="right"></slot>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.header
  display flex
  position relative
  justify-content space-between
  align-items center
  height 88px
  width 100%
  padding 16px 30px
  box-sizing border-box
  background-color #ffffff
  .logo
    width 140px
    height 37px
    display block
    margin-right 20px
    background-image url('../../../public/images/logo.png')
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
    border 1px solid #B4282D
    padding 7px 10px
    border-radius 10px
    color #B4282D
  .txt
    color #333333
    font-size 36px
  .coupon
    float right
    color #B4282D
    font-size 30px
  .iconfont
    font-size 50px
    color #000
  .toHome_2
    width 138px
    height 100%
    position absolute
    top 0
    left 50%
    transform translateX(-50%)
    background url('../../../public/images/logo.png') center no-repeat
    background-size 138px 40px
  .right
    width 148px
    height 100%
    display flex
    justify-content space-between
</style>