<template>
  <v-app>
    <RwvHeader />
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <RwvFooter />
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import RwvHeader from "@/components/TheHeader";
import RwvFooter from "@/components/TheFooter";

export default {
  name: "App",

  components: {
    RwvHeader,
    RwvFooter
  },

  data: () => ({
    //
  })
};
</script>
