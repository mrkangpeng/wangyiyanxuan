<template>
  <div class="home">
    <DefaultBar />
    <Header>
      <a href="javascript:;" class="logo" slot="logo">
        <i></i>
      </a>
      <div class="search" slot="search" @click="$router.replace('/search')">
        <i class="iconfont icon-search"></i>
        <span>搜索商品,共21600款好物</span>
      </div>
      <div class="loginBtn" slot="login" @click="$router.replace('/profile')">登录</div>
    </Header>
    <div class="scrollBar" v-if="bar.length">
      <div class="listWrap" v-show="!toggle">
        <ul class="list" ref="list">
          <li
            class="item"
            v-for="(bar,index) in bar"
            :key="index"
            @click="isActive"
            :class="currentIndex===index?'active':''"
          >{{bar}}</li>
        </ul>
        <div class="mask"></div>
      </div>
      <div class="allList" v-show="toggle">
        <p>全部频道</p>
        <div class="showListWrap">
          <ul class="showList" ref="showList">
            <li
              class="showListItem"
              v-for="(bar,index) in bar"
              :key="index"
              @click="isShow"
              :class="currentIndex===index?'active':''"
            >{{bar}}</li>
          </ul>
        </div>
      </div>
      <div class="toggle" @click="isToggle">
        <i class="iconfont" :class="toggle?'on':'off'"></i>
      </div>
    </div>
    <!-- 轮播图 -->
    <Scroll/>
    <!-- 品质保证描述 -->
    <div class="descWrap">
      <ul class="descList">
        <li class="descItem">
          <i class="icon" style="background-image:url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);"></i>
          <span class="txt">网易自营品牌</span>
        </li>
        <li class="descItem">
          <i class="icon" style="background-image:url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);"></i>
          <span class="txt">30天无忧退货</span>
        </li>
        <li class="descItem">
          <i class="icon" style="background-image:url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);"></i>
          <span class="txt">48小时快速退款</span>
        </li>
      </ul>
    </div>
    <!-- 首页内容 -->
    <div class="content">
      <!-- 首页分类 -->
      <Category/>
      <!-- 新人优惠页 -->
      <div class="preferentialWrap">
        <div class="preferentialCon">
          <div class="newDesc">
            <span class="txt">新人专享礼</span>
          </div>
          <div class="descPic">
            <a href="javascript:;" class="left">
              <div class="name">新人专享礼包</div>
              <div class="imgWrap">
                <img v-lazy="{src:'https://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png'}" alt="新人专享礼包">
              </div>
            </a>
            <div class="right">
              <a href="javascript:;" class="top">
                <div class="ctn">
                  <div class="title">福利社</div>
                  <div class="subTitle">今日特价</div>
                </div>
                <div class="imgWrap">
                  <img src="https://yanxuan.nosdn.127.net/f961b628a67e5a95150b962a48963b6d.png" alt="">
                </div>
                <div class="discount">
                  <div class="newPrice">￥69</div>
                  <div class="oldPrice">￥99</div>
                </div>
              </a>
              <a href="javascript:;" class="bottom">
                <div class="ctn">
                  <div class="title">新人拼团</div>
                  <div class="tag">一元起包邮</div>
                </div>
                <div class="imgWrap">
                  <img src="https://yanxuan.nosdn.127.net/d3f4d9b6df8ea22c43f637469363abcf.png" alt="">
                </div>
                <div class="discount">
                  <div class="newPrice">￥1</div>
                  <div class="oldPrice">￥19</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";
import DefaultBar from "../../components/DefaultBar/DefaultBar.vue";
import BScroll from "better-scroll";
import { reqBar } from "../../api";
import Scroll from "../../components/Scroll/Scroll.vue";
import Category from '../../components/Categories/Categories.vue'
export default {
  name: "Home",
  components: {
    Header,
    DefaultBar,
    Scroll,
    Category
  },
  data() {
    return {
      bar: [],
      toggle: false,
      currentIndex: 0,
    };
  },
  methods: {
    isToggle() {
      this.toggle = !this.toggle;
    },
    // 通过index使得两个联动
    isActive(event) {
      const lis = this.$refs.list.children;
      [].slice.call(lis).forEach((item, index) => {
        if (item === event.target) {
          this.currentIndex = index;
        }
      });
    },
    isShow(event) {
      const lis = this.$refs.showList.children;
      [].slice.call(lis).forEach((item, index) => {
        if (item === event.target) {
          this.currentIndex = index;
        }
      });
    },
  },
  computed: {
    

  },
  async mounted() {
    // 请求频道分类的列表
    const result = await reqBar();
    if (result.code === 0) {
      this.bar = result.data.text;
    }
    this.$nextTick(() => {
      new BScroll(".listWrap", {
        scrollX: true
      });
    });
    // 提交请求轮播图图片
    this.$store.dispatch("getCarouselPic");
    // 提交请求分类的图片
    this.$store.dispatch("getCategories")
  }
};
</script>

<style lang="stylus" scoped>
.home
  height 100%
  background-color rgba(238,238,238,.7)
  .scrollBar
    width 100%
    line-height 60px
    position relative
    display flex
    box-sizing border-box
    padding-left 30px
    background-color #fff
    .listWrap
      display flex
      width 600px
      position relative
      overflow hidden
      .list
        display flex
        flex-shrink 0
        flex-flow row nowrap
        .item
          flex-shrink 0
          height 60px
          position relative
          line-height 60px
          padding 0 16px
          font-size 28px
          &.active
            &::after
              content ' '
              position absolute
              left 0
              bottom 0
              width 100%
              height 5px
              background-color #b4282d
      .mask
        width 60px
        height 60px
        position absolute
        right 0
        top 0
        background-image linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%)
    .toggle
      width 100px
      position absolute
      top 0
      right 0
      text-align center
      line-height 60px
      i
        width 30px
        height 30px
        display inline-block
        vertical-align middle
        background-image url('../../../public/images/arrow-down.png')
        background-repeat no-repeat
        background-size 100% 100%
        font-size 30px
        transition all 0.5s
        &.on
          transform rotate(180deg)
        &.off
          transform rotate(0)
    .allList
      font-size 28px
      height 60px
      .showListWrap
        position absolute
        top 60px
        left 0
        z-index 5
        width 750px
        height 312px
        padding 24px 0 0 0
        background-color #ffffff
        .showList
          text-align center
          line-height 56px
          overflow hidden
          .showListItem
            width 150px
            height 56px
            float left
            background-color #fafafa
            font-size 24px
            margin 0 0 40px 30px
            border 1px solid #CCC
            border-radius 5px
            &.active
              border 1px solid #b4282d
  .descWrap
    width 100%
    padding 0 30px
    box-sizing border-box
    background-color #fff
    .descList
      display flex
      height 72px
      color #333333
      justify-content space-between
      align-items center
      font-size 24px
      .descItem
        display flex
        align-items center
      .icon
        width 32px
        height 32px
        background-size 100% 100%
        margin 0 8px 0 0 
  .content
    width 100%
    .preferentialWrap
      height 600px
      background-color rgba(238,238,238,.7)
      .preferentialCon
        height 558px
        width 100%
        float left
        background-color #fff
        margin 20px 0 0 0
        .newDesc
          width 100%
          box-sizing border-box
          padding 0 30px
          text-align center 
          line-height 90px
          .txt
            font-size 32px
            height 90px
            position relative
            &::before
              content:" "
              position absolute
              top 22px
              left -40px
              width 24px
              height 3px
              background #333
            &::after
              content:" "
              position absolute
              top 22px
              right -40px
              width 24px
              height 3px
              background #333


        .descPic
          box-sizing border-box
          width 100%
          height 438px
          padding 0 30px
          .left
            width 343px
            height 434px
            background-color #F9E9CF
            float left
            color #333
            margin-right 4px
            .name 
              width 343px
              height 78px
              box-sizing border-box
              padding 30px 0 0 30px
              font-size 32px
            .imgWrap
              width 258px
              height 257px
              margin 37px 42px 0 42px
              img 
                width 100%
                height 100%

          .right
            width 343px
            height 434px
            float left
            .top,.bottom
              box-sizing border-box
              position relative
              display block
              width 100%
              height 215px
              padding 20px 0 0 30px
              background-color #F9E9CF
              margin-bottom 4px
              .ctn
                position absolute
                top 20px
                left 30px
                width 313px
                .title
                  height 48px
                  font-size 32px
                  color #333
                .subTitle
                  height 36px
                  font-size 24px
                  color #7f7f7f
              .imgWrap
                width 200px
                height 200px
                position absolute
                bottom 0
                right 0
                img 
                  width 100%
                  height 100%
              .discount
                position absolute
                top 20px
                right 20px
                width 80px
                height 80px
                border-radius 50%
                background: #F59524
                color #fff
                text-align center
                opacity .8
                .newPrice
                  height 36px
                  font-size 24px
                  margin 14px 6px 0 0
                .oldPrice
                  height 30px
                  font-size 20px
                  margin -7px 5px 0 0 
                  text-decoration line-through
            .bottom
              margin-bottom 0
              background-color #FFECC2


</style>