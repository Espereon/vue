new Vue({
    el: '#app',
    data: {
        firstNumber: 0,
        secondNumber: 0,
        result: 0,
        modelData: '',
        linkHref: 'product.html',
        imgPhoto: 'photo.jpg',
        styleBlock: {
            backgroundColor: 'green',
            color: 'red'
        }
    },
    methods: {
        send() {
            console.log('Отправили данные внутри инпут');
        },
        headingText() {
            if (this.modelData === '') {
                this.modelData = 'Заголовок для блока'
            }
        },
        plus() {
            this.result = this.firstNumber + this.secondNumber;
        },
        minus() {
            this.result = this.firstNumber - this.secondNumber;
        },
        mult() {
            this.result = this.firstNumber * this.secondNumber;
        },
        aquel() {
            this.result = this.firstNumber / this.secondNumber;
        }
    },
})

