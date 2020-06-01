<template>
  <v-container>
    <v-row>
      <v-col sm="6" offset-sm="3">
        <v-card v-for="(food) in food" :key="food.id" class="mb-5">
          <v-container>
            <v-row>
              <v-col cols="5">
                <v-img :src="require('@/assets/food.jpg')"></v-img>
              </v-col>
              <v-col cols="7">
                <v-card-title>{{food.name}}</v-card-title>
                <v-card-text>
                  <v-expansion-panels accordion>
                    <v-expansion-panel>
                      <v-expansion-panel-header>Description</v-expansion-panel-header>
                      <v-expansion-panel-content>{{food.description}}</v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card-text>
                <div>
                  <v-chip class="ma-2" color="secondary">{{food.quantity}} x in Stock</v-chip>
                  <v-chip class="ma-2" color="secondary">{{food.price}} $</v-chip>
                </div>
              </v-col>
            </v-row>
            <v-btn class="primary">Buy now!</v-btn>
          </v-container>
        </v-card>

        <v-card v-for="drink in drinks" :key="drink.id" class="mb-5">
          <v-container>
            <v-row>
              <v-col cols="5">
                <v-img :src="require('@/assets/drinks.jpg')"></v-img>
              </v-col>
              <v-col cols="7">
                <v-card-title>{{drink.name}}</v-card-title>

                <div>
                  <v-chip class="ma-2" color="secondary">{{drink.quantity}} pack</v-chip>
                  <v-chip class="ma-2" color="secondary">{{drink.price}} $</v-chip>
                </div>
              </v-col>
            </v-row>
            <v-btn class="primary">Buy now!</v-btn>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      food: [
        {
          id: "9340923842",
          name: "Steak",
          description: "So lecker yummy yummy",
          quantity: "3",
          price: "5,99"
        },
        {
          id: "932429034",
          name: "Pizza",
          description: "So lecker yummy yummy",
          quantity: "10",
          price: "8,99"
        }
      ],
      drinks: [
        {
          id: "098938789378",
          name: "Beer",
          description: "I am thirsty",
          quantity: "6",
          price: "3,99"
        },
        {
          id: "87739472",
          name: "Coca Cola",
          description: "I am thirsty",
          quantity: "4",
          price: "7,99"
        }
      ]
    };
  }
};
</script>
