new Vue({
    el: '#app',
    data: {
        productAddCart: true,
        message: 'Hello vue',
        counter: 0,
        x: 0,
        y: 0,
        bigText: `<span> new <a href="#">text</a> info </span>`
    },
    methods: {
        changeText() {
            this.message = 'text click';
        },
        increase(step, event) {
            this.counter += step;
            console.log(event);
        },
        mouseMove(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
    },
})