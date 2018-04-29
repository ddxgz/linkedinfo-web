// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import axios from 'axios'
// import VmBackTop from 'vue-back-top'
// import Multiselect from 'vue-multiselect';
// import './style.css'

var bus = new Vue()

Vue.use(BootstrapVue)
Vue.use(bus)
// Vue.use(axios)
// Vue.component(VmBackTop.name, VmBackTop)
// register globally
// Vue.component('multiselect', Multiselect);

// register globally
// Vue.component('vue-multiselect', window.VueMultiselect.default)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

