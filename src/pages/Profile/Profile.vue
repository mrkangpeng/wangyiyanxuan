<template>
  <div class="profile">
    <DefaultBar />
    <Header>
      <a href="javascript:;" class="iconfont icon-home toHome_1" slot="toHome_1" @click="$router.replace('/home')"></a>
      <a href="javascript:;" class="toHome_2" slot="toHome_2" @click="$router.replace('/home')"></a>
      <div class="right" slot="right">
        <a href="javascript:;" class="iconfont icon-search toSearch" @click="$router.replace('/search')"></a>
        <a href="javascript:;" class="iconfont icon-cart toCart" @click="$router.replace('/cart')"></a>
      </div>
    </Header>
    <div class="loginWrap">
      <div class="loginLogo">
        <img src="../../../public/images/profile-login.png" alt="">
      </div>
      <div class="btnWrap">
        <div class="login-by-phone">
          <i class="iconfont icon-phone"></i>
          <span class="txt">手机号快捷登录</span>
        </div>
        <div class="login-by-mail">
          <i class="iconfont icon-Mail"></i>
          <span class="txt">邮箱账号登录</span>
        </div>
      </div>
      <div class="thirdWrap">
        <div class="login-by-other">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="login-by-other">
          <i class="iconfont icon-qq-copy"></i>
          <span>QQ</span>
        </div>
        <div class="login-by-other remove">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultBar from "../../components/DefaultBar/DefaultBar.vue";
import Header from "../../components/Header/Header.vue";
export default {
  name: "Profile",
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
.profile
  height 100%
  .loginWrap
    height 1246px
    width: 100%;
    background-color #F2F5F4
    .loginLogo
      width 100%
      display flex
      justify-content center
      align-items center
      border-top 1px solid #cccccc
      padding 160px 0 238px 0
      img 
        width 268px
        height 90px
    .btnWrap
      width 100%
      height 240px
      box-sizing border-box
      padding 0 40px
      text-align center
      line-height 100px
      margin-bottom 205px
      >div
        width 100%
        height 100px
        margin-bottom 20px
        border: 1px solid #DD1A21
        font-size 28px
        border-radius 8px
      .iconfont
        font-size 40px
        margin-right 20px
      .login-by-phone
        background-color: #DD1A21
        color #ffffff
      .login-by-mail
        color #DD1A21
    .thirdWrap
      position absolute
      left 0
      bottom 80px
      width 100%
      display flex
      justify-content center
      .login-by-other
        font-size 28px
        color #7f7f7f
        padding 0 40px
        border-right 2px solid #979797
        >i 
          font-size 40px
        >span 
          margin-left 5px
      .remove
        border none
      
</style>