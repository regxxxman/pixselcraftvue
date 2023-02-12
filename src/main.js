import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { TroisJSVuePlugin } from 'troisjs';

createApp(App).use(router).use(TroisJSVuePlugin).mount('#app')
