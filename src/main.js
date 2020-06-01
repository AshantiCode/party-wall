import Vue from "vue";
import App from "./App.vue";
import { initializeApp } from "firebase/app";
import vuetify from "./plugins/vuetify";
import router from "./router";
import { store } from "./store";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
  created() {
    initializeApp({
      apiKey: "AIzaSyBnieFQQ7-G1roQfB6LElwRyEHNiFPbwIk",
      authDomain: "party-wall-e5824.firebaseapp.com",
      databaseURL: "https://party-wall-e5824.firebaseio.com",
      projectId: "party-wall-e5824",
      storageBucket: "party-wall-e5824.appspot.com",
      appId: "1:562412399028:web:7a5c3ee687023938182ae1",
    });
  },
}).$mount("#app");
