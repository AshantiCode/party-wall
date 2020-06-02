<template>
  <v-container>
    <v-row>
      <v-col sm="6" offset-sm="3">
        <div v-for="item in items" :key="item.id">
          <v-card v-if="item.category == 'food'" class="mb-5">
            <FoodItem />
          </v-card>
          <v-card v-else class="mb-5">
            <DrinkItem />
          </v-card>
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
import FoodItem from "./FoodItem";
import DrinkItem from "./DrinkItem";
import axios from "axios";

export default {
  components: {
    FoodItem,
    DrinkItem,
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
