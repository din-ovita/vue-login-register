// import { createRouter, createWebHistory } from "vue-router";
import LoginN from "@/components/LoginN.vue";
import RegisTer from "@/components/RegisTer.vue";
import HomePage from "@/view/Home.vue";
import AboutPage from "@/view/About.vue";
import ContactPage from "@/view/Contact.vue";
import ProdukPage from "@/view/Produk.vue";
import DetailPage from "@/view/Detail.vue";

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const routes = [
  {
    path: "/",
    name: "LoginN",
    component: LoginN,
  },
  {
    path: "/register",
    name: "RegisTer",
    component: RegisTer,
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/produk",
    name: "ProdukPage",
    component: ProdukPage,
  },
  {
    path: "/detail",
    name: "DetailPage",
    component: DetailPage,
  },
];
const router = new Router({
  routes,
  mode: "history",
});

export default router;
