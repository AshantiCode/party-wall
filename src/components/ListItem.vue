<template>
  <v-card max-width="300px">
    <v-container class="pt-0">
      <v-row>
        <v-col class="pa-0">
          <v-img v-if="drinks" max-height="200px" :src="require('@/assets/drinks.jpg')"></v-img>
          <v-img v-if="!drinks" max-height="200px" :src="require('@/assets/food.jpg')"></v-img>
        </v-col>

        <v-col cols="12">
          <v-card-title class="list-item-heading regular pl-0 accent--text">{{ item.name }}</v-card-title>
          <v-card-subtitle v-if="!drinks" class="pa-0 secondary--text">{{item.description}}.</v-card-subtitle>
          <v-card-text class="font-weight-bold headline pa-0">{{ item.price }} €</v-card-text>
        </v-col>
        <v-row>
          <v-col class="py-0">
            <v-card-subtitle v-if="drinks" class="py-0 text--disabled">Vol.: {{item.volume}} liter</v-card-subtitle>
            <v-card-subtitle v-if="!drinks" class="py-0 text--disabled">Weight: {{item.weight}} lbs.</v-card-subtitle>
          </v-col>

          <v-col class="py-0">
            <v-card-subtitle class="pa-0 text--disabled">Max. Items: {{item.quantity}}</v-card-subtitle>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-card-text class="text--disabled">Order Amount:</v-card-text>
          </v-col>

          <v-col cols="6">
            <v-select
              class="text--secondary orders"
              dense
              v-model="maxItems"
              :items="maxItemsArray"
            ></v-select>

            <p class="title">Total: {{ totalPrice }} €</p>
          </v-col>
        </v-row>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>

        <v-col>
          <v-btn class="primary" v-on="on">Order now!</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>


<script>
export default {
  name: "ListItem",
  props: ["item"],
  data() {
    return {
      maxItems: 0,
      totalPrice: 0
    };
  },
  computed: {
    maxItemsArray() {
      const quantity = this.item.quantity;
      let array = [];
      for (let i = 0; i <= quantity; i++) {
        array.push(i);
      }
      return array;
    },
    drinks() {
      return this.item.category == "drinks";
    }
  },
  watch: {
    menge(value) {
      return (this.totalPrice = this.item.price * value);
    }
  }
};
</script>

<style>
.orders {
  width: 90px;
}
</style>