import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import InstantSearch from 'vue-instantsearch';
createApp(App).use(store).use(router).mount("#app")Vue.use(InstantSearch);

new Vue({
  el: '#app',
  render: h => h(App),
});

