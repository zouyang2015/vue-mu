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


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/Search',
      component: search
    }
  ]
})
