<template>
    <div>
        <div>
            <img class="big" :src="currentImgUrl" alt="">
        </div>
        <div>
            <img class="mini" v-for="(img, index) in imgList" :key="index" :src="img.url" alt="" @click="imgSelectIndex(index)" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GaleryComp',
        data() {
            return {
                currentImgIndex: 0,
                imgList: [
                    {url: 'https://photocentra.ru/images/main78/785690_main.jpg'},
                    {url: 'https://img.freepik.com/free-photo/sunset-tranquil-waters-nature-beauty-revealed-generated-by-ai_24640-81279.jpg'},
                    {url: 'https://bfoto.ru/foto/zakat/bfoto_ru_3294.jpg'},
                ]
            }
        },
        computed: {
            currentImgUrl() {
                return this.imgList[this.currentImgIndex].url
            }
        },
        methods: {
            imgSelectIndex(index) {
                this.currentImgIndex = index;
            },
        },
    }
</script>

<style>
    .mini {
        width: 400px;
        height: 400px;
    }
    .big {
        width: 800px;
        height: 800px;
    }
</style>