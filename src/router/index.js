import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BoardView from "@/views/BoardView.vue";

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
    path: "/board",
    name: "Board",
    component: BoardView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
