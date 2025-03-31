<template>
    <div>
        <div v-for="item in productsPrice" :key="item.id">
            <input type="nubmer"><br>
            price: {{ item }}
            Subtotal:
        </div>
        <p>TOtal: </p>
    </div>
</template>

<script>
export default {
    name: 'CartComp',
    data() {
        return {
            productsPrice: [10, 15]
        }
    }
}
</script>

<style lang="scss" scoped></style>