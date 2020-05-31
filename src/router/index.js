import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import AddItem from "../components/AddItem";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

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
