import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      id: "eir98cr",
      createdItems: ["kdjfdfdk"],
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async registerUser({ commit }, payload) {
      console.log("Payload :", payload);
      const response = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password);
      const newUser = {
        id: response.user.user.uid,
        createdItems: [],
        savedItems: [],
      };
      commit("setUser", newUser);
    },
  },
});
