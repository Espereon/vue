// Создание простого счетчика: Создайте компонент счетчика, который имеет кнопку "+" и 
// кнопку "-", и отображает текущее значение счетчика.При нажатии на кнопки счетчик
// должен увеличиваться или уменьшаться соответственно.

Vue.component('counter-comp', {
    data() {
        return {
            counter: 0
        }
    },

    methods: {
        decrease() {
            this.counter--;
        },
        increase() {
            this.counter++;
        },
    },
    template: `<div>
                <p> {{ counter }} </p>
                <button @click="increase">+</button>
                <button @click="decrease">-</button>
                </div>`
});

new Vue({
    el: "#app",
    data: {},
});