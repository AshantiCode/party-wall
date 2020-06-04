<template c>
  <v-container>
    <v-row>
      <v-col v-for="item in items" :key="item.id">
        <ListItem :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListItem from "../components/ListItem";
import axios from "axios";

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      items: [],
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:3000/items");
      this.items = response.data.reverse();
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
