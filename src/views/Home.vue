<template>
  <v-container>
    <!-- BANNER -->
    <v-row align="center" justify="center" class="green white--text pt-8">
      <h1 class="h1 text-h4 font-weight-black">conduit</h1>
    </v-row>
    <v-row align="center" justify="center" class="green white--text pt-2 pb-5">
      <p class="text-body-1">A place to share your knowledge.</p>
    </v-row>

    <!-- Page -->
    <v-tabs>
      <v-tab>
        <router-link :to="{ name: 'home-my-feed' }">Your Feed</router-link>
      </v-tab>
      <v-tab>
        <router-link :to="{ name: 'home' }" exact>Global Feed</router-link>
      </v-tab>
      <v-tab>
        <!--<router-link :to="{ name: 'home-tag', params: { tag } }">
          <i class="ion-pound"></i>
          {{ tag }}
        </router-link>-->
      </v-tab>
    </v-tabs>
  </v-container>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    //HelloWorld
  }
};
</script>
