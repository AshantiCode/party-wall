<template>
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
</template>

<script>
export default {
  name: "FoodItem",
};
</script>
