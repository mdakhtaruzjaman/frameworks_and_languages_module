// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Make sure this import path is correct
import store from './store'; // Make sure this import path is correct
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App);

app.use(BootstrapVue3);
app.use(router);
app.use(store);

app.mount('#app');




