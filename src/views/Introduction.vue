<template>
  <div id="intro">
    <div class="top-page">
      <v-container fluid fill-height class="top-page-wrapper">
        <v-row>
          <v-col class="top-page-content">
            <h1>ようこそ</h1>
            <p>ここでは、Vue.jsにより私が開発したアプリをご紹介しています。</p>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="main-content">
        <v-row>
          <v-col>
            <p>準備中</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="footer">
      <div class="profile">
        <div class="img-wrapper">
          <img src="../assets/IMG_3755 3.jpeg" alt />
          <div class="icons">
            <a href="#">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#">
              <i class="fab fa-facebook-f fa-2x"></i>
            </a>
          </div>
        </div>
        <article>
          <h5>Shota Gishotomi</h5>
          <p>フロントエンドを現在勉強中</p>
        </article>
      </div>
      <div class="category">
        <ul class="blogs">
          <h3>BLOG</h3>
          <a href="https://qiita.com/gishitomi" target="_blank">
            <li>Qiita</li>
          </a>
          <a href="https://note.com/gisho1140" target="_blank">
            <li>note</li>
          </a>
          <a href="https://shotagishitomi-portfolio-site.herokuapp.com/" target="_blank">
            <li>About me</li>
          </a>
        </ul>
        <div class="line"></div>
        <ul class="blogs">
          <h3>Doing</h3>
          <a href target="_blank">
            <li>machine learning</li>
          </a>
          <a
            href="https://shotagishitomi-portfolio-site.herokuapp.com/portfolio.php"
            target="_blank"
          >
            <li>programing</li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>>

<style scoped>
#intro {
  font-family: Lato, 游ゴシック体, "Yu Gothic", YuGothic,
    "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo,
    Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}
.top-page-wrapper {
  width: 100%;
  height: 80vh;
  background-color: rgba(41, 41, 41, 0.678);
}
.top-page {
  width: 100%;
  height: 80vh;
  background: url("../assets/coffee-2425229_1920.jpg");
  background-size: cover;
}
.top-page-content {
  text-align: center;
  font-size: 30px;
  color: white;
}
.main-content {
}

.footer {
  margin-top: 100px;
  height: 300px;
  background-color: whitesmoke;
  width: 100%;
  position: relative;
}

.profile {
  height: 200px;
  width: 300px;
  position: absolute;
  left: 6%;
  top: 10%;
}

.profile .img-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

footer .img-wrapper img {
  border-radius: 100%;
  width: 50%;
}

.icons {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 70px;
}

.icons i {
  color: black;
}

article h5 {
  font-size: 20px;
  margin: 10px;
}

.category {
  height: 200px;
  width: 400px;
  position: absolute;
  left: 66%;
  top: 15%;
  display: flex;
}

.blogs h3 {
  font-size: 20px;
  margin: 20px 0;
}

.blogs a {
  text-decoration: none;
  transition: all 0.3s;
}

.blogs li {
  font-size: 16px;
  color: rgb(48, 48, 48);
  margin: 15px 0;
}

.blogs a li:hover,
.icons i:hover {
  color: rgb(180, 180, 180);
}

.line {
  margin: 0 60px;
  width: 5px;
  height: 180px;
  background-color: rgb(109, 109, 109);
}
</style>>

<script>
export default {
  name: "Home"
};
</script>>