// 1. Создание простого счетчика: Создайте компонент счетчика, который имеет кнопку "+" и
// кнопку "-", и отображает текущее значение счетчика.При нажатии на кнопки счетчик
// должен увеличиваться или уменьшаться соответственно.

const app = Vue.createApp({});

app.component('counter', {
    data() {
        return {
            count: 0
        }
    },
    template: `<div>
                <p> {{ count }} </p>
                <button @click="count++">+</button>
                <button @click="count--">-</button>
                </div>`
});


app.mount('#app');

// 2. Создайте компонент списка дел, в котором можно добавлять и удалять
// элементы. Каждый элемент списка должен иметь кнопку удаления,
// при нажатии на которую элемент списка будет удаляться.

