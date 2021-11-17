import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faKey, faUserPlus, faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Gravatar from 'vue-gravatar';

library.add(faUser, faKey, faUserPlus, faAt);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('v-gravatar', Gravatar);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
