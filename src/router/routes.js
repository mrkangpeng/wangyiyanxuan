import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Identify from '../pages/Identify/Identify.vue'
import Cart from '../pages/Cart/Cart.vue'
import Profile from '../pages/Profile/Profile.vue'

export default [
  {
    path: '/home',
    component: Home,
    meta:{
      isShowTabBar:true
    }
  },
  {
    path: '/category',
    component: Category,
    meta:{
      isShowTabBar:true
    }
  },
  {
    path: '/identify',
    component: Identify,
    meta:{
      isShowTabBar:true
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta:{
      isShowTabBar:true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      isShowTabBar:false
    }
  },
  {
    path: '/',
    redirect: '/home'
  }
]