<template>
  <v-app id="app"> 
    <app-bar />
    <router-view />
  </v-app>
</template>

<style scoped>
#app {
  font-family: Lato, 游ゴシック体, "Yu Gothic", YuGothic,
    "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo,
    Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

</style>

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
