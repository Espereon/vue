import { defineStore } from "pinia";

export const fetchDataStore = defineStore("data", {
  state: () => ({
    paymantsList: [],
  }),
  actions: {
    setPayments(payment) {
      this.paymantsList = payment;
    },
    addPayments(pay) {
      this.paymantsList.push(pay);
    },
  },
});
