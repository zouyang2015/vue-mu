import Vue from 'vue'
import Router from 'vue-router'

// 推荐页面
import Recommend from 'components/recommend/recommend'
// 歌手页面
import Singer from 'components/singer/singer'
// 排行页面
import Rank from 'components/rank/rank'
// 搜索页面
import Search from 'components/search/search'
// 哥手页的详情
import SingerDetail from 'components/singer-detail/singer-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
