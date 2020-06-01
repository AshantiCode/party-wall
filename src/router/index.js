import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import AddItem from "../components/AddItem";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
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
      path: "/sign-in",
      name: "sign-in",
      component: SignIn,
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUp,
    },
  ],
});
