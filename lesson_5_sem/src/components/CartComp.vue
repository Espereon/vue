<template>
    <div class="box">
        <div v-for="item in product" :key="item.id">
            <p>Название {{ item.productName }}</p>
            <P>Количество {{ item.productCount }}</P>
            <p>Цена {{ item.price }}</p>
            <input type="text" v-model="item.productCount">
            <p>Цена за продукт: {{ item.productCount * item.price }}</p>
        </div>
        <p>Общая стоимость {{ totalPrice }}</p>
    </div>
</template>

<script>
export default {
    name: 'CartComp',
    data() {
        return {
            product: [
                {
                    id: 1,
                    price: 10,
                    productCount: '',
                    productName: 'apple'
                },
                {
                    id: 2,
                    price: 15,
                    productCount: '',
                    productName: 'bananas'
                }
            ],
        }
    },
    methods: {
    },
    computed: {
        totalPrice() {
            return this.product.reduce((sum, cur) => sum + cur.price * cur.productCount, 0)
        }
    },
}
</script>

<style>
.box {
    display: flex;
    gap: 30px;
}
</style>
<!-- 
Разработать интерфейс корзины товаров, в котором пользователь
может изменять количество товаров в корзине и видеть общую сумму
покупки. Каждый товар представлен в виде блока, содержащего поле
ввода для изменения количества товара и отображение его цены. При
изменении количества товаров в поле ввода, необходимо
автоматически пересчитывать стоимость каждого товара и обновлять
общую сумму покупки.  -->