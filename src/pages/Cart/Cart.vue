<template>
  <div class="cart">
    <DefaultBar />
    <Header>
      <span class="txt" slot="txt">购物车</span>
      <div class="coupon" slot="coupon">
        <span>领券</span>
      </div>
    </Header>
    <div class="defalutPage">
      <div class="promiseWrap">
        <ul class="promiseList">
          <li class="promiseItem">
            <i class="iconfont icon-yuancircle46"></i>
            <span>30天无忧退货</span>
          </li>
          <li class="promiseItem">
            <i class="iconfont icon-yuancircle46"></i>
            <span>48小时快速退款</span>
          </li>
          <li class="promiseItem">
            <i class="iconfont icon-yuancircle46"></i>
            <span>满88元免邮费</span>
          </li>
        </ul>
      </div>
      <div class="defalutContainer">
        <div class="img"></div>
        <div class="txt">
          <div class="noCart-login">
            <div class="noCart-title">去添加点什么吧</div>
            <div class="noCart-btn">登录</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultBar from "../../components/DefaultBar/DefaultBar.vue";
import Header from "../../components/Header/Header.vue";
export default {
  name: "Cart",
  components: {
    DefaultBar,
    Header
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.cart
  height 100%
  background-color #f4f4f4
  .defalutPage
    position fixed
    top 88px
    left: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
    .promiseWrap
      box-sizing border-box
      padding 0 30px
      background-color #eee
      .promiseList
        display flex
        height 70px
        width 100%
        align-items center
        justify-content space-between
        .promiseItem
          color #666
          display flex
          align-items center
          i
            margin-right 6px
          span
            height 36px
            text-align center
            line-height 36px
    .defalutContainer
      width 100%
      height 300px
      text-align center
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      margin auto
      .img
        width 248px
        height 248px
        display inline-block
        background url('../../../public/images/cart.png')center center no-repeat
      .txt
        color #999999
        .noCart-login
          .noCart-title
            margin-bottom 50px
            font-size 28px
          .noCart-btn
            width 480px
            height 92px
            margin 0 135px
            line-height 92px
            font-size 30px
            background-color: #b4282d
            color #ffffff
</style>