import Vue from 'vue'
import Login from './views/Login.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(Login)
}).$mount('#app')
