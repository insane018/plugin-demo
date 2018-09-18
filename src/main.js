import Vue from 'vue'
import App from './App.vue'
import Vloading from 'vloadtest'

Vue.use(Vloading);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
