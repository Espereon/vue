<script setup>
import { ref, watch, provide, computed } from "vue";
import axios from "axios";

import Header from "./components/Header.vue";
import Drawer from "./components/Drawer.vue";
/* Корзина (начало) */
const cart = ref([]);

const drawerOpen = ref(false);

const closeDrawer = () => {
  drawerOpen.value = false;
};

const totalPrice = computed(() => {
  return cart.value.reduce((acc, item) => acc + item.price, 0);
});

const vatPrice = computed(() => {
  return totalPrice.value * 0.05;
});

const openDrawer = () => {
  drawerOpen.value = true;
};

const addToCart = (item) => {
  cart.value.push(item);
  item.isAdded = true;
};

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1);
  item.isAdded = false;
};

watch(
  cart,
  () => {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  },
  { deep: true }
);

provide("cart", { cart, closeDrawer, openDrawer, addToCart, removeFromCart });

/* Корзина (конец) */
</script>

<template>
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <Drawer :total-price="totalPrice" :vat-price="vatPrice" v-if="drawerOpen" />
    <Header :total-price="totalPrice" @open-drawer="openDrawer" />
    <div class="p-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
