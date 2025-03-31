<template>
    <div>
        <form v-if="!isAuthentication" action="#">
            <label for="login">Login</label>
            <input type="text" id="login" v-model="userLogin">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="userPassword">
            <button @click="formCheck">Enter</button>
        </form>
        <h1 v-else>Авторизация успешна</h1>
    </div>
</template>

<script>
export default {
    name: 'AuthenticationComp',
    data() {
        return {
            isAuthentication: false,
            userLogin: '',
            userPassword: ''
        }
    },
    methods: {
        formCheck() {
            if (this.userLogin && this.userPassword) {
                this.isAuthentication = true;
            }
        }
    },
}
</script>

<style lang="scss" scoped></style>