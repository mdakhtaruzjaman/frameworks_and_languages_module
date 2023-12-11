// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ItemManagement from '../components/ItemManagement.vue';

const routes = [
  { path: '/', component: ItemManagement },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

