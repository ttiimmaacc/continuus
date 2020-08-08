import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap'
import "./assets/scss/custom.scss"
import VuePrlx from 'vue-prlx'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VuePrlx)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');

// new Vue({
//   created () {
//     AOS.init()
//   },
//   render: h => h(App),
// }).$mount('#app');
