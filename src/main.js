// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router';
import store from './store'
import axios from 'axios';

import vuetifyOptions from './styles/vuetifyConfig.js'
import messages from './localize'

import 'vuetify/dist/vuetify.min.css'

window.isElectron = (window && window.process && window.process.type)

if (window.isElectron) {
  window.Electron = require('electron')
}

Vue.http = Vue.prototype.$http = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

Vue.config.productionTip = false;

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
