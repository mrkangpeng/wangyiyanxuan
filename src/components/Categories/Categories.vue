<template>
  <div class="categoriesWrap">
    <ul class="categoriesList">
      <li class="categoriesItem" v-for="(category,index) in categories" :key="index">
        <img :src="category.img" alt="分类图片">
        <span class="name">{{category.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Categories",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      categories:state => state.home.categories
    })
  }
};
</script>

<style lang="stylus" scoped>
.categoriesWrap
  background-color #fff
  .categoriesList
    width 100%
    height 340px
    display flex
    flex-flow row wrap
    padding 0 0 32px 0
    .categoriesItem
      display flex
      flex-direction column
      margin 10px 20px 9px
      align-items center
      img 
       width 110px
       height 110px
      .name
        font-size 24px
        color #333
        margin 10px 0 0 

</style>