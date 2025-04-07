<template>
    <div>
        Крутой счётчик
        <button @click="upCounter">Значение счётчика {{ counter }}</button>
    </div>
</template>

<script>
export default {
    name: 'AddCount',
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        upCounter() {
            this.counter++;
        }
    },
    beforeCreate() {
        this.counter = 1;
    },
    created() {
        this.counter = 2;
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('Mounted');
    },
    updated() {
        console.log('updated');
    },
}
</script>

<style lang="scss" scoped></style>