<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import axios from "axios";

import Header from "./components/Header.vue";
import CardList from "./components/CardList.vue";
import Drawer from "./components/Drawer.vue";

const items = ref([]);
const filters = reactive({
  searchQuery: "",
  sortBy: "",
});

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value;
};

onMounted(async () => {
  try {
    const { data } = await axios.get(
      "https://66cc62f5ea4e5b9f.mokky.dev/items"
    );
    items.value = data;
  } catch (error) {
    console.log(error);
  }
});

watch(
  () => filters.sortBy,
  async () => {
    try {
      const { data } = await axios.get(
        "https://66cc62f5ea4e5b9f.mokky.dev/items?sortBy=" + filters.sortBy
      );
      items.value = data;
    } catch (error) {
      console.log(error);
    }
  }
);
</script>

<template>
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <!-- <Drawer /> -->
    <Header />
    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>
        <div class="flex gap-4">
          <select
            @change="onChangeSelect"
            class="py-2 px-3 border border-gray-100 rounded-md"
          >
            <option value="name">По названию</option>
            <option value="price">По цене (дешевые)</option>
            <option value="-price">По цене (дорогие)</option>
          </select>
          <div class="relative">
            <img class="absolute left-4 top-3" src="/search.svg" />
            <input
              class="border border-gray-100 rounded-md py-2 pl-11 pr-4 focus:border-gray-400"
              type="text"
              placeholder="Поиск..."
            />
          </div>
        </div>
      </div>
      <div class="mt-10">
        <CardList :items="items" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
