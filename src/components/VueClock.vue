<template>
  <div id="clock">
    <div class="date">
      <p>{{year}} / {{month}} / {{day}}  JPN</p>
    </div>
    <div class="time">
      <p>{{hours}} : {{minutes}} : {{seconds}}</p>
    </div>
  </div>
</template>

<style scoped>
#clock {
  position: relative;
  width: 100%;
  height: 60vh;
}
.date p {
  font-size: 50px;
  position: absolute;
  top: 30%;
  left: 5%;
}
.time p{
  font-size: 150px;
  position: absolute;
  width: 100%;
  top: 50%;
  text-align: center;
}
</style>

<script>
const zeroPadding = (num, digit) => {
  // 202X/00/00/00/00のように桁を調整させる
  return (Array(digit).join("0") + num).slice(-digit);
};
export default {
  name: "vue-clock",
  data() {
    return {
      date: new Date(),
    };
  },
  computed: {
    year() {
      return this.date.getFullYear();
    },
    month() {
      return zeroPadding(this.date.getMonth() + 1, 2);
    },
    day() {
      return zeroPadding(this.date.getDate(), 2);
    },
    hours() {
      return zeroPadding(this.date.getHours(), 2);
    },
    minutes() {
      return zeroPadding(this.date.getMinutes(), 2);
    },
    seconds() {
      return zeroPadding(this.date.getSeconds(), 2);
    }
  },
  mounted() {
    this.setDate();
    // リアルタイムに現在時刻を表示
    setInterval(() => this.setDate(), 1000);
  },
  methods: {
    setDate() {
      this.date = new Date();
    },
  }
};
</script>