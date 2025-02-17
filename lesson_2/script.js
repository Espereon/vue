new Vue({
    el: '#app',
    data: {
        data: [
            {
                title: 'title text',
                text: 'description text info element'
            },
            {
                title: 'new title text',
                text: 'new description text info element'
            }
        ],
        likeToggle: true,
        listItem: [1, 2, 4],
        blockWidth: 100,
        newList: '',
        blockColor: '#ccc',
        firstNumber: 0,
        secondNumber: 0,
        result: 0,
        modelData: '',
        linkHref: 'product.html',
        imgPhoto: 'photo.jpg',
        styleBlock: {
            // backgroundColor: 'green',
            // color: 'red'
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
        },
        // changeBlock() {
        //     return{
        //         width: this.blockWidth,
        //         heigth: this.blockWidth,
        //         backgroundColor: this.blockColor
        //     }
        // },
        addItem() {
            this.listItem.push(this.newList)
        }
    },
    computed: {
        change() {
            return {
                width: `${this.blockWidth}px`,
                heigth: `${this.blockWidth}px`,
                backgroundColor: this.blockColor
            }
        },
    },
})

