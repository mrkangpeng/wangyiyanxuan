import ajax from './ajax'
const BASE = 'https://www.easy-mock.com/mock/5d3e64371d54b548b02d912e/wyyx'
// 获取滑块bar数据
export const reqBar = () => ajax(BASE+'/bar')

// 获取轮播图图片
export const reqCarouselPic = () => ajax(BASE+'/carousel')

// 获取分类的图片
export const reqCategroies = () => ajax(BASE+'/categories')