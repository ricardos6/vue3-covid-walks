import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store';
import { createI18n } from 'vue-i18n';
import en from "./assets/i18n/en.json";
import es from "./assets/i18n/es.json";
import OpenLayersMap from 'vue3-openlayers';
import 'vue3-openlayers/dist/vue3-openlayers.css';

const messages = {
  en: en,
  es: es
}

const intl = createI18n({
  locale: 'es', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // Other options
})

createApp(App).use(intl).use(store).use(OpenLayersMap).use(router).mount('#app')
