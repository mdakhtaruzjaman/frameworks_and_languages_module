import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'; // Import BootstrapVue CSS
import BootstrapVue3 from 'bootstrap-vue-3'; // Import the BootstrapVue3 plugin
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import store from './store'; // make sure this path is correct

// Define the router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HelloWorld }
  ],
});

// Create the app instance
const app = createApp(App);

// Install plugins
app.use(BootstrapVue3);
app.use(router);
app.use(store);

// Mount the app to the DOM
app.mount('#app');
