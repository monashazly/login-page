import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css';

// // eslint-disable-next-line no-unused-vars
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// // eslint-disable-next-line no-unused-vars
// import {library} from '@fortawesome/fontawesome-svg-core';
// // eslint-disable-next-line no-unused-vars
// import {fas} from '@fortawesome/free-solid-svg-icons'
// import ''
// library.add(fas);
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

createApp(App)
// .component('fa',FontAwesomeIcon)
.use(store).use(router).mount('#app')
