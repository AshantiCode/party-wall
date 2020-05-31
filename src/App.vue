<template>
  <v-app>
    <v-app-bar app dark class="text-uppercase" color="primary">
      <v-app-bar-nav-icon
        @click="sideNav = !sideNav"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <div class="d-flex align-center">
          <v-img
            :src="require('@/assets/logo.png')"
            alt="Party Wall Logo"
            width="40"
            class="mr-5"
          />
          <h1>
            <span class="font-weight-thin ">Party</span>
            <span class="font-weight-bold">Wall</span>
          </h1>
        </div>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon class="mr-2">
            {{ item.icon }}
          </v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer dark temporary color="primary" v-model="sideNav">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item-group>
        <v-list-item
          temporary
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>

    <v-content> </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      sideNav: false,
      menuItems: [
        { title: "Sign In", icon: "mdi-lock-open", link: "/sign-in" },
        { title: "Sign up", icon: "mdi-face", link: "/sign-up" },
        { title: "Add Item", icon: "mdi-plus", link: "/add-item" },
      ],
    };
  },
};
</script>
