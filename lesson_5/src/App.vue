<script setup>
import Calc2 from './components/Calc2.vue';
// import CalcFunction from './components/CalcFunction.vue';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <!-- <CalcFunction /> -->
    <Calc2 />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
