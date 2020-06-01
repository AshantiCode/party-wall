import Vue from "vue";
import App from "./App.vue";
import * as firebase from "firebase";
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
    firebase.initializeApp({
      apiKey: "AIzaSyBnieFQQ7-G1roQfB6LElwRyEHNiFPbwIk",
      authDomain: "party-wall-e5824.firebaseapp.com",
      databaseURL: "https://party-wall-e5824.firebaseio.com",
      projectId: "party-wall-e5824",
      storageBucket: "party-wall-e5824.appspot.com",
    });
  },
}).$mount("#app");
