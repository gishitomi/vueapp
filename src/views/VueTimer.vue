<template>
    <div id="timer">
        <h1>時計アプリ</h1>
        <vue-clock/>
        <vue-meigen/>
    </div>
</template>

<style scoped>
#timer {
    overflow: hidden;
}
#timer h1 {
    font-size: 50px;
    text-align: center;
    margin: 40px 0;
}
</style>

<script>
import VueClock from '@/components/VueClock.vue';
import VuemeigenBot from '@/components/VuemeigenBot.vue';

export default {
    name: 'vue-timer',
    components: {
        VueClock,
        VuemeigenBot,
    },
}
</script>