// // Задание № 1
// new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello vue',
//         counter: 0,
//         cart: [{
//             id: 1,
//             name: 'Огурец',
//             incart: false,
//             buttonText: 'Buy',
//         },
//         {
//             id: 2,
//             name: 'Помидор',
//             incart: false,
//             buttonText: 'Buy',
//         },
//         {
//             id: 3,
//             name: 'Гриб',
//             incart: false,
//             buttonText: 'Buy',
//         },
//         {
//             id: 4,
//             name: 'Картошка',
//             incart: false,
//             buttonText: 'Buy',
//         }],
//     },
//     methods: {
//         addProduct(product) {
//             if (product.incart === false) {
//                 product.incart = true;
//                 this.counter++;
//                 product.buttonText = 'Товар в корзине';
//             }
//         }
//     },
// });

// // Задание № 2
// new Vue({
//     el: '#app',
//     data: {
//         isTrue: false,
//     },
//     methods: {
//         name() {

//         },
//     },
// })

// // Задание № 3

// new Vue({
//     el: '#app',
//     data: {
//         show: false,
//     }
// })

// // Задание № 4
// new Vue({
//     el: '#app',
//     data: {
//         randomNumber: 0,
//     },
//     methods: {
//         generateNubmer() {
//             this.randomNumber = Math.floor(Math.random() * 10 + 1)
//         },
//     },
//     computed: {
//         getRandomNumber() {
//             if (this.randomNumber < 5) {
//                 return 'Число меньше 5'
//             } else if (this.randomNumber === 10) {
//                 return 'Число равно 10'
//             } else {
//                 return 'Число больше или равно 5'
//             }
//         },
//     },
// })