new Vue({
    el: '#app',
    data: {
        button: 'Перевернуть',
        items: [
            { id: 1, text: 'Элемент номер 1' },
            { id: 2, text: 'Элемент номер 2' }
        ],
        nextId: 3
    },
    methods: {
        reverse() {
            this.button = this.button.split('').reverse().join('')
        },
        add_element() {
            this.items.push({
                id: this.nextId,
                text: `Новый элемент ${this.nextId}`
            });
            this.nextId++;
        },
        remove_element(index) { // попытка удаления неуспешная
            this.items.splice(index, 1);
        }
    },
});
