import Vue from 'vue'
import Router from 'vue-router'
import Recommond from '@/components/recommond/index'
import Search from '@/components/search/index'
import Singer from '@/components/singer/index'
import Rank from '@/components/rank/index'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'recommond',
      component: Recommond
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    }
  ]
})
