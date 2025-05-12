<script>
export default {
  name: "AddList",
  data() {
    return {
      category: "",
      value: "",
      data: "",
    };
  },
  methods: {
    onSave() {
      const data = {
        value: this.value,
        category: this.category,
        data: this.data || this.getCurrentData,
      };
      this.$emit("addNewPay", data);
    },
  },
  computed: {
    getCurrentData() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth();
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
};
</script>

<template>
  <div>
    <input type="text" v-model="category" placeholder="category" />
    <input type="text" v-model="value" placeholder="value" />
    <input type="text" v-model="data" placeholder="data" />
    <button @click="onSave">Save</button>
  </div>
</template>

<style lang="scss" scoped></style>
