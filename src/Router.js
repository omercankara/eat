import { createRouter, createWebHistory } from 'vue-router';
import Home from './Modules/Home/appHome.vue';  // Anasayfa (yemek listesi)
import productDetail from './Modules/productDetail/appDetail.vue';  // Detay sayfası

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meal/:id',
    name: 'MealDetail',
    component: productDetail,
    props: true  // Dinamik parametreyi props olarak geçireceğiz
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
