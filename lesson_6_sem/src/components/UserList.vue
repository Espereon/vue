<template>
    <div>
        <MyUser v-for="user in users" :key="user.email" :user-data="user" />
    </div>
</template>

<script>
import MyUser from './MyUser.vue';
export default {
    name: 'UserList',
    data() {
        return {
            users: [
                { firstName: 'Иван', lastName: 'Иванов', email: 'ivanov@example.com', phone: '880-555-33-44', adres: 'Бульвар бублика' },
                { firstName: 'Петр', lastName: 'Петров', email: 'petrov@example.com', phone: '880-555-33-44', adres: 'Дом ступника' },
                { firstName: 'Анна', lastName: 'Смирнова', email: 'smirnova@example.com', phone: '880-555-33-44', adres: 'Квартира Укупинка' }
            ]
        }
    },
    components: { MyUser }
}
</script>

<style lang="scss" scoped></style>