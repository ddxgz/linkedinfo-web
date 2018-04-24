import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Layout from '@/views/Layout'
import Root from '@/views/Root'
import Infos from '@/views/Infos'
import About from '@/views/About'
import Tags from '@/views/Tags'
import Info from '@/views/Info'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    name: 'root',
    component: Layout,
    children: [
      {
        path: '',
        component: Root,
        name: 'root'
      },
      {
        path: '/infos',
        component: Infos,
        name: 'Infos',
        query: ['offset', 'quantity'],
        children: [
          {
            path: ':infoKey',
            component: Info,
            name: 'Info'
          }
        ]
      },
      {
        path: '/tags',
        component: Tags,
        name: 'tags'
      },
      {
        path: '/about',
        component: About,
        name: 'about'
      }
    ]
  }]
})
