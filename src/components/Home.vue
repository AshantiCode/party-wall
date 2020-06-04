<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="8" offset-sm="2">
        <div v-for="item in items" :key="item.id">
          <FoodListItem v-if="item.category == 'food'" v-bind:item="item" />
          <DrinkListItem v-else v-bind:item="item" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FoodListItem from "./FoodListItem";
import DrinkListItem from "./DrinkListItem";
import axios from "axios";

export default {
  components: {
    FoodListItem,
    DrinkListItem,
  },
  data() {
    return {
      items: [],
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:3000/items");
      this.items = response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
.v-expansion-panel-content__wrap {
  padding: 0;
}
</style>
