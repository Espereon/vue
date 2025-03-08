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




// 2. Создайте компонент списка дел, в котором можно добавлять и удалять
// элементы. Каждый элемент списка должен иметь кнопку удаления,
// при нажатии на которую элемент списка будет удаляться.

app.component('to-do-list', {
    data() {
        return {
            toDoList: ["Первый элемент", "Второй элемент", "Третий элемент"],
            toDoName: '',
        }
    },
    methods: {
        addToDoItem() {
            this.toDoList.push(this.toDoName);
            this.toDoName = '';
        },
        removeDoItem(index) {
            this.toDoList.splice(index, 1);
        }
    },

    template: `<div>
    <input type="text" placeholder="Добавить" v-model="toDoName">
    <button type="submit" @click="addToDoItem">Добавить</button>
    <ul>
        <li v-for="(item, index) in toDoList" :key="index">{{item}} <button @click="removeDoItem(index)">Удалить</button></li>
    </ul>
    </div>
  `
});

// 3. Создайте компонент списка, который отображает массив элементов.
// Добавьте текстовое поле для фильтрации списка. При вводе текста в
// поле, список должен автоматически обновляться, отображая только
// элементы, содержащие введенный текст.

app.component('to-do-list-2', {
    data() {
        return {
            toDoList: ["list 1", "list 2", "list 3"],
            toDoName: '',
            filterText: '',
        }
    },
    methods: {
        addToDoItem() {
            this.toDoList.push(this.toDoName);
            this.toDoName = '';
        },
        removeDoItem(index) {
            this.toDoList.splice(index, 1);
        }
    },
    computed: {
        filterList() {
            if (this.filterText) {
                return this.toDoList.filter((item) => item.includes(this.filterText));
            }
            else {
                return this.toDoList;
            }
        },
    },

    template: `<div>
    <ul>
        <input type="text" placeholder="Добавить" v-model="toDoName">
        <button type="submit" @click="addToDoItem">Добавить</button>
        <li v-for="(item, index) in filterList" :key="index">{{item}}</li>
    </ul>
    <input type="text" placeholder="Фильтр" v-model="filterText">
    </div>
  `
});


// 4. Вам необходимо создать компонент "Товар", который будет отображать
// информацию о товаре, включая название, описание и цену. Кроме того, вы
// должны реализовать фильтрацию товаров по цене (по возрастанию и
// убыванию)
// 1. Создайте компонент "Товар", который вы создавали в интернетмагазине BRAND
// 2. Создайте список товаров, используя компонент "Товар". Данные о
// товарах могут быть представлены в виде массива объектов.
// 3. Добавьте две кнопки сортировки (по убыванию, по возрастанию)
// 4. При нажатии на кнопки, обновите список отображаемых товаров,
// отфильтрованных по цене.

app.component('product', {
    data() {
        return {
            products: [
                {
                    id: 1,
                    productName: 'Apple',
                    price: 15
                },
                {
                    id: 2,
                    productName: 'Pineappple',
                    price: 35
                },
                {
                    id: 3,
                    productName: 'Banan',
                    price: 10
                }
            ],
            sortDirection: '',
        }
    },
    computed: {
        sortedList() {
            const sortedArrProducts = [...this.products];
            switch (this.sortDirection) {
                case "up":
                    return sortedArrProducts.sort((a, b) => a.price - b.price);
                case "down":
                    return sortedArrProducts.sort((a, b) => b.price - a.price);
                default:
                    return this.products;
            }
        },
    },
    template: `
    <div>
            <ul>
            <li v-for="item in sortedList" :key="item.id">{{item.productName}} - {{item.price}}</li>
            </ul>
        <button @click="sortDirection='up'">up</button>
        <button @click="sortDirection='down'">down</button>
        <button @click="sortDirection=''">Сброс фильтра</button>
    </div>
  `

});

app.mount('#app');