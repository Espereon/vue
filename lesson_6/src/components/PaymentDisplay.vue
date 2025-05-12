<script>
export default {
  name: "PaymentDisplay",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <div v-for="item in items" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
