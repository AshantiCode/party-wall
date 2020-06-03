import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async registerUser({ commit }, payload) {
      try {
        console.log("Payload :", payload);
        const response = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password);
        console.log("REsponse: ", response);
        const newUser = {
          id: response.user.uid,
          createdItems: [],
          savedItems: [],
        };
        commit("setUser", newUser);
      } catch (error) {
        console.log(error);
      }
    },
    async loginUser({ commit }, payload) {
      try {
        const response = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password);
        console.log("Login Respone: ", response);
        const newUser = {
          id: response.user.uid,
          createdItems: [],
          savedItems: [],
        };
        commit("setUser", newUser);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
});
