<template>
  <div class="category">
    <DefaultBar />
    <Header>
      <div class="search" slot="search" style="width:100%">
        <i class="iconfont icon-search"></i>
        <span>搜索商品,共21600款好物</span>
      </div>
    </Header>
  </div>
</template>

<script>
import DefaultBar from '../../components/DefaultBar/DefaultBar.vue'
import Header from '../../components/Header/Header.vue'
export default {
  name: 'Category',
  components: {
    DefaultBar,
    Header
  },
  data() { 
    return {

    }
  }
 }
</script>

<style lang="stylus" scoped>

</style>