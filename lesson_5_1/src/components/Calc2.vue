<template>
    <div>
        <input type="text" v-model="operande1">
        <input type="text" v-model="operande2">
        {{ result }}
        <div>
            <button @click="calcAllResult(operator)" v-for="operator in operators" :key="operator.id">
                {{ operator }}
            </button>
        </div>
        <div>
            <div v-show="error">
                {{ error }}
            </div>
        </div>
        <div>
            <template v-if="result < 0">Получилось отрицательное число</template>
            <template v-if="result >= 0 && result <= 100">Получилось число от 0 до 100</template>
            <template v-if="result > 100">Получилось число больше 100</template>
        </div>
        <div>
            <h3>История операций</h3>
            <div v-for="log in logs" :key="log.id">
                {{ log }}
            </div>
        </div>
    </div>
</template>

<script>
// import Vue from 'vue';
export default {
    name: 'CalcFunction',
    data() {
        return {
            operande1: 0,
            operande2: 0,
            result: 0,
            operators: ['+', '-', '*', '/'],
            error: '',
            logs: [], // Инициализировать как массив
        };
    },
    methods: {
        add() {
            this.result = Number(this.operande1) + Number(this.operande2);
        },
        minus() {
            this.result = Number(this.operande1) - Number(this.operande2);
        },
        multy() {
            this.result = Number(this.operande1) * Number(this.operande2);
        },
        dev() {
            const { operande1, operande2 } = this;
            if (operande2 === 0) {
                this.error = 'Ошибка, на 0 делить нельзя';
            } else {
                this.result = operande1 / operande2;
            }
        },
        calcAllResult(operation = '+') {
            this.error = '';
            switch (operation) {
                case '+':
                    this.add();
                    break;
                case '-':
                    this.minus();
                    break;
                case '*':
                    this.multy();
                    break;
                case '/':
                    this.dev();
                    break;
                default:
                    break;
            }
            const key = Date.now();
            const value = `${this.operande1}${operation}${this.operande2}=${this.result}`;
            this.logs.push(value); // Добавляем значение в массив
        },
    },
};
</script>

<style lang="scss" scoped></style>