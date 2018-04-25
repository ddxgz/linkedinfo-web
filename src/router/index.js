import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Layout from '@/views/Layout'
import Root from '@/views/Root'
import Infos from '@/views/Infos'
import InfosByTags from '@/views/InfosByTags'
import RandomInfos from '@/views/RandomInfos'
import About from '@/views/About'
import Tags from '@/views/Tags'
import Info from '@/views/Info'

Vue.use(Router)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

export default new Router({
  // mode: 'history',
  scrollBehavior,
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
        name: 'infos',
        query: ['offset', 'quantity'],
        meta: { scrollToTop: true }
        // children: [
        //   {
        //     path: ':infoKey',
        //     component: Info,
        //     name: 'Info'
        //   }
        // ]
      },
      {
        path: '/infos/:infoKey',
        component: Info,
        name: 'Info'
      },
      {
        path: '/tags',
        component: Tags,
        name: 'tags'
      },
      {
        path: '/tags/:tagID',
        name: 'tag',
        // redirect: { name: 'infosByTags', query: { tags: :tagID } }
        redirect: to => {
          // const { hash, params, query } = to
          return { name: 'infosByTags', query: { tags: to.params.tagID } }
        }
      },
      {
        path: '/infosbytags',
        query: ['tags', 'offset', 'quantity'],
        component: InfosByTags,
        name: 'infosByTags'
      },
      {
        path: '/randominfos',
        component: RandomInfos,
        name: 'randomInfos',
        query: ['offset', 'quantity'],
        meta: { scrollToTop: true }
        // children: [
        //   {
        //     path: ':infoKey',
        //     component: Info,
        //     name: 'Info'
        //   }
        // ]
      },
      {
        path: '/about',
        component: About,
        name: 'about'
      }
    ]
  }]
})
