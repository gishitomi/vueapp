<template>
  <v-app>
    <app-bar />
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppBar from "@/views/AppBar.vue";

export default Vue.extend({
  name: "App",

  components: {
    AppBar
  },

  data: () => ({
    //
  })
});
</script>
