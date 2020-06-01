import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedFood: [
      {
        id: "9340923842",
        name: "Steak",
        description: "So lecker yummy yummy",
        quantity: "3",
        price: "5,99",
      },
      {
        id: "932429034",
        name: "Pizza",
        description: "So lecker yummy yummy",
        quantity: "10",
        price: "8,99",
      },
    ],
    loadedDrinks: [
      {
        id: "098938789378",
        name: "Beer",
        description: "I am thirsty",
        quantity: "6",
        price: "3,99",
      },
      {
        id: "87739472",
        name: "Coca Cola",
        description: "I am thirsty",
        quantity: "4",
        price: "7,99",
      },
    ],
    user: {
      id: "eir98cr",
      createdItems: ["kdjfdfdk"],
    },
  },
  mutations: {},
  actions: {},
  getters: {
    loadedFood(state) {
      return state.loadedFood;
    },
    loadedDrinks(state) {
      return state.loadedDrinks;
    },
  },
});
