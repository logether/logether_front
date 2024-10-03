import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BoardView from "@/views/BoardView.vue";
import RaidPageView from "@/views/RaidPageView.vue";

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
  {
    path: "/raid",
    name: "Raid",
    component: RaidPageView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
