<template>
    <div>
        <label for="name">
            Имя: <input type="text" id="name" v-model="firstName">
        </label>
        <label for="lastName">
            Фамилия: <input type="text" id="lastName" v-model="lastName">
        </label>
        <div>Почта {{ userData.email }}</div>
        <button @click="toggleInfo">Shom more</button>
        <div v-if="showMore">
            <div>телефон: {{ userData.phone }}</div>
            <div>адрес: {{ userData.adres }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyUser',
    props: ['userData'],
    data() {
        return {
            showMore: false,
            firstName: '',
            lastName: ''
        }
    },
    methods: {
        toggleInfo() {
            this.showMore = !this.showMore;
        }
    },
    created() {
        this.firstName = this.userData.firstName;
        this.lastName = this.userData.lastName
    },
}
</script>

<style lang="scss" scoped></style>