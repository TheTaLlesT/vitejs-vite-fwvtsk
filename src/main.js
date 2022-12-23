import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");