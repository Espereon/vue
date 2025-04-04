<script setup>

import AuthenticationComp from './components/AuthenticationComp.vue';
import BookComp from './components/BookComp.vue';
import CartComp from './components/CartComp.vue';
import MortgageCalculator from './components/MortgageCalculator.vue';

</script>

<template>
  <div>
    <!-- <AuthenticationComp /> -->
    <!-- <CartComp /> -->
    <!-- <BookComp /> -->
    <MortgageCalculator />
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
