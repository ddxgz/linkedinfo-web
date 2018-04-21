import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import InfoList from '@/components/InfoList'
import index from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
