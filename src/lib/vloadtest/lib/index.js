import vloading from './loading.vue';

const myPlugin = {
  install(Vue, options) {
    Vue.component('vloading', vloading)
  }
}
export default myPlugin;