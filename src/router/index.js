import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Layout from '@/views/Layout'
import Root from '@/views/Root'
import About from '@/views/About'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    name: 'root',
    component: Layout,
    children: [
      {
        path: 'root',
        component: Root,
        name: 'root'
      },
      {
        path: '/about',
        component: About,
        name: 'about'
      }
    ]
  }]
})
