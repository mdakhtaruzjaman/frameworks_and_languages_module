import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Import the BootstrapVue3 plugin and its components
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'; // Import BootstrapVue CSS

const app = createApp(App);

// Install the BootstrapVue3 plugin
app.use(BootstrapVue3);

app.mount('#app'); // Mount the app to the DOM

