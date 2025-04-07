<script setup>
import { ref } from 'vue'; // Для работы с реактивными данными
import AddCount from './components/AddCount.vue';
import PaymentDisplay from './components/PaymentDisplay.vue'; // Переименовал компонент для избежания конфликта
import AddList from './components/AddList.vue';

const infoText = 'New info text';
const payments = ref([
  {
    date: '28.03.2020',
    category: 'Food',
    value: 169,
  },
  {
    date: '24.03.2020',
    category: 'Transport',
    value: 360,
  },
  {
    date: '24.03.2020',
    category: 'Food',
    value: 532,
  },
]);

function addNewPay(data) {
  payments.value.push(data);
}

function fetchData() {
  // Возвращаем данные
  return payments.value;
}
</script>

<template>
  <div>
    <!-- Рендеринг компонента -->
    <PaymentDisplay :items="payments" :info="infoText" />
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
