import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedFood: [
      {
        id: "9340923842",
        name: "Steak",
        description: "So lecker yummy yummy",
        weight: "1",
        quantity: "3",
        price: "5,99",
      },
      {
        id: "932429034",
        name: "Pizza",
        description: "So lecker yummy yummy",
        weight: "1",
        quantity: "10",
        price: "8,99",
      },
    ],
    loadedDrinks: [
      {
        id: "098938789378",
        name: "Beer",
        volume: "5",
        quantity: "6",
        price: "3,99",
      },
      {
        id: "87739472",
        name: "Coca Cola",
        volume: "3",
        quantity: "4",
        price: "7,99",
      },
    ],
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
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password);
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
