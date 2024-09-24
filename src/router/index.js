import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DistributorView from "../views/DistributorView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/about",
    component: AboutView,
  },
  {
    //파티 분배기 컴포넌트 추가
    path: "/distributor",
    component: DistributorView, 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
