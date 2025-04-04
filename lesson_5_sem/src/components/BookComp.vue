<template>
    <div>
        <div class="box" id="box" v-for="item in books" :key="item.id">
            <p>Название книги {{ item.name }}</p>
            <p>Автор книги {{ item.author }}</p>
            <p>Год издания {{ item.year }}</p>
            <!-- <button @click="item.showDescription = !item.showDescription">Описане книги</button>
            <p v-if="item.showDescription">{{ item.description }}</p> -->
            <button @click="togleDescritpion(item.id)">Описание книги</button>
            <p v-if="descriptions.includes(item.id)">{{ item.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookComp',
    data() {
        return {
            books: [
                {
                    id: 1,
                    name: 'War',
                    author: 'Lev',
                    year: '1992',
                    description: 'Книга о войне',
                    // showDescription: false
                },
                {
                    id: 2,
                    name: 'peace',
                    author: 'Pushkin',
                    year: '1952',
                    description: 'Книга о мире',
                    // showDescription: false
                },
                {
                    id: 3,
                    name: 'Love',
                    author: 'Lenin',
                    year: '1995',
                    description: 'Книга о любви',
                    // showDescription: false
                }
            ],
            descriptions: [],

        }
    },
    methods: {
        togleDescritpion(id) {
            const findIndex = this.descriptions.indexOf(id)
            console.log(findIndex);
            if (findIndex === -1) {
                this.descriptions.push(id)
            } else {
                this.descriptions.splice(findIndex, 1)
            }
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