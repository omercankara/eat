import { createApp } from 'vue';
import App from './App.vue';
import store from './Store'; // Vuex store'u import et
import router from './Router'; // Router'ı import et

const app = createApp(App);

app.use(store); // Store'u uygulamaya ekle
app.use(router); // Router'ı uygulamaya ekle

app.mount('#app');