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
    addFood(state, payload) {
      state.loadedFood.unshift(payload);
    },
    addDrink(state, payload) {
      state.loadedDrinks.unshift(payload);
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    addFood({ commit }, payload) {
      const newFood = {
        name: payload.name,
        description: payload.description,
        weight: payload.weight,
        quantity: payload.quantity,
        price: payload.price,
      };
      commit("addFood", newFood);
    },
    addDrink({ commit }, payload) {
      const newDrink = {
        name: payload.name,
        volume: payload.volume,
        quantity: payload.quantity,
        price: payload.price,
      };
      commit("addDrink", newDrink);
    },
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
  getters: {
    loadedFood(state) {
      return state.loadedFood;
    },
    loadedDrinks(state) {
      return state.loadedDrinks;
    },
  },
});
