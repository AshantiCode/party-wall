<template v-for="food in foodList" :key="food.name">
  <v-list two-line>
    <v-list-item>
      <v-list-item-avatar>
        <v-img :src="require('@/assets/food.jpg')"></v-img>
      </v-list-item-avatar>

      <v-col cols="4">
        <v-list-item-content>
          <v-list-item-title> {{ item.name }}</v-list-item-title>
          <v-list-item-subtitle> {{ item.price }} Dollar </v-list-item-subtitle>
        </v-list-item-content>
      </v-col>

      <v-col cols="2">
        <v-list-item-content>
          <v-select v-model="menge" :items="maxMenge" label="Quantity"></v-select>
        </v-list-item-content>
      </v-col>
      <v-spacer></v-spacer>

      <v-col cols="2">
        <v-text-field append-icon="mdi-currency-usd" readonly v-model="totalPrice" label="Total Price" value="text">{{
          totalPrice
        }}</v-text-field>
      </v-col>
    </v-list-item>
    <v-expansion-panels pansion-panels flat accordion>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-0">Read More</v-expansion-panel-header>
        <v-expansion-panel-content class="pa-0">{{ item.description }}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-divider></v-divider>
  </v-list>
</template>

<script>
export default {
  name: "FoodListItem",
  props: ["item"],
  data() {
    return {
      counter: 0,
      menge: 0,
      totalPrice: 0,
    };
  },
  methods: {
    increment() {
      this.counter = parseInt(this.counter, 10) + 1;
    },
    decrement() {
      if (this.counter <= 0) {
        return;
      } else {
        this.counter = parseInt(this.counter, 10) - 1;
      }
    },
  },
  computed: {
    maxMenge() {
      const quantity = this.item.quantity;
      let array = [];
      for (let i = 0; i < quantity; i++) {
        array.push(i);
      }
      return array;
    },
  },
  watch: {
    menge(val) {
      return (this.totalPrice = this.item.price * val);
    },
  },
};
</script>

<style>
.v-input__icon--append .v-icon {
  color: #d34e24;
}
</style>
