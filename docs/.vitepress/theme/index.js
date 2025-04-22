import Theme from 'vitepress/theme'
import './style/custom.css'
import ZqsUI3 from 'zqs-ui3'
import 'zqs-ui3/dist/zqs-ui3.css'
import GiscusComment from './GiscusComment.vue'
import HeroBlock from './HeroBlock.vue'
import BlogCardList from './BlogCardList.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(ZqsUI3); // 注册 zqs-ui3
    app.component('GiscusComment', GiscusComment)
    app.component('HeroBlock', HeroBlock) // 注册 HeroBlock 组件
    app.component('BlogCardList', BlogCardList) // 注册 BlogCardList 组件
  },
}
