<template>
  <div id="app">
    <Navbar/>

    <Jumbotron />
    <Layout />
    <!-- <Model /> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Hell"/> -->
    <Contact />


  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
// import HelloWorld from './components/HelloWorld.vue'
import Jumbotron from './components/Jumbotron.vue'
import Layout from './components/Layout.vue'
import Contact from './components/Contact.vue'
// import Model from './components/Model.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    Navbar,
    Jumbotron,
    Layout,
    Contact,
    // Model,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  overflow: hidden;
  /* background-color: black; */
}

</style>
