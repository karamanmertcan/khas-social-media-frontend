import { createApp } from 'vue';
import './style/index.css';
import 'flowbite';
import './utils/axios';
import { VueQueryPlugin } from 'vue-query';
import App from './App.vue';
import router from './router';
import store from './store';

// eslint-disable-next-line newline-per-chained-call
createApp(App).use(store).use(VueQueryPlugin).use(router).mount('#app');
