<template>
  <div class="swiperWrap">
    <swiper :options="swiperOption" v-if="carouselPic.length>0">
      <swiper-slide v-for="(slide, index) in carouselPic" :key="index">
        <img :src="slide" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "carouel",
  data() {
    return {
      swiperOption: {
        autoplay: true, // 自动轮播
        loop: true, // 循环 bug:因为我这是异步获取的数据，所以当数据还没返回的时候，swiper就已经渲染了，因此在组件上加上判断条件就解决了
        pagination: { // 自定义分页器
          el: ".swiper-pagination",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active"
        }
      }
    };
  },
  computed: {
    ...mapState({
      carouselPic: state => state.home.carouselPic
    })
  }
};
</script>

<style lang="stylus">
.swiperWrap
  width 750px
  img 
    width 100%
.my-bullet
  border-radius 0.02rem
  width 40px
  height 4px
  opacity 0.4
  margin 0 10px 30px 0
  display inline-block
  background rgba(0, 0, 0, 0.2)
.my-bullet-active
  background #ffffff
  opacity 1
</style>