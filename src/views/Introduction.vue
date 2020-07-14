<template>
  <div id="intro">
    <div class="top-page">
      <v-container fluid fill-height class="top-page-wrapper">
        <v-row>
          <v-col class="top-page-content">
            <h1>ようこそ</h1>
            <p>ここでは、Vue.jsにより開発したアプリを紹介しています。</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>>

<style scoped>
#intro {
  font-family: Lato, 游ゴシック体, "Yu Gothic", YuGothic,
    "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo,
    Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    height: 100%;
    width: 100%;
}
.top-page-wrapper {
  width: 100%;
  height: 100%;
  background-color: rgba(41, 41, 41, 0.678);
}
.top-page {
  width: 100%;
  height: 100%;
  background: url("../assets/coffee-2425229_1920.jpg");
  background-size: cover;
}
.top-page-content {
  text-align: center;
  font-size: 30px;
  color: white;
}
</style>>

<script>
export default {
  name: "Home"
};
</script>>