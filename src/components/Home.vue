<template>
  <v-container>
    <v-row>
      <v-col md="6" offset-md="3">
        <v-card class="mb-5">
          <v-container>
            <v-row>
              <v-col cols="5">
                <v-img :src="require('@/assets/food.jpg')"></v-img>
              </v-col>
              <v-col cols="7">
                <v-card-title>Steak from Kobe 500gramm</v-card-title>
                <v-card-text>
                  <v-expansion-panels accordion>
                    <v-expansion-panel>
                      <v-expansion-panel-header>Description</v-expansion-panel-header>
                      <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card-text>
                <div>
                  <v-chip class="ma-2" color="secondary">3 x in Stock</v-chip>
                  <v-chip class="ma-2" color="secondary">5 $</v-chip>
                </div>
              </v-col>
            </v-row>
            <v-btn class="primary">Buy now!</v-btn>
          </v-container>
        </v-card>

        <v-card class="mb-5">
          <v-container>
            <v-row>
              <v-col cols="5">
                <v-img :src="require('@/assets/drinks.jpg')"></v-img>
              </v-col>
              <v-col cols="7">
                <v-card-title>Britta Belgium Beer 0,5ml</v-card-title>

                <div>
                  <v-chip class="ma-2" color="secondary">6 pack</v-chip>
                  <v-chip class="ma-2" color="secondary">3 $</v-chip>
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
