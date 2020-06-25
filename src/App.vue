<template>
  <div id="app">
    <Navbar/>
    <Jumbotron />
    <Layout />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Hell"/> -->

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
// import HelloWorld from './components/HelloWorld.vue'
import Jumbotron from './components/Jumbotron.vue'
import Layout from './components/Layout.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Navbar,
    Jumbotron,
    Layout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  /* background-color: black; */
}

</style>
