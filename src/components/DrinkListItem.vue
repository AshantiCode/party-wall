<template>
  <v-card class="mb-5">
    <v-container>
      <v-row>
        <v-col>
          <v-card-title class="list-item-heading">{{ item.name }}</v-card-title>

          <v-chip class="ma-2" color="pink" label text-color="white">
            <v-icon left>mdi-currency-usd</v-icon>
            {{ item.price }}
          </v-chip>
        </v-col>
        <v-col>
          <v-card-text>How many items do you want?</v-card-text>
          <v-list-item-content>
            <v-select v-model="menge" :items="maxMenge" label="Quantity"></v-select>
          </v-list-item-content>
          <div>
            <p style="">Total: $ {{ totalPrice }}</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>

        <v-col>
          <v-btn class="primary">Order now!</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "DrinkListItem",
  props: ["item"],
  data() {
    return {
      menge: 0,
      totalPrice: 0,
    };
  },
  computed: {
    maxMenge() {
      const quantity = this.item.quantity;
      let array = [];
      for (let i = 0; i <= quantity; i++) {
        array.push(i);
      }
      return array;
    },
  },
  watch: {
    menge(value) {
      return (this.totalPrice = this.item.price * value);
    },
  },
};
</script>

<style>
.list-item-heading {
  font-size: 30px;
}
</style>
