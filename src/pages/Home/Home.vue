<template>
  <div class="Home">
    <DefaultBar />
    <Header>
      <a href="javascript:;" class="logo" slot="logo">
        <i></i>
      </a>
      <div class="search" slot="search">
        <i class="iconfont icon-search"></i>
        <span>搜索商品,共21600款好物</span>
      </div>
      <div class="loginBtn" slot="login">登录</div>
    </Header>
  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";
import DefaultBar from "../../components/DefaultBar/DefaultBar.vue";
export default {
  name: "Home",
  components: {
    Header,
    DefaultBar
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped></style>