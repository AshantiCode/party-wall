<template>
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
</template>

<script>
export default {
  name: "DrinkItem",
};
</script>
