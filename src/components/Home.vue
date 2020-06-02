<template>
  <v-container>
    <v-row>
      <v-col sm="6" offset-sm="3">
        <div v-for="item in items" :key="item.id">
          <FoodListItem v-if="item.category == 'food'" v-bind:item="item" />
          <DrinkListItem v-else v-bind:item="item" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.v-expansion-panel-content__wrap {
  padding: 0;
}
</style>

<script>
import FoodListItem from "./FoodListItem";
import DrinkListItem from "./DrinkListItem";
import axios from "axios";

export default {
  components: {
    FoodListItem,
    DrinkListItem
  },
  data() {
    return {
      items: []
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:3000/items");
      this.items = response.data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
