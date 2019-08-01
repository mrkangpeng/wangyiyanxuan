## day01
* 使用脚手架vue-cli 3.0进行快速搭建
* iconfont 找到相应的字体图标
* 对移动端进行适配，使用阿里的lib-flexible方案，解决移动端点击300ms延时问题，解决a标签点透问题
* 引入样式重置
>**踩坑**:引用阿里的lib-flexible方案发现不能兼容ipad,ipad pro,查阅相关资料，已解决

## day02
* 封装底部导航footGuide和打开app提示DefaultBar
* 完成静态页面Cart、Profile
* 使用插槽对头部类似结构进行封装
>**Bug**:滑动时候警告：Unable to preventDefault inside passive event listener 
>加上全局样式* { touch-action: pan-y; } 后不报错了

## day03
* 使用better-scroll完成首页滑块的滑动
* 使用swiper完成banner图
> **踩坑**：在配置swiper的时候加上loop:true发现不起作用，查阅资料发现我请求是异步的，但是swiper在我请求回来之前就生效了所以没效果，在swiper中加上了v-if判断条件后解决了
* 完成一些静态页面的书写