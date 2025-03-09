<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <NewComp text="Welcome to new props"/>
    <GaleryComp/>
  </div>
</template>

<script>
import GaleryComp from './components/GaleryComp.vue';
import HelloWorld from './components/HelloWorld.vue'
import NewComp from './components/NewComp.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    NewComp,
    GaleryComp
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
