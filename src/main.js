import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import './assets/tailwind.css';

const i18n = createI18n({
  locale: 'tr', // Varsayılan dil
  messages: {
    tr: require('./locales/tr.json'), // Türkçe dil dosyası
    us: require('./locales/us.json'), // İngilizce dil dosyası
  },
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');
