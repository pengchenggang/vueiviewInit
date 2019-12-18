<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <oclock /> -->
    <iviewTest />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import oclock from './view/oclock/oclockPhone'
// import oclock from './view/oclock/oclock'
import iviewTest from './view/iviewTest'
export default {
  name: 'app',
  components: {
    // HelloWorld
    // oclock
    iviewTest
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
