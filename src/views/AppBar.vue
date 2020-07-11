<template>
  <header>
    <div class="icons">
      <router-link to="/">
        <i class="fas fa-home"></i>
      </router-link>
      <router-link to="/vuetimer">
        <i class="fas fa-clock"></i>
      </router-link>
      <router-link to="/vuetodo">
        <i class="fas fa-list-alt"></i>
      </router-link>
    </div>
  </header>
</template>>

<style scoped>
header {
  width: 100%;
  height: 80px;
  background-color: rgb(22, 153, 22);
  position: relative;
}
.icons {
  position: absolute;
  font-size: 30px;
  top: 40%;
  left: 1%;
}
.icons i {
  color: white;
  margin: 0 10px;
}
</style>

<script>
export default {
  name: "app-bar"
};
</script>>