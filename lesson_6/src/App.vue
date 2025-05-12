<script setup>
import { ref } from "vue"; // Для работы с реактивными данными
import AddCount from "./components/AddCount.vue";
import PaymentDisplay from "./components/PaymentDisplay.vue"; // Переименовал компонент для избежания конфликта
import AddList from "./components/AddList.vue";
import { fetchDataStore } from "./store/index";

const dataStore = fetchDataStore();
const infoText = "New info text";
const paymantsList = ref([]);

function addNewPay(data) {
  this.addPayments(data);
}

const fetchData = () => {
  // Возвращаем данные
  return [
    {
      date: "28.03.2020",
      category: "Food",
      value: 169,
    },
    {
      date: "24.03.2020",
      category: "Transport",
      value: 360,
    },
    {
      date: "24.03.2020",
      category: "Food",
      value: 532,
    },
  ];
};
dataStore.setPayments(fetchData());
console.log(dataStore.paymantsList);
</script>

<template>
  <div>
    <!-- Рендеринг компонента -->
    <div>{{ dataStore.paymantsList }}</div>
    <PaymentDisplay :items="paymantsList" :info="infoText" />
    <AddList @addNewPay="addNewPay" />
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
