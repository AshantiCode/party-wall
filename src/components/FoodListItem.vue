<template>
  <v-container>
    <v-row>
      <v-list two line>
        <v-list-item>
          <v-row class="mx-auto">
            <v-col cols="12">
              <v-list-item-content>
                <v-list-item-title class="headline"> {{ item.name }}</v-list-item-title>
                <v-list-item-subtitle> {{ item.price }} Dollar </v-list-item-subtitle>
              </v-list-item-content>
            </v-col>

            <v-col cols="12" sm="6">
              <v-list-item-content>
                <v-select dense v-model="menge" :items="maxMenge" label="Quantity"></v-select>
              </v-list-item-content>
            </v-col>
            <v-spacer></v-spacer>

            <v-col cols="12" sm="6">
              <v-list-item-content>
                <v-text-field
                  dense
                  append-icon="mdi-currency-usd"
                  readonly
                  v-model="totalPrice"
                  label="Total Price"
                  value="text"
                  >{{ totalPrice }}</v-text-field
                >
              </v-list-item-content>
            </v-col>
            <v-col sm="6">
              <v-expansion-panels pansion-panels flat accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header class="pa-0">Read More</v-expansion-panel-header>
                  <v-expansion-panel-content class="pa-0">{{ item.description }}</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <v-spacer></v-spacer>
            <v-col sm="6" class="text-right">
              <v-btn class="secondary">Order now!</v-btn>
            </v-col>
          </v-row>
        </v-list-item>

        <v-divider></v-divider>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FoodListItem",
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
.v-input__icon--append .v-icon {
  color: #d34e24;
}
</style>
