<template>
    <div>
        <div v-for="item in productsPrice" :key="item.id">
            <input type="nubmer" v-model="count"> <br>
            price: {{ item }} <br>
            Subtotal: {{ sum }}
        </div>
        <p>Total: </p>
    </div>
</template>

<script>
export default {
    name: 'CartComp',
    data() {
        return {
            productsPrice: [10, 15, 4],
            subtotal: '',
            total: '',
            count: ''
        }
    },
    methods: {
        sum() {
            this.subtotal = (this.productsPrice * this.count);
        },
    },
    // computed: {
    //     subT() {
    //         return 
    //     }
    // },
}
</script>

<style lang="scss" scoped></style>