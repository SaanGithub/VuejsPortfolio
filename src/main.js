// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Sidebar from './components/Sidebar';
import Mainpage from './components/Mainpage';
import Dropdown from './components/Dropdown';

Vue.component('sidebar',Sidebar);
Vue.component('mainpage',Mainpage);
Vue.component('dropdown',Dropdown);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
