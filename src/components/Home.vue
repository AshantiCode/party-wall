<template>
  <v-container>
    <v-row>
      <v-col sm="6" offset-sm="3">
        <div v-for="item in items" :key="item.id">
          <v-card v-if="item.category == 'food'" class="mb-5">
            <v-container>
              <v-row>
                <v-col cols="5">
                  <v-img :src="require('@/assets/food.jpg')"></v-img>
                </v-col>
                <v-col cols="7">
                  <v-card-title>{{ item.name }}</v-card-title>
                  <v-card-text>
                    <v-expansion-panels hover flat accordion>
                      <v-expansion-panel>
                        <v-expansion-panel-header class="pa-0">Description</v-expansion-panel-header>
                        <v-expansion-panel-content class="pa-0">{{ item.description }}</v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-card-text>
                  <div>
                    <v-chip class="ma-2" color="secondary">{{ item.quantity }} per Order</v-chip>
                    <v-chip class="ma-2" color="secondary">{{ item.price }} $</v-chip>
                  </div>
                </v-col>
              </v-row>
              <v-btn class="primary">Order now!</v-btn>
            </v-container>
          </v-card>

          <v-card v-else class="mb-5">
            <v-container>
              <v-row>
                <v-col cols="5">
                  <v-img :src="require('@/assets/drinks.jpg')"></v-img>
                </v-col>
                <v-col cols="7">
                  <v-card-title>{{ item.name }}</v-card-title>

                  <div>
                    <v-chip class="ma-2" color="secondary">{{ item.quantity }} pack</v-chip>
                    <v-chip class="ma-2" color="secondary">{{ item.price }} $</v-chip>
                  </div>
                </v-col>
              </v-row>
              <v-btn class="primary">Order now!</v-btn>
            </v-container>
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
import axios from "axios";

export default {
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
