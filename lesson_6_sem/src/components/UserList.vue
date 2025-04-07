<template>
    <div>
        <MyUser v-for="user in users" :key="user.email" :user-data="user" @upDateUser="upDateUser" />
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
    components: { MyUser },
    methods: {
        upDateUser(userData) {
            const user = this.users.find((user) => user === userData.user);
            if (user) {
                user.firstName = userData.firstName;
                user.lastName = userData.lastName;
            } else {
                alert('user not found')
            }
        }
    },
}
</script>

<style lang="scss" scoped></style>