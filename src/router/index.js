import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ItemDetails from "../views/ItemDetails.vue";
import Category from "../views/Category.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/category/:category",
    name: "Category",
    component: Category
  },
  {
    path: "/item-details/:id",
    name: "ItemDetails",
    component: ItemDetails
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
