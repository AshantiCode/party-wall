import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import AddItem from "../components/AddItem";
import Login from "../views/Login";
import Register from "../views/Register";
import AddFood from "../components/AddFood";
import AddDrink from "../components/AddDrink";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/add-item",
      name: "add-item",
      component: AddItem,
    },
    {
      path: "/add-food",
      name: "add-food",
      component: AddFood,
    },
    {
      path: "/add-drink",
      name: "add-drink",
      component: AddDrink,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
  ],
});
