import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Identify from '../pages/Identify/Identify.vue'
import Cart from '../pages/Cart/Cart.vue'
import Profile from '../pages/Profile/Profile.vue'

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/identify',
    component: Identify
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '',
    redirect: '/home'
  }

]